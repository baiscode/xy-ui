module.exports = {
  root: true,
  env: {
    node: true
  },
  overrides: [
    {
      files: ["*.ts", "*.vue", "*.js"]
    }
  ],
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-var-requires": "off",   // 不支持require 
    "quotes": ["warn", "single"], // 使用单引号
    "no-empty-function": "off", // 不允许出现空函数
    "@typescript-eslint/no-empty-function": "off",
    "no-extra-boolean-cast": "off", // 不允许出现多个判断(!)符号
    "@typescript-eslint/no-var-requires": "off"
  }
};
