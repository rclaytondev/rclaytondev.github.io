import type { NextConfig } from "next";

const REPOSITORY_NAME = "rclaytondev.github.io-new";
const isProd = process.env.NODE_ENV === 'production';
const prefix = isProd ? `/${REPOSITORY_NAME}` : "";

const nextConfig: NextConfig = {
	/* config options here */
	"output": "export",
	basePath: prefix,
	assetPrefix: prefix,
};

export default nextConfig;
