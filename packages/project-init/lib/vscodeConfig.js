"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vscode = void 0;
exports.vscode = {
    "typescript.tsdk": "./node_modules/typescript/lib",
    "typescript.referencesCodeLens.enabled": true,
    "typescript.disableAutomaticTypeAcquisition": true,
    "eslint.validate": ["typescript"],
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[prisma]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "editor.formatOnSave": true,
    "eslint.alwaysShowStatus": true,
    "editor.codeActionsOnSave": {
        "source.fixAll": false
    }
};
//# sourceMappingURL=vscodeConfig.js.map