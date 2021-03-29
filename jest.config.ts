export default {
  roots: ["<rootDir>/packages"],
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$",
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/types/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
