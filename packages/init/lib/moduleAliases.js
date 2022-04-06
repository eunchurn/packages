"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduleAliases = void 0;
exports.moduleAliases = `
import "module-alias/register";
import moduleAliases from "module-alias";
import path from "path";

moduleAliases.addAliases({
  libs: path.resolve(__dirname, "libs"),
});
`;
//# sourceMappingURL=moduleAliases.js.map