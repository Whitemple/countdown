module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
	rules: {
    "import/prefer-default-export": "off",
    "max-len": [
        "error",
        {
          ignoreComments: true,
          ignoreUrls: true,
        },
    ],
    "import/extensions": [0, { js: "always" }],
},
};
