module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:effector/recommended",
        "plugin:effector/scope",
        "plugin:effector/react",
        "plugin:effector/future",
        "plugin:react/jsx-runtime",
        "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: ["tsconfig.json"],
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    ignorePatterns: [".eslintrc.js"],
    plugins: [
        "react",
        "@typescript-eslint",
        "effector"
    ],
    rules: {
        "@typescript-eslint/no-unused-vars": ["warn", {
            "argsIgnorePattern": '^_',
            "varsIgnorePattern": '^_',
            "caughtErrorsIgnorePattern": '^_',
        }],

        // Additional useful rules which are not included in recommended
        'react/button-has-type': 'warn',
        'react/destructuring-assignment': 'warn',
        'react/hook-use-state': 'warn',
        'react/iframe-missing-sandbox': 'error',
        'react/no-access-state-in-setstate': 'warn',
        'react/no-array-index-key': 'warn',
        'react/no-arrow-function-lifecycle': 'warn',
        'react/no-danger': 'warn',
        'react/no-did-mount-set-state': 'warn',
        'react/no-did-update-set-state': 'warn',
        'react/no-invalid-html-attribute': 'warn',
        'react/no-redundant-should-component-update': 'warn',
        // 'react/no-set-state': 'warn' -- maybe it would be the right thing to do but we are not ready
        'react/no-this-in-sfc': 'warn',
        'react/prefer-stateless-function': 'warn',
        'react/self-closing-comp': 'warn',

        // TODO: add jsx-eslint JSX specific rules (they make more sense probably)

        // Show warnings instead of errors because we have too much errors we can't fix right now
        // TODO: not show how it works and if works at all
        "prettier/prettier": "warn",

        // Redifine recommended-requiring-type-checking rules to be warnings
        '@typescript-eslint/await-thenable': 'warn',
        '@typescript-eslint/no-floating-promises': 'warn',
        '@typescript-eslint/no-for-in-array': 'warn',
        'no-implied-eval': 'off',
        '@typescript-eslint/no-implied-eval': 'warn',
        '@typescript-eslint/no-misused-promises': 'warn',
        '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
        '@typescript-eslint/no-unsafe-argument': 'warn',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/no-unsafe-return': 'warn',
        'require-await': 'off',
        '@typescript-eslint/require-await': 'warn',
        '@typescript-eslint/restrict-plus-operands': 'warn',
        '@typescript-eslint/restrict-template-expressions': 'warn',
        '@typescript-eslint/unbound-method': 'warn',
    }
}
