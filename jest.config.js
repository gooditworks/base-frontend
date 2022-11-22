module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  resolver: "<rootDir>/jest.resolver.cjs",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {tsconfig: "<rootDir>/tsconfig.jest.json"}]
  }
}
