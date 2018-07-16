module.exports = {
    "extends": "airbnb-base",
    "rules": {
      "no-param-reassign": "off",
      "no-bitwise": "off"
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
