module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "no-param-reassign": "off",
    "no-bitwise": "off",
    "no-restricted-syntax": "off",
    "guard-for-in": "off"
  },
  "overrides": [
    {
      "files": ["**/*.test.js"],
      "rules": {
        "no-undef": "off"
      }
    }
  ]
};
