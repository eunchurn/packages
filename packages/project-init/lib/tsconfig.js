"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tsconfig = void 0;
const fs_1 = __importDefault(require("fs"));
const buffer = fs_1.default.readFileSync("tsconfigjson");
console.log(buffer.toString());
exports.tsconfig = buffer.toString();
//# sourceMappingURL=tsconfig.js.map