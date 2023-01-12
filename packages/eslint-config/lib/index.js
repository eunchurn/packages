"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
    parserOptions: {
        ecmaVersion: 2018,
        createDefaultProgram: true,
    },
    rules: {
        "prettier/prettier": ["error"],
        "no-console": ["off"],
        "import/no-extraneous-dependencies": ["off"],
        "no-return-await": ["off"],
        "import/extensions": ["off"],
        "import/no-unresolved": ["off"],
        "class-methods-use-this": ["off"],
        "no-unused-vars": ["off"],
        "no-useless-escape": ["off"],
        "import/prefer-default-export": ["off"],
        "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": ["warn"],
    },
};
module.exports = config;
//# sourceMappingURL=index.js.map