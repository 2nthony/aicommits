module.exports = {
  "extends": "@pvtnbr",
  "rules": {
    "unicorn/no-process-exit": "off"
  },
  "overrides": [
    {
      "files": "./src/commands/prepare-commit-msg-hook.ts",
      "rules": {
        "unicorn/prevent-abbreviations": "off"
      }
    }
  ]

}
