import type { StorybookConfig } from "@storybook/nextjs";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

import path from "path";
import { Configuration, ResolvePluginInstance } from "webpack";

// Paths for stories
const STORIES_PATHS = [
  "../stories/**/*.mdx",
  "../stories/**/*.stories.@(js|jsx|ts|tsx)",
];

// Addon configurations
const ADDON_CONFIGURATIONS = [
  "@storybook/addon-links",
  "@storybook/addon-essentials",
  "@storybook/addon-onboarding",
  "@storybook/addon-interactions",
  "@storybook/addon-a11y",
  "@storybook/addon-storysource",
  "@storybook/addon-actions",
  "@storybook/addon-viewport",
  "storybook-addon-pseudo-states",
  "@storybook/addon-designs",
  {
    name: "@storybook/addon-styling",
    options: {
      postCss: true,
    },
  },
];

// Configure webpack for Storybook
const configureWebpack = async (storybookWebpackConfig: Configuration) => {
  if (!storybookWebpackConfig) throw new Error("Webpack config is not defined");

  storybookWebpackConfig.resolve = storybookWebpackConfig.resolve || {};
  storybookWebpackConfig.resolve.plugins =
    storybookWebpackConfig.resolve.plugins || [];
  storybookWebpackConfig.resolve.alias =
    storybookWebpackConfig.resolve.alias || {};

  // Use tsconfig-paths-webpack-plugin for resolving paths
  storybookWebpackConfig.resolve.plugins.push(
    new TsconfigPathsPlugin() as ResolvePluginInstance | "...",
  );

  // Set alias for project's tsconfig.json
  storybookWebpackConfig.resolve.alias["@"] = path.resolve(__dirname, "../");

  return storybookWebpackConfig;
};

const config: StorybookConfig = {
  webpackFinal: configureWebpack,
  stories: STORIES_PATHS,
  addons: ADDON_CONFIGURATIONS,
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
