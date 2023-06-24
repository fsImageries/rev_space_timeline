import ViteYaml from '@modyfi/vite-plugin-yaml';

export default {
  plugins: [
    ViteYaml()
  ],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
};