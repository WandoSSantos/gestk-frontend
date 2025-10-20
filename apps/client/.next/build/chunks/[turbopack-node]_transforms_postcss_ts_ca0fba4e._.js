module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/gestk-frontend/apps/client/postcss.config.js_.loader.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "build/chunks/d5e9c_bb4a2812._.js",
  "build/chunks/[root-of-the-server]__a3b66787._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/gestk-frontend/apps/client/postcss.config.js_.loader.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];