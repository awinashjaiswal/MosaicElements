import { Config } from '@stencil/core';
import tailwind, { tailwindHMR } from 'stencil-tailwind-plugin';

export const config: Config = {
  namespace: 'componentlibrary',
  plugins: [
    tailwind(),
    tailwindHMR(),
  ],
  globalScript: 'src/global/global.ts',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      dir: 'dist/amd',
      externalRuntime: false,
      empty: false,
      generateTypeDeclarations: true,
      // customElementsExportBehavior: 'default' | 'auto-define-custom-elements' | 'bundle' | 'single-export-module',
      customElementsExportBehavior: 'single-export-module',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
