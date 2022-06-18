# [`@eunchurn/eslint-config`](https://github.com/eunchurn/packages/packages/1490277)

![npm](https://img.shields.io/npm/dw/@eunchurn%2Feslint-config) [![npm version](https://badge.fury.io/js/@eunchurn%2Feslint-config.svg)](https://badge.fury.io/js/@eunchurn%2Feslint-config) [![GitHub version](https://badge.fury.io/gh/eunchurn%2Fpackages.svg)](https://badge.fury.io/gh/eunchurn%2Fpackages) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Eunchurn ESLint configuration

Code lint with TypeScript and Prettier

## Install

```sh
yarn add -D @eunchurn/eslint-config
```

## Usage

add `.eslintrc.json`

```json
{
  "extends": ["@eunchurn/eslint-config"],
  "rules": {
    // your rules
  }
}
```

## ESLint Configuration

This configuration follow

```js
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    createDefaultProgram: true,
  },
  rules: {
    "prettier/prettier": ["error"],
    "no-console": ["off"],
    "import/no-extraneous-dependencies": ["off"],
    "no-return-await": ["off"],
    "import/extensions": ["off"],
    "import/no-unresolved": ["off"],
    "class-methods-use-this": ["off"],
    "no-unused-vars": ["off"],
    "no-useless-escape": ["off"],
    "import/prefer-default-export": ["off"],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": ["warn"],
  },
};
```
