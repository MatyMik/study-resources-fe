module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-use-before-define': [0, { variables: false }],
    'no-param-reassign': 0,
    'import/no-unresolved': [2, { caseSensitive: false }],
    'react/prop-types': 0,
    'no-shadow': 0,
    'no-console': 0,
    'no-nested-ternary': 0,
    'react/jsx-props-no-spreading': 'off',
    'no-underscore-dangle': 0,
    'react/destructuring-assignment': 0,
    'no-plusplus': 0,
    'consistent-return': 0,
    'jsx-a11y/media-has-caption': 0,
    'no-restricted-syntax': 0,
    'prefer-promise-reject-errors': 0,
  },
};
