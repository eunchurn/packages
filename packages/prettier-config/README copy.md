# prettier-config

Standard [Prettier configuration](https://prettier.io/docs/en/configuration.html) for Danbi team projects.

## Installation

```bash
yarn add -D @danbi-fi/prettier-config
```

## Usage

In your `package.json`

```json
{
  "prettier": "@danbi-fi/prettier-config"
}
```

If you wish you _extend_ these settings then in your `.prettierrc.js`

```js
module.exports = {
  ...require('@danbi-fi/prettier-config')
}
```