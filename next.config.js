// This file is intentionally CommonJS (Next.js loads next.config.js this
// way), so `require` here is correct, not a stray import style.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = withNextIntl(nextConfig);
