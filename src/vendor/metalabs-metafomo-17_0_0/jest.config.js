module.exports = {
  // moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  testEnvironment: "node",
  transform: {
    "^.+\\.m?jsx?$": "babel-jest",
  },
  // Fucking jest wants to parse my dependencies
  transformIgnorePatterns: ["node_modules/(?!(.+)/)"],
  testTimeout: 20000,
};
