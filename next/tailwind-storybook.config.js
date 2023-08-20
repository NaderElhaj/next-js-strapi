const defaultConfig = require("./tailwind.config.js");

module.exports = {
  ...defaultConfig,
  content: [...defaultConfig.content, "./stories/**/*.{js,ts,jsx,tsx,mdx}"],
};
