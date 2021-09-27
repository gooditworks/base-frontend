module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  resolver: "<rootDir>/jest.resolver.cjs",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.jest.json"
    }
  }
}
