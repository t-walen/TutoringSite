/** @type {import('next').NextConfig} */

import path from 'path';

export default {
  webpack: (config, { isServer }) => {
    if (!isServer) {
        const __dirname = path.dirname(new URL(import.meta.url).pathname);
        config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    }
    return config;
  },
};
