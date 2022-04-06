#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shelljs_1 = __importDefault(require("shelljs"));
// import { execSync } from "child_process";
const fs_1 = __importDefault(require("fs"));
const eslintConfig_1 = require("./eslintConfig");
const prettierConfig_1 = require("./prettierConfig");
const vscodeConfig_1 = require("./vscodeConfig");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("== 🎁 installing eunchurn TypeScript project");
        shelljs_1.default.exec("yarn add -D typescript ts-node ts-node-dev @types/node @eunchurn/eslint-config @eunchurn/prettier-config");
        shelljs_1.default.exec("npx gitignore node");
        shelljs_1.default.exec("yarn tsc --init --outDir dist");
        fs_1.default.writeFileSync(".eslintrc.js", eslintConfig_1.eslint);
        fs_1.default.writeFileSync(".eslintignore", eslintConfig_1.eslintignore);
        fs_1.default.writeFileSync(".prettierrc.js", JSON.stringify(prettierConfig_1.prettier, null, 2));
        shelljs_1.default.exec(`node -e "let pkg=require('./package.json'); pkg.prettier='@eunchurn/prettier-config'; require('fs').writeFileSync('package.json', JSON.stringify(pkg, null, 2));"`);
        try {
            shelljs_1.default.exec("mkdir .vscode");
        }
        catch (_a) {
            console.log(".vscode already exist");
        }
        fs_1.default.writeFileSync(".vscode/settings.json", JSON.stringify(vscodeConfig_1.vscode, null, 2));
        return "done";
    });
}
main().then(() => {
    console.log("== 🎉 eunchurn project setting done");
});
//# sourceMappingURL=index.js.map