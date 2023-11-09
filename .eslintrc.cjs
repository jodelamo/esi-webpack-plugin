module.exports = {
  plugins: ["jest"],
  extends: ["eslint:recommended", "prettier"],
  env: {
    node: true,
    "jest/globals": true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
}
