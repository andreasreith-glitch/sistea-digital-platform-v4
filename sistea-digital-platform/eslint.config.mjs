import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: [
      "src/app/*/ai-data-centers/page.tsx",
      "src/app/*/ai-energy-management/page.tsx",
      "src/app/*/chillers/page.tsx",
      "src/app/*/cold-storage/page.tsx",
      "src/app/*/energy-efficiency/page.tsx",
      "src/app/*/hvac-industrial/page.tsx",
      "src/app/*/industrial-refrigeration/page.tsx",
    ],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

export default eslintConfig;
