module.exports = {
    space: 'true',
    prettier: 'true',
    rules: {
        // maybe good idea but don't want to bother
        'unicorn/filename-case': 'off',
        // tbh not sure how it works, it conflicts with TS for me
        'import/extensions': 'off',
        // We have something like custom implicit convention which doesn't match
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/ban-types': [
            'error',
            {
                types: {
                    // I think it's too much and we already have lots of nulls.
                    // See https://github.com/sindresorhus/meta/discussions/7 for details btw.
                    null: false,
                },
                extendDefaults: true,
            },
        ],
        // Breaks something, seemingly webpack-related
        'unicorn/prefer-node-protocol': 'off',
        // Too strict
        '@typescript-eslint/padding-line-between-statements': 'off',
        // Sometimes do not match other formats
        'unicorn/numeric-separators-style': 'off',
        // Woke stuff, sometimes confusing
        'unicorn/prevent-abbreviations': 'off',
        // Generally good idea but not 100% of cases
        'capitalized-comments': [
            'warn',
            'always',
            {
                'ignoreConsecutiveComments': true,
                'ignoreInlineComments': true,
            }
        ],
        // TODO: Causes problems with batchOptIn now, enable later
        'node/file-extension-in-import': 'off',
        // The rule itself is somewhat incorrect, can break code
        '@typescript-eslint/prefer-reduce-type-parameter': 'off',
        // We use non-standard way
        'react/function-component-definition': ['error', {
            'namedComponents': 'arrow-function',
            'unnamedComponents': 'arrow-function'
          }]
    },
    plugins: ['effector'],
    extends: [
        'xo-react',
        'plugin:react/jsx-runtime',
        'plugin:effector/recommended',
        'plugin:effector/scope',
        'plugin:effector/react',
        'plugin:effector/future',
    ],
};
