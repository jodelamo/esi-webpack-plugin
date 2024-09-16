import js from "@eslint/js"
import globals from "globals"
import prettier from "eslint-config-prettier"

export default [
  js.configs.recommended,
  prettier,
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
  },
]
