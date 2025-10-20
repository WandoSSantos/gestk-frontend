module.exports = [
"[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LineChart",
    ()=>LineChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/chart/LineChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/cartesian/Line.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/component/Legend.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/gestk-frontend/packages/ui/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/packages/ui/src/components/card.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function LineChart({ data, lines, multiLine, xKey, yKey, color = '#3b82f6', title, description, height = 300, showLegend = true, showGrid = true, loading = false, className = '' }) {
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: `${className}`,
            children: [
                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx",
                            lineNumber: 67,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx",
                    lineNumber: 65,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center h-[300px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
                        }, void 0, false, {
                            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this);
    }
    if (!data || data.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: `${className}`,
            children: [
                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx",
                            lineNumber: 85,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx",
                    lineNumber: 83,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center h-[300px] text-gray-500",
                        children: "Nenhum dado disponível"
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: `${className}`,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx",
                        lineNumber: 103,
                        columnNumber: 27
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: height,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineChart"], {
                        data: data,
                        margin: {
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        },
                        children: [
                            showGrid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                strokeDasharray: "3 3",
                                stroke: "#f0f0f0"
                            }, void 0, false, {
                                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx",
                                lineNumber: 117,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                dataKey: xKey || "name",
                                stroke: "#666",
                                fontSize: 12,
                                tickLine: false,
                                axisLine: false
                            }, void 0, false, {
                                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                stroke: "#666",
                                fontSize: 12,
                                tickLine: false,
                                axisLine: false
                            }, void 0, false, {
                                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                contentStyle: {
                                    backgroundColor: 'white',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this),
                            showLegend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Legend"], {
                                wrapperStyle: {
                                    paddingTop: '20px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx",
                                lineNumber: 140,
                                columnNumber: 15
                            }, this),
                            multiLine ? multiLine.map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
                                    type: "monotone",
                                    dataKey: line.key,
                                    stroke: line.color,
                                    strokeWidth: 2,
                                    name: line.name,
                                    dot: {
                                        fill: line.color,
                                        strokeWidth: 2,
                                        r: 4
                                    },
                                    activeDot: {
                                        r: 6,
                                        stroke: line.color,
                                        strokeWidth: 2
                                    }
                                }, line.key, false, {
                                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this)) : lines ? lines.map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
                                    type: "monotone",
                                    dataKey: line.dataKey,
                                    stroke: line.stroke,
                                    strokeWidth: line.strokeWidth || 2,
                                    name: line.name,
                                    dot: {
                                        fill: line.stroke,
                                        strokeWidth: 2,
                                        r: 4
                                    },
                                    activeDot: {
                                        r: 6,
                                        stroke: line.stroke,
                                        strokeWidth: 2
                                    }
                                }, line.dataKey, false, {
                                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
                                type: "monotone",
                                dataKey: yKey,
                                stroke: color,
                                strokeWidth: 2,
                                name: yKey,
                                dot: {
                                    fill: color,
                                    strokeWidth: 2,
                                    r: 4
                                },
                                activeDot: {
                                    r: 6,
                                    stroke: color,
                                    strokeWidth: 2
                                }
                            }, void 0, false, {
                                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx",
                                lineNumber: 169,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
}),
"[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BarChart",
    ()=>BarChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/chart/BarChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/cartesian/Bar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/component/Legend.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/gestk-frontend/packages/ui/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/packages/ui/src/components/card.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function BarChart({ data, bars, xKey, yKey, color = '#3b82f6', title, description, height = 300, showLegend = true, showGrid = true, loading = false, className = '', horizontal = false }) {
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: `${className}`,
            children: [
                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx",
                            lineNumber: 61,
                            columnNumber: 13
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx",
                            lineNumber: 62,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center h-[300px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
                        }, void 0, false, {
                            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this);
    }
    if (!data || data.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: `${className}`,
            children: [
                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx",
                            lineNumber: 80,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx",
                    lineNumber: 78,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center h-[300px] text-gray-500",
                        children: "Nenhum dado disponível"
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx",
            lineNumber: 76,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: `${className}`,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx",
                        lineNumber: 98,
                        columnNumber: 27
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: '100%',
                        height: height
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                        width: "100%",
                        height: "100%",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                            data: data,
                            margin: {
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 20
                            },
                            children: [
                                showGrid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                    strokeDasharray: "3 3",
                                    stroke: "#f0f0f0"
                                }, void 0, false, {
                                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx",
                                    lineNumber: 113,
                                    columnNumber: 28
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                    dataKey: xKey || 'name',
                                    stroke: "#666",
                                    fontSize: 12,
                                    tickLine: false,
                                    axisLine: false
                                }, void 0, false, {
                                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                    stroke: "#666",
                                    fontSize: 12,
                                    tickLine: false,
                                    axisLine: false,
                                    domain: [
                                        0,
                                        'dataMax'
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                    contentStyle: {
                                        backgroundColor: 'white',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this),
                                showLegend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Legend"], {
                                    wrapperStyle: {
                                        paddingTop: '20px'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx",
                                    lineNumber: 137,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                                    dataKey: yKey || 'value',
                                    fill: color,
                                    name: yKey || 'value',
                                    radius: [
                                        4,
                                        4,
                                        0,
                                        0
                                    ],
                                    maxBarSize: 50
                                }, void 0, false, {
                                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
}),
"[project]/gestk-frontend/apps/client/src/components/charts/PieChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PieChart",
    ()=>PieChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/chart/PieChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/polar/Pie.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/component/Cell.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/component/Legend.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/gestk-frontend/packages/ui/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/packages/ui/src/components/card.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const DEFAULT_COLORS = [
    '#3b82f6',
    '#10b981',
    '#f59e0b',
    '#ef4444',
    '#8b5cf6',
    '#06b6d4',
    '#84cc16',
    '#f97316',
    '#ec4899',
    '#6366f1'
];
function PieChart({ data, nameKey = 'name', valueKey = 'value', title, description, height = 300, showLegend = true, loading = false, className = '', colors = DEFAULT_COLORS, showLabel = false, labelKey = 'name' }) {
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: `${className}`,
            children: [
                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/PieChart.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/PieChart.tsx",
                            lineNumber: 60,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/PieChart.tsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center h-[300px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
                        }, void 0, false, {
                            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/PieChart.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/PieChart.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/PieChart.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/PieChart.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this);
    }
    if (!data || data.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: `${className}`,
            children: [
                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/PieChart.tsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/PieChart.tsx",
                            lineNumber: 78,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/PieChart.tsx",
                    lineNumber: 76,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center h-[300px] text-gray-500",
                        children: "Nenhum dado disponível"
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/PieChart.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/PieChart.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/PieChart.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this);
    }
    // Adicionar cores aos dados se não estiverem definidas
    const dataWithColors = data.map((item, index)=>({
            ...item,
            color: item.color || colors[index % colors.length]
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: `${className}`,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/PieChart.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/PieChart.tsx",
                        lineNumber: 101,
                        columnNumber: 27
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/PieChart.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: height,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PieChart"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pie"], {
                                data: dataWithColors,
                                cx: "50%",
                                cy: "50%",
                                labelLine: false,
                                label: showLabel ? ({ name, percent })=>`${name} ${(percent * 100).toFixed(0)}%` : false,
                                outerRadius: 80,
                                fill: "#8884d8",
                                dataKey: valueKey,
                                children: dataWithColors.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cell"], {
                                        fill: entry.color
                                    }, `cell-${index}`, false, {
                                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/PieChart.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/PieChart.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                contentStyle: {
                                    backgroundColor: 'white',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                },
                                formatter: (value, name)=>[
                                        value.toLocaleString('pt-BR'),
                                        name
                                    ]
                            }, void 0, false, {
                                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/PieChart.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this),
                            showLegend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Legend"], {
                                wrapperStyle: {
                                    paddingTop: '20px'
                                },
                                formatter: (value, entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: entry.color
                                        },
                                        children: value
                                    }, void 0, false, {
                                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/PieChart.tsx",
                                        lineNumber: 139,
                                        columnNumber: 19
                                    }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/PieChart.tsx",
                                lineNumber: 134,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/PieChart.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/PieChart.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/PieChart.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/PieChart.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
}),
"[project]/gestk-frontend/apps/client/src/components/charts/AreaChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AreaChart",
    ()=>AreaChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/chart/AreaChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/cartesian/Area.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/component/Legend.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/gestk-frontend/packages/ui/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/packages/ui/src/components/card.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function AreaChart({ data, areas, title, description, height = 300, showLegend = true, showGrid = true, loading = false, className = '', stacked = false }) {
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: `${className}`,
            children: [
                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/AreaChart.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/AreaChart.tsx",
                            lineNumber: 58,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/AreaChart.tsx",
                    lineNumber: 56,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center h-[300px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
                        }, void 0, false, {
                            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/AreaChart.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/AreaChart.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/AreaChart.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/AreaChart.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this);
    }
    if (!data || data.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: `${className}`,
            children: [
                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/AreaChart.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/AreaChart.tsx",
                            lineNumber: 76,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/AreaChart.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center h-[300px] text-gray-500",
                        children: "Nenhum dado disponível"
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/AreaChart.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/AreaChart.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/AreaChart.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: `${className}`,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/AreaChart.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/AreaChart.tsx",
                        lineNumber: 93,
                        columnNumber: 27
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/AreaChart.tsx",
                lineNumber: 91,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: height,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AreaChart"], {
                        data: data,
                        margin: {
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        },
                        stackOffset: stacked ? 'expand' : undefined,
                        children: [
                            showGrid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                strokeDasharray: "3 3",
                                stroke: "#f0f0f0"
                            }, void 0, false, {
                                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/AreaChart.tsx",
                                lineNumber: 108,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                dataKey: "name",
                                stroke: "#666",
                                fontSize: 12,
                                tickLine: false,
                                axisLine: false
                            }, void 0, false, {
                                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/AreaChart.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                stroke: "#666",
                                fontSize: 12,
                                tickLine: false,
                                axisLine: false
                            }, void 0, false, {
                                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/AreaChart.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                contentStyle: {
                                    backgroundColor: 'white',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/AreaChart.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            showLegend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Legend"], {
                                wrapperStyle: {
                                    paddingTop: '20px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/AreaChart.tsx",
                                lineNumber: 131,
                                columnNumber: 15
                            }, this),
                            areas.map((area, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Area"], {
                                    type: "monotone",
                                    dataKey: area.dataKey,
                                    stackId: stacked ? '1' : undefined,
                                    stroke: area.stroke,
                                    fill: area.fill,
                                    fillOpacity: 0.6,
                                    strokeWidth: area.strokeWidth || 2,
                                    name: area.name
                                }, area.dataKey, false, {
                                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/AreaChart.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/AreaChart.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/AreaChart.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/AreaChart.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/AreaChart.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
}),
"[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertasPerformance",
    ()=>AlertasPerformance,
    "ComparativoPeriodoChart",
    ()=>ComparativoPeriodoChart,
    "EficienciaVsProdutividadeChart",
    ()=>EficienciaVsProdutividadeChart,
    "HeatmapProdutividade",
    ()=>HeatmapProdutividade,
    "IndicadoresKPIs",
    ()=>IndicadoresKPIs,
    "TendenciaEvolucaoChart",
    ()=>TendenciaEvolucaoChart,
    "TopUsuariosChart",
    ()=>TopUsuariosChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/gestk-frontend/packages/ui/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/packages/ui/src/components/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/gestk-frontend/apps/client/src/components/charts/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$LineChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$BarChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$AreaChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/apps/client/src/components/charts/AreaChart.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function EficienciaVsProdutividadeChart({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: "Eficiência vs Produtividade"
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: "Relação entre eficiência e produtividade dos usuários"
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-80",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$AreaChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AreaChart"], {
                        data: data,
                        xKey: "eficiencia",
                        yKey: "produtividade",
                        height: 300,
                        color: "#8b5cf6",
                        showDots: true
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
function TendenciaEvolucaoChart({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: "Evolução de Tendências"
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: "Evolução da eficiência e produtividade ao longo do tempo"
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-80",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$LineChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineChart"], {
                        data: data,
                        xKey: "mes",
                        yKey: "eficiencia_media",
                        height: 300,
                        color: "#f59e0b",
                        showDots: true,
                        strokeWidth: 3
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
function ComparativoPeriodoChart({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: "Comparativo Período Anterior"
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: "Comparação entre período atual e anterior"
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-80",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$BarChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                        data: data,
                        xKey: "categoria",
                        yKey: "atual",
                        height: 300,
                        color: "#10b981",
                        showComparison: true,
                        comparisonKey: "anterior"
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
function TopUsuariosChart({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: "Top 5 Usuários Mais Produtivos"
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: "Ranking dos usuários com maior produtividade"
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-80",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$BarChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                        data: data.slice(0, 5),
                        xKey: "usuario",
                        yKey: "lancamentos",
                        height: 300,
                        color: "#3b82f6",
                        horizontal: true
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
function HeatmapProdutividade({ data }) {
    const getIntensity = (value, max)=>{
        return Math.min(value / max * 100, 100);
    };
    const maxProdutividade = Math.max(...data.map((d)=>d.produtividade));
    const maxEficiencia = Math.max(...data.map((d)=>d.eficiencia));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: "Heatmap de Produtividade"
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: "Visualização da produtividade por usuário (intensidade da cor)"
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
                    children: data.map((usuario, index)=>{
                        const produtividadeIntensity = getIntensity(usuario.produtividade, maxProdutividade);
                        const eficienciaIntensity = getIntensity(usuario.eficiencia, maxEficiencia);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 rounded-lg border-2 text-center",
                            style: {
                                backgroundColor: `rgba(59, 130, 246, ${produtividadeIntensity / 100})`,
                                borderColor: `rgba(16, 185, 129, ${eficienciaIntensity / 100})`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-medium text-sm",
                                    children: usuario.usuario
                                }, void 0, false, {
                                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                                    lineNumber: 168,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-600 mt-1",
                                    children: [
                                        "Prod: ",
                                        usuario.produtividade.toFixed(1)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                                    lineNumber: 169,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-600",
                                    children: [
                                        "Efic: ",
                                        usuario.eficiencia.toFixed(0),
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                                    lineNumber: 172,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, usuario.usuario, true, {
                            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                            lineNumber: 160,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
function IndicadoresKPIs({ totalUsuarios, eficienciaMedia, produtividadeMedia, horasTotais }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        className: "pb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-sm font-medium",
                            children: "Total de Usuários"
                        }, void 0, false, {
                            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold",
                                children: totalUsuarios
                            }, void 0, false, {
                                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-600",
                                children: "Usuários ativos"
                            }, void 0, false, {
                                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        className: "pb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-sm font-medium",
                            children: "Eficiência Média"
                        }, void 0, false, {
                            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold",
                                children: [
                                    eficienciaMedia.toFixed(1),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-600",
                                children: "Performance geral"
                            }, void 0, false, {
                                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        className: "pb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-sm font-medium",
                            children: "Produtividade Média"
                        }, void 0, false, {
                            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                            lineNumber: 219,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold",
                                children: produtividadeMedia.toFixed(1)
                            }, void 0, false, {
                                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-600",
                                children: "Lançamentos/hora"
                            }, void 0, false, {
                                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        className: "pb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-sm font-medium",
                            children: "Horas Totais"
                        }, void 0, false, {
                            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold",
                                children: [
                                    horasTotais.toFixed(0),
                                    "h"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-600",
                                children: "Tempo trabalhado"
                            }, void 0, false, {
                                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
        lineNumber: 196,
        columnNumber: 5
    }, this);
}
function AlertasPerformance({ data }) {
    const alertas = data.filter((usuario)=>usuario.eficiencia < 70 || usuario.produtividade < 10).map((usuario)=>({
            usuario: usuario.usuario,
            tipo: usuario.eficiencia < 70 ? 'Eficiência Baixa' : 'Produtividade Baixa',
            valor: usuario.eficiencia < 70 ? usuario.eficiencia : usuario.produtividade,
            cor: usuario.eficiencia < 70 ? 'text-red-600' : 'text-yellow-600'
        }));
    if (alertas.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "text-green-600",
                        children: "✅ Todos os Usuários em Boa Performance"
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 254,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: "Nenhum alerta de performance detectado"
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 255,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 253,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
            lineNumber: 252,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "text-orange-600",
                        children: "⚠️ Alertas de Performance"
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: "Usuários que precisam de atenção"
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: alertas.map((alerta, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center p-3 bg-gray-50 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-medium",
                                            children: alerta.usuario
                                        }, void 0, false, {
                                            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                                            lineNumber: 276,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600",
                                            children: alerta.tipo
                                        }, void 0, false, {
                                            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                                            lineNumber: 277,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                                    lineNumber: 275,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `font-bold ${alerta.cor}`,
                                    children: [
                                        alerta.valor.toFixed(1),
                                        alerta.tipo === 'Eficiência Baixa' ? '%' : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                                    lineNumber: 279,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                            lineNumber: 274,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                    lineNumber: 272,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx",
        lineNumber: 264,
        columnNumber: 5
    }, this);
}
}),
"[project]/gestk-frontend/apps/client/src/components/charts/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$LineChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$BarChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$PieChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/apps/client/src/components/charts/PieChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$AreaChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/apps/client/src/components/charts/AreaChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$StrategicCharts$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/apps/client/src/components/charts/StrategicCharts.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
}),
"[project]/gestk-frontend/apps/client/src/lib/mocks/gestao.mock.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockAtividadesUsuario",
    ()=>mockAtividadesUsuario,
    "mockCarteiraClientes",
    ()=>mockCarteiraClientes,
    "mockCategoriasClientes",
    ()=>mockCategoriasClientes,
    "mockEvolucaoMensal",
    ()=>mockEvolucaoMensal,
    "mockKPIEscritorio",
    ()=>mockKPIEscritorio,
    "mockProdutividadeUsuario",
    ()=>mockProdutividadeUsuario,
    "mockResultadoFinanceiro",
    ()=>mockResultadoFinanceiro,
    "mockUsuariosAtividade",
    ()=>mockUsuariosAtividade
]);
const mockCarteiraClientes = [
    {
        id: '1',
        razao_social: 'Empresa ABC Ltda',
        cnpj: '12.345.678/0001-90',
        regime_fiscal: 1,
        regime_fiscal_display: 'Simples Nacional',
        ramo_atividade: 3,
        ramo_atividade_display: 'Serviços',
        status_cliente: 'ativo',
        data_abertura: '2023-01-15',
        data_inicio_contrato: '2023-02-01',
        tempo_contrato_meses: 24,
        ultima_movimentacao: '2024-12-15'
    },
    {
        id: '2',
        razao_social: 'Comércio XYZ S/A',
        cnpj: '98.765.432/0001-10',
        regime_fiscal: 2,
        regime_fiscal_display: 'Lucro Presumido',
        ramo_atividade: 1,
        ramo_atividade_display: 'Comércio',
        status_cliente: 'novo',
        data_abertura: '2024-11-20',
        data_inicio_contrato: '2024-12-01',
        tempo_contrato_meses: 1,
        ultima_movimentacao: '2024-12-10'
    },
    {
        id: '3',
        razao_social: 'Indústria DEF Ltda',
        cnpj: '11.222.333/0001-44',
        regime_fiscal: 3,
        regime_fiscal_display: 'Lucro Real',
        ramo_atividade: 2,
        ramo_atividade_display: 'Indústria',
        status_cliente: 'inativo',
        data_abertura: '2022-06-10',
        data_inicio_contrato: '2022-07-01',
        tempo_contrato_meses: 30,
        ultima_movimentacao: '2024-10-15'
    },
    {
        id: '4',
        razao_social: 'Tecnologia GHI ME',
        cnpj: '55.666.777/0001-88',
        regime_fiscal: 4,
        regime_fiscal_display: 'MEI',
        ramo_atividade: 5,
        ramo_atividade_display: 'Tecnologia',
        status_cliente: 'sem_movimentacao',
        data_abertura: '2023-08-05',
        data_inicio_contrato: '2023-09-01',
        tempo_contrato_meses: 15,
        ultima_movimentacao: '2024-08-20'
    }
];
const mockCategoriasClientes = [
    {
        categoria: 'Ativos',
        quantidade: 45,
        percentual: 60.0,
        valor_total: 450000
    },
    {
        categoria: 'Inativos',
        quantidade: 15,
        percentual: 20.0,
        valor_total: 150000
    },
    {
        categoria: 'Novos',
        quantidade: 10,
        percentual: 13.3,
        valor_total: 100000
    },
    {
        categoria: 'Sem Movimentação',
        quantidade: 5,
        percentual: 6.7,
        valor_total: 50000
    }
];
const mockEvolucaoMensal = [
    {
        mes: '2024-01',
        total_clientes: 65,
        novos_clientes: 5,
        clientes_inativos: 2
    },
    {
        mes: '2024-02',
        total_clientes: 68,
        novos_clientes: 4,
        clientes_inativos: 1
    },
    {
        mes: '2024-03',
        total_clientes: 71,
        novos_clientes: 6,
        clientes_inativos: 3
    },
    {
        mes: '2024-04',
        total_clientes: 73,
        novos_clientes: 3,
        clientes_inativos: 1
    },
    {
        mes: '2024-05',
        total_clientes: 75,
        novos_clientes: 4,
        clientes_inativos: 2
    },
    {
        mes: '2024-06',
        total_clientes: 77,
        novos_clientes: 5,
        clientes_inativos: 3
    },
    {
        mes: '2024-07',
        total_clientes: 79,
        novos_clientes: 3,
        clientes_inativos: 1
    },
    {
        mes: '2024-08',
        total_clientes: 81,
        novos_clientes: 4,
        clientes_inativos: 2
    },
    {
        mes: '2024-09',
        total_clientes: 83,
        novos_clientes: 5,
        clientes_inativos: 3
    },
    {
        mes: '2024-10',
        total_clientes: 85,
        novos_clientes: 4,
        clientes_inativos: 2
    },
    {
        mes: '2024-11',
        total_clientes: 87,
        novos_clientes: 6,
        clientes_inativos: 4
    },
    {
        mes: '2024-12',
        total_clientes: 89,
        novos_clientes: 5,
        clientes_inativos: 3
    }
];
const mockUsuariosAtividade = [
    {
        id: '1',
        nome: 'João Silva',
        email: 'joao.silva@gestk.com',
        funcao: 'Contador Sênior',
        departamento: 'Contabilidade',
        ativo: true,
        ultimo_acesso: '2024-12-15T10:30:00Z',
        total_horas_mes: 160,
        atividades_mes: 45
    },
    {
        id: '2',
        nome: 'Maria Santos',
        email: 'maria.santos@gestk.com',
        funcao: 'Analista Fiscal',
        departamento: 'Fiscal',
        ativo: true,
        ultimo_acesso: '2024-12-15T09:15:00Z',
        total_horas_mes: 150,
        atividades_mes: 38
    },
    {
        id: '3',
        nome: 'Pedro Costa',
        email: 'pedro.costa@gestk.com',
        funcao: 'Assistente Contábil',
        departamento: 'Contabilidade',
        ativo: true,
        ultimo_acesso: '2024-12-14T16:45:00Z',
        total_horas_mes: 140,
        atividades_mes: 32
    },
    {
        id: '4',
        nome: 'Ana Oliveira',
        email: 'ana.oliveira@gestk.com',
        funcao: 'Gerente de Projetos',
        departamento: 'Gestão',
        ativo: false,
        ultimo_acesso: '2024-11-30T17:00:00Z',
        total_horas_mes: 0,
        atividades_mes: 0
    }
];
const mockAtividadesUsuario = [
    {
        id: '1',
        usuario_id: '1',
        data_atividade: '2024-12-15',
        sistema_modulo: 'Contabilidade',
        tempo_sessao_minutos: 45,
        empresa: 'Empresa ABC Ltda',
        descricao: 'Lançamento de lançamentos contábeis'
    },
    {
        id: '2',
        usuario_id: '1',
        data_atividade: '2024-12-15',
        sistema_modulo: 'Fiscal',
        tempo_sessao_minutos: 30,
        empresa: 'Comércio XYZ S/A',
        descricao: 'Emissão de notas fiscais'
    },
    {
        id: '3',
        usuario_id: '2',
        data_atividade: '2024-12-15',
        sistema_modulo: 'Fiscal',
        tempo_sessao_minutos: 60,
        empresa: 'Indústria DEF Ltda',
        descricao: 'Cálculo de impostos'
    }
];
const mockProdutividadeUsuario = [
    {
        usuario_id: '1',
        nome: 'João Silva',
        total_horas: 160,
        atividades_realizadas: 45,
        eficiencia: 85.5,
        periodo: '2024-12'
    },
    {
        usuario_id: '2',
        nome: 'Maria Santos',
        total_horas: 150,
        atividades_realizadas: 38,
        eficiencia: 78.2,
        periodo: '2024-12'
    },
    {
        usuario_id: '3',
        nome: 'Pedro Costa',
        total_horas: 140,
        atividades_realizadas: 32,
        eficiencia: 72.1,
        periodo: '2024-12'
    }
];
const mockKPIEscritorio = [
    {
        nome: 'Total de Clientes',
        valor: 89,
        variacao_percentual: 12.5,
        periodo_anterior: 79,
        meta: 100,
        unidade: 'clientes'
    },
    {
        nome: 'Receita Mensal',
        valor: 125000,
        variacao_percentual: 8.3,
        periodo_anterior: 115400,
        meta: 150000,
        unidade: 'R$'
    },
    {
        nome: 'Produtividade Média',
        valor: 78.5,
        variacao_percentual: 5.2,
        periodo_anterior: 74.6,
        meta: 80.0,
        unidade: '%'
    },
    {
        nome: 'Satisfação do Cliente',
        valor: 4.2,
        variacao_percentual: -2.3,
        periodo_anterior: 4.3,
        meta: 4.5,
        unidade: '/5.0'
    }
];
const mockResultadoFinanceiro = {
    receita_total: 1500000,
    despesas_total: 950000,
    lucro_liquido: 550000,
    margem_lucro: 36.7,
    periodo: '2024'
};
}),
"[project]/gestk-frontend/apps/client/src/lib/mocks/dashboards.mock.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockDashboardContabil",
    ()=>mockDashboardContabil,
    "mockDashboardDRE",
    ()=>mockDashboardDRE,
    "mockDashboardDemografico",
    ()=>mockDashboardDemografico,
    "mockDashboardFiscal",
    ()=>mockDashboardFiscal,
    "mockDashboardIndicadores",
    ()=>mockDashboardIndicadores
]);
const mockDashboardDemografico = {
    indicadores: {
        total_colaboradores: 45,
        turnover: 8.5,
        media_idade: 32.5,
        diversidade_genero: 65.2
    },
    evolucao_mensal: [
        {
            mes: '2024-01',
            total: 42,
            admissões: 3,
            demissões: 1
        },
        {
            mes: '2024-02',
            total: 44,
            admissões: 2,
            demissões: 0
        },
        {
            mes: '2024-03',
            total: 45,
            admissões: 2,
            demissões: 1
        },
        {
            mes: '2024-04',
            total: 46,
            admissões: 3,
            demissões: 2
        },
        {
            mes: '2024-05',
            total: 47,
            admissões: 2,
            demissões: 1
        },
        {
            mes: '2024-06',
            total: 48,
            admissões: 3,
            demissões: 2
        },
        {
            mes: '2024-07',
            total: 49,
            admissões: 2,
            demissões: 1
        },
        {
            mes: '2024-08',
            total: 50,
            admissões: 3,
            demissões: 2
        },
        {
            mes: '2024-09',
            total: 51,
            admissões: 2,
            demissões: 1
        },
        {
            mes: '2024-10',
            total: 52,
            admissões: 3,
            demissões: 2
        },
        {
            mes: '2024-11',
            total: 53,
            admissões: 2,
            demissões: 1
        },
        {
            mes: '2024-12',
            total: 54,
            admissões: 3,
            demissões: 2
        }
    ],
    distribuicao_idade: [
        {
            faixa: '18-25',
            quantidade: 8,
            percentual: 17.8
        },
        {
            faixa: '26-35',
            quantidade: 18,
            percentual: 40.0
        },
        {
            faixa: '36-45',
            quantidade: 12,
            percentual: 26.7
        },
        {
            faixa: '46-55',
            quantidade: 5,
            percentual: 11.1
        },
        {
            faixa: '56+',
            quantidade: 2,
            percentual: 4.4
        }
    ],
    distribuicao_escolaridade: [
        {
            nivel: 'Ensino Médio',
            quantidade: 15,
            percentual: 33.3
        },
        {
            nivel: 'Superior Incompleto',
            quantidade: 8,
            percentual: 17.8
        },
        {
            nivel: 'Superior Completo',
            quantidade: 18,
            percentual: 40.0
        },
        {
            nivel: 'Pós-graduação',
            quantidade: 4,
            percentual: 8.9
        }
    ],
    distribuicao_cargo: [
        {
            cargo: 'Contador',
            quantidade: 12,
            percentual: 26.7
        },
        {
            cargo: 'Analista',
            quantidade: 15,
            percentual: 33.3
        },
        {
            cargo: 'Assistente',
            quantidade: 10,
            percentual: 22.2
        },
        {
            cargo: 'Gerente',
            quantidade: 5,
            percentual: 11.1
        },
        {
            cargo: 'Diretor',
            quantidade: 3,
            percentual: 6.7
        }
    ],
    distribuicao_genero: [
        {
            genero: 'Feminino',
            quantidade: 29,
            percentual: 64.4
        },
        {
            genero: 'Masculino',
            quantidade: 16,
            percentual: 35.6
        }
    ]
};
const mockDashboardFiscal = {
    faturamento_total: 2500000,
    faturamento_anterior: 2200000,
    variacao_faturamento: 13.6,
    top_produtos: [
        {
            produto: 'Serviços Contábeis',
            valor: 800000,
            quantidade: 120,
            percentual: 32.0
        },
        {
            produto: 'Consultoria Fiscal',
            valor: 600000,
            quantidade: 80,
            percentual: 24.0
        },
        {
            produto: 'Auditoria',
            valor: 400000,
            quantidade: 25,
            percentual: 16.0
        },
        {
            produto: 'Planejamento Tributário',
            valor: 350000,
            quantidade: 45,
            percentual: 14.0
        },
        {
            produto: 'Outros',
            valor: 350000,
            quantidade: 60,
            percentual: 14.0
        }
    ],
    top_clientes: [
        {
            cliente: 'Empresa ABC Ltda',
            valor: 150000,
            percentual: 6.0
        },
        {
            cliente: 'Comércio XYZ S/A',
            valor: 120000,
            percentual: 4.8
        },
        {
            cliente: 'Indústria DEF Ltda',
            valor: 100000,
            percentual: 4.0
        },
        {
            cliente: 'Tecnologia GHI ME',
            valor: 80000,
            percentual: 3.2
        },
        {
            cliente: 'Outros',
            valor: 2050000,
            percentual: 82.0
        }
    ],
    top_fornecedores: [
        {
            fornecedor: 'Fornecedor A',
            valor: 300000,
            percentual: 12.0
        },
        {
            fornecedor: 'Fornecedor B',
            valor: 250000,
            percentual: 10.0
        },
        {
            fornecedor: 'Fornecedor C',
            valor: 200000,
            percentual: 8.0
        },
        {
            fornecedor: 'Outros',
            valor: 1750000,
            percentual: 70.0
        }
    ],
    geolocalizacao: [
        {
            uf: 'SP',
            valor: 1000000,
            quantidade: 35
        },
        {
            uf: 'RJ',
            valor: 600000,
            quantidade: 20
        },
        {
            uf: 'MG',
            valor: 400000,
            quantidade: 15
        },
        {
            uf: 'RS',
            valor: 300000,
            quantidade: 12
        },
        {
            uf: 'Outros',
            valor: 200000,
            quantidade: 8
        }
    ],
    impostos_devidos: [
        {
            tipo: 'ICMS',
            valor: 150000,
            percentual: 30.0
        },
        {
            tipo: 'IPI',
            valor: 100000,
            percentual: 20.0
        },
        {
            tipo: 'PIS',
            valor: 75000,
            percentual: 15.0
        },
        {
            tipo: 'COFINS',
            valor: 75000,
            percentual: 15.0
        },
        {
            tipo: 'IRPJ',
            valor: 50000,
            percentual: 10.0
        },
        {
            tipo: 'CSLL',
            valor: 50000,
            percentual: 10.0
        }
    ],
    evolucao_impostos: [
        {
            mes: '2024-01',
            imposto_devido: 45000,
            saldo_recuperar: 15000
        },
        {
            mes: '2024-02',
            imposto_devido: 48000,
            saldo_recuperar: 18000
        },
        {
            mes: '2024-03',
            imposto_devido: 52000,
            saldo_recuperar: 20000
        },
        {
            mes: '2024-04',
            imposto_devido: 50000,
            saldo_recuperar: 22000
        },
        {
            mes: '2024-05',
            imposto_devido: 55000,
            saldo_recuperar: 25000
        },
        {
            mes: '2024-06',
            imposto_devido: 58000,
            saldo_recuperar: 28000
        },
        {
            mes: '2024-07',
            imposto_devido: 60000,
            saldo_recuperar: 30000
        },
        {
            mes: '2024-08',
            imposto_devido: 62000,
            saldo_recuperar: 32000
        },
        {
            mes: '2024-09',
            imposto_devido: 65000,
            saldo_recuperar: 35000
        },
        {
            mes: '2024-10',
            imposto_devido: 68000,
            saldo_recuperar: 38000
        },
        {
            mes: '2024-11',
            imposto_devido: 70000,
            saldo_recuperar: 40000
        },
        {
            mes: '2024-12',
            imposto_devido: 75000,
            saldo_recuperar: 45000
        }
    ]
};
const mockDashboardContabil = {
    indicadores: {
        ativo_total: 5000000,
        passivo_total: 2000000,
        patrimonio_liquido: 3000000,
        receita_bruta: 2500000,
        lucro_liquido: 550000
    },
    evolucao_mensal: [
        {
            mes: '2024-01',
            receita: 180000,
            despesa: 120000,
            lucro: 60000
        },
        {
            mes: '2024-02',
            receita: 190000,
            despesa: 125000,
            lucro: 65000
        },
        {
            mes: '2024-03',
            receita: 200000,
            despesa: 130000,
            lucro: 70000
        },
        {
            mes: '2024-04',
            receita: 210000,
            despesa: 135000,
            lucro: 75000
        },
        {
            mes: '2024-05',
            receita: 220000,
            despesa: 140000,
            lucro: 80000
        },
        {
            mes: '2024-06',
            receita: 230000,
            despesa: 145000,
            lucro: 85000
        },
        {
            mes: '2024-07',
            receita: 240000,
            despesa: 150000,
            lucro: 90000
        },
        {
            mes: '2024-08',
            receita: 250000,
            despesa: 155000,
            lucro: 95000
        },
        {
            mes: '2024-09',
            receita: 260000,
            despesa: 160000,
            lucro: 100000
        },
        {
            mes: '2024-10',
            receita: 270000,
            despesa: 165000,
            lucro: 105000
        },
        {
            mes: '2024-11',
            receita: 280000,
            despesa: 170000,
            lucro: 110000
        },
        {
            mes: '2024-12',
            receita: 290000,
            despesa: 175000,
            lucro: 115000
        }
    ],
    grupos_contas: [
        {
            grupo: 'Ativo Circulante',
            valor: 2000000,
            percentual: 40.0
        },
        {
            grupo: 'Ativo Não Circulante',
            valor: 3000000,
            percentual: 60.0
        },
        {
            grupo: 'Passivo Circulante',
            valor: 1200000,
            percentual: 60.0
        },
        {
            grupo: 'Passivo Não Circulante',
            valor: 800000,
            percentual: 40.0
        },
        {
            grupo: 'Patrimônio Líquido',
            valor: 3000000,
            percentual: 100.0
        }
    ],
    top_contas: [
        {
            conta: 'Caixa e Equivalentes',
            valor: 500000,
            grupo: 'Ativo Circulante'
        },
        {
            conta: 'Contas a Receber',
            valor: 800000,
            grupo: 'Ativo Circulante'
        },
        {
            conta: 'Estoques',
            valor: 700000,
            grupo: 'Ativo Circulante'
        },
        {
            conta: 'Imobilizado',
            valor: 2500000,
            grupo: 'Ativo Não Circulante'
        },
        {
            conta: 'Fornecedores',
            valor: 600000,
            grupo: 'Passivo Circulante'
        }
    ]
};
const mockDashboardIndicadores = {
    financeiros: [
        {
            nome: 'Margem Bruta',
            valor: 45.2,
            meta: 40.0,
            status: 'positivo'
        },
        {
            nome: 'Margem Líquida',
            valor: 22.0,
            meta: 20.0,
            status: 'positivo'
        },
        {
            nome: 'ROE',
            valor: 18.3,
            meta: 15.0,
            status: 'positivo'
        },
        {
            nome: 'ROA',
            valor: 11.0,
            meta: 10.0,
            status: 'positivo'
        },
        {
            nome: 'Liquidez Corrente',
            valor: 1.8,
            meta: 1.5,
            status: 'positivo'
        }
    ],
    operacionais: [
        {
            nome: 'Produtividade',
            valor: 78.5,
            meta: 75.0,
            status: 'positivo'
        },
        {
            nome: 'Eficiência',
            valor: 82.3,
            meta: 80.0,
            status: 'positivo'
        },
        {
            nome: 'Satisfação Cliente',
            valor: 4.2,
            meta: 4.0,
            status: 'positivo'
        },
        {
            nome: 'Retenção Cliente',
            valor: 92.0,
            meta: 90.0,
            status: 'positivo'
        },
        {
            nome: 'Tempo Médio Atendimento',
            valor: 2.5,
            meta: 3.0,
            status: 'positivo'
        }
    ],
    patrimoniais: [
        {
            nome: 'Endividamento',
            valor: 40.0,
            meta: 50.0,
            status: 'positivo'
        },
        {
            nome: 'Composição Endividamento',
            valor: 60.0,
            meta: 70.0,
            status: 'positivo'
        },
        {
            nome: 'Rentabilidade Patrimônio',
            valor: 18.3,
            meta: 15.0,
            status: 'positivo'
        },
        {
            nome: 'Cobertura Juros',
            valor: 4.5,
            meta: 3.0,
            status: 'positivo'
        }
    ],
    tendencias: [
        {
            indicador: 'Receita',
            tendencia: 'crescimento',
            variacao: 12.5
        },
        {
            indicador: 'Lucro',
            tendencia: 'crescimento',
            variacao: 15.8
        },
        {
            indicador: 'Clientes',
            tendencia: 'crescimento',
            variacao: 8.3
        },
        {
            indicador: 'Produtividade',
            tendencia: 'crescimento',
            variacao: 5.2
        }
    ]
};
const mockDashboardDRE = {
    composicao: [
        {
            item: 'Receita Bruta',
            valor_atual: 2500000,
            valor_anterior: 2200000,
            variacao: 13.6,
            percentual_receita: 100.0
        },
        {
            item: '(-) Impostos sobre Vendas',
            valor_atual: 500000,
            valor_anterior: 440000,
            variacao: 13.6,
            percentual_receita: 20.0
        },
        {
            item: '= Receita Líquida',
            valor_atual: 2000000,
            valor_anterior: 1760000,
            variacao: 13.6,
            percentual_receita: 80.0
        },
        {
            item: '(-) Custo dos Produtos/Serviços',
            valor_atual: 800000,
            valor_anterior: 700000,
            variacao: 14.3,
            percentual_receita: 32.0
        },
        {
            item: '= Lucro Bruto',
            valor_atual: 1200000,
            valor_anterior: 1060000,
            variacao: 13.2,
            percentual_receita: 48.0
        },
        {
            item: '(-) Despesas Operacionais',
            valor_atual: 650000,
            valor_anterior: 580000,
            variacao: 12.1,
            percentual_receita: 26.0
        },
        {
            item: '= Lucro Operacional',
            valor_atual: 550000,
            valor_anterior: 480000,
            variacao: 14.6,
            percentual_receita: 22.0
        },
        {
            item: '(-) Despesas Financeiras',
            valor_atual: 50000,
            valor_anterior: 45000,
            variacao: 11.1,
            percentual_receita: 2.0
        },
        {
            item: '= Lucro Antes do IR',
            valor_atual: 500000,
            valor_anterior: 435000,
            variacao: 14.9,
            percentual_receita: 20.0
        },
        {
            item: '(-) Imposto de Renda',
            valor_atual: 75000,
            valor_anterior: 65000,
            variacao: 15.4,
            percentual_receita: 3.0
        },
        {
            item: '= Lucro Líquido',
            valor_atual: 425000,
            valor_anterior: 370000,
            variacao: 14.9,
            percentual_receita: 17.0
        }
    ],
    evolucao: [
        {
            mes: '2024-01',
            receita_bruta: 180000,
            receita_liquida: 144000,
            lucro_bruto: 86400,
            lucro_liquido: 30600
        },
        {
            mes: '2024-02',
            receita_bruta: 190000,
            receita_liquida: 152000,
            lucro_bruto: 91200,
            lucro_liquido: 32300
        },
        {
            mes: '2024-03',
            receita_bruta: 200000,
            receita_liquida: 160000,
            lucro_bruto: 96000,
            lucro_liquido: 34000
        },
        {
            mes: '2024-04',
            receita_bruta: 210000,
            receita_liquida: 168000,
            lucro_bruto: 100800,
            lucro_liquido: 35700
        },
        {
            mes: '2024-05',
            receita_bruta: 220000,
            receita_liquida: 176000,
            lucro_bruto: 105600,
            lucro_liquido: 37400
        },
        {
            mes: '2024-06',
            receita_bruta: 230000,
            receita_liquida: 184000,
            lucro_bruto: 110400,
            lucro_liquido: 39100
        },
        {
            mes: '2024-07',
            receita_bruta: 240000,
            receita_liquida: 192000,
            lucro_bruto: 115200,
            lucro_liquido: 40800
        },
        {
            mes: '2024-08',
            receita_bruta: 250000,
            receita_liquida: 200000,
            lucro_bruto: 120000,
            lucro_liquido: 42500
        },
        {
            mes: '2024-09',
            receita_bruta: 260000,
            receita_liquida: 208000,
            lucro_bruto: 124800,
            lucro_liquido: 44200
        },
        {
            mes: '2024-10',
            receita_bruta: 270000,
            receita_liquida: 216000,
            lucro_bruto: 129600,
            lucro_liquido: 45900
        },
        {
            mes: '2024-11',
            receita_bruta: 280000,
            receita_liquida: 224000,
            lucro_bruto: 134400,
            lucro_liquido: 47600
        },
        {
            mes: '2024-12',
            receita_bruta: 290000,
            receita_liquida: 232000,
            lucro_bruto: 139200,
            lucro_liquido: 49300
        }
    ],
    analise_vertical: [
        {
            item: 'Receita Bruta',
            percentual: 100.0
        },
        {
            item: 'Impostos sobre Vendas',
            percentual: 20.0
        },
        {
            item: 'Receita Líquida',
            percentual: 80.0
        },
        {
            item: 'Custo dos Produtos/Serviços',
            percentual: 32.0
        },
        {
            item: 'Lucro Bruto',
            percentual: 48.0
        },
        {
            item: 'Despesas Operacionais',
            percentual: 26.0
        },
        {
            item: 'Lucro Operacional',
            percentual: 22.0
        },
        {
            item: 'Despesas Financeiras',
            percentual: 2.0
        },
        {
            item: 'Lucro Antes do IR',
            percentual: 20.0
        },
        {
            item: 'Imposto de Renda',
            percentual: 3.0
        },
        {
            item: 'Lucro Líquido',
            percentual: 17.0
        }
    ],
    analise_horizontal: [
        {
            item: 'Receita Bruta',
            variacao_percentual: 13.6
        },
        {
            item: 'Impostos sobre Vendas',
            variacao_percentual: 13.6
        },
        {
            item: 'Receita Líquida',
            variacao_percentual: 13.6
        },
        {
            item: 'Custo dos Produtos/Serviços',
            variacao_percentual: 14.3
        },
        {
            item: 'Lucro Bruto',
            variacao_percentual: 13.2
        },
        {
            item: 'Despesas Operacionais',
            variacao_percentual: 12.1
        },
        {
            item: 'Lucro Operacional',
            variacao_percentual: 14.6
        },
        {
            item: 'Despesas Financeiras',
            variacao_percentual: 11.1
        },
        {
            item: 'Lucro Antes do IR',
            variacao_percentual: 14.9
        },
        {
            item: 'Imposto de Renda',
            variacao_percentual: 15.4
        },
        {
            item: 'Lucro Líquido',
            variacao_percentual: 14.9
        }
    ]
};
}),
"[project]/gestk-frontend/apps/client/src/lib/mocks/aniversarios.mock.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Dados mock para aniversários de parceria e sócios
__turbopack_context__.s([
    "mockAniversarioParceria",
    ()=>mockAniversarioParceria,
    "mockEmpresasRamoAtividade",
    ()=>mockEmpresasRamoAtividade,
    "mockEmpresasRegimeTributario",
    ()=>mockEmpresasRegimeTributario,
    "mockSociosAniversariantes",
    ()=>mockSociosAniversariantes
]);
const mockAniversarioParceria = [
    {
        id: '1',
        empresa: 'ALTO DA MANGABEIRA INCORPORACOES SPE LTD',
        cnpj: '57.811.207/0001-63',
        data_cadastro: '2024-10-22',
        anos_parceria: 0,
        data_inicio_atividades: '2024-10-22',
        anos_atividade: 0,
        status: 'ativo',
        valor_contrato: 2500,
        regime_fiscal: 'Lucro Real',
        ramo_atividade: 'Construção'
    },
    {
        id: '2',
        empresa: 'ANDRADE DISTRIBUIDORA LTDA',
        cnpj: '27.008.122/0002-61',
        data_cadastro: '2023-10-16',
        anos_parceria: 1,
        data_inicio_atividades: '2023-10-09',
        anos_atividade: 1,
        status: 'ativo',
        valor_contrato: 1800,
        regime_fiscal: 'Simples Nacional',
        ramo_atividade: 'Comércio'
    },
    {
        id: '3',
        empresa: 'ASP - CONSULTORIA, ARQUIVOLOGIA E CONTAB',
        cnpj: '07.036.370/0001-28',
        data_cadastro: '2018-09-30',
        anos_parceria: 6,
        data_inicio_atividades: '2004-10-14',
        anos_atividade: 20,
        status: 'ativo',
        valor_contrato: 3200,
        regime_fiscal: 'Lucro Presumido',
        ramo_atividade: 'Serviços'
    },
    {
        id: '4',
        empresa: 'TECH SOLUTIONS BRASIL LTDA',
        cnpj: '12.345.678/0001-90',
        data_cadastro: '2022-03-15',
        anos_parceria: 2,
        data_inicio_atividades: '2020-01-10',
        anos_atividade: 4,
        status: 'ativo',
        valor_contrato: 4500,
        regime_fiscal: 'Lucro Real',
        ramo_atividade: 'Tecnologia'
    },
    {
        id: '5',
        empresa: 'CONSTRUTORA VIDA NOVA S/A',
        cnpj: '98.765.432/0001-10',
        data_cadastro: '2020-11-20',
        anos_parceria: 4,
        data_inicio_atividades: '2018-05-15',
        anos_atividade: 6,
        status: 'ativo',
        valor_contrato: 6800,
        regime_fiscal: 'Lucro Real',
        ramo_atividade: 'Construção'
    },
    {
        id: '6',
        empresa: 'COMERCIAL SÃO PAULO LTDA',
        cnpj: '11.222.333/0001-44',
        data_cadastro: '2019-07-08',
        anos_parceria: 5,
        data_inicio_atividades: '2017-03-12',
        anos_atividade: 7,
        status: 'ativo',
        valor_contrato: 2200,
        regime_fiscal: 'Simples Nacional',
        ramo_atividade: 'Comércio'
    },
    {
        id: '7',
        empresa: 'INDUSTRIA MINEIRA LTDA',
        cnpj: '55.666.777/0001-88',
        data_cadastro: '2021-12-01',
        anos_parceria: 3,
        data_inicio_atividades: '2019-08-20',
        anos_atividade: 5,
        status: 'ativo',
        valor_contrato: 5200,
        regime_fiscal: 'Lucro Presumido',
        ramo_atividade: 'Indústria'
    },
    {
        id: '8',
        empresa: 'SERVIÇOS FINANCEIROS S/A',
        cnpj: '33.444.555/0001-66',
        data_cadastro: '2017-04-10',
        anos_parceria: 7,
        data_inicio_atividades: '2015-02-28',
        anos_atividade: 9,
        status: 'ativo',
        valor_contrato: 8500,
        regime_fiscal: 'Lucro Real',
        ramo_atividade: 'Serviços'
    }
];
const mockSociosAniversariantes = [
    {
        id: '1',
        nome: 'João Silva Santos',
        cpf: '123.456.789-00',
        data_nascimento: '1985-12-15',
        idade: 38,
        empresa: 'TECH SOLUTIONS BRASIL LTDA',
        cnpj: '12.345.678/0001-90',
        cargo: 'Sócio Administrador',
        telefone: '(11) 99999-1111',
        email: 'joao.silva@techsolutions.com.br',
        data_aniversario: '2024-12-15',
        dias_para_aniversario: 0
    },
    {
        id: '2',
        nome: 'Maria Oliveira Costa',
        cpf: '987.654.321-00',
        data_nascimento: '1990-12-20',
        idade: 33,
        empresa: 'CONSTRUTORA VIDA NOVA S/A',
        cnpj: '98.765.432/0001-10',
        cargo: 'Diretora Financeira',
        telefone: '(11) 99999-2222',
        email: 'maria.oliveira@vidanova.com.br',
        data_aniversario: '2024-12-20',
        dias_para_aniversario: 5
    },
    {
        id: '3',
        nome: 'Carlos Eduardo Pereira',
        cpf: '456.789.123-00',
        data_nascimento: '1988-12-25',
        idade: 35,
        empresa: 'COMERCIAL SÃO PAULO LTDA',
        cnpj: '11.222.333/0001-44',
        cargo: 'Sócio Proprietário',
        telefone: '(11) 99999-3333',
        email: 'carlos.pereira@comercialsp.com.br',
        data_aniversario: '2024-12-25',
        dias_para_aniversario: 10
    },
    {
        id: '4',
        nome: 'Ana Paula Rodrigues',
        cpf: '789.123.456-00',
        data_nascimento: '1992-01-05',
        idade: 32,
        empresa: 'INDUSTRIA MINEIRA LTDA',
        cnpj: '55.666.777/0001-88',
        cargo: 'Sócia Diretora',
        telefone: '(11) 99999-4444',
        email: 'ana.rodrigues@industriam.com.br',
        data_aniversario: '2025-01-05',
        dias_para_aniversario: 21
    },
    {
        id: '5',
        nome: 'Roberto Almeida Lima',
        cpf: '321.654.987-00',
        data_nascimento: '1983-01-10',
        idade: 41,
        empresa: 'SERVIÇOS FINANCEIROS S/A',
        cnpj: '33.444.555/0001-66',
        cargo: 'Presidente',
        telefone: '(11) 99999-5555',
        email: 'roberto.lima@servfin.com.br',
        data_aniversario: '2025-01-10',
        dias_para_aniversario: 26
    }
];
const mockEmpresasRegimeTributario = [
    {
        regime: 'Simples Nacional',
        quantidade: 345,
        percentual: 45.2,
        cor: '#fbbf24'
    },
    {
        regime: 'Lucro Presumido',
        quantidade: 198,
        percentual: 25.9,
        cor: '#60a5fa'
    },
    {
        regime: 'N/D',
        quantidade: 128,
        percentual: 16.8,
        cor: '#9ca3af'
    },
    {
        regime: 'Doméstica',
        quantidade: 48,
        percentual: 6.3,
        cor: '#34d399'
    },
    {
        regime: 'Lucro Real',
        quantidade: 42,
        percentual: 5.5,
        cor: '#f472b6'
    },
    {
        regime: 'Micro Empresa',
        quantidade: 20,
        percentual: 2.6,
        cor: '#fb7185'
    },
    {
        regime: 'Isenta de IRPJ',
        quantidade: 15,
        percentual: 2.0,
        cor: '#ef4444'
    },
    {
        regime: 'Regime Especial de Tributação',
        quantidade: 12,
        percentual: 1.6,
        cor: '#84cc16'
    },
    {
        regime: 'Imune do IRPJ',
        quantidade: 8,
        percentual: 1.0,
        cor: '#facc15'
    },
    {
        regime: 'MEI',
        quantidade: 5,
        percentual: 0.7,
        cor: '#06b6d4'
    }
];
const mockEmpresasRamoAtividade = [
    {
        ramo: 'Comércio',
        quantidade: 280,
        percentual: 36.7,
        cor: '#3b82f6'
    },
    {
        ramo: 'Educação e Saúde',
        quantidade: 195,
        percentual: 25.6,
        cor: '#10b981'
    },
    {
        ramo: 'Desconhecido',
        quantidade: 120,
        percentual: 15.7,
        cor: '#6b7280'
    },
    {
        ramo: 'Administração Pública e Serviços Diversos',
        quantidade: 85,
        percentual: 11.1,
        cor: '#8b5cf6'
    },
    {
        ramo: 'Serviços Profissionais',
        quantidade: 45,
        percentual: 5.9,
        cor: '#f59e0b'
    },
    {
        ramo: 'Serviços Domésticos',
        quantidade: 25,
        percentual: 3.3,
        cor: '#ef4444'
    },
    {
        ramo: 'Indústria',
        quantidade: 20,
        percentual: 2.6,
        cor: '#84cc16'
    },
    {
        ramo: 'Construção',
        quantidade: 15,
        percentual: 2.0,
        cor: '#f97316'
    }
];
}),
"[project]/gestk-frontend/apps/client/src/lib/mocks/custo-operacional.mock.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Dados mock para custo operacional e composição societária
__turbopack_context__.s([
    "mockComposicaoSocietaria",
    ()=>mockComposicaoSocietaria,
    "mockCustoOperacional",
    ()=>mockCustoOperacional,
    "mockCustoOperacionalAdicional",
    ()=>mockCustoOperacionalAdicional,
    "mockCustoOperacionalCompleto",
    ()=>mockCustoOperacionalCompleto
]);
const mockCustoOperacional = [
    {
        id: '1',
        empresa: '2WV CONSTRUCOES E REFORMAS LTDA',
        cnpj: '30.599.448/0001-34',
        data_cadastro: '2023-08-01',
        data_criacao: '2018-06-01',
        socio_responsavel: 'SEM RESPONSÁVEL',
        cpf_socio: '',
        regime_fiscal: 'Simples Nacional',
        ramo_atividade: 'Construção Civil',
        escritorio_contabilidade: 'ContabilPro',
        valor_hora: 24.90,
        total_custo_operacional: 67.35,
        total_rentabilidade: -67.35,
        total_faturamento: 0,
        total_tempo_sistema: '02:42:19',
        total_lancamentos: 0,
        total_nf_emitidas: 0,
        total_nf_movimentadas: 1,
        competencias: [
            {
                competencia: 'Jan/2025',
                faturamento_empresa: 0,
                variacao_faturamento: 0,
                tempo_gasto_sistema: '00:19:11',
                lancamentos: 0,
                percentual_lancamentos_manuais: 0,
                vinculos_folha_ativos: 0,
                total_nf_emitidas: 0,
                total_nf_movimentadas: 0,
                faturamento_escritorio: 0,
                custo_operacional: 7.96,
                rentabilidade_operacional: -7.96
            },
            {
                competencia: 'Fev/2025',
                faturamento_empresa: 0,
                variacao_faturamento: 0,
                tempo_gasto_sistema: '00:15:45',
                lancamentos: 0,
                percentual_lancamentos_manuais: 0,
                vinculos_folha_ativos: 0,
                total_nf_emitidas: 0,
                total_nf_movimentadas: 0,
                faturamento_escritorio: 0,
                custo_operacional: 6.54,
                rentabilidade_operacional: -6.54
            },
            {
                competencia: 'Mar/2025',
                faturamento_empresa: 0,
                variacao_faturamento: 0,
                tempo_gasto_sistema: '00:22:33',
                lancamentos: 0,
                percentual_lancamentos_manuais: 0,
                vinculos_folha_ativos: 0,
                total_nf_emitidas: 0,
                total_nf_movimentadas: 0,
                faturamento_escritorio: 0,
                custo_operacional: 8.12,
                rentabilidade_operacional: -8.12
            },
            {
                competencia: 'Abr/2025',
                faturamento_empresa: 0,
                variacao_faturamento: 0,
                tempo_gasto_sistema: '00:18:22',
                lancamentos: 0,
                percentual_lancamentos_manuais: 0,
                vinculos_folha_ativos: 0,
                total_nf_emitidas: 0,
                total_nf_movimentadas: 0,
                faturamento_escritorio: 0,
                custo_operacional: 6.89,
                rentabilidade_operacional: -6.89
            },
            {
                competencia: 'Mai/2025',
                faturamento_empresa: 0,
                variacao_faturamento: 0,
                tempo_gasto_sistema: '00:25:15',
                lancamentos: 0,
                percentual_lancamentos_manuais: 0,
                vinculos_folha_ativos: 0,
                total_nf_emitidas: 0,
                total_nf_movimentadas: 0,
                faturamento_escritorio: 0,
                custo_operacional: 9.45,
                rentabilidade_operacional: -9.45
            },
            {
                competencia: 'Jun/2025',
                faturamento_empresa: 0,
                variacao_faturamento: 0,
                tempo_gasto_sistema: '00:16:48',
                lancamentos: 0,
                percentual_lancamentos_manuais: 0,
                vinculos_folha_ativos: 0,
                total_nf_emitidas: 0,
                total_nf_movimentadas: 0,
                faturamento_escritorio: 0,
                custo_operacional: 7.23,
                rentabilidade_operacional: -7.23
            },
            {
                competencia: 'Jul/2025',
                faturamento_empresa: 0,
                variacao_faturamento: 0,
                tempo_gasto_sistema: '00:21:07',
                lancamentos: 0,
                percentual_lancamentos_manuais: 0,
                vinculos_folha_ativos: 0,
                total_nf_emitidas: 0,
                total_nf_movimentadas: 0,
                faturamento_escritorio: 0,
                custo_operacional: 8.67,
                rentabilidade_operacional: -8.67
            },
            {
                competencia: 'Ago/2025',
                faturamento_empresa: 0,
                variacao_faturamento: 0,
                tempo_gasto_sistema: '00:17:34',
                lancamentos: 0,
                percentual_lancamentos_manuais: 0,
                vinculos_folha_ativos: 0,
                total_nf_emitidas: 0,
                total_nf_movimentadas: 1,
                faturamento_escritorio: 0,
                custo_operacional: 6.98,
                rentabilidade_operacional: -6.98
            },
            {
                competencia: 'Set/2025',
                faturamento_empresa: 0,
                variacao_faturamento: 0,
                tempo_gasto_sistema: '00:19:44',
                lancamentos: 0,
                percentual_lancamentos_manuais: 0,
                vinculos_folha_ativos: 0,
                total_nf_emitidas: 0,
                total_nf_movimentadas: 0,
                faturamento_escritorio: 0,
                custo_operacional: 7.51,
                rentabilidade_operacional: -7.51
            }
        ]
    },
    {
        id: '2',
        empresa: '3D INDUSTRIA E COMERCIO DE CONFECCOES LT',
        cnpj: '12.434.748/0001-81',
        data_cadastro: '2022-01-01',
        data_criacao: '2010-08-19',
        socio_responsavel: 'DILENA MARQUES COLARES',
        cpf_socio: '301.325.253-72',
        regime_fiscal: 'Lucro Real',
        ramo_atividade: 'Indústria Têxtil',
        escritorio_contabilidade: 'ContabilPro',
        valor_hora: 24.90,
        total_custo_operacional: 1082.45,
        total_rentabilidade: 1586.62,
        total_faturamento: 2669066.27,
        total_tempo_sistema: '434:49:57',
        total_lancamentos: 3152,
        total_nf_emitidas: 1247,
        total_nf_movimentadas: 3152,
        competencias: [
            {
                competencia: 'Jan/2025',
                faturamento_empresa: 188604.90,
                variacao_faturamento: 0,
                tempo_gasto_sistema: '56:13:11',
                lancamentos: 346,
                percentual_lancamentos_manuais: 54.62,
                vinculos_folha_ativos: 12,
                total_nf_emitidas: 89,
                total_nf_movimentadas: 346,
                faturamento_escritorio: 2500,
                custo_operacional: 1400.25,
                rentabilidade_operacional: 1099.75
            },
            {
                competencia: 'Fev/2025',
                faturamento_empresa: 294514.15,
                variacao_faturamento: 56.15,
                tempo_gasto_sistema: '47:56:13',
                lancamentos: 335,
                percentual_lancamentos_manuais: 43.88,
                vinculos_folha_ativos: 12,
                total_nf_emitidas: 134,
                total_nf_movimentadas: 335,
                faturamento_escritorio: 2500,
                custo_operacional: 1194.50,
                rentabilidade_operacional: 1305.50
            },
            {
                competencia: 'Mar/2025',
                faturamento_empresa: 287123.45,
                variacao_faturamento: -2.57,
                tempo_gasto_sistema: '52:18:22',
                lancamentos: 379,
                percentual_lancamentos_manuais: 49.87,
                vinculos_folha_ativos: 12,
                total_nf_emitidas: 156,
                total_nf_movimentadas: 379,
                faturamento_escritorio: 2500,
                custo_operacional: 1302.75,
                rentabilidade_operacional: 1197.25
            },
            {
                competencia: 'Abr/2025',
                faturamento_empresa: 312456.78,
                variacao_faturamento: 8.82,
                tempo_gasto_sistema: '48:45:33',
                lancamentos: 342,
                percentual_lancamentos_manuais: 47.95,
                vinculos_folha_ativos: 12,
                total_nf_emitidas: 142,
                total_nf_movimentadas: 342,
                faturamento_escritorio: 2500,
                custo_operacional: 1214.30,
                rentabilidade_operacional: 1285.70
            },
            {
                competencia: 'Mai/2025',
                faturamento_empresa: 298765.43,
                variacao_faturamento: -4.38,
                tempo_gasto_sistema: '51:22:17',
                lancamentos: 365,
                percentual_lancamentos_manuais: 52.33,
                vinculos_folha_ativos: 12,
                total_nf_emitidas: 151,
                total_nf_movimentadas: 365,
                faturamento_escritorio: 2500,
                custo_operacional: 1278.90,
                rentabilidade_operacional: 1221.10
            },
            {
                competencia: 'Jun/2025',
                faturamento_empresa: 325678.90,
                variacao_faturamento: 9.00,
                tempo_gasto_sistema: '49:15:44',
                lancamentos: 358,
                percentual_lancamentos_manuais: 45.81,
                vinculos_folha_ativos: 12,
                total_nf_emitidas: 148,
                total_nf_movimentadas: 358,
                faturamento_escritorio: 2500,
                custo_operacional: 1226.55,
                rentabilidade_operacional: 1273.45
            },
            {
                competencia: 'Jul/2025',
                faturamento_empresa: 289123.67,
                variacao_faturamento: -11.22,
                tempo_gasto_sistema: '53:41:28',
                lancamentos: 371,
                percentual_lancamentos_manuais: 51.21,
                vinculos_folha_ativos: 12,
                total_nf_emitidas: 153,
                total_nf_movimentadas: 371,
                faturamento_escritorio: 2500,
                custo_operacional: 1337.20,
                rentabilidade_operacional: 1162.80
            },
            {
                competencia: 'Ago/2025',
                faturamento_empresa: 301456.12,
                variacao_faturamento: 4.26,
                tempo_gasto_sistema: '47:33:19',
                lancamentos: 339,
                percentual_lancamentos_manuais: 48.67,
                vinculos_folha_ativos: 12,
                total_nf_emitidas: 140,
                total_nf_movimentadas: 339,
                faturamento_escritorio: 2500,
                custo_operacional: 1184.75,
                rentabilidade_operacional: 1315.25
            },
            {
                competencia: 'Set/2025',
                faturamento_empresa: 316789.34,
                variacao_faturamento: 5.08,
                tempo_gasto_sistema: '50:08:52',
                lancamentos: 367,
                percentual_lancamentos_manuais: 46.32,
                vinculos_folha_ativos: 12,
                total_nf_emitidas: 152,
                total_nf_movimentadas: 367,
                faturamento_escritorio: 2500,
                custo_operacional: 1247.30,
                rentabilidade_operacional: 1252.70
            }
        ]
    }
];
const mockComposicaoSocietaria = {
    '12.434.748/0001-81': {
        empresa_principal: {
            razao_social: '3D INDUSTRIA E COMERCIO DE CONFECCOES LT',
            cnpj: '12.434.748/0001-81'
        },
        socios: [
            {
                id: '1',
                nome: 'ANTONIO EUDES ETELVINO COLARES',
                cpf: '230.657.023-04',
                participacao_percentual: 60,
                cargo: 'Sócio Administrador',
                outras_empresas: [
                    {
                        id: '1',
                        razao_social: 'DEBORAH',
                        cnpj: '08.277.107/0001-93',
                        participacao_percentual: 100,
                        cargo: 'Sócio Proprietário',
                        data_inicio: '2015-03-15',
                        status: 'ativa'
                    },
                    {
                        id: '2',
                        razao_social: 'COMERCIO VAREJISTA DAFNE AVIAMENTOS LTDA',
                        cnpj: '09.529.194/0001-91',
                        participacao_percentual: 75,
                        cargo: 'Sócio Administrador',
                        data_inicio: '2018-07-22',
                        status: 'ativa'
                    },
                    {
                        id: '3',
                        razao_social: 'DMC',
                        cnpj: '06.244.797/0001-59',
                        participacao_percentual: 50,
                        cargo: 'Sócio',
                        data_inicio: '2020-11-10',
                        status: 'ativa'
                    }
                ]
            },
            {
                id: '2',
                nome: 'DILENA MARQUES COLARES',
                cpf: '301.325.253-72',
                participacao_percentual: 40,
                cargo: 'Sócia Diretora',
                outras_empresas: [
                    {
                        id: '4',
                        razao_social: 'ED',
                        cnpj: '03.614.160/0001-19',
                        participacao_percentual: 100,
                        cargo: 'Sócia Proprietária',
                        data_inicio: '2012-05-08',
                        status: 'ativa'
                    },
                    {
                        id: '5',
                        razao_social: 'COMERCIO VAREJISTA MARQUES AVIAMENTOS',
                        cnpj: '06.203.885/0001-02',
                        participacao_percentual: 100,
                        cargo: 'Sócia Proprietária',
                        data_inicio: '2016-09-14',
                        status: 'ativa'
                    }
                ]
            }
        ]
    }
};
const mockCustoOperacionalAdicional = [
    {
        id: '3',
        empresa: 'TECH SOLUTIONS LTDA',
        cnpj: '12.345.678/0001-90',
        data_cadastro: '2023-01-15',
        data_criacao: '2020-03-10',
        socio_responsavel: 'João Silva',
        cpf_socio: '123.456.789-00',
        regime_fiscal: 'Lucro Presumido',
        ramo_atividade: 'Tecnologia',
        escritorio_contabilidade: 'ContabilTech',
        valor_hora: 24.90,
        total_custo_operacional: 2500.00,
        total_rentabilidade: 1500.00,
        total_faturamento: 50000.00,
        total_tempo_sistema: '100:30:45',
        total_lancamentos: 150,
        total_nf_emitidas: 25,
        total_nf_movimentadas: 150,
        competencias: [
            {
                competencia: 'Jan/2025',
                faturamento_empresa: 25000.00,
                variacao_faturamento: 15.5,
                tempo_gasto_sistema: '50:15:30',
                lancamentos: 75,
                percentual_lancamentos_manuais: 20.0,
                vinculos_folha_ativos: 5,
                total_nf_emitidas: 12,
                total_nf_movimentadas: 75,
                faturamento_escritorio: 2000.00,
                custo_operacional: 1250.00,
                rentabilidade_operacional: 750.00
            },
            {
                competencia: 'Fev/2025',
                faturamento_empresa: 25000.00,
                variacao_faturamento: 0.0,
                tempo_gasto_sistema: '50:15:15',
                lancamentos: 75,
                percentual_lancamentos_manuais: 15.0,
                vinculos_folha_ativos: 5,
                total_nf_emitidas: 13,
                total_nf_movimentadas: 75,
                faturamento_escritorio: 2000.00,
                custo_operacional: 1250.00,
                rentabilidade_operacional: 750.00
            }
        ]
    },
    {
        id: '4',
        empresa: 'COMERCIAL ABC LTDA',
        cnpj: '98.765.432/0001-10',
        data_cadastro: '2022-06-01',
        data_criacao: '2019-01-15',
        socio_responsavel: 'Maria Santos',
        cpf_socio: '987.654.321-00',
        regime_fiscal: 'Simples Nacional',
        ramo_atividade: 'Comércio',
        escritorio_contabilidade: 'FiscalMaster',
        valor_hora: 24.90,
        total_custo_operacional: 800.00,
        total_rentabilidade: 1200.00,
        total_faturamento: 30000.00,
        total_tempo_sistema: '32:10:20',
        total_lancamentos: 80,
        total_nf_emitidas: 15,
        total_nf_movimentadas: 80,
        competencias: [
            {
                competencia: 'Jan/2025',
                faturamento_empresa: 15000.00,
                variacao_faturamento: 8.2,
                tempo_gasto_sistema: '16:05:10',
                lancamentos: 40,
                percentual_lancamentos_manuais: 30.0,
                vinculos_folha_ativos: 3,
                total_nf_emitidas: 7,
                total_nf_movimentadas: 40,
                faturamento_escritorio: 1000.00,
                custo_operacional: 400.00,
                rentabilidade_operacional: 600.00
            },
            {
                competencia: 'Fev/2025',
                faturamento_empresa: 15000.00,
                variacao_faturamento: 0.0,
                tempo_gasto_sistema: '16:05:10',
                lancamentos: 40,
                percentual_lancamentos_manuais: 25.0,
                vinculos_folha_ativos: 3,
                total_nf_emitidas: 8,
                total_nf_movimentadas: 40,
                faturamento_escritorio: 1000.00,
                custo_operacional: 400.00,
                rentabilidade_operacional: 600.00
            }
        ]
    }
];
const mockCustoOperacionalCompleto = [
    ...mockCustoOperacional,
    ...mockCustoOperacionalAdicional
];
}),
"[project]/gestk-frontend/apps/client/src/lib/mocks/usuarios.mock.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Mock data para análise de usuários e atividades
__turbopack_context__.s([
    "mockAtividadesClientes",
    ()=>mockAtividadesClientes,
    "mockAtividadesModulo",
    ()=>mockAtividadesModulo,
    "mockAtividadesUsuarios",
    ()=>mockAtividadesUsuarios,
    "mockComparativoModulos",
    ()=>mockComparativoModulos,
    "mockDadosEstrategicos",
    ()=>mockDadosEstrategicos,
    "mockEvolucaoModulos",
    ()=>mockEvolucaoModulos,
    "mockResumoAtividades",
    ()=>mockResumoAtividades
]);
const mockAtividadesUsuarios = [
    // ANA LAIS
    {
        usuario: 'ANALAIS',
        competencia: '2025-01',
        horas_trabalhadas: '56:57:02',
        importacoes: 883,
        lancamentos: 255,
        lancamentos_manuais: 0,
        eficiencia: 85,
        produtividade: 4.5
    },
    {
        usuario: 'ANALAIS',
        competencia: '2025-02',
        horas_trabalhadas: '64:14:12',
        importacoes: 1098,
        lancamentos: 265,
        lancamentos_manuais: 0,
        eficiencia: 88,
        produtividade: 4.1
    },
    {
        usuario: 'ANALAIS',
        competencia: '2025-03',
        horas_trabalhadas: '52:26:55',
        importacoes: 971,
        lancamentos: 256,
        lancamentos_manuais: 0,
        eficiencia: 90,
        produtividade: 4.9
    },
    {
        usuario: 'ANALAIS',
        competencia: '2025-04',
        horas_trabalhadas: '48:32:18',
        importacoes: 892,
        lancamentos: 248,
        lancamentos_manuais: 0,
        eficiencia: 87,
        produtividade: 5.1
    },
    {
        usuario: 'ANALAIS',
        competencia: '2025-05',
        horas_trabalhadas: '61:15:44',
        importacoes: 1056,
        lancamentos: 272,
        lancamentos_manuais: 0,
        eficiencia: 89,
        produtividade: 4.4
    },
    {
        usuario: 'ANALAIS',
        competencia: '2025-06',
        horas_trabalhadas: '55:48:29',
        importacoes: 934,
        lancamentos: 261,
        lancamentos_manuais: 0,
        eficiencia: 86,
        produtividade: 4.7
    },
    {
        usuario: 'ANALAIS',
        competencia: '2025-07',
        horas_trabalhadas: '58:22:16',
        importacoes: 987,
        lancamentos: 259,
        lancamentos_manuais: 0,
        eficiencia: 88,
        produtividade: 4.4
    },
    {
        usuario: 'ANALAIS',
        competencia: '2025-08',
        horas_trabalhadas: '49:35:12',
        importacoes: 845,
        lancamentos: 234,
        lancamentos_manuais: 0,
        eficiencia: 84,
        produtividade: 4.7
    },
    {
        usuario: 'ANALAIS',
        competencia: '2025-09',
        horas_trabalhadas: '53:41:08',
        importacoes: 912,
        lancamentos: 247,
        lancamentos_manuais: 0,
        eficiencia: 87,
        produtividade: 4.6
    },
    // ALISSON
    {
        usuario: 'ALISSON',
        competencia: '2025-01',
        horas_trabalhadas: '175:22:52',
        importacoes: 10,
        lancamentos: 4477,
        lancamentos_manuais: 937,
        eficiencia: 92,
        produtividade: 25.5
    },
    {
        usuario: 'ALISSON',
        competencia: '2025-02',
        horas_trabalhadas: '136:21:46',
        importacoes: 11,
        lancamentos: 3725,
        lancamentos_manuais: 943,
        eficiencia: 89,
        produtividade: 27.3
    },
    {
        usuario: 'ALISSON',
        competencia: '2025-03',
        horas_trabalhadas: '123:05:53',
        importacoes: 13,
        lancamentos: 4626,
        lancamentos_manuais: 1367,
        eficiencia: 94,
        produtividade: 37.6
    },
    {
        usuario: 'ALISSON',
        competencia: '2025-04',
        horas_trabalhadas: '158:44:17',
        importacoes: 8,
        lancamentos: 3891,
        lancamentos_manuais: 892,
        eficiencia: 87,
        produtividade: 24.6
    },
    {
        usuario: 'ALISSON',
        competencia: '2025-05',
        horas_trabalhadas: '142:18:33',
        importacoes: 12,
        lancamentos: 4156,
        lancamentos_manuais: 1056,
        eficiencia: 90,
        produtividade: 29.2
    },
    {
        usuario: 'ALISSON',
        competencia: '2025-06',
        horas_trabalhadas: '167:29:41',
        importacoes: 9,
        lancamentos: 4321,
        lancamentos_manuais: 934,
        eficiencia: 88,
        produtividade: 25.8
    },
    {
        usuario: 'ALISSON',
        competencia: '2025-07',
        horas_trabalhadas: '151:12:55',
        importacoes: 14,
        lancamentos: 3987,
        lancamentos_manuais: 987,
        eficiencia: 91,
        produtividade: 26.4
    },
    {
        usuario: 'ALISSON',
        competencia: '2025-08',
        horas_trabalhadas: '134:56:22',
        importacoes: 7,
        lancamentos: 3654,
        lancamentos_manuais: 845,
        eficiencia: 85,
        produtividade: 27.1
    },
    {
        usuario: 'ALISSON',
        competencia: '2025-09',
        horas_trabalhadas: '148:33:47',
        importacoes: 11,
        lancamentos: 4102,
        lancamentos_manuais: 912,
        eficiencia: 89,
        produtividade: 27.6
    },
    // FABIO1
    {
        usuario: 'FABIO1',
        competencia: '2025-01',
        horas_trabalhadas: '29:03:23',
        importacoes: 678,
        lancamentos: 345,
        lancamentos_manuais: 0,
        eficiencia: 78,
        produtividade: 11.9
    },
    {
        usuario: 'FABIO1',
        competencia: '2025-02',
        horas_trabalhadas: '23:39:20',
        importacoes: 652,
        lancamentos: 334,
        lancamentos_manuais: 0,
        eficiencia: 82,
        produtividade: 14.2
    },
    {
        usuario: 'FABIO1',
        competencia: '2025-03',
        horas_trabalhadas: '35:20:25',
        importacoes: 595,
        lancamentos: 345,
        lancamentos_manuais: 0,
        eficiencia: 85,
        produtividade: 9.8
    },
    {
        usuario: 'FABIO1',
        competencia: '2025-04',
        horas_trabalhadas: '31:47:12',
        importacoes: 712,
        lancamentos: 328,
        lancamentos_manuais: 0,
        eficiencia: 80,
        produtividade: 10.4
    },
    {
        usuario: 'FABIO1',
        competencia: '2025-05',
        horas_trabalhadas: '27:15:38',
        importacoes: 634,
        lancamentos: 312,
        lancamentos_manuais: 0,
        eficiencia: 83,
        produtividade: 11.5
    },
    {
        usuario: 'FABIO1',
        competencia: '2025-06',
        horas_trabalhadas: '33:52:44',
        importacoes: 689,
        lancamentos: 339,
        lancamentos_manuais: 0,
        eficiencia: 81,
        produtividade: 10.1
    },
    {
        usuario: 'FABIO1',
        competencia: '2025-07',
        horas_trabalhadas: '28:41:17',
        importacoes: 645,
        lancamentos: 325,
        lancamentos_manuais: 0,
        eficiencia: 84,
        produtividade: 11.3
    },
    {
        usuario: 'FABIO1',
        competencia: '2025-08',
        horas_trabalhadas: '32:18:56',
        importacoes: 701,
        lancamentos: 347,
        lancamentos_manuais: 0,
        eficiencia: 79,
        produtividade: 10.8
    },
    {
        usuario: 'FABIO1',
        competencia: '2025-09',
        horas_trabalhadas: '30:24:33',
        importacoes: 667,
        lancamentos: 331,
        lancamentos_manuais: 0,
        eficiencia: 82,
        produtividade: 10.9
    },
    // GERENTE
    {
        usuario: 'GERENTE',
        competencia: '2025-01',
        horas_trabalhadas: '03:01:41',
        importacoes: 0,
        lancamentos: 4679,
        lancamentos_manuais: 4679,
        eficiencia: 95,
        produtividade: 1559.7
    },
    {
        usuario: 'GERENTE',
        competencia: '2025-02',
        horas_trabalhadas: '05:43:31',
        importacoes: 0,
        lancamentos: 4045,
        lancamentos_manuais: 4045,
        eficiencia: 92,
        produtividade: 704.3
    },
    {
        usuario: 'GERENTE',
        competencia: '2025-03',
        horas_trabalhadas: '13:55:20',
        importacoes: 0,
        lancamentos: 3961,
        lancamentos_manuais: 3961,
        eficiencia: 88,
        produtividade: 283.6
    },
    {
        usuario: 'GERENTE',
        competencia: '2025-04',
        horas_trabalhadas: '08:22:15',
        importacoes: 0,
        lancamentos: 4234,
        lancamentos_manuais: 4234,
        eficiencia: 90,
        produtividade: 512.1
    },
    {
        usuario: 'GERENTE',
        competencia: '2025-05',
        horas_trabalhadas: '11:48:42',
        importacoes: 0,
        lancamentos: 3892,
        lancamentos_manuais: 3892,
        eficiencia: 87,
        produtividade: 330.8
    },
    {
        usuario: 'GERENTE',
        competencia: '2025-06',
        horas_trabalhadas: '07:15:33',
        importacoes: 0,
        lancamentos: 4156,
        lancamentos_manuais: 4156,
        eficiencia: 91,
        produtividade: 570.1
    },
    {
        usuario: 'GERENTE',
        competencia: '2025-07',
        horas_trabalhadas: '09:37:28',
        importacoes: 0,
        lancamentos: 4023,
        lancamentos_manuais: 4023,
        eficiencia: 89,
        produtividade: 430.2
    },
    {
        usuario: 'GERENTE',
        competencia: '2025-08',
        horas_trabalhadas: '06:44:19',
        importacoes: 0,
        lancamentos: 3789,
        lancamentos_manuais: 3789,
        eficiencia: 86,
        produtividade: 563.4
    },
    {
        usuario: 'GERENTE',
        competencia: '2025-09',
        horas_trabalhadas: '10:26:51',
        importacoes: 0,
        lancamentos: 4107,
        lancamentos_manuais: 4107,
        eficiencia: 88,
        produtividade: 393.2
    },
    // LUCAS
    {
        usuario: 'LUCAS',
        competencia: '2025-01',
        horas_trabalhadas: '126:20:28',
        importacoes: 1809,
        lancamentos: 318,
        lancamentos_manuais: 0,
        eficiencia: 83,
        produtividade: 2.5
    },
    {
        usuario: 'LUCAS',
        competencia: '2025-02',
        horas_trabalhadas: '107:02:10',
        importacoes: 1586,
        lancamentos: 236,
        lancamentos_manuais: 0,
        eficiencia: 85,
        produtividade: 2.2
    },
    {
        usuario: 'LUCAS',
        competencia: '2025-03',
        horas_trabalhadas: '100:32:36',
        importacoes: 1928,
        lancamentos: 219,
        lancamentos_manuais: 0,
        eficiencia: 88,
        produtividade: 2.2
    },
    {
        usuario: 'LUCAS',
        competencia: '2025-04',
        horas_trabalhadas: '118:47:52',
        importacoes: 1654,
        lancamentos: 285,
        lancamentos_manuais: 0,
        eficiencia: 81,
        produtividade: 2.4
    },
    {
        usuario: 'LUCAS',
        competencia: '2025-05',
        horas_trabalhadas: '112:33:18',
        importacoes: 1732,
        lancamentos: 267,
        lancamentos_manuais: 0,
        eficiencia: 84,
        produtividade: 2.4
    },
    {
        usuario: 'LUCAS',
        competencia: '2025-06',
        horas_trabalhadas: '125:19:44',
        importacoes: 1891,
        lancamentos: 301,
        lancamentos_manuais: 0,
        eficiencia: 82,
        produtividade: 2.4
    },
    {
        usuario: 'LUCAS',
        competencia: '2025-07',
        horas_trabalhadas: '109:56:27',
        importacoes: 1765,
        lancamentos: 278,
        lancamentos_manuais: 0,
        eficiencia: 86,
        produtividade: 2.5
    },
    {
        usuario: 'LUCAS',
        competencia: '2025-08',
        horas_trabalhadas: '103:41:15',
        importacoes: 1623,
        lancamentos: 254,
        lancamentos_manuais: 0,
        eficiencia: 84,
        produtividade: 2.5
    },
    {
        usuario: 'LUCAS',
        competencia: '2025-09',
        horas_trabalhadas: '116:28:39',
        importacoes: 1857,
        lancamentos: 292,
        lancamentos_manuais: 0,
        eficiencia: 85,
        produtividade: 2.5
    },
    // CARLA
    {
        usuario: 'CARLA',
        competencia: '2025-01',
        horas_trabalhadas: '151:04:55',
        importacoes: 6931,
        lancamentos: 425,
        lancamentos_manuais: 0,
        eficiencia: 91,
        produtividade: 2.8
    },
    {
        usuario: 'CARLA',
        competencia: '2025-02',
        horas_trabalhadas: '120:47:22',
        importacoes: 6506,
        lancamentos: 268,
        lancamentos_manuais: 0,
        eficiencia: 89,
        produtividade: 2.2
    },
    {
        usuario: 'CARLA',
        competencia: '2025-03',
        horas_trabalhadas: '118:21:23',
        importacoes: 7898,
        lancamentos: 266,
        lancamentos_manuais: 0,
        eficiencia: 93,
        produtividade: 2.2
    },
    {
        usuario: 'CARLA',
        competencia: '2025-04',
        horas_trabalhadas: '135:18:47',
        importacoes: 7124,
        lancamentos: 389,
        lancamentos_manuais: 0,
        eficiencia: 87,
        produtividade: 2.9
    },
    {
        usuario: 'CARLA',
        competencia: '2025-05',
        horas_trabalhadas: '142:33:12',
        importacoes: 6756,
        lancamentos: 412,
        lancamentos_manuais: 0,
        eficiencia: 90,
        produtividade: 2.9
    },
    {
        usuario: 'CARLA',
        competencia: '2025-06',
        horas_trabalhadas: '128:56:38',
        importacoes: 7234,
        lancamentos: 356,
        lancamentos_manuais: 0,
        eficiencia: 88,
        produtividade: 2.8
    },
    {
        usuario: 'CARLA',
        competencia: '2025-07',
        horas_trabalhadas: '139:41:25',
        importacoes: 6987,
        lancamentos: 378,
        lancamentos_manuais: 0,
        eficiencia: 89,
        produtividade: 2.7
    },
    {
        usuario: 'CARLA',
        competencia: '2025-08',
        horas_trabalhadas: '124:17:53',
        importacoes: 6543,
        lancamentos: 334,
        lancamentos_manuais: 0,
        eficiencia: 86,
        produtividade: 2.7
    },
    {
        usuario: 'CARLA',
        competencia: '2025-09',
        horas_trabalhadas: '131:42:16',
        importacoes: 7123,
        lancamentos: 367,
        lancamentos_manuais: 0,
        eficiencia: 88,
        produtividade: 2.8
    },
    // SAMYLE
    {
        usuario: 'SAMYLE',
        competencia: '2025-01',
        horas_trabalhadas: '88:01:11',
        importacoes: 1,
        lancamentos: 14900,
        lancamentos_manuais: 1218,
        eficiencia: 96,
        produtividade: 169.3
    },
    {
        usuario: 'SAMYLE',
        competencia: '2025-02',
        horas_trabalhadas: '89:40:27',
        importacoes: 2,
        lancamentos: 13012,
        lancamentos_manuais: 1997,
        eficiencia: 94,
        produtividade: 145.2
    },
    {
        usuario: 'SAMYLE',
        competencia: '2025-03',
        horas_trabalhadas: '66:35:51',
        importacoes: 0,
        lancamentos: 11188,
        lancamentos_manuais: 593,
        eficiencia: 98,
        produtividade: 168.4
    },
    {
        usuario: 'SAMYLE',
        competencia: '2025-04',
        horas_trabalhadas: '92:18:44',
        importacoes: 1,
        lancamentos: 13456,
        lancamentos_manuais: 1456,
        eficiencia: 95,
        produtividade: 146.0
    },
    {
        usuario: 'SAMYLE',
        competencia: '2025-05',
        horas_trabalhadas: '85:27:33',
        importacoes: 0,
        lancamentos: 12834,
        lancamentos_manuais: 1234,
        eficiencia: 97,
        produtividade: 150.4
    },
    {
        usuario: 'SAMYLE',
        competencia: '2025-06',
        horas_trabalhadas: '78:52:19',
        importacoes: 2,
        lancamentos: 12167,
        lancamentos_manuais: 987,
        eficiencia: 96,
        produtividade: 154.8
    },
    {
        usuario: 'SAMYLE',
        competencia: '2025-07',
        horas_trabalhadas: '81:15:42',
        importacoes: 1,
        lancamentos: 12543,
        lancamentos_manuais: 1123,
        eficiencia: 95,
        produtividade: 154.6
    },
    {
        usuario: 'SAMYLE',
        competencia: '2025-08',
        horas_trabalhadas: '74:38:56',
        importacoes: 0,
        lancamentos: 11892,
        lancamentos_manuais: 856,
        eficiencia: 97,
        produtividade: 159.2
    },
    {
        usuario: 'SAMYLE',
        competencia: '2025-09',
        horas_trabalhadas: '76:24:17',
        importacoes: 1,
        lancamentos: 12234,
        lancamentos_manuais: 1023,
        eficiencia: 96,
        produtividade: 160.1
    }
];
const mockAtividadesClientes = [
    // NEW CARDIO MEDICAL
    {
        id: 2,
        razao_social: 'NEW CARDIO MEDICAL COMERCIO DE PRODUTOS',
        competencia: '2025-01',
        horas_trabalhadas: '28:51:16',
        importacoes: 350,
        lancamentos: 687,
        lancamentos_manuais: 252,
        valor_hora: 24.90,
        custo_total: 718.34,
        rentabilidade: 1256.66
    },
    {
        id: 2,
        razao_social: 'NEW CARDIO MEDICAL COMERCIO DE PRODUTOS',
        competencia: '2025-02',
        horas_trabalhadas: '76:09:59',
        importacoes: 317,
        lancamentos: 690,
        lancamentos_manuais: 277,
        valor_hora: 24.90,
        custo_total: 1896.48,
        rentabilidade: 123.52
    },
    {
        id: 2,
        razao_social: 'NEW CARDIO MEDICAL COMERCIO DE PRODUTOS',
        competencia: '2025-03',
        horas_trabalhadas: '212:30:57',
        importacoes: 343,
        lancamentos: 892,
        lancamentos_manuais: 198,
        valor_hora: 24.90,
        custo_total: 5291.26,
        rentabilidade: -892.26
    },
    // EMPRESA JUNIOR DA FEAACS
    {
        id: 6,
        razao_social: 'EMPRESA JUNIOR DA FEAACS',
        competencia: '2025-01',
        horas_trabalhadas: '00:08:40',
        importacoes: 0,
        lancamentos: 0,
        lancamentos_manuais: 0,
        valor_hora: 24.90,
        custo_total: 3.61,
        rentabilidade: 196.39
    },
    {
        id: 6,
        razao_social: 'EMPRESA JUNIOR DA FEAACS',
        competencia: '2025-02',
        horas_trabalhadas: '00:52:12',
        importacoes: 1,
        lancamentos: 3,
        lancamentos_manuais: 0,
        valor_hora: 24.90,
        custo_total: 21.66,
        rentabilidade: 178.34
    },
    {
        id: 6,
        razao_social: 'EMPRESA JUNIOR DA FEAACS',
        competencia: '2025-03',
        horas_trabalhadas: '00:29:08',
        importacoes: 1,
        lancamentos: 2,
        lancamentos_manuais: 0,
        valor_hora: 24.90,
        custo_total: 12.10,
        rentabilidade: 187.90
    },
    // DIMEDICAL COMERCIO E REPRESENTACAO
    {
        id: 16,
        razao_social: 'DIMEDICAL COMERCIO E REPRESENTACAO DE MA',
        competencia: '2025-01',
        horas_trabalhadas: '01:41:18',
        importacoes: 59,
        lancamentos: 1,
        lancamentos_manuais: 0,
        valor_hora: 24.90,
        custo_total: 42.12,
        rentabilidade: 157.88
    },
    {
        id: 16,
        razao_social: 'DIMEDICAL COMERCIO E REPRESENTACAO DE MA',
        competencia: '2025-02',
        horas_trabalhadas: '03:03:14',
        importacoes: 56,
        lancamentos: 0,
        lancamentos_manuais: 0,
        valor_hora: 24.90,
        custo_total: 76.30,
        rentabilidade: 123.70
    },
    {
        id: 16,
        razao_social: 'DIMEDICAL COMERCIO E REPRESENTACAO DE MA',
        competencia: '2025-03',
        horas_trabalhadas: '02:24:38',
        importacoes: 38,
        lancamentos: 1,
        lancamentos_manuais: 0,
        valor_hora: 24.90,
        custo_total: 60.00,
        rentabilidade: 140.00
    },
    // FRANCISCO SAULO COSTA OLIVEIRA
    {
        id: 17,
        razao_social: 'FRANCISCO SAULO COSTA OLIVEIRA',
        competencia: '2025-01',
        horas_trabalhadas: '12:34:56',
        importacoes: 45,
        lancamentos: 123,
        lancamentos_manuais: 12,
        valor_hora: 24.90,
        custo_total: 312.45,
        rentabilidade: 87.55
    },
    {
        id: 17,
        razao_social: 'FRANCISCO SAULO COSTA OLIVEIRA',
        competencia: '2025-02',
        horas_trabalhadas: '-20:-7:-21',
        importacoes: 0,
        lancamentos: 0,
        lancamentos_manuais: 0,
        valor_hora: 24.90,
        custo_total: -500.00,
        rentabilidade: 500.00
    },
    {
        id: 17,
        razao_social: 'FRANCISCO SAULO COSTA OLIVEIRA',
        competencia: '2025-03',
        horas_trabalhadas: '08:15:30',
        importacoes: 23,
        lancamentos: 67,
        lancamentos_manuais: 5,
        valor_hora: 24.90,
        custo_total: 205.50,
        rentabilidade: 194.50
    },
    // Adicionando mais clientes para demonstração
    {
        id: 3,
        razao_social: 'TECH SOLUTIONS LTDA',
        competencia: '2025-01',
        horas_trabalhadas: '45:30:15',
        importacoes: 234,
        lancamentos: 456,
        lancamentos_manuais: 89,
        valor_hora: 24.90,
        custo_total: 1133.25,
        rentabilidade: 866.75
    },
    {
        id: 3,
        razao_social: 'TECH SOLUTIONS LTDA',
        competencia: '2025-02',
        horas_trabalhadas: '52:18:42',
        importacoes: 267,
        lancamentos: 523,
        lancamentos_manuais: 95,
        valor_hora: 24.90,
        custo_total: 1302.90,
        rentabilidade: 697.10
    },
    {
        id: 3,
        razao_social: 'TECH SOLUTIONS LTDA',
        competencia: '2025-03',
        horas_trabalhadas: '38:45:33',
        importacoes: 198,
        lancamentos: 389,
        lancamentos_manuais: 67,
        valor_hora: 24.90,
        custo_total: 964.50,
        rentabilidade: 1035.50
    },
    {
        id: 4,
        razao_social: 'COMERCIAL ABC LTDA',
        competencia: '2025-01',
        horas_trabalhadas: '67:22:18',
        importacoes: 456,
        lancamentos: 789,
        lancamentos_manuais: 123,
        valor_hora: 24.90,
        custo_total: 1677.90,
        rentabilidade: 322.10
    },
    {
        id: 4,
        razao_social: 'COMERCIAL ABC LTDA',
        competencia: '2025-02',
        horas_trabalhadas: '71:15:44',
        importacoes: 489,
        lancamentos: 823,
        lancamentos_manuais: 134,
        valor_hora: 24.90,
        custo_total: 1774.20,
        rentabilidade: 225.80
    },
    {
        id: 4,
        razao_social: 'COMERCIAL ABC LTDA',
        competencia: '2025-03',
        horas_trabalhadas: '59:33:27',
        importacoes: 412,
        lancamentos: 756,
        lancamentos_manuais: 98,
        valor_hora: 24.90,
        custo_total: 1482.30,
        rentabilidade: 517.70
    }
];
const mockResumoAtividades = {
    total_atividades: 111392,
    total_importacoes: 486085,
    total_lancamentos: 643069,
    total_lancamentos_manuais: 187155,
    total_horas_ativas: 27928,
    periodo: {
        inicio: '2025-01-01',
        fim: '2025-09-30'
    }
};
const mockDadosEstrategicos = {
    // Evolução mensal de atividades
    evolucaoAtividades: [
        {
            mes: 'jan/2025',
            atividades: 3319
        },
        {
            mes: 'fev/2025',
            atividades: 3200
        },
        {
            mes: 'mar/2025',
            atividades: 2698
        },
        {
            mes: 'abr/2025',
            atividades: 3404
        },
        {
            mes: 'mai/2025',
            atividades: 3183
        },
        {
            mes: 'jun/2025',
            atividades: 2911
        },
        {
            mes: 'jul/2025',
            atividades: 3300
        },
        {
            mes: 'ago/2025',
            atividades: 2753
        },
        {
            mes: 'set/2025',
            atividades: 3161
        }
    ],
    // Top 5 usuários mais produtivos
    topUsuariosProdutivos: [
        {
            usuario: 'SAMYLE',
            lancamentos: 111188,
            produtividade: 168.4
        },
        {
            usuario: 'ALISSON',
            lancamentos: 4626,
            produtividade: 37.6
        },
        {
            usuario: 'GERENTE',
            lancamentos: 3961,
            produtividade: 283.6
        },
        {
            usuario: 'CARLA',
            lancamentos: 266,
            produtividade: 2.2
        },
        {
            usuario: 'LUCAS',
            lancamentos: 219,
            produtividade: 2.2
        }
    ],
    // Distribuição de eficiência
    distribuicaoEficiencia: [
        {
            faixa: '90-100%',
            usuarios: 3,
            percentual: 18.75
        },
        {
            faixa: '80-89%',
            usuarios: 8,
            percentual: 50.0
        },
        {
            faixa: '70-79%',
            usuarios: 4,
            percentual: 25.0
        },
        {
            faixa: '60-69%',
            usuarios: 1,
            percentual: 6.25
        }
    ],
    // Análise de tendências por usuário
    tendenciasUsuarios: [
        {
            usuario: 'SAMYLE',
            tendencia: 'Crescimento',
            variacao: 12.5
        },
        {
            usuario: 'ALISSON',
            tendencia: 'Estável',
            variacao: 2.1
        },
        {
            usuario: 'CARLA',
            tendencia: 'Crescimento',
            variacao: 8.7
        },
        {
            usuario: 'LUCAS',
            tendencia: 'Declínio',
            variacao: -5.3
        },
        {
            usuario: 'FABIO1',
            tendencia: 'Estável',
            variacao: 1.8
        }
    ]
};
const mockAtividadesModulo = [
    {
        modulo: 'Escrita Fiscal',
        jan_2025: 1145,
        fev_2025: 1051,
        mar_2025: 974,
        abr_2025: 1185,
        mai_2025: 1077,
        jun_2025: 991,
        jul_2025: 1164,
        ago_2025: 966,
        set_2025: 1092,
        total_hours: 9644
    },
    {
        modulo: 'Folha de Pagamento',
        jan_2025: 1175,
        fev_2025: 1171,
        mar_2025: 876,
        abr_2025: 1071,
        mai_2025: 999,
        jun_2025: 932,
        jul_2025: 1000,
        ago_2025: 885,
        set_2025: 990,
        total_hours: 9099
    },
    {
        modulo: 'Contabil',
        jan_2025: 945,
        fev_2025: 994,
        mar_2025: 798,
        abr_2025: 1092,
        mai_2025: 1053,
        jun_2025: 961,
        jul_2025: 1073,
        ago_2025: 847,
        set_2025: 990,
        total_hours: 8754
    },
    {
        modulo: 'Honorários',
        jan_2025: 61,
        fev_2025: 45,
        mar_2025: 40,
        abr_2025: 40,
        mai_2025: 40,
        jun_2025: 43,
        jul_2025: 48,
        ago_2025: 50,
        set_2025: 77,
        total_hours: 443
    },
    {
        modulo: 'Patrimônio',
        jan_2025: 9,
        fev_2025: 10,
        mar_2025: 4,
        abr_2025: 11,
        mai_2025: 11,
        jun_2025: 7,
        jul_2025: 4,
        ago_2025: 4,
        set_2025: 11,
        total_hours: 70
    },
    {
        modulo: 'Lalur',
        jan_2025: 8,
        fev_2025: 1,
        mar_2025: 6,
        abr_2025: 6,
        mai_2025: 3,
        jun_2025: 0,
        jul_2025: 8,
        ago_2025: 1,
        set_2025: 1,
        total_hours: 33
    },
    {
        modulo: 'Atualizar',
        jan_2025: 0,
        fev_2025: 0,
        mar_2025: 0,
        abr_2025: 0,
        mai_2025: 0,
        jun_2025: 0,
        jul_2025: 2,
        ago_2025: 0,
        set_2025: 0,
        total_hours: 2
    },
    {
        modulo: 'Protocolos',
        jan_2025: 0,
        fev_2025: 0,
        mar_2025: 0,
        abr_2025: 0,
        mai_2025: 0,
        jun_2025: 0,
        jul_2025: 1,
        ago_2025: 0,
        set_2025: 0,
        total_hours: 2
    },
    {
        modulo: 'Registro',
        jan_2025: 0,
        fev_2025: 0,
        mar_2025: 0,
        abr_2025: 0,
        mai_2025: 0,
        jun_2025: 0,
        jul_2025: 0,
        ago_2025: 0,
        set_2025: 0,
        total_hours: 0
    },
    {
        modulo: 'Auditoria',
        jan_2025: 0,
        fev_2025: 0,
        mar_2025: 0,
        abr_2025: 0,
        mai_2025: 0,
        jun_2025: 0,
        jul_2025: 0,
        ago_2025: 0,
        set_2025: 0,
        total_hours: 0
    }
];
const mockComparativoModulos = [
    {
        modulo: 'Escrita Fiscal',
        total_hours: 9644,
        cor: '#3B82F6'
    },
    {
        modulo: 'Folha de Pagamento',
        total_hours: 9099,
        cor: '#10B981'
    },
    {
        modulo: 'Contabil',
        total_hours: 8754,
        cor: '#F59E0B'
    },
    {
        modulo: 'Honorários',
        total_hours: 443,
        cor: '#EF4444'
    },
    {
        modulo: 'Patrimônio',
        total_hours: 70,
        cor: '#8B5CF6'
    },
    {
        modulo: 'Lalur',
        total_hours: 33,
        cor: '#06B6D4'
    },
    {
        modulo: 'Atualizar',
        total_hours: 2,
        cor: '#84CC16'
    },
    {
        modulo: 'Protocolos',
        total_hours: 2,
        cor: '#F97316'
    }
];
const mockEvolucaoModulos = [
    {
        mes: 'Jan/2025',
        'Escrita Fiscal': 1145,
        'Folha de Pagamento': 1175,
        'Contabil': 945,
        'Honorários': 61,
        'Patrimônio': 9,
        'Lalur': 8,
        'Atualizar': 0,
        'Protocolos': 0
    },
    {
        mes: 'Fev/2025',
        'Escrita Fiscal': 1051,
        'Folha de Pagamento': 1171,
        'Contabil': 994,
        'Honorários': 45,
        'Patrimônio': 10,
        'Lalur': 1,
        'Atualizar': 0,
        'Protocolos': 0
    },
    {
        mes: 'Mar/2025',
        'Escrita Fiscal': 974,
        'Folha de Pagamento': 876,
        'Contabil': 798,
        'Honorários': 40,
        'Patrimônio': 4,
        'Lalur': 6,
        'Atualizar': 0,
        'Protocolos': 0
    },
    {
        mes: 'Abr/2025',
        'Escrita Fiscal': 1185,
        'Folha de Pagamento': 1071,
        'Contabil': 1092,
        'Honorários': 40,
        'Patrimônio': 11,
        'Lalur': 6,
        'Atualizar': 0,
        'Protocolos': 0
    },
    {
        mes: 'Mai/2025',
        'Escrita Fiscal': 1077,
        'Folha de Pagamento': 999,
        'Contabil': 1053,
        'Honorários': 40,
        'Patrimônio': 11,
        'Lalur': 3,
        'Atualizar': 0,
        'Protocolos': 0
    },
    {
        mes: 'Jun/2025',
        'Escrita Fiscal': 991,
        'Folha de Pagamento': 932,
        'Contabil': 961,
        'Honorários': 43,
        'Patrimônio': 7,
        'Lalur': 0,
        'Atualizar': 0,
        'Protocolos': 0
    },
    {
        mes: 'Jul/2025',
        'Escrita Fiscal': 1164,
        'Folha de Pagamento': 1000,
        'Contabil': 1073,
        'Honorários': 48,
        'Patrimônio': 4,
        'Lalur': 8,
        'Atualizar': 2,
        'Protocolos': 1
    },
    {
        mes: 'Ago/2025',
        'Escrita Fiscal': 966,
        'Folha de Pagamento': 885,
        'Contabil': 847,
        'Honorários': 50,
        'Patrimônio': 4,
        'Lalur': 1,
        'Atualizar': 0,
        'Protocolos': 0
    },
    {
        mes: 'Set/2025',
        'Escrita Fiscal': 1092,
        'Folha de Pagamento': 990,
        'Contabil': 990,
        'Honorários': 77,
        'Patrimônio': 11,
        'Lalur': 1,
        'Atualizar': 0,
        'Protocolos': 0
    }
];
}),
"[project]/gestk-frontend/apps/client/src/lib/mocks/escritorio.mock.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Dados mock para Análise do Escritório baseados na planilha do software legado
__turbopack_context__.s([
    "mockAnaliseEscritorioMensal",
    ()=>mockAnaliseEscritorioMensal,
    "mockEvolucaoClientes",
    ()=>mockEvolucaoClientes,
    "mockEvolucaoRentabilidade",
    ()=>mockEvolucaoRentabilidade,
    "mockFaturamentoVsCustos",
    ()=>mockFaturamentoVsCustos,
    "mockKPIsEscritorio",
    ()=>mockKPIsEscritorio,
    "mockTendencias",
    ()=>mockTendencias
]);
const mockAnaliseEscritorioMensal = [
    {
        mes: 'Jan/2024',
        quantidade_clientes: 553,
        faturamento_escritorio: 5000.00,
        variacao_faturamento: 0.00,
        tempo_ativo_sistema: '3106:14:30',
        lancamentos: 0,
        percentual_lancamentos_manuais: 0,
        vinculos_folhas_ativos: 10,
        notas_fiscais_emitidas: 0,
        total_notas_fiscais_movimentadas: 0,
        custo_operacional: 63677.95,
        rentabilidade_operacional: -63677.95
    },
    {
        mes: 'Fev/2024',
        quantidade_clientes: 561,
        faturamento_escritorio: 10000.00,
        variacao_faturamento: 100.00,
        tempo_ativo_sistema: '3097:57:02',
        lancamentos: 0,
        percentual_lancamentos_manuais: 0,
        vinculos_folhas_ativos: 11,
        notas_fiscais_emitidas: 3,
        total_notas_fiscais_movimentadas: 3,
        custo_operacional: 63677.95,
        rentabilidade_operacional: -53677.95
    },
    {
        mes: 'Mar/2024',
        quantidade_clientes: 568,
        faturamento_escritorio: 5000.00,
        variacao_faturamento: -50.00,
        tempo_ativo_sistema: '3097:57:02',
        lancamentos: 0,
        percentual_lancamentos_manuais: 0,
        vinculos_folhas_ativos: 12,
        notas_fiscais_emitidas: 1,
        total_notas_fiscais_movimentadas: 1,
        custo_operacional: 63677.95,
        rentabilidade_operacional: -58677.95
    },
    {
        mes: 'Abr/2024',
        quantidade_clientes: 575,
        faturamento_escritorio: 5000.00,
        variacao_faturamento: 0.00,
        tempo_ativo_sistema: '3097:57:02',
        lancamentos: 0,
        percentual_lancamentos_manuais: 0,
        vinculos_folhas_ativos: 13,
        notas_fiscais_emitidas: 2,
        total_notas_fiscais_movimentadas: 4,
        custo_operacional: 63677.95,
        rentabilidade_operacional: -58677.95
    },
    {
        mes: 'Mai/2024',
        quantidade_clientes: 582,
        faturamento_escritorio: 5000.00,
        variacao_faturamento: 0.00,
        tempo_ativo_sistema: '3097:57:02',
        lancamentos: 0,
        percentual_lancamentos_manuais: 0,
        vinculos_folhas_ativos: 12,
        notas_fiscais_emitidas: 0,
        total_notas_fiscais_movimentadas: 0,
        custo_operacional: 63677.95,
        rentabilidade_operacional: -58677.95
    },
    {
        mes: 'Jun/2024',
        quantidade_clientes: 589,
        faturamento_escritorio: 5000.00,
        variacao_faturamento: 0.00,
        tempo_ativo_sistema: '3097:57:02',
        lancamentos: 0,
        percentual_lancamentos_manuais: 0,
        vinculos_folhas_ativos: 11,
        notas_fiscais_emitidas: 0,
        total_notas_fiscais_movimentadas: 0,
        custo_operacional: 63677.95,
        rentabilidade_operacional: -58677.95
    },
    {
        mes: 'Jul/2024',
        quantidade_clientes: 596,
        faturamento_escritorio: 20000.00,
        variacao_faturamento: 300.00,
        tempo_ativo_sistema: '3097:57:02',
        lancamentos: 0,
        percentual_lancamentos_manuais: 0,
        vinculos_folhas_ativos: 12,
        notas_fiscais_emitidas: 0,
        total_notas_fiscais_movimentadas: 0,
        custo_operacional: 63507.99,
        rentabilidade_operacional: -43507.99
    },
    {
        mes: 'Ago/2024',
        quantidade_clientes: 603,
        faturamento_escritorio: 5000.00,
        variacao_faturamento: -75.00,
        tempo_ativo_sistema: '3097:57:02',
        lancamentos: 0,
        percentual_lancamentos_manuais: 0,
        vinculos_folhas_ativos: 13,
        notas_fiscais_emitidas: 0,
        total_notas_fiscais_movimentadas: 0,
        custo_operacional: 63677.95,
        rentabilidade_operacional: -58677.95
    },
    {
        mes: 'Set/2024',
        quantidade_clientes: 610,
        faturamento_escritorio: 5000.00,
        variacao_faturamento: 0.00,
        tempo_ativo_sistema: '3097:57:02',
        lancamentos: 0,
        percentual_lancamentos_manuais: 0,
        vinculos_folhas_ativos: 12,
        notas_fiscais_emitidas: 0,
        total_notas_fiscais_movimentadas: 0,
        custo_operacional: 63677.95,
        rentabilidade_operacional: -58677.95
    },
    {
        mes: 'Out/2024',
        quantidade_clientes: 617,
        faturamento_escritorio: 5000.00,
        variacao_faturamento: 0.00,
        tempo_ativo_sistema: '3097:57:02',
        lancamentos: 0,
        percentual_lancamentos_manuais: 0,
        vinculos_folhas_ativos: 11,
        notas_fiscais_emitidas: 0,
        total_notas_fiscais_movimentadas: 0,
        custo_operacional: 63677.95,
        rentabilidade_operacional: -58677.95
    },
    {
        mes: 'Nov/2024',
        quantidade_clientes: 624,
        faturamento_escritorio: 5000.00,
        variacao_faturamento: 0.00,
        tempo_ativo_sistema: '3097:57:02',
        lancamentos: 0,
        percentual_lancamentos_manuais: 0,
        vinculos_folhas_ativos: 12,
        notas_fiscais_emitidas: 0,
        total_notas_fiscais_movimentadas: 0,
        custo_operacional: 63677.95,
        rentabilidade_operacional: -58677.95
    },
    {
        mes: 'Dez/2024',
        quantidade_clientes: 631,
        faturamento_escritorio: 5000.00,
        variacao_faturamento: 0.00,
        tempo_ativo_sistema: '3097:57:02',
        lancamentos: 0,
        percentual_lancamentos_manuais: 0,
        vinculos_folhas_ativos: 13,
        notas_fiscais_emitidas: 0,
        total_notas_fiscais_movimentadas: 0,
        custo_operacional: 63677.95,
        rentabilidade_operacional: -58677.95
    }
];
const mockEvolucaoRentabilidade = mockAnaliseEscritorioMensal.map((item)=>({
        mes: item.mes,
        rentabilidade: item.rentabilidade_operacional,
        faturamento: item.faturamento_escritorio,
        custo_operacional: item.custo_operacional
    }));
const mockEvolucaoClientes = mockAnaliseEscritorioMensal.map((item)=>({
        mes: item.mes,
        clientes: item.quantidade_clientes,
        novos_clientes: item.quantidade_clientes - (mockAnaliseEscritorioMensal[mockAnaliseEscritorioMensal.indexOf(item) - 1]?.quantidade_clientes || 0)
    }));
const mockFaturamentoVsCustos = mockAnaliseEscritorioMensal.map((item)=>({
        mes: item.mes,
        faturamento: item.faturamento_escritorio,
        custo_operacional: item.custo_operacional,
        margem: item.faturamento_escritorio - item.custo_operacional
    }));
const mockKPIsEscritorio = [
    {
        titulo: 'Total de Clientes',
        valor: 631,
        variacao: 14.1,
        tendencia: 'up',
        cor: 'text-blue-600',
        icone: 'users',
        descricao: 'Crescimento de 14.1% no ano'
    },
    {
        titulo: 'Faturamento Anual',
        valor: 75408.00,
        variacao: 175.62,
        tendencia: 'up',
        cor: 'text-green-600',
        icone: 'dollar-sign',
        descricao: 'Crescimento de 175.62% no ano'
    },
    {
        titulo: 'Rentabilidade Média',
        valor: -54822.57,
        variacao: -13.8,
        tendencia: 'down',
        cor: 'text-red-600',
        icone: 'trending-down',
        descricao: 'Prejuízo médio mensal'
    },
    {
        titulo: 'Custo por Cliente',
        valor: 1162.25,
        variacao: -2.1,
        tendencia: 'up',
        cor: 'text-orange-600',
        icone: 'calculator',
        descricao: 'Custo operacional médio por cliente'
    },
    {
        titulo: 'Tempo Ativo Total',
        valor: 35769.42,
        variacao: 0,
        tendencia: 'stable',
        cor: 'text-purple-600',
        icone: 'clock',
        descricao: 'Horas totais no sistema (HH:MM)'
    },
    {
        titulo: 'Notas Fiscais Emitidas',
        valor: 15,
        variacao: 0,
        tendencia: 'stable',
        cor: 'text-indigo-600',
        icone: 'file-text',
        descricao: 'Total de notas emitidas no ano'
    }
];
const mockTendencias = {
    crescimento_clientes: {
        periodo: 'Últimos 12 meses',
        taxa: 14.1,
        tendencia: 'crescimento_consistente'
    },
    faturamento: {
        periodo: 'Últimos 12 meses',
        variacao: 175.62,
        tendencia: 'crescimento_irregular',
        pico: 'Jul/2024',
        pico_valor: 20000.00
    },
    rentabilidade: {
        periodo: 'Últimos 12 meses',
        tendencia: 'prejuizo_constante',
        melhor_mes: 'Jul/2024',
        melhor_valor: -43507.99
    }
};
}),
"[project]/gestk-frontend/apps/client/src/lib/mocks/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$lib$2f$mocks$2f$gestao$2e$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/apps/client/src/lib/mocks/gestao.mock.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$lib$2f$mocks$2f$dashboards$2e$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/apps/client/src/lib/mocks/dashboards.mock.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$lib$2f$mocks$2f$aniversarios$2e$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/apps/client/src/lib/mocks/aniversarios.mock.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$lib$2f$mocks$2f$custo$2d$operacional$2e$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/apps/client/src/lib/mocks/custo-operacional.mock.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$lib$2f$mocks$2f$usuarios$2e$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/apps/client/src/lib/mocks/usuarios.mock.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$lib$2f$mocks$2f$escritorio$2e$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/apps/client/src/lib/mocks/escritorio.mock.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/gestk-frontend/packages/ui/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/packages/ui/src/components/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/gestk-frontend/apps/client/src/components/charts/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$LineChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/apps/client/src/components/charts/LineChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$BarChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/apps/client/src/components/charts/BarChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$PieChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/apps/client/src/components/charts/PieChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$lib$2f$mocks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/gestk-frontend/apps/client/src/lib/mocks/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$lib$2f$mocks$2f$gestao$2e$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/apps/client/src/lib/mocks/gestao.mock.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/lucide-react/dist/esm/icons/user-check.js [app-ssr] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
'use client';
;
;
;
;
;
function DashboardPage() {
    // Preparar dados para gráficos
    const dadosEvolucao = __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$lib$2f$mocks$2f$gestao$2e$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockEvolucaoMensal"].map((item)=>({
            name: item.mes,
            'Total Clientes': item.total_clientes,
            'Novos Clientes': item.novos_clientes,
            'Clientes Inativos': item.clientes_inativos
        }));
    const dadosCategorias = __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$lib$2f$mocks$2f$gestao$2e$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockCategoriasClientes"].map((item)=>({
            name: item.categoria,
            value: item.quantidade,
            color: item.categoria === 'Ativos' ? '#10b981' : item.categoria === 'Inativos' ? '#ef4444' : item.categoria === 'Novos' ? '#3b82f6' : '#f59e0b'
        }));
    const dadosProdutividade = __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$lib$2f$mocks$2f$gestao$2e$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockProdutividadeUsuario"].map((usuario)=>({
            name: usuario.nome.split(' ')[0],
            'Horas Trabalhadas': usuario.total_horas,
            'Atividades': usuario.atividades_realizadas
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-gray-900",
                        children: "Dashboard GESTK"
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mt-1",
                        children: "Visão geral do sistema de gestão contábil"
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "hover:shadow-lg transition-shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-sm font-medium text-gray-600 flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this),
                                        "Total de Clientes"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold text-gray-900",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$lib$2f$mocks$2f$gestao$2e$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockCarteiraClientes"].length
                                    }, void 0, false, {
                                        fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-500",
                                        children: "Carteira ativa"
                                    }, void 0, false, {
                                        fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "hover:shadow-lg transition-shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-sm font-medium text-gray-600 flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this),
                                        "Usuários Ativos"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold text-gray-900",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$lib$2f$mocks$2f$gestao$2e$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockUsuariosAtividade"].filter((u)=>u.ativo).length
                                    }, void 0, false, {
                                        fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-500",
                                        children: "Colaboradores online"
                                    }, void 0, false, {
                                        fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "hover:shadow-lg transition-shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-sm font-medium text-gray-600 flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        "Crescimento"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold text-green-600",
                                        children: "+12.5%"
                                    }, void 0, false, {
                                        fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-500",
                                        children: "vs mês anterior"
                                    }, void 0, false, {
                                        fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "hover:shadow-lg transition-shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-sm font-medium text-gray-600 flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this),
                                        "Receita Mensal"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold text-gray-900",
                                        children: "R$ 125.000"
                                    }, void 0, false, {
                                        fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-500",
                                        children: "Dezembro 2024"
                                    }, void 0, false, {
                                        fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$LineChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineChart"], {
                        data: dadosEvolucao,
                        lines: [
                            {
                                dataKey: 'Total Clientes',
                                stroke: '#3b82f6',
                                name: 'Total Clientes'
                            },
                            {
                                dataKey: 'Novos Clientes',
                                stroke: '#10b981',
                                name: 'Novos Clientes'
                            },
                            {
                                dataKey: 'Clientes Inativos',
                                stroke: '#ef4444',
                                name: 'Clientes Inativos'
                            }
                        ],
                        title: "Evolução da Carteira",
                        description: "Crescimento mensal de clientes",
                        height: 350
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$PieChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PieChart"], {
                        data: dadosCategorias,
                        title: "Distribuição por Status",
                        description: "Proporção de clientes por categoria",
                        height: 350,
                        showLabel: true
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$BarChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                        data: dadosProdutividade,
                        bars: [
                            {
                                dataKey: 'Horas Trabalhadas',
                                fill: '#3b82f6',
                                name: 'Horas Trabalhadas'
                            },
                            {
                                dataKey: 'Atividades',
                                fill: '#10b981',
                                name: 'Atividades'
                            }
                        ],
                        title: "Produtividade dos Usuários",
                        description: "Horas trabalhadas e atividades realizadas",
                        height: 350
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        children: "KPIs do Escritório"
                                    }, void 0, false, {
                                        fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        children: "Principais indicadores de performance"
                                    }, void 0, false, {
                                        fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$apps$2f$client$2f$src$2f$lib$2f$mocks$2f$gestao$2e$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockKPIEscritorio"].map((kpi, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-medium text-gray-900",
                                                            children: kpi.nome
                                                        }, void 0, false, {
                                                            fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-gray-500",
                                                            children: kpi.unidade
                                                        }, void 0, false, {
                                                            fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-lg font-bold text-gray-900",
                                                            children: kpi.valor.toLocaleString('pt-BR')
                                                        }, void 0, false, {
                                                            fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `text-sm ${kpi.variacao_percentual > 0 ? 'text-green-600' : 'text-red-600'}`,
                                                            children: [
                                                                kpi.variacao_percentual > 0 ? '+' : '',
                                                                kpi.variacao_percentual,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                children: "Ações Rápidas"
                            }, void 0, false, {
                                fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                children: "Acesso rápido às principais funcionalidades"
                            }, void 0, false, {
                                fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/gestao/carteira",
                                    className: "flex items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                            className: "h-8 w-8 text-blue-600 mr-3"
                                        }, void 0, false, {
                                            fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                            lineNumber: 211,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-blue-900",
                                                    children: "Carteira"
                                                }, void 0, false, {
                                                    fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-blue-600",
                                                    children: "Gestão de clientes"
                                                }, void 0, false, {
                                                    fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                            lineNumber: 212,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/gestao/usuarios",
                                    className: "flex items-center p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                            className: "h-8 w-8 text-green-600 mr-3"
                                        }, void 0, false, {
                                            fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                            lineNumber: 222,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-green-900",
                                                    children: "Usuários"
                                                }, void 0, false, {
                                                    fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-green-600",
                                                    children: "Gestão de usuários"
                                                }, void 0, false, {
                                                    fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                            lineNumber: 223,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/dashboards/fiscal",
                                    className: "flex items-center p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                            className: "h-8 w-8 text-purple-600 mr-3"
                                        }, void 0, false, {
                                            fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-purple-900",
                                                    children: "Dashboards"
                                                }, void 0, false, {
                                                    fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-purple-600",
                                                    children: "Análises e relatórios"
                                                }, void 0, false, {
                                                    fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                            lineNumber: 234,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/gestao/escritorio",
                                    className: "flex items-center p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                            className: "h-8 w-8 text-orange-600 mr-3"
                                        }, void 0, false, {
                                            fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                            lineNumber: 244,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-orange-900",
                                                    children: "Escritório"
                                                }, void 0, false, {
                                                    fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-orange-600",
                                                    children: "Análise do escritório"
                                                }, void 0, false, {
                                                    fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                            lineNumber: 245,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gestk-frontend/apps/client/src/app/(dashboard)/dashboard/page.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=gestk-frontend_apps_client_src_91897515._.js.map