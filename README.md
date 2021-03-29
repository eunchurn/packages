# ts-utils

```shell
mkdir ts-utils && cd $_
git init
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:eunchurn/ts-utils.git
git push -u origin main
npm init -y
npx lerna init --independent
```

## Create service

```shell
npx lerna create service
yarn add -D typescript bili rollup-plugin-typescript
yarn add -D jest ts-jest @types/jest eslint eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier
yarn tsc --init
yarn add -D typedoc typedoc-plugin-markdown
```
