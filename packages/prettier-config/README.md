# [`@eunchurn/prettier-config`]

![npm](https://img.shields.io/npm/dw/@eunchurn%2Fprettier-config) [![npm version](https://badge.fury.io/js/@eunchurn%2Fprettier-config.svg)](https://badge.fury.io/js/@eunchurn%2Fprettier-config) [![GitHub version](https://badge.fury.io/gh/eunchurn%2Fpackages.svg)](https://badge.fury.io/gh/eunchurn%2Fpackages) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Standard [Prettier configuration](https://prettier.io/docs/en/configuration.html) for Danbi team projects.

## Installation

```bash
yarn add -D @eunchurn/prettier-config
```

## Usage

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
