import ViteYaml from '@modyfi/vite-plugin-yaml';
import viteCompression from 'vite-plugin-compression';

export default {
  plugins: [
    ViteYaml(),
    viteCompression()
  ],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
  test: {
    setupFiles: [
        './tests/.setup.ts'
    ],
  },
  build: {
    chunkSizeWarningLimit: 1000
  }
};