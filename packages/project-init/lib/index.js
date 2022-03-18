"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shelljs_1 = __importDefault(require("shelljs"));
const fs_1 = __importDefault(require("fs"));
const eslintConfig_1 = require("./eslintConfig");
const prettierConfig_1 = require("./prettierConfig");
const vscodeConfig_1 = require("./vscodeConfig");
shelljs_1.default.exec("yarn add -D typescript ts-node ts-node-dev @types/node @eunchurn/base-eslint-config");
fs_1.default.writeFileSync(".eslintrc.json", JSON.stringify(eslintConfig_1.eslint, null, 2));
fs_1.default.writeFileSync(".prettierrc", JSON.stringify(prettierConfig_1.prettier, null, 2));
shelljs_1.default.mkdir(".vscode");
fs_1.default.writeFileSync(".vscode/settings.json", JSON.stringify(vscodeConfig_1.vscode, null, 2));
//# sourceMappingURL=index.js.map