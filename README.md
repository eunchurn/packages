[![Unit Test](https://github.com/eunchurn/ts-utils/actions/workflows/unit-test.yml/badge.svg)](https://github.com/eunchurn/ts-utils/actions/workflows/unit-test.yml)
# @eunchurn ts-utils

## Ring buffer

### Usage

```typescript
import { Ring } from "@eunchurn/ring-ts";

const ring = new Ring(100);

ring.push(1);

console.log(ring.toArray())
// [1]

const { isEmpty, count, isFull, size } = testRing;
console.log({ isEmpty, count, isFull, size });

// { isEmpty: false, count: 1, isFull: false, size: 100 }

ring.dequeue();

console.log(ring.toArray())
// []

console.log({ isEmpty, count, isFull, size });

// { isEmpty: true, count: 0, isFull: false, size: 100 }
```
## `@eunchurn/init`

TypeScript Project initialize

Project init script for TypeScript, ESLint, Prettier

### Usage

```sh
npx @eunchurn/init
```

## `@eunchurn/eslint-config`

Eunchurn ESLint configuration

Code lint with TypeScript and Prettier

### Install

```sh
yarn add -D @eunchurn/eslint-config
```

### Usage

add `.eslintrc.json`

```json
{
  "extends": ["@eunchurn/eslint-config"],
  "rules": {
    // your rules
  }
}
```

### ESLint Configuration

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

## Initial

```
npm config set access public
```

