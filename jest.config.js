module.exports = {
    "roots": [
      "<rootDir>/src"
    ],
    "testMatch": [
      "<rootDir>/src/tests/**/*.+(ts|tsx|js)",
    ],
    "transform": {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
}