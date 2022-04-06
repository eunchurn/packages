#! /usr/bin/env node
import shelljs from "shelljs";
// import { execSync } from "child_process";
import fs from "fs";
import { eslint, eslintignore } from "./eslintConfig";
import { prettier } from "./prettierConfig";
import { vscode } from "./vscodeConfig";

async function main() {
  console.log("== 🎁 installing eunchurn TypeScript project");
  shelljs.exec(
    "yarn add -D typescript ts-node ts-node-dev @types/node @eunchurn/eslint-config @eunchurn/prettier-config",
  );
  shelljs.exec("npx gitignore node");
  shelljs.exec("yarn tsc --init --outDir dist");
  fs.writeFileSync(".eslintrc.js", eslint);
  fs.writeFileSync(".eslintignore", eslintignore);
  fs.writeFileSync(".prettierrc.js", JSON.stringify(prettier, null, 2));
  shelljs.exec(
    `node -e "let pkg=require('./package.json'); pkg.prettier='@eunchurn/prettier-config'; require('fs').writeFileSync('package.json', JSON.stringify(pkg, null, 2));"`,
  );
  try {
    shelljs.exec("mkdir .vscode");
  } catch {
    console.log(".vscode already exist");
  }

  fs.writeFileSync(".vscode/settings.json", JSON.stringify(vscode, null, 2));
  return "done";
}

main().then(() => {
  console.log("== 🎉 eunchurn project setting done");
});
