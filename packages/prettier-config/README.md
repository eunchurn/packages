# prettier-config

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
  ...require('@eunchurn/prettier-config')
}
```