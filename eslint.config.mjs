import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // Example: disallow console.log statements
      "no-console": ["warn", { allow: ["warn", "error"] }],

      // Example: enforce consistent semicolon usage
      semi: ["error", "always"],

      // You can define any custom rule config here
    },
  },
];

export default eslintConfig;
