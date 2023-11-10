// node16からデフォルトでipv6が採用されているため、ipv4を指定する。
const dns = require("dns");
dns.setDefaultResultOrder("ipv4first")

/** @type {import('next').NextConfig} */
const nextConfig = {
    // TODO setting by env
    reactStrictMode: true,
    output: 'standalone'
}

const withNextIntl = require("next-intl/plugin")();

module.exports = withNextIntl(nextConfig);
