export declare const config: {
    parser: string;
    plugins: string[];
    extends: string[];
    parserOptions: {
        ecmaVersion: number;
        createDefaultProgram: boolean;
    };
    rules: {
        "prettier/prettier": string[];
        "no-console": string[];
        "import/no-extraneous-dependencies": string[];
        "no-return-await": string[];
        "import/extensions": string[];
        "import/no-unresolved": string[];
        "class-methods-use-this": string[];
        "no-unused-vars": string[];
        "no-useless-escape": string[];
        "import/prefer-default-export": string[];
        "@typescript-eslint/no-unused-vars": (string | {
            argsIgnorePattern: string;
        })[];
        "@typescript-eslint/explicit-function-return-type": string;
        "@typescript-eslint/no-explicit-any": string[];
    };
};
//# sourceMappingURL=config.d.ts.map