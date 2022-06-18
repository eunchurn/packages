import { pathsToModuleNameMapper, GlobalConfigTsJest } from "ts-jest";
import type { InitialOptionsTsJest } from "ts-jest/dist/types";
import ts from "typescript";

const compilerOptionsPaths = (() => {
  const configFileName = ts.findConfigFile(
    "../",
    ts.sys.fileExists,
    "tsconfig.json",
  );
  if (configFileName) {
    const configFile = ts.readConfigFile(configFileName, ts.sys.readFile);
    const option = ts.parseJsonConfigFileContent(
      configFile.config,
      ts.sys,
      "./",
    );
    return option.raw.compilerOptions.paths;
  }
  return {};
})();

const globals: GlobalConfigTsJest = {
  "ts-jest": {
    tsconfig: "tsconfig.json",
    compiler: "typescript",
  },
};

const moduleNameMapper = pathsToModuleNameMapper(compilerOptionsPaths, {
  prefix: "<rootDir>",
});

const jestSetting: InitialOptionsTsJest = {
  setupFiles: ["<rootDir>/.jest/setupEnv.js"],
  globals,
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  rootDir: ".",
  roots: ["<rootDir>"],
  modulePaths: ["<rootDir>"],
  moduleNameMapper,
  modulePathIgnorePatterns: ["dist"],
  testRegex: ".spec|.test.ts$",
  transform: {
    "^.+.ts$": "ts-jest",
  },
};

export default jestSetting;
