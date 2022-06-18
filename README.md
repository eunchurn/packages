[![Unit Test](https://github.com/eunchurn/packages/actions/workflows/unit-test.yml/badge.svg)](https://github.com/eunchurn/packages/actions/workflows/unit-test.yml) [![/canary-release](https://github.com/eunchurn/packages/actions/workflows/canary-release.yml/badge.svg)](https://github.com/eunchurn/packages/actions/workflows/canary-release.yml)

# @eunchurn node packages

## [`@eunchurn/ring-ts`](https://github.com/eunchurn/packages/packages/698042)

![npm](https://img.shields.io/npm/dw/@eunchurn%2Fring-ts) [![npm version](https://badge.fury.io/js/@eunchurn%2Fring-ts.svg)](https://badge.fury.io/js/@eunchurn%2Fring-ts) [![GitHub version](https://badge.fury.io/gh/eunchurn%2Fpackages.svg)](https://badge.fury.io/gh/eunchurn%2Fpackages) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Ring buffer

### Usage

```typescript
import { Ring } from "@eunchurn/ring-ts";

const ring = new Ring(100);

ring.push(1);

console.log(ring.toArray());
// [1]

const { isEmpty, count, isFull, size } = testRing;
console.log({ isEmpty, count, isFull, size });

// { isEmpty: false, count: 1, isFull: false, size: 100 }

ring.dequeue();

console.log(ring.toArray());
// []

console.log({ isEmpty, count, isFull, size });

// { isEmpty: true, count: 0, isFull: false, size: 100 }
```

## [`@eunchurn/init`](https://github.com/eunchurn/packages/packages/1490281)

![npm](https://img.shields.io/npm/dw/@eunchurn%2Finit) [![npm version](https://badge.fury.io/js/@eunchurn%2Finit.svg)](https://badge.fury.io/js/@eunchurn%2Finit) [![GitHub version](https://badge.fury.io/gh/eunchurn%2Fpackages.svg)](https://badge.fury.io/gh/eunchurn%2Fpackages) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

TypeScript Project initialize

Project init script for TypeScript, ESLint, Prettier

### Usage

```sh
npx @eunchurn/init
```

## [`@eunchurn/eslint-config`](https://github.com/eunchurn/packages/packages/1490277)

![npm](https://img.shields.io/npm/dw/@eunchurn%2Feslint-config) [![npm version](https://badge.fury.io/js/@eunchurn%2Feslint-config.svg)](https://badge.fury.io/js/@eunchurn%2Feslint-config) [![GitHub version](https://badge.fury.io/gh/eunchurn%2Fpackages.svg)](https://badge.fury.io/gh/eunchurn%2Fpackages) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

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

## [`@eunchurn/prettier-config`](https://github.com/eunchurn/packages/packages/1490284)

![npm](https://img.shields.io/npm/dw/@eunchurn%2Fprettier-config) [![npm version](https://badge.fury.io/js/@eunchurn%2Fprettier-config.svg)](https://badge.fury.io/js/@eunchurn%2Fprettier-config) [![GitHub version](https://badge.fury.io/gh/eunchurn%2Fpackages.svg)](https://badge.fury.io/gh/eunchurn%2Fpackages) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Standard [Prettier configuration](https://prettier.io/docs/en/configuration.html) for Danbi team projects.

### Installation

```bash
yarn add -D @eunchurn/prettier-config
```

### Usage

In your `package.json`

```json
{
  "prettier": "@eunchurn/prettier-config"
}
```

If you wish you _extend_ these settings then in your `.prettierrc.js`

```js
module.exports = {
  ...require("@eunchurn/prettier-config"),
};
```

## [`@eunchurn/ipaddress`](https://github.com/eunchurn/packages/packages/1490280)

![npm](https://img.shields.io/npm/dw/@eunchurn%2Fipaddress) [![npm version](https://badge.fury.io/js/@eunchurn%2Fipaddress.svg)](https://badge.fury.io/js/@eunchurn%2Fipaddress) [![GitHub version](https://badge.fury.io/gh/eunchurn%2Fpackages.svg)](https://badge.fury.io/gh/eunchurn%2Fpackages) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Getting public IP address

### Installation

```sh
yarn add @eunchurn/ipaddress
```

### Usage

#### `function getIPAddresses()`

실제 물리적 네트워크 인터페이스의 IP주소를 가져옴 (sync)

```ts
import { getIPAddresses } from "@eunchurn/ipaddress";

const ipAddress = getIPAddresses(); // IP Address
```

#### `function getNetworkIP(callback: (error: Error | undefined, data: string) => void)`

`www.google.com`을 연결하는 인터페이스의 IP주소를 가져옴: 이더넷 혹은 Wi-Fi 연결을 동시에 사용하거나, 여러 네트워크 인터페이스가 열려있는 경우 실제 네트워크 주소를 가져옴.

```ts
import { getNetworkIP } from "@eunchurn/ipaddress";

getNetworkIP((error, data) => {
  console.log(data); // IP Address
});
```

## Initial

```
npm config set access public
```
