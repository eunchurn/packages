#! /usr/bin/env node
import shelljs from "shelljs";
// import { execSync } from "child_process";
import fs from "fs";
import { eslint, eslintignore } from "./eslintConfig";
import { prettier } from "./prettierConfig";
import { vscode } from "./vscodeConfig";

async function main() {
  console.log("== 🎁 installing eunchurn TypeScript project");
  shelljs.exec("");
  shelljs.exec(
    "yarn add -D typescript ts-node ts-node-dev @types/node @eunchurn/eslint-config @eunchurn/prettier-config",
  );
  const giResult = shelljs.exec("npx gitignore node");
  console.log(giResult.toString());

  const tscResult = shelljs.exec("yarn tsc --init --outDir dist");
  console.log(tscResult.toString());
  fs.writeFileSync(".eslintrc.js", eslint);
  fs.writeFileSync(".eslintignore", eslintignore);
  fs.writeFileSync(".prettierrc.js", JSON.stringify(prettier, null, 2));
  shelljs.exec(`json -I -f package.json -e "this.prettier=\"@eunchurn/prettier-config\""`);
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
