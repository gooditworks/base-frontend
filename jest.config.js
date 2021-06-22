module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.jest.json"
    }
  }
}
