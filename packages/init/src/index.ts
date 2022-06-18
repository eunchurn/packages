#! /usr/bin/env node
import shelljs from "shelljs";
// import { execSync } from "child_process";
import fs from "fs";
import { eslint, eslintignore } from "./eslintConfig";
import { prettier } from "./prettierConfig";
import { vscode } from "./vscodeConfig";
import { paths } from "./paths";
import { moduleAliases } from "./moduleAliases";
import { src } from "./src";
import { jestConfig } from "./jestConfig";
import { jestSetupEnv } from "./jestSetupEnv";
import { sampleTestCode } from "./sampleTestCode";
import { prettierignore } from "./prettierignore";
import ora from "ora";

async function main() {
  const spinner = ora("🎁 installing TypeScript project...").start();
  spinner.text = "🎁 installing TypeScript project...";
  shelljs.exec(
    "yarn add -D typescript ts-node ts-node-dev @types/node @eunchurn/eslint-config @eunchurn/prettier-config jest ts-jest @types/jest @types/module-alias cross-env dotenv-cli",
  );
  shelljs.exec("yarn add module-alias");
  shelljs.exec("npx gitignore node");
  shelljs.exec("yarn tsc --init --outDir dist --baseUrl . --module commonjs --paths null");
  shelljs.sed("-i", `"paths": undefined,`, paths, "tsconfig.json");
  fs.writeFileSync(".eslintrc.js", eslint);
  fs.writeFileSync(".eslintignore", eslintignore);
  fs.writeFileSync(".prettierrc.js", prettier);
  fs.writeFileSync(".prettierignore", prettierignore);
  shelljs.exec(
    `node -e "let pkg=require('./package.json'); pkg.prettier='@eunchurn/prettier-config'; require('fs').writeFileSync('package.json', JSON.stringify(pkg, null, 2));"`,
  );
  try {
    shelljs.exec("mkdir .vscode");
  } catch {
    console.log(".vscode already exist");
  }
  fs.writeFileSync(".vscode/settings.json", JSON.stringify(vscode, null, 2));
  try {
    shelljs.exec("mkdir src");
  } catch {
    console.log("src already exist");
  }
  fs.writeFileSync("src/index.ts", src);
  fs.writeFileSync("src/moduleAliases.ts", moduleAliases);
  fs.writeFileSync("jest.config.ts", jestConfig);
  try {
    shelljs.exec("mkdir src/__tests__");
    fs.writeFileSync("src/__tests__/index.spec.ts", sampleTestCode);
  } catch {
    console.log("src/__tests__ already exist");
  }
  try {
    shelljs.exec("mkdir .jest");
    fs.writeFileSync(".jest/setupEnv.js", jestSetupEnv);
  } catch {
    console.log(".jest already exist");
  }
  shelljs.exec("npx prettier --write .");
  return spinner;
}

main().then((spinner) => {
  spinner.succeed("🎉 TypeScript project setting done");
});
