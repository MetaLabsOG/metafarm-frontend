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
        "plugin:react/jsx-runtime"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: ["tsconfig.json"],
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersio: "latest",
        sourceType: "module"
    },
    ignorePatterns: [".eslintrc.js"],
    plugins: [
        "react",
        "@typescript-eslint",
        "effector"
    ],
    rules: {
    }
}
