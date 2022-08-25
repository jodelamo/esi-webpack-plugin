module.exports = {
  plugins: ['prettier', 'jest'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  env: {
    node: true,
    'jest/globals': true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
}
