module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {tsconfig: "<rootDir>/tsconfig.jest.json"}]
  }
}
