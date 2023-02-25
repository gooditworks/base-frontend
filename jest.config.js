module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["**/src/**/*.test.ts?(x)"],
  moduleDirectories: ["node_modules", "src"],
  modulePaths: ["<rootDir>/src"],
  transform: {
    "^.+.tsx?$": ["ts-jest", {tsconfig: "<rootDir>/tsconfig.jest.json"}]
  }
}
