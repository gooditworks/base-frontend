module.exports = {
  testEnvironment: "jsdom",
  testMatch: ["**/src/**/*.test.ts?(x)"],
  resolver: "<rootDir>/jest.resolver.cjs",
  transform: {
    "^.+.tsx?$": ["ts-jest", {tsconfig: "<rootDir>/tsconfig.jest.json"}],
  }
}
