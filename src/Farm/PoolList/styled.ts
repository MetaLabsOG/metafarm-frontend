import styled from 'styled-components';
import { PrettyButtonContainer } from '../../common/styled';

export const PoolListHeader = styled.div`
    display: flex;
    color: ${(props) => props.theme.gray};
    height: 71px;
    width: 95%;
    align-items: center;
    justify-content: flex-start;
    padding-right: 40px;
    padding-left: 20px;

    font-family: var(--font-body);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.08em;
    text-transform: uppercase;

    @media (max-width: 1120px) {
        display: none !important; /* Force hide on mobile */
    }

    @media (max-width: 700px) {
        display: none !important; /* Force hide on small mobile */
    }
`;

export const PoolListHeaderElement = styled.div<{ width?: string }>`
    width: ${({ width }) => width};
    padding-right: 5px;

    :hover {
        cursor: pointer;
        color: var(--lightGray);
        user-select: none;
    }
`;

export const DesktopFilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: none; /* Made border invisible */

    @media (max-width: 700px) {
        display: none;
    }
`;

export const MobileFilterContainer = styled.div`
    display: none;

    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 10px 8px;
        background-color: rgba(10, 10, 10, 0.15);
        backdrop-filter: blur(6px);
        border-radius: 12px;
        gap: 8px;
        border: none;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
`;

export const MobileFilterTopRow = styled.div`
    display: flex;
    gap: 8px;
    width: 100%;
    align-items: center;
`;

export const MobileFilterBottomRow = styled.div`
    display: flex;
    gap: 6px;
    width: 100%;
    align-items: center;
`;

export const MobileFilterScrollArea = styled.div`
    display: flex;
    gap: 6px;
    align-items: center;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    flex: 1;
    min-width: 0;

    &::-webkit-scrollbar {
        display: none;
    }

    & > div,
    & > button {
        flex-shrink: 0;
    }
`;

export const PoolListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    backdrop-filter: none;
    width: 80%;
    min-width: 1114px;
    border-radius: 10px;
    border: none;
    box-shadow: none;

    @media (max-width: 1120px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: unset;
        width: 100%;
        margin-top: 0;
    }

    @media (max-width: 700px) {
        margin-top: 12px;
        padding: 0;
        width: 100%;
        box-sizing: border-box;
    }
`;

export const PoolFiltersContainer = styled.div`
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    margin-bottom: 5px;

    @media (max-width: 1120px) {
        justify-content: center;
    }

    @media (max-width: 700px) {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;

export const PoolListArrow = styled.img<{ isAscSort?: boolean }>`
    width: 9px;
    transition: transform 0.2s ease;
    transform: ${({ isAscSort }) => (isAscSort ? 'translate(0) rotate(180deg)' : '')};

    :hover {
        cursor: pointer;
    }
`;

export const PoolTopLineContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 700px) {
        justify-content: center;
        flex-direction: column;
    }
`;

export const AddFarmButtonContainer = styled(PrettyButtonContainer)`
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.9);
    text-decoration: none;
    background-color: transparent;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.02em;
    height: 30px;
    text-align: center;
    font-family: var(--font-body);
    transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease, text-shadow 0.2s ease;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);

    &:hover {
        border-color: rgba(255, 255, 255, 1);
        transform: translateY(-1px);
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
        text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
    }

    @media (max-width: 700px) {
        width: auto;
        padding: 5px 14px;
        white-space: nowrap;
        flex-shrink: 0;

        &::before {
            display: none;
        }
    }
`;

export const SwitchersContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;

    @media (max-width: 870px) {
        gap: 10px;
    }

    @media (max-width: 700px) {
        width: 50%;
        width: 50%;
        display: flex;
        flex-direction: column-reverse;
        padding-left: 0px;
        padding-top: 5px;
        gap: 0px;
    }
`;

export const SwitchersAndSearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;

    @media (max-width: 840px) {
        gap: 5px;
    }

    @media (max-width: 820px) {
        margin-bottom: 10px;
    }

    @media (max-width: 805px) {
        gap: 10px;
    }

    @media (max-width: 700px) {
        margin-bottom: 0px;
        display: flex;
        flex-direction: column;
        gap: 11px;
        padding-top: 4px;
        margin-left: 0px;
    }
`;

export const FilterDivider = styled.div`
    width: 1px;
    height: 20px;
    background: rgba(255, 255, 255, 0.1);
    align-self: center;
    margin-top: 8px;
    flex-shrink: 0;

    @media (max-width: 700px) {
        display: none;
    }
`;

export const FilterGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FilterGroupLabel = styled.span`
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--gray);
    opacity: 0.5;
    display: block;
    text-align: center;

    @media (max-width: 700px) {
        display: none;
    }
`;

export const TopTwoButtonsMobileContainer = styled.div`
    display: flex;
    margin-bottom: 5px;

    @media (max-width: 885px) {
        display: flex;
        flex-direction: row;
        justify-content: left;
    }

    @media (max-width: 700px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-right: 0%;
        padding-top: 5px;
        gap: 2px;
        margin-bottom: 0px;
    }
`;

export const MobileOnly = styled.div`
    display: none;

    @media (max-width: 700px) {
        display: block;
    }
`;

export const DesktopOnly = styled.div`
    display: block;

    @media (max-width: 700px) {
        display: none;
    }
`;
