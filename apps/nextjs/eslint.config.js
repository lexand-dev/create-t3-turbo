import nextjsConfig from "@bite/eslint-config/nextjs";
import reactConfig from "@bite/eslint-config/react";

import baseConfig, { restrictEnvAccess } from "@bite/eslint-config/base";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
