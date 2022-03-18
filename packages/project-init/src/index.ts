#! /usr/bin/env node
import shelljs from "shelljs";
import fs from "fs";
import { eslint } from "./eslintConfig";
import { prettier } from "./prettierConfig";
import { vscode } from "./vscodeConfig";


shelljs.exec("yarn add -D typescript ts-node ts-node-dev @types/node @eunchurn/base-eslint-config");
shelljs.exec("npx gitignore node");
shelljs.exec("yarn tsc --init --outDir dist")

fs.writeFileSync(".eslintrc.json", JSON.stringify(eslint, null, 2))
fs.writeFileSync(".prettierrc", JSON.stringify(prettier, null, 2))

try {
  shelljs.mkdir(".vscode");
} catch { console.log(".vscode already exist") }

fs.writeFileSync(".vscode/settings.json", JSON.stringify(vscode, null, 2))
