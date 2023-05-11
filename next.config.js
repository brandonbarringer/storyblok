/** @type {import('next').NextConfig} */

const path = require('path')

let assetPrefix = ''
let basePath = ''

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true
  },
  assetPrefix: assetPrefix,
  basePath: basePath
}

module.exports = nextConfig
