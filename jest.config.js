module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  resolver: "<rootDir>/jest.resolver.cjs",
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.jest.json"
    }
  }
}
