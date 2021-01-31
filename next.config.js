const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = { 
	target: 'serverless',
	withBundleAnalyzer({})
};
