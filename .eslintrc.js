module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'airbnb',
        'prettier/react',
        'eslint:recommended',
        'plugin:prettier/recommended',
        '@react-native-community',
    ],
    rules: {
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.js', '.jsx'],
            },
        ],
        'no-console': 0,
    },
};
