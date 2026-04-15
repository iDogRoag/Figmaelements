import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Processes Tailwind v4 @import directives (required for both dev and prod)
    cssInjectedByJsPlugin(), // Injects compiled CSS into the JS bundle (prod: no separate .css file)
  ],
  build: {
    lib: {
      entry: 'src/wix-entry.tsx',
      name: 'TNHPComponents',
      formats: ['es'],
      fileName: () => 'tnhp-bundle.js',
    },
    rollupOptions: {
      // We are deliberately NOT externalizing React or ReactDOM.
      // We want them bundled inside so Wix doesn't have to load them separately.
      output: {
        inlineDynamicImports: true,
        // Wix's ESLint linter runs no-undef on the bundle and fails deployment
        // if browser/React globals are unrecognised. This banner disables that.
        banner: '/* eslint-disable */',
      },
    },
    emptyOutDir: true,
  },
  define: {
    // Required for React to compile in production mode within a Custom Element
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
});
