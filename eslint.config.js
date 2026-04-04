import pluginRouter from "@tanstack/eslint-plugin-router";

export default [
  { ignores: ["src/paraglide/**"] },
  ...pluginRouter.configs["flat/recommended"],
];
