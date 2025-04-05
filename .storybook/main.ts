import type { StorybookConfig } from "@storybook/react-vite";
import postcssCustomMedia from "postcss-custom-media";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: [
    "../src/**/**/*.mdx",
    "../src/**/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: { strictMode: true },
  },

  staticDirs: ["../public"],
  docs: {
    autodocs: "tag",
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      base: "",
      optimizeDeps: {
        esbuildOptions: {
          loader: {
            ".js": "jsx",
          },
        },
      },
      css: { postcss: { plugins: [postcssCustomMedia] } },
    });
  },
};
export default config;
