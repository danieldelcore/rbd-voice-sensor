module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2017
    },
    env: {
        es6: true
    }
    extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
    plugins: ['react-hooks'],
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': 'off',
        'react/display-name': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
