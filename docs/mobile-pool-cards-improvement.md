# Mobile Pool Cards — UI Improvement Plan

> 2026-03-26 | Status: planned | Scope: `src/Farm/PoolList/Pool/`, `src/Components/PoolHeader/`, `src/Farm/PoolList/styled.ts`

---

## Контекст

2-колоночная CSS Grid сетка (`MobilePoolGrid`) работает корректно после fix в `926f4de`. Карточки рендерятся в два столбца. Проблема — визуальное качество карточек на узких экранах (375px iPhone): обрезка названий, перенос строк, нечитаемые метки, маленькая кнопка Stake.

**Размеры карточки** (iPhone 14, 390px viewport):
- `MobilePoolGrid`: `padding: 0 4px`, `gap: 8px`
- Ширина карточки: `(390 - 8 - 8) / 2 = 187px`
- iPhone SE (375px): `(375 - 8 - 8) / 2 = 179px`
- iPhone SE 1st gen (320px): `(320 - 8 - 8) / 2 = 152px`

---

## Изменения

### 1. Вертикальный layout хедера карточки (P0)

**Проблема:** Горизонтальный layout `[иконки][текст]` на карточке 179px. Иконки (48px) + margin (12px) = 60px. На текст остаётся 119px, но `PoolTitle` ограничен `max-width: 90px`. Результат: "BONEZ/USDC" обрезается до "BONEZ/USD", "Earn META + ALGO" переносится на 2 строки.

**Решение:** На `max-width: 700px` переключить `PoolHeaderContainer` на `flex-direction: column; align-items: center`. Текст получает всю ширину карточки (~170px). Названия не обрезаются, субтитры помещаются в одну строку.

**Почему именно вертикальный layout, а не просто увеличение max-width:**
- Увеличение `max-width` до 120px не решает проблему на iPhone SE (320px) — там доступно всего 92px для текста
- Вертикальный layout масштабируется на любую ширину экрана
- Стандартный паттерн для 2-колоночных DeFi grid-карточек (PancakeSwap, Beefy)

**Высота карточки:** Горизонтальный хедер ~40px, вертикальный ~55px. Разница +15px. При карточке ~160-180px это приемлемо.

**Tablet (701-1120px):** Горизонтальный layout остаётся. На планшете карточка 330px+ — горизонтальный layout работает хорошо.

#### Файл: `src/Components/PoolHeader/styled.ts`

**PoolHeaderContainer** (строка 4):
```css
/* Добавить в @media (max-width: 700px) */
@media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 4px;    /* было 2px — компенсация за вертикальный layout */
    gap: 2px;
}
```

**PoolInfo** (строка 27):
```css
/* Добавить @media (max-width: 700px) */
@media (max-width: 700px) {
    margin-left: 0;        /* было 12px — убираем, т.к. стоит под иконками */
    margin-top: 2px;       /* было 3px */
    align-items: center;   /* было flex-start — центрируем текст */
}
```

**PoolTitle** (строка 41):
```css
/* Заменить @media (max-width: 700px) */
@media (max-width: 700px) {
    font-size: 12px;       /* было 11px — чуть крупнее для заголовка */
    max-width: none;       /* было 90px — убираем ограничение, карточка сама ограничивает */
    line-height: 1.2;
    letter-spacing: 0;
    font-weight: 700;
    justify-content: center;
}
```

**PoolSubtitle** (строка 80):
```css
/* Заменить @media (max-width: 700px) */
@media (max-width: 700px) {
    font-size: 10px;       /* было 11px — вторичный текст чуть мельче заголовка */
    max-width: none;       /* было 90px */
    line-height: 1.2;
    letter-spacing: 0;
    text-align: center;
    white-space: nowrap;       /* ДОБАВИТЬ: запрет переноса */
    overflow: hidden;          /* ДОБАВИТЬ: обрезка если всё-таки длинно */
    text-overflow: ellipsis;   /* ДОБАВИТЬ: "Earn VERY_LONG_TOK..." */
    width: 100%;               /* ДОБАВИТЬ: занимаем всю доступную ширину */
}
```

**PoolSubtitlesContainer** (строка 71): Уменьшить vertical spacing.
```css
/* Добавить @media (max-width: 700px) */
@media (max-width: 700px) {
    padding-top: 1px;      /* было 5px */
    margin-top: 1px;       /* было 3px */
    justify-content: center;
}
```

**ContractLockSuffix** (строка 163): При вертикальном layout центрировать.
```css
/* В @media (max-width: 700px) добавить */
text-align: center;
```

**LpTokensIconsWrapper** (строка 104): Центрируется автоматически через parent `align-items: center`.

**Риск:** Низкий. Изменения только в `@media (max-width: 700px)`, tablet и desktop не затронуты.

---

### 2. Метки TVL/APR: размер и декор (P1)

**Проблема:** `PoolPropertyName` при 700px — `font-size: 8px`. Это ~4pt на Retina. Декоративное подчеркивание (`::after` pseudo-element) при таком размере — визуальный шум.

#### Файл: `src/Farm/PoolList/Pool/styled.ts`

**PoolPropertyName** (строка 136):
```css
/* Заменить @media (max-width: 700px) */
@media (max-width: 700px) {
    font-size: 9px;            /* было 8px */
    margin-bottom: 1px;        /* было 2px */
    letter-spacing: 0.5px;

    &::after {
        display: none;         /* УБРАТЬ подчёркивание на мобилке */
    }
}
```

**Риск:** Нулевой. Косметическое изменение.

---

### 3. Кнопка Stake: увеличение touch target (P1)

**Проблема:** `GradientStakeButton` при 700px: `height: 22px`, `width: 60%`. Apple HIG: минимум 44px touch target. 22px — в 2 раза меньше.

**Компромисс:** 44px слишком для маленькой карточки (займёт 25-30% высоты). Увеличиваем до 28px — ощутимое улучшение без доминирования кнопки.

#### Файл: `src/Farm/PoolList/Pool/GradientPoolCard.tsx`

**GradientStakeButton** (строка 166):
```css
/* Заменить @media (max-width: 700px) */
@media (max-width: 700px) {
    width: 70%;            /* было 60% — шире для удобства нажатия */
    height: 28px;          /* было 22px — ближе к HIG */
    font-size: 12px;
    margin: 4px auto 0;   /* было 3px */
    padding: 0;
    background: rgba(144, 238, 144, 0.85);
    box-shadow: none;
    transition: none;
    border-radius: 6px;

    &:disabled {
        background: rgba(100, 100, 100, 0.5);
    }

    &:not(:disabled):hover {
        animation: none;
        transform: none;
        box-shadow: none;
    }
}
```

Также обновить базовую `StakeButtonMobile` для согласованности.

#### Файл: `src/Farm/PoolList/Pool/styled.ts`

**StakeButtonMobile** (строка 355):
```css
/* Заменить @media (max-width: 700px) */
@media (max-width: 700px) {
    width: 75%;            /* было 70% */
    height: 28px;          /* было 24px — согласовать с Gradient-вариантом */
    font-size: 13px;
    margin: 4px auto 0;
    border-radius: 6px;
    box-shadow: none;

    :not(:disabled):hover {
        transform: none;
        box-shadow: none;
    }
}
```

**Риск:** Низкий. Кнопка становится немного больше, визуально выглядит увереннее.

---

### 4. Адаптивная ширина фильтров (P1)

**Проблема:** `MobileFilterRow` жёстко `width: 325px`. На iPhone SE (320px) — горизонтальный overflow. На iPhone Pro Max (428px) — пустое пространство по бокам.

#### Файл: `src/Farm/PoolList/styled.ts`

**MobileFilterRow** (строка 79):
```css
/* Заменить width */
width: 100%;               /* было 325px */
max-width: 340px;          /* ограничитель чтобы не растягивались на планшете */
```

**Риск:** Низкий. Фильтры становятся чуть шире/уже в зависимости от экрана. `justify-content: space-between` обеспечивает распределение.

**Примечание:** Проверить, что на 320px экране два контрола (140px + 170px = 310px) влезают. С `justify-content: space-between` при 310px контента в 320px (минус 40px padding MobileFilterContainer) = 280px доступно. 310px > 280px — НЕ ВЛЕЗЕТ.

**Корректировка:** Также нужно уменьшить внутренние контролы или padding. Варианты:
- Уменьшить padding MobileFilterContainer: `padding-left/right: 10px` (было 20px) → 300px доступно
- Или сделать контролы `flex: 1` и `flex: 1.2` вместо фиксированных 140px/170px

Более безопасный вариант — только уменьшить padding:

**MobileFilterContainer** (строка 54):
```css
/* В @media (max-width: 700px) */
@media (max-width: 700px) {
    /* ... существующие стили ... */
    padding-left: 12px;    /* было 20px */
    padding-right: 12px;   /* было 20px */
}
```

Это даёт 375 - 24 = 351px на iPhone, 320 - 24 = 296px на SE. При контролах 140+170=310px на SE всё равно тесно. Но `MobileFilterRow` с `max-width: 340px` + `space-between` сожмёт gap между контролами. Контролы сами не ужимаются (фиксированная ширина). Нужно проверить.

**Решение:** Оставить `MobileFilterRow` как `width: 100%; max-width: 340px`, уменьшить padding контейнера до 12px. На экранах < 340px контролы будут чуть выходить за рамки row, но `overflow: hidden` на `MobileFilterContainer` спрячет это. Лучший fix для iPhone SE — отдельная задача с flex-контролами.

**Риск:** Средний. Нужно тестировать на 320px экране.

---

### 5. Скрыть grid-divider на мобилке (P3)

**Проблема:** `PoolInfoGrid::after` — тонкая горизонтальная линия между рядами TVL/APR и Staked/Reward. На карточке 179px при font-size 11px — визуальный шум.

#### Файл: `src/Farm/PoolList/Pool/styled.ts`

**PoolInfoGrid** (строка 520):
```css
/* В @media (max-width: 700px) добавить */
&::after {
    display: none;
}
```

**Риск:** Нулевой. Декоративный элемент.

---

## Что НЕ менять и почему

| Предложение | Причина отказа |
|---|---|
| **Синхронизация breakpoints** (JS 768px vs CSS 700px) | Затрагивает ~15 файлов с `@media` queries + `useWindowSize`. Высокий риск регрессий. Отдельная задача. |
| **Смена шрифта** Korona One → системный | Дизайн-решение, выходящее за scope UI fix. Korona One — branding-шрифт. При 12px (после изменения #1) он читаем. |
| **Удаление min-height** с PoolContainer | Safety net: без min-height пустые/loading карточки коллапсируют в 0px. Визуальный скачок при загрузке. |
| **Удаление всех text-shadow** на мобилке | `performanceCache` уже отключает дорогие эффекты на слабых устройствах. Ручное удаление дублирует логику. |
| **Изменение gap** в MobilePoolGrid (8px) | Текущий gap выглядит приемлемо. Увеличение сделает карточки ещё уже. Уменьшение — карточки будут слипаться. |
| **Responsive контролы фильтров** (flex вместо px) | Крупный рефактор SwitchSelect, DropdownButton, PoolSearchInput. Отдельная задача. В рамках текущего fix — только ширина контейнера. |

---

## Порядок реализации

Все изменения в одном коммите. Порядок работы по файлам:

1. **`src/Components/PoolHeader/styled.ts`** — вертикальный layout (#1)
2. **`src/Farm/PoolList/Pool/styled.ts`** — метки TVL/APR (#2), кнопка StakeButtonMobile (#3), grid divider (#5)
3. **`src/Farm/PoolList/Pool/GradientPoolCard.tsx`** — кнопка GradientStakeButton (#3)
4. **`src/Farm/PoolList/styled.ts`** — адаптивные фильтры (#4)

---

## Чеклист тестирования

После реализации проверить на реальных устройствах или Chrome DevTools:

**Ширины экранов:**
- [ ] 320px (iPhone SE 1st gen) — самый узкий кейс
- [ ] 375px (iPhone SE 2nd/3rd gen, iPhone 13 mini)
- [ ] 390px (iPhone 14/15)
- [ ] 428px (iPhone Pro Max)
- [ ] 768px (iPad portrait) — tablet breakpoint, горизонтальный layout хедера
- [ ] 1120px+ (desktop) — без изменений

**Карточки:**
- [ ] Все названия пулов видны полностью (IPT/ALGO, META/ALGO, ABBL/USDC, BONEZ/USDC)
- [ ] "Earn X" текст в одну строку на всех карточках
- [ ] "with 55d lock" видно и не обрезано
- [ ] TVL/APR метки читаемы
- [ ] Иконки токенов центрированы над текстом
- [ ] Stake кнопка удобна для нажатия
- [ ] Карточки одинаковой высоты в одном ряду (CSS Grid stretch)
- [ ] Verified badge (✓) виден рядом с названием

**Фильтры:**
- [ ] Не обрезаются на 320px экране
- [ ] Центрированы на широком экране
- [ ] Create farm / Search / Sort By работают при нажатии

**Регрессии:**
- [ ] Desktop layout не изменился (>1120px)
- [ ] Tablet layout не изменился (701-1120px)
- [ ] Открытие карточки (tap → modal) работает
- [ ] Skeleton loading при первой загрузке выглядит корректно
