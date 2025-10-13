module.exports = [
"[project]/apps/client/src/components/charts/LineChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LineChart",
    ()=>LineChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/LineChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/ui/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/card.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function LineChart({ data, lines, multiLine, xKey, yKey, color = '#3b82f6', title, description, height = 300, showLegend = true, showGrid = true, loading = false, className = '' }) {
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: `${className}`,
            children: [
                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/components/charts/LineChart.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/components/charts/LineChart.tsx",
                            lineNumber: 67,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/client/src/components/charts/LineChart.tsx",
                    lineNumber: 65,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center h-[300px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/components/charts/LineChart.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/LineChart.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/client/src/components/charts/LineChart.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/client/src/components/charts/LineChart.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this);
    }
    if (!data || data.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: `${className}`,
            children: [
                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/components/charts/LineChart.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/components/charts/LineChart.tsx",
                            lineNumber: 85,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/client/src/components/charts/LineChart.tsx",
                    lineNumber: 83,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center h-[300px] text-gray-500",
                        children: "Nenhum dado disponível"
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/LineChart.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/client/src/components/charts/LineChart.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/client/src/components/charts/LineChart.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: `${className}`,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/LineChart.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/LineChart.tsx",
                        lineNumber: 103,
                        columnNumber: 27
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/client/src/components/charts/LineChart.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: height,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineChart"], {
                        data: data,
                        margin: {
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        },
                        children: [
                            showGrid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                strokeDasharray: "3 3",
                                stroke: "#f0f0f0"
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/components/charts/LineChart.tsx",
                                lineNumber: 117,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                dataKey: xKey || "name",
                                stroke: "#666",
                                fontSize: 12,
                                tickLine: false,
                                axisLine: false
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/components/charts/LineChart.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                stroke: "#666",
                                fontSize: 12,
                                tickLine: false,
                                axisLine: false
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/components/charts/LineChart.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                contentStyle: {
                                    backgroundColor: 'white',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/components/charts/LineChart.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this),
                            showLegend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Legend"], {
                                wrapperStyle: {
                                    paddingTop: '20px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/components/charts/LineChart.tsx",
                                lineNumber: 140,
                                columnNumber: 15
                            }, this),
                            multiLine ? multiLine.map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
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
                                    fileName: "[project]/apps/client/src/components/charts/LineChart.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this)) : lines ? lines.map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
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
                                    fileName: "[project]/apps/client/src/components/charts/LineChart.tsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
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
                                fileName: "[project]/apps/client/src/components/charts/LineChart.tsx",
                                lineNumber: 169,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/client/src/components/charts/LineChart.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/client/src/components/charts/LineChart.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/client/src/components/charts/LineChart.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/client/src/components/charts/LineChart.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/client/src/components/charts/BarChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BarChart",
    ()=>BarChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/ui/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/card.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function BarChart({ data, bars, xKey, yKey, color = '#3b82f6', title, description, height = 300, showLegend = true, showGrid = true, loading = false, className = '', horizontal = false }) {
    // Debug logs
    console.log('BarChart props:', {
        data,
        xKey,
        yKey,
        color,
        height
    });
    console.log('Data length:', data?.length);
    console.log('First data item:', data?.[0]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: `${className}`,
            children: [
                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/components/charts/BarChart.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/components/charts/BarChart.tsx",
                            lineNumber: 66,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/client/src/components/charts/BarChart.tsx",
                    lineNumber: 64,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center h-[300px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/components/charts/BarChart.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/BarChart.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/client/src/components/charts/BarChart.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/client/src/components/charts/BarChart.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this);
    }
    if (!data || data.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: `${className}`,
            children: [
                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/components/charts/BarChart.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/components/charts/BarChart.tsx",
                            lineNumber: 84,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/client/src/components/charts/BarChart.tsx",
                    lineNumber: 82,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center h-[300px] text-gray-500",
                        children: "Nenhum dado disponível"
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/BarChart.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/client/src/components/charts/BarChart.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/client/src/components/charts/BarChart.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: `${className}`,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/BarChart.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/BarChart.tsx",
                        lineNumber: 102,
                        columnNumber: 27
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/client/src/components/charts/BarChart.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: height,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                        data: data,
                        margin: {
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        },
                        layout: horizontal ? 'horizontal' : 'vertical',
                        children: [
                            showGrid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                strokeDasharray: "3 3",
                                stroke: "#f0f0f0"
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/components/charts/BarChart.tsx",
                                lineNumber: 117,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                dataKey: horizontal ? 'value' : xKey || 'name',
                                stroke: "#666",
                                fontSize: 12,
                                tickLine: false,
                                axisLine: false
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/components/charts/BarChart.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                stroke: "#666",
                                fontSize: 12,
                                tickLine: false,
                                axisLine: false,
                                domain: [
                                    0,
                                    'dataMax'
                                ]
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/components/charts/BarChart.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                contentStyle: {
                                    backgroundColor: 'white',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/components/charts/BarChart.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this),
                            showLegend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Legend"], {
                                wrapperStyle: {
                                    paddingTop: '20px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/components/charts/BarChart.tsx",
                                lineNumber: 141,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                                dataKey: yKey,
                                fill: color,
                                name: yKey,
                                radius: [
                                    4,
                                    4,
                                    0,
                                    0
                                ],
                                maxBarSize: 50
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/components/charts/BarChart.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/client/src/components/charts/BarChart.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/client/src/components/charts/BarChart.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/client/src/components/charts/BarChart.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/client/src/components/charts/BarChart.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/client/src/components/charts/PieChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PieChart",
    ()=>PieChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/PieChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Pie.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/ui/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/card.tsx [app-ssr] (ecmascript)");
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: `${className}`,
            children: [
                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/components/charts/PieChart.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/components/charts/PieChart.tsx",
                            lineNumber: 60,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/client/src/components/charts/PieChart.tsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center h-[300px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/components/charts/PieChart.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/PieChart.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/client/src/components/charts/PieChart.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/client/src/components/charts/PieChart.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this);
    }
    if (!data || data.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: `${className}`,
            children: [
                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/components/charts/PieChart.tsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/components/charts/PieChart.tsx",
                            lineNumber: 78,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/client/src/components/charts/PieChart.tsx",
                    lineNumber: 76,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center h-[300px] text-gray-500",
                        children: "Nenhum dado disponível"
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/PieChart.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/client/src/components/charts/PieChart.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/client/src/components/charts/PieChart.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this);
    }
    // Adicionar cores aos dados se não estiverem definidas
    const dataWithColors = data.map((item, index)=>({
            ...item,
            color: item.color || colors[index % colors.length]
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: `${className}`,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/PieChart.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/PieChart.tsx",
                        lineNumber: 101,
                        columnNumber: 27
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/client/src/components/charts/PieChart.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: height,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PieChart"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pie"], {
                                data: dataWithColors,
                                cx: "50%",
                                cy: "50%",
                                labelLine: false,
                                label: showLabel ? ({ name, percent })=>`${name} ${(percent * 100).toFixed(0)}%` : false,
                                outerRadius: 80,
                                fill: "#8884d8",
                                dataKey: valueKey,
                                children: dataWithColors.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cell"], {
                                        fill: entry.color
                                    }, `cell-${index}`, false, {
                                        fileName: "[project]/apps/client/src/components/charts/PieChart.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/components/charts/PieChart.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
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
                                fileName: "[project]/apps/client/src/components/charts/PieChart.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this),
                            showLegend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Legend"], {
                                wrapperStyle: {
                                    paddingTop: '20px'
                                },
                                formatter: (value, entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: entry.color
                                        },
                                        children: value
                                    }, void 0, false, {
                                        fileName: "[project]/apps/client/src/components/charts/PieChart.tsx",
                                        lineNumber: 139,
                                        columnNumber: 19
                                    }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/components/charts/PieChart.tsx",
                                lineNumber: 134,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/client/src/components/charts/PieChart.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/client/src/components/charts/PieChart.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/client/src/components/charts/PieChart.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/client/src/components/charts/PieChart.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/client/src/components/charts/AreaChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AreaChart",
    ()=>AreaChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/AreaChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Area.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/ui/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/card.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function AreaChart({ data, areas, title, description, height = 300, showLegend = true, showGrid = true, loading = false, className = '', stacked = false }) {
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: `${className}`,
            children: [
                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/components/charts/AreaChart.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/components/charts/AreaChart.tsx",
                            lineNumber: 58,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/client/src/components/charts/AreaChart.tsx",
                    lineNumber: 56,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center h-[300px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/components/charts/AreaChart.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/AreaChart.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/client/src/components/charts/AreaChart.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/client/src/components/charts/AreaChart.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this);
    }
    if (!data || data.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: `${className}`,
            children: [
                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/components/charts/AreaChart.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/components/charts/AreaChart.tsx",
                            lineNumber: 76,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/client/src/components/charts/AreaChart.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center h-[300px] text-gray-500",
                        children: "Nenhum dado disponível"
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/AreaChart.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/client/src/components/charts/AreaChart.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/client/src/components/charts/AreaChart.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: `${className}`,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/AreaChart.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/AreaChart.tsx",
                        lineNumber: 93,
                        columnNumber: 27
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/client/src/components/charts/AreaChart.tsx",
                lineNumber: 91,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: height,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AreaChart"], {
                        data: data,
                        margin: {
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        },
                        stackOffset: stacked ? 'expand' : undefined,
                        children: [
                            showGrid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                strokeDasharray: "3 3",
                                stroke: "#f0f0f0"
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/components/charts/AreaChart.tsx",
                                lineNumber: 108,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                dataKey: "name",
                                stroke: "#666",
                                fontSize: 12,
                                tickLine: false,
                                axisLine: false
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/components/charts/AreaChart.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                stroke: "#666",
                                fontSize: 12,
                                tickLine: false,
                                axisLine: false
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/components/charts/AreaChart.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                contentStyle: {
                                    backgroundColor: 'white',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/components/charts/AreaChart.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            showLegend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Legend"], {
                                wrapperStyle: {
                                    paddingTop: '20px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/components/charts/AreaChart.tsx",
                                lineNumber: 131,
                                columnNumber: 15
                            }, this),
                            areas.map((area, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Area"], {
                                    type: "monotone",
                                    dataKey: area.dataKey,
                                    stackId: stacked ? '1' : undefined,
                                    stroke: area.stroke,
                                    fill: area.fill,
                                    fillOpacity: 0.6,
                                    strokeWidth: area.strokeWidth || 2,
                                    name: area.name
                                }, area.dataKey, false, {
                                    fileName: "[project]/apps/client/src/components/charts/AreaChart.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/client/src/components/charts/AreaChart.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/client/src/components/charts/AreaChart.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/client/src/components/charts/AreaChart.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/client/src/components/charts/AreaChart.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/client/src/components/charts/StrategicCharts.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/ui/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/client/src/components/charts/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$LineChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/src/components/charts/LineChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$BarChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/src/components/charts/BarChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$AreaChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/src/components/charts/AreaChart.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function EficienciaVsProdutividadeChart({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: "Eficiência vs Produtividade"
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: "Relação entre eficiência e produtividade dos usuários"
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-80",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$AreaChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AreaChart"], {
                        data: data,
                        xKey: "eficiencia",
                        yKey: "produtividade",
                        height: 300,
                        color: "#8b5cf6",
                        showDots: true
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
function TendenciaEvolucaoChart({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: "Evolução de Tendências"
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: "Evolução da eficiência e produtividade ao longo do tempo"
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-80",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$LineChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineChart"], {
                        data: data,
                        xKey: "mes",
                        yKey: "eficiencia_media",
                        height: 300,
                        color: "#f59e0b",
                        showDots: true,
                        strokeWidth: 3
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
function ComparativoPeriodoChart({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: "Comparativo Período Anterior"
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: "Comparação entre período atual e anterior"
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-80",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$BarChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                        data: data,
                        xKey: "categoria",
                        yKey: "atual",
                        height: 300,
                        color: "#10b981",
                        showComparison: true,
                        comparisonKey: "anterior"
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
function TopUsuariosChart({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: "Top 5 Usuários Mais Produtivos"
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: "Ranking dos usuários com maior produtividade"
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-80",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$BarChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                        data: data.slice(0, 5),
                        xKey: "usuario",
                        yKey: "lancamentos",
                        height: 300,
                        color: "#3b82f6",
                        horizontal: true
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: "Heatmap de Produtividade"
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: "Visualização da produtividade por usuário (intensidade da cor)"
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
                    children: data.map((usuario, index)=>{
                        const produtividadeIntensity = getIntensity(usuario.produtividade, maxProdutividade);
                        const eficienciaIntensity = getIntensity(usuario.eficiencia, maxEficiencia);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 rounded-lg border-2 text-center",
                            style: {
                                backgroundColor: `rgba(59, 130, 246, ${produtividadeIntensity / 100})`,
                                borderColor: `rgba(16, 185, 129, ${eficienciaIntensity / 100})`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-medium text-sm",
                                    children: usuario.usuario
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                                    lineNumber: 168,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-600 mt-1",
                                    children: [
                                        "Prod: ",
                                        usuario.produtividade.toFixed(1)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                                    lineNumber: 169,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-600",
                                    children: [
                                        "Efic: ",
                                        usuario.eficiencia.toFixed(0),
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                                    lineNumber: 172,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, usuario.usuario, true, {
                            fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                            lineNumber: 160,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
function IndicadoresKPIs({ totalUsuarios, eficienciaMedia, produtividadeMedia, horasTotais }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        className: "pb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-sm font-medium",
                            children: "Total de Usuários"
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold",
                                children: totalUsuarios
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-600",
                                children: "Usuários ativos"
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        className: "pb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-sm font-medium",
                            children: "Eficiência Média"
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold",
                                children: [
                                    eficienciaMedia.toFixed(1),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-600",
                                children: "Performance geral"
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        className: "pb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-sm font-medium",
                            children: "Produtividade Média"
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                            lineNumber: 219,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold",
                                children: produtividadeMedia.toFixed(1)
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-600",
                                children: "Lançamentos/hora"
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        className: "pb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-sm font-medium",
                            children: "Horas Totais"
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold",
                                children: [
                                    horasTotais.toFixed(0),
                                    "h"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-600",
                                children: "Tempo trabalhado"
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "text-green-600",
                        children: "✅ Todos os Usuários em Boa Performance"
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 254,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: "Nenhum alerta de performance detectado"
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 255,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 253,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
            lineNumber: 252,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "text-orange-600",
                        children: "⚠️ Alertas de Performance"
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: "Usuários que precisam de atenção"
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: alertas.map((alerta, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center p-3 bg-gray-50 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-medium",
                                            children: alerta.usuario
                                        }, void 0, false, {
                                            fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                                            lineNumber: 276,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600",
                                            children: alerta.tipo
                                        }, void 0, false, {
                                            fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                                            lineNumber: 277,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                                    lineNumber: 275,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `font-bold ${alerta.cor}`,
                                    children: [
                                        alerta.valor.toFixed(1),
                                        alerta.tipo === 'Eficiência Baixa' ? '%' : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                                    lineNumber: 279,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                            lineNumber: 274,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                    lineNumber: 272,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/client/src/components/charts/StrategicCharts.tsx",
        lineNumber: 264,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/client/src/components/charts/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$LineChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/src/components/charts/LineChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$BarChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/src/components/charts/BarChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$PieChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/src/components/charts/PieChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$AreaChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/src/components/charts/AreaChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$StrategicCharts$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/src/components/charts/StrategicCharts.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
}),
"[project]/apps/client/src/components/charts/BarChartTest.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BarChartTest",
    ()=>BarChartTest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
'use client';
;
;
const testData = [
    {
        name: 'A',
        value: 10
    },
    {
        name: 'B',
        value: 20
    },
    {
        name: 'C',
        value: 15
    },
    {
        name: 'D',
        value: 25
    }
];
function BarChartTest() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-64 border border-red-500 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-bold mb-4",
                children: "Teste BarChart Simples"
            }, void 0, false, {
                fileName: "[project]/apps/client/src/components/charts/BarChartTest.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: "100%",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                    data: testData,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                            strokeDasharray: "3 3"
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/components/charts/BarChartTest.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                            dataKey: "name"
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/components/charts/BarChartTest.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {}, void 0, false, {
                            fileName: "[project]/apps/client/src/components/charts/BarChartTest.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                            fileName: "[project]/apps/client/src/components/charts/BarChartTest.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                            dataKey: "value",
                            fill: "#8884d8"
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/components/charts/BarChartTest.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/client/src/components/charts/BarChartTest.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/client/src/components/charts/BarChartTest.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/client/src/components/charts/BarChartTest.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/packages/shared/src/utils/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatCurrency",
    ()=>formatCurrency,
    "formatDate",
    ()=>formatDate,
    "formatDateTime",
    ()=>formatDateTime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}
function formatDate(date) {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('pt-BR').format(dateObj);
}
function formatDateTime(date) {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('pt-BR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    }).format(dateObj);
}
}),
"[project]/packages/shared/src/types/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/packages/shared/src/api/client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiClient",
    ()=>ApiClient,
    "apiClient",
    ()=>apiClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
// Configuração base da API
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
class ApiClient {
    client;
    accessToken = null;
    contabilidadeId = null;
    appContext = null;
    constructor(config){
        this.client = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
            baseURL: config?.baseURL || API_BASE_URL,
            timeout: config?.timeout || 10000,
            headers: {
                'Content-Type': 'application/json',
                ...config?.headers
            }
        });
        this.setupInterceptors();
    }
    // Configurar interceptors
    setupInterceptors() {
        // Request interceptor
        this.client.interceptors.request.use((config)=>{
            // Adicionar token de autenticação
            if (this.accessToken) {
                config.headers.Authorization = `Bearer ${this.accessToken}`;
            }
            // Adicionar headers de contexto
            if (this.contabilidadeId) {
                config.headers['X-Contabilidade-ID'] = this.contabilidadeId;
            }
            if (this.appContext) {
                config.headers['X-App-Context'] = this.appContext;
            }
            return config;
        }, (error)=>{
            return Promise.reject(error);
        });
        // Response interceptor
        this.client.interceptors.response.use((response)=>{
            return response;
        }, async (error)=>{
            const originalRequest = error.config;
            // Se erro 401 e não é uma tentativa de refresh
            if (error.response?.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
                try {
                    // Tentar refresh do token
                    const refreshToken = this.getRefreshToken();
                    if (refreshToken) {
                        const newToken = await this.refreshAccessToken(refreshToken);
                        if (newToken) {
                            this.setAccessToken(newToken);
                            originalRequest.headers.Authorization = `Bearer ${newToken}`;
                            return this.client(originalRequest);
                        }
                    }
                } catch (refreshError) {
                    // Se refresh falhar, redirecionar para login
                    this.clearAuth();
                    window.location.href = '/login';
                }
            }
            return Promise.reject(error);
        });
    }
    // Métodos de autenticação
    setAccessToken(token) {
        this.accessToken = token;
        localStorage.setItem('access_token', token);
    }
    getAccessToken() {
        return this.accessToken || localStorage.getItem('access_token');
    }
    setRefreshToken(token) {
        localStorage.setItem('refresh_token', token);
    }
    getRefreshToken() {
        return localStorage.getItem('refresh_token');
    }
    setContabilidadeId(id) {
        this.contabilidadeId = id;
        localStorage.setItem('contabilidade_id', id);
    }
    getContabilidadeId() {
        return this.contabilidadeId || localStorage.getItem('contabilidade_id');
    }
    setAppContext(context) {
        this.appContext = context;
        localStorage.setItem('app_context', context);
    }
    getAppContext() {
        return this.appContext || localStorage.getItem('app_context');
    }
    // Limpar autenticação
    clearAuth() {
        this.accessToken = null;
        this.contabilidadeId = null;
        this.appContext = null;
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('contabilidade_id');
        localStorage.removeItem('app_context');
    }
    // Refresh do token
    async refreshAccessToken(refreshToken) {
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${API_BASE_URL}/api/auth/token/refresh/`, {
                refresh: refreshToken
            });
            const { access } = response.data;
            this.setAccessToken(access);
            return access;
        } catch (error) {
            console.error('Erro ao renovar token:', error);
            return null;
        }
    }
    // Métodos HTTP
    async get(url, config) {
        const response = await this.client.get(url, config);
        return response.data;
    }
    async post(url, data, config) {
        const response = await this.client.post(url, data, config);
        return response.data;
    }
    async put(url, data, config) {
        const response = await this.client.put(url, data, config);
        return response.data;
    }
    async patch(url, data, config) {
        const response = await this.client.patch(url, data, config);
        return response.data;
    }
    async delete(url, config) {
        const response = await this.client.delete(url, config);
        return response.data;
    }
    // Upload de arquivos
    async upload(url, file, onProgress) {
        const formData = new FormData();
        formData.append('file', file);
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: (progressEvent)=>{
                if (onProgress && progressEvent.total) {
                    const progress = Math.round(progressEvent.loaded * 100 / progressEvent.total);
                    onProgress(progress);
                }
            }
        };
        const response = await this.client.post(url, formData, config);
        return response.data;
    }
    // Download de arquivos
    async download(url, filename) {
        const response = await this.client.get(url, {
            responseType: 'blob'
        });
        const blob = new Blob([
            response.data
        ]);
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = filename || 'download';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(downloadUrl);
    }
}
const apiClient = new ApiClient();
// Inicializar com dados do localStorage
const initializeFromStorage = ()=>{
    const accessToken = localStorage.getItem('access_token');
    const contabilidadeId = localStorage.getItem('contabilidade_id');
    const appContext = localStorage.getItem('app_context');
    if (accessToken) apiClient.setAccessToken(accessToken);
    if (contabilidadeId) apiClient.setContabilidadeId(contabilidadeId);
    if (appContext) apiClient.setAppContext(appContext);
};
// Inicializar quando o módulo for carregado
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
}),
"[project]/packages/shared/src/api/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Tipos base para paginação
__turbopack_context__.s([]);
;
}),
"[project]/packages/shared/src/api/services/auth.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthService",
    ()=>AuthService,
    "authService",
    ()=>authService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/api/client.ts [app-ssr] (ecmascript)");
;
class AuthService {
    // Login
    async login(credentials) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/api/auth/token/', credentials);
        // Salvar tokens
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].setAccessToken(response.access);
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].setRefreshToken(response.refresh);
        // Definir contexto da aplicação
        if (credentials.app_context) {
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].setAppContext(credentials.app_context);
        }
        return response;
    }
    // Logout
    async logout() {
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/api/auth/logout/');
        } catch (error) {
            console.error('Erro ao fazer logout:', error);
        } finally{
            // Limpar dados de autenticação
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].clearAuth();
        }
    }
    // Refresh token
    async refreshToken() {
        const refreshToken = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].getRefreshToken();
        if (!refreshToken) {
            throw new Error('Refresh token não encontrado');
        }
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/api/auth/token/refresh/', {
                refresh: refreshToken
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].setAccessToken(response.access);
            return response.access;
        } catch (error) {
            console.error('Erro ao renovar token:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].clearAuth();
            throw error;
        }
    }
    // Selecionar contabilidade
    async selectContabilidade(contabilidadeId) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/api/auth/select-contabilidade/', {
            contabilidade_id: contabilidadeId
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].setContabilidadeId(contabilidadeId);
    }
    // Verificar se está autenticado
    isAuthenticated() {
        const token = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].getAccessToken();
        return !!token;
    }
    // Obter usuário atual
    getCurrentUser() {
        const userStr = localStorage.getItem('current_user');
        if (userStr) {
            try {
                return JSON.parse(userStr);
            } catch (error) {
                console.error('Erro ao parsear usuário:', error);
                return null;
            }
        }
        return null;
    }
    // Salvar usuário atual
    setCurrentUser(user) {
        localStorage.setItem('current_user', JSON.stringify(user));
    }
    // Obter contabilidades disponíveis
    getAvailableContabilidades() {
        const contabilidadesStr = localStorage.getItem('available_contabilidades');
        if (contabilidadesStr) {
            try {
                return JSON.parse(contabilidadesStr);
            } catch (error) {
                console.error('Erro ao parsear contabilidades:', error);
                return [];
            }
        }
        return [];
    }
    // Salvar contabilidades disponíveis
    setAvailableContabilidades(contabilidades) {
        localStorage.setItem('available_contabilidades', JSON.stringify(contabilidades));
    }
    // Verificar se tem permissão para contabilidade
    hasContabilidadeAccess(contabilidadeId) {
        const contabilidades = this.getAvailableContabilidades();
        return contabilidades.some((c)=>c.id === contabilidadeId);
    }
    // Obter role do usuário para contabilidade atual
    getUserRole() {
        const roleStr = localStorage.getItem('user_role');
        return roleStr;
    }
    // Salvar role do usuário
    setUserRole(role) {
        localStorage.setItem('user_role', role);
    }
    // Verificar se é admin
    isAdmin() {
        const user = this.getCurrentUser();
        return user?.is_staff || user?.is_superuser || false;
    }
    // Verificar se é superuser
    isSuperUser() {
        const user = this.getCurrentUser();
        return user?.is_superuser || false;
    }
    // Obter contexto da aplicação
    getAppContext() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].getAppContext();
    }
    // Verificar se é contexto admin
    isAdminContext() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].getAppContext() === 'admin';
    }
    // Verificar se é contexto client
    isClientContext() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].getAppContext() === 'client';
    }
    // Inicializar autenticação a partir do localStorage
    initializeAuth() {
        const token = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].getAccessToken();
        const contabilidadeId = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].getContabilidadeId();
        const appContext = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].getAppContext();
        if (token && contabilidadeId && appContext) {
            // Reconfigurar headers
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].setAccessToken(token);
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].setContabilidadeId(contabilidadeId);
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].setAppContext(appContext);
        }
    }
    // Limpar todos os dados de autenticação
    clearAllAuth() {
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].clearAuth();
        localStorage.removeItem('current_user');
        localStorage.removeItem('available_contabilidades');
        localStorage.removeItem('user_role');
    }
}
const authService = new AuthService();
}),
"[project]/packages/shared/src/api/services/admin.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminService",
    ()=>AdminService,
    "adminService",
    ()=>adminService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/api/client.ts [app-ssr] (ecmascript)");
;
class AdminService {
    // ===== CONTRATOS GESTK =====
    async getContratos(filters) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/administracao/contratos-gestk/', {
            params: filters
        });
    }
    async getContrato(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/administracao/contratos-gestk/${id}/`);
    }
    async createContrato(data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/api/administracao/contratos-gestk/', data);
    }
    async updateContrato(id, data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/api/administracao/contratos-gestk/${id}/`, data);
    }
    async deleteContrato(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(`/api/administracao/contratos-gestk/${id}/`);
    }
    async suspendContrato(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/administracao/contratos-gestk/${id}/suspender/`);
    }
    async cancelContrato(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/administracao/contratos-gestk/${id}/cancelar/`);
    }
    async activateContrato(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/administracao/contratos-gestk/${id}/ativar/`);
    }
    async getContratosResumo() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/administracao/contratos-gestk/resumo/');
    }
    // ===== USUÁRIOS DE ACESSO =====
    async getUsuariosAcesso(filters) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/administracao/usuarios-acesso/', {
            params: filters
        });
    }
    async getUsuarioAcesso(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/administracao/usuarios-acesso/${id}/`);
    }
    async createUsuarioAcesso(data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/api/administracao/usuarios-acesso/', data);
    }
    async updateUsuarioAcesso(id, data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/api/administracao/usuarios-acesso/${id}/`, data);
    }
    async deleteUsuarioAcesso(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(`/api/administracao/usuarios-acesso/${id}/`);
    }
    async activateUsuarioAcesso(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/administracao/usuarios-acesso/${id}/ativar/`);
    }
    async deactivateUsuarioAcesso(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/administracao/usuarios-acesso/${id}/desativar/`);
    }
    async extendUsuarioAcesso(id, data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/administracao/usuarios-acesso/${id}/estender-vigencia/`, data);
    }
    async getUsuariosAcessoResumo() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/administracao/usuarios-acesso/resumo/');
    }
    // ===== CONTABILIDADES ADMIN =====
    async getContabilidadesAdmin(filters) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/administracao/contabilidades-admin/', {
            params: filters
        });
    }
    async getContabilidadeAdmin(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/administracao/contabilidades-admin/${id}/`);
    }
    async updateContabilidadeAdmin(id, data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/api/administracao/contabilidades-admin/${id}/`, data);
    }
    async suspendContabilidadePorInadimplencia(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/administracao/contabilidades-admin/${id}/suspender-por-inadimplencia/`);
    }
    async reactivateContabilidade(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/administracao/contabilidades-admin/${id}/reativar/`);
    }
    async getContabilidadesAdminResumo() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/administracao/contabilidades-admin/resumo/');
    }
    // ===== PLANOS =====
    async getPlanos() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/billing/planos/');
    }
    async getPlano(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/billing/planos/${id}/`);
    }
    async createPlano(data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/api/billing/planos/', data);
    }
    async updatePlano(id, data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/api/billing/planos/${id}/`, data);
    }
    async deletePlano(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(`/api/billing/planos/${id}/`);
    }
    async getPlanosAtivos() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/billing/planos/ativos/');
    }
    async getPlanosResumo() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/billing/planos/resumo/');
    }
    // ===== ASSINATURAS =====
    async getAssinaturas() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/billing/assinaturas/');
    }
    async getAssinatura(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/billing/assinaturas/${id}/`);
    }
    async createAssinatura(data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/api/billing/assinaturas/', data);
    }
    async updateAssinatura(id, data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/api/billing/assinaturas/${id}/`, data);
    }
    async deleteAssinatura(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(`/api/billing/assinaturas/${id}/`);
    }
    async suspendAssinatura(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/billing/assinaturas/${id}/suspender/`);
    }
    async cancelAssinatura(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/billing/assinaturas/${id}/cancelar/`);
    }
    async activateAssinatura(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/billing/assinaturas/${id}/ativar/`);
    }
    async getAssinaturasResumo() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/billing/assinaturas/resumo/');
    }
    // ===== FATURAS =====
    async getFaturas() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/billing/faturas/');
    }
    async getFatura(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/billing/faturas/${id}/`);
    }
    async createFatura(data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/api/billing/faturas/', data);
    }
    async updateFatura(id, data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/api/billing/faturas/${id}/`, data);
    }
    async deleteFatura(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(`/api/billing/faturas/${id}/`);
    }
    async markFaturaAsPaid(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/billing/faturas/${id}/marcar-como-paga/`);
    }
    async cancelFatura(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/billing/faturas/${id}/cancelar/`);
    }
    async getFaturasResumo() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/billing/faturas/resumo/');
    }
    // ===== PAGAMENTOS =====
    async getPagamentos() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/billing/pagamentos/');
    }
    async getPagamento(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/billing/pagamentos/${id}/`);
    }
    async createPagamento(data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/api/billing/pagamentos/', data);
    }
    async confirmPagamento(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/billing/pagamentos/${id}/confirmar/`);
    }
    async refundPagamento(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/billing/pagamentos/${id}/estornar/`);
    }
    async getPagamentosResumo() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/billing/pagamentos/resumo/');
    }
}
const adminService = new AdminService();
}),
"[project]/packages/shared/src/api/services/client.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientService",
    ()=>ClientService,
    "clientService",
    ()=>clientService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/api/client.ts [app-ssr] (ecmascript)");
;
class ClientService {
    // ===== GESTÃO - CARTEIRA DE CLIENTES =====
    async getCarteiraClientes(filters) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/gestao/carteira/clientes/', {
            params: filters
        });
    }
    async getCarteiraCliente(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/gestao/carteira/clientes/${id}/`);
    }
    async updateCarteiraCliente(id, data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/api/gestao/carteira/clientes/${id}/`, data);
    }
    async getCarteiraResumo() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/gestao/carteira/clientes/resumo/');
    }
    // ===== GESTÃO - CLIENTES =====
    async getClientes(filters) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/gestao/clientes/lista/', {
            params: filters
        });
    }
    async getCliente(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/gestao/clientes/lista/${id}/`);
    }
    async updateCliente(id, data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/api/gestao/clientes/lista/${id}/`, data);
    }
    async getClientesResumo() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/gestao/clientes/lista/resumo/');
    }
    // ===== GESTÃO - USUÁRIOS =====
    async getUsuarios(filters) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/gestao/usuarios/lista/', {
            params: filters
        });
    }
    async getUsuario(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/gestao/usuarios/lista/${id}/`);
    }
    async updateUsuario(id, data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/api/gestao/usuarios/lista/${id}/`, data);
    }
    async getUsuariosResumo() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/gestao/usuarios/lista/resumo/');
    }
    // ===== GESTÃO - ESCRITÓRIO =====
    async getEscritorio() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/gestao/escritorio/');
    }
    async updateEscritorio(data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put('/api/gestao/escritorio/', data);
    }
    async getEscritorioResumo() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/gestao/escritorio/resumo/');
    }
    // ===== DASHBOARDS =====
    // Dashboard Demográfico
    async getDashboardDemografico(filters) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/dashboards/demografico/', {
            params: filters
        });
    }
    async getDashboardDemograficoCharts(filters) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/dashboards/demografico/graficos/', {
            params: filters
        });
    }
    async exportDashboardDemografico(filters) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/dashboards/demografico/exportar/', {
            params: filters,
            responseType: 'blob'
        });
        return response;
    }
    // Dashboard Fiscal
    async getDashboardFiscal(filters) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/dashboards/fiscal/', {
            params: filters
        });
    }
    async getDashboardFiscalCharts(filters) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/dashboards/fiscal/graficos/', {
            params: filters
        });
    }
    async exportDashboardFiscal(filters) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/dashboards/fiscal/exportar/', {
            params: filters,
            responseType: 'blob'
        });
        return response;
    }
    // Dashboard Contábil
    async getDashboardContabil(filters) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/dashboards/contabil/', {
            params: filters
        });
    }
    async getDashboardContabilCharts(filters) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/dashboards/contabil/graficos/', {
            params: filters
        });
    }
    async exportDashboardContabil(filters) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/dashboards/contabil/exportar/', {
            params: filters,
            responseType: 'blob'
        });
        return response;
    }
    // Dashboard de Indicadores
    async getDashboardIndicadores(filters) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/dashboards/indicadores/', {
            params: filters
        });
    }
    async getDashboardIndicadoresCharts(filters) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/dashboards/indicadores/graficos/', {
            params: filters
        });
    }
    async exportDashboardIndicadores(filters) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/dashboards/indicadores/exportar/', {
            params: filters,
            responseType: 'blob'
        });
        return response;
    }
    // Dashboard DRE
    async getDashboardDRE(filters) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/dashboards/dre/', {
            params: filters
        });
    }
    async getDashboardDRECharts(filters) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/dashboards/dre/graficos/', {
            params: filters
        });
    }
    async exportDashboardDRE(filters) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/dashboards/dre/exportar/', {
            params: filters,
            responseType: 'blob'
        });
        return response;
    }
    // ===== MÉTODOS AUXILIARES =====
    // Download de arquivo
    async downloadFile(url, filename) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(url, {
            responseType: 'blob'
        });
        const blob = new Blob([
            response
        ]);
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = filename || 'download';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(downloadUrl);
    }
    // Upload de arquivo
    async uploadFile(file, onProgress) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].upload('/api/upload/', file, onProgress);
    }
    // Obter dados gerais do dashboard
    async getDashboardOverview() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/api/dashboards/overview/');
    }
}
const clientService = new ClientService();
}),
"[project]/packages/shared/src/api/services/gestao.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gestaoService",
    ()=>gestaoService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/api/client.ts [app-ssr] (ecmascript)");
;
const gestaoService = {
    // Serviços para Carteira
    carteira: {
        listar: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/gestao/carteira/clientes/', {
                params: filtros
            }),
        categorias: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/gestao/carteira/categorias/', {
                params: filtros
            }),
        evolucao: (periodo)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/gestao/carteira/evolucao/', {
                params: periodo
            }),
        exportar: (filtros, formato)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/gestao/carteira/exportar/', {
                filtros,
                formato
            }, {
                responseType: 'blob'
            })
    },
    // Serviços para Clientes
    clientes: {
        listar: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/gestao/clientes/lista/', {
                params: filtros
            }),
        detalhes: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/gestao/clientes/detalhes/${id}/`),
        socios: (clienteId)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/gestao/clientes/${clienteId}/socios/`),
        atividades: (clienteId, filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/gestao/clientes/${clienteId}/atividades/`, {
                params: filtros
            }),
        exportar: (filtros, formato)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/gestao/clientes/exportar/', {
                filtros,
                formato
            }, {
                responseType: 'blob'
            })
    },
    // Serviços para Usuários
    usuarios: {
        listar: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/gestao/usuarios/lista/', {
                params: filtros
            }),
        atividades: (usuarioId, filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/gestao/usuarios/${usuarioId}/atividades/`, {
                params: filtros
            }),
        produtividade: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/gestao/usuarios/produtividade/', {
                params: filtros
            }),
        relatorio: (filtros, formato)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/gestao/usuarios/relatorio/', {
                filtros,
                formato
            }, {
                responseType: 'blob'
            })
    },
    // Serviços para Análise do Escritório
    escritorio: {
        kpis: (periodo)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/gestao/escritorio/kpis/', {
                params: periodo
            }),
        resultados: (periodo)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/gestao/escritorio/resultados/', {
                params: periodo
            }),
        comparativo: (periodos)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/gestao/escritorio/comparativo/', {
                params: periodos
            }),
        exportar: (periodo, formato)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/gestao/escritorio/exportar/', {
                periodo,
                formato
            }, {
                responseType: 'blob'
            })
    }
};
}),
"[project]/packages/shared/src/api/services/dashboard.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dashboardService",
    ()=>dashboardService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/api/client.ts [app-ssr] (ecmascript)");
;
const dashboardService = {
    // Dashboard Demográfico
    demografico: {
        dados: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/dashboards/demografico/', {
                params: filtros
            }),
        indicadores: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/dashboards/demografico/indicadores/', {
                params: filtros
            }),
        colaboradores: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/dashboards/demografico/colaboradores/', {
                params: filtros
            }),
        distribuicoes: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/dashboards/demografico/distribuicoes/', {
                params: filtros
            }),
        exportar: (filtros, formato)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/dashboards/demografico/exportar/', {
                filtros,
                formato
            }, {
                responseType: 'blob'
            })
    },
    // Dashboard Fiscal
    fiscal: {
        dados: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/dashboards/fiscal/', {
                params: filtros
            }),
        faturamento: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/dashboards/fiscal/faturamento/', {
                params: filtros
            }),
        produtos: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/dashboards/fiscal/produtos/', {
                params: filtros
            }),
        clientes: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/dashboards/fiscal/clientes/', {
                params: filtros
            }),
        impostos: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/dashboards/fiscal/impostos/', {
                params: filtros
            }),
        exportar: (filtros, formato)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/dashboards/fiscal/exportar/', {
                filtros,
                formato
            }, {
                responseType: 'blob'
            })
    },
    // Dashboard Contábil
    contabil: {
        dados: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/dashboards/contabil/', {
                params: filtros
            }),
        indicadores: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/dashboards/contabil/indicadores/', {
                params: filtros
            }),
        grupos: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/dashboards/contabil/grupos/', {
                params: filtros
            }),
        contas: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/dashboards/contabil/contas/', {
                params: filtros
            }),
        exportar: (filtros, formato)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/dashboards/contabil/exportar/', {
                filtros,
                formato
            }, {
                responseType: 'blob'
            })
    },
    // Dashboard Indicadores
    indicadores: {
        dados: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/dashboards/indicadores/', {
                params: filtros
            }),
        financeiros: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/dashboards/indicadores/financeiros/', {
                params: filtros
            }),
        operacionais: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/dashboards/indicadores/operacionais/', {
                params: filtros
            }),
        patrimoniais: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/dashboards/indicadores/patrimoniais/', {
                params: filtros
            }),
        tendencias: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/dashboards/indicadores/tendencias/', {
                params: filtros
            }),
        exportar: (filtros, formato)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/dashboards/indicadores/exportar/', {
                filtros,
                formato
            }, {
                responseType: 'blob'
            })
    },
    // Dashboard DRE
    dre: {
        dados: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/dashboards/dre/', {
                params: filtros
            }),
        composicao: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/dashboards/dre/composicao/', {
                params: filtros
            }),
        evolucao: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/dashboards/dre/evolucao/', {
                params: filtros
            }),
        analise_vertical: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/dashboards/dre/analise-vertical/', {
                params: filtros
            }),
        analise_horizontal: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/dashboards/dre/analise-horizontal/', {
                params: filtros
            }),
        exportar: (filtros, formato)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/dashboards/dre/exportar/', {
                filtros,
                formato
            }, {
                responseType: 'blob'
            })
    }
};
}),
"[project]/packages/shared/src/api/services/export.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportService",
    ()=>exportService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/api/client.ts [app-ssr] (ecmascript)");
;
const exportService = {
    // Exportação CSV (client-side)
    csv: {
        exportar: (dados, nomeArquivo, colunas)=>{
            try {
                // Esta função será implementada no cliente usando papaparse
                // Por enquanto, retorna um resultado mock
                return {
                    sucesso: true,
                    nome_arquivo: `${nomeArquivo}.csv`,
                    url: `data:text/csv;charset=utf-8,${encodeURIComponent('dados,csv')}`
                };
            } catch (error) {
                return {
                    sucesso: false,
                    nome_arquivo: `${nomeArquivo}.csv`,
                    erro: error instanceof Error ? error.message : 'Erro desconhecido'
                };
            }
        }
    },
    // Exportação PDF (backend)
    pdf: {
        exportar: (opcoes)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/export/pdf/', opcoes, {
                responseType: 'blob'
            }),
        relatorio: (tipo, dados, filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/export/pdf/${tipo}/`, {
                dados,
                filtros
            }, {
                responseType: 'blob'
            })
    },
    // Exportação Excel (backend)
    excel: {
        exportar: (opcoes)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/export/excel/', opcoes, {
                responseType: 'blob'
            }),
        relatorio: (tipo, dados, filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/export/excel/${tipo}/`, {
                dados,
                filtros
            }, {
                responseType: 'blob'
            })
    },
    // Relatórios Automatizados
    relatorios: {
        gerar: (tipo, filtros, formato)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/export/relatorios/${tipo}/`, {
                filtros,
                formato
            }, {
                responseType: 'blob'
            }),
        agendar: (relatorio)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/export/relatorios/agendar/', relatorio),
        listarAgendados: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/export/relatorios/agendados/'),
        executarAgendado: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/export/relatorios/agendados/${id}/executar/`)
    },
    // Utilitários de exportação
    utils: {
        // Gerar nome de arquivo com timestamp
        gerarNomeArquivo: (base, extensao)=>{
            const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
            return `${base}_${timestamp}.${extensao}`;
        },
        // Baixar arquivo do blob
        baixarArquivo: (blob, nomeArquivo)=>{
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = nomeArquivo;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        },
        // Validar dados para exportação
        validarDados: (dados)=>{
            if (!Array.isArray(dados)) {
                return {
                    valido: false,
                    erro: 'Dados devem ser um array'
                };
            }
            if (dados.length === 0) {
                return {
                    valido: false,
                    erro: 'Nenhum dado para exportar'
                };
            }
            return {
                valido: true
            };
        }
    }
};
}),
"[project]/packages/shared/src/api/services/relatorios.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "relatoriosService",
    ()=>relatoriosService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/api/client.ts [app-ssr] (ecmascript)");
;
const relatoriosService = {
    // Relatórios Agendados
    listar: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/relatorios/agendados/', {
            params: filtros
        }),
    criar: (relatorio)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/relatorios/agendados/', relatorio),
    atualizar: (id, relatorio)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/relatorios/agendados/${id}/`, relatorio),
    excluir: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(`/relatorios/agendados/${id}/`),
    executar: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/relatorios/agendados/${id}/executar/`),
    pausar: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/relatorios/agendados/${id}/pausar/`),
    ativar: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/relatorios/agendados/${id}/ativar/`),
    // Templates
    listarTemplates: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/relatorios/templates/'),
    criarTemplate: (template)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/relatorios/templates/', template),
    // Execuções
    listarExecucoes: (relatorioId)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/relatorios/execucoes/', {
            params: relatorioId ? {
                relatorio: relatorioId
            } : {}
        }),
    baixarExecucao: (execucaoId)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/relatorios/execucoes/${execucaoId}/download/`, {
            responseType: 'blob'
        }),
    // Relatórios Específicos
    gerarRelatorioCarteira: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/relatorios/gerar/carteira/', filtros),
    gerarRelatorioFiscal: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/relatorios/gerar/fiscal/', filtros),
    gerarRelatorioContabil: (filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/relatorios/gerar/contabil/', filtros),
    gerarRelatorioDashboard: (tipo, filtros)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/relatorios/gerar/dashboard/${tipo}/`, filtros),
    // Configurações
    obterConfiguracoes: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/relatorios/configuracoes/'),
    atualizarConfiguracoes: (configuracoes)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put('/relatorios/configuracoes/', configuracoes),
    // Estatísticas
    obterEstatisticas: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/relatorios/estatisticas/')
};
const __TURBOPACK__default__export__ = relatoriosService;
}),
"[project]/packages/shared/src/api/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Cliente API
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/api/client.ts [app-ssr] (ecmascript)");
// Tipos
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/api/types.ts [app-ssr] (ecmascript)");
// Serviços
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/api/services/auth.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/api/services/admin.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$client$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/api/services/client.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$gestao$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/api/services/gestao.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/api/services/dashboard.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$export$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/api/services/export.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$relatorios$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/api/services/relatorios.service.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
}),
"[project]/packages/shared/src/hooks/useApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuth",
    ()=>useAuth,
    "useForm",
    ()=>useForm,
    "useLoading",
    ()=>useLoading,
    "usePaginatedData",
    ()=>usePaginatedData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/api/services/auth.service.ts [app-ssr] (ecmascript)");
;
;
function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initAuth = ()=>{
            const authenticated = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].isAuthenticated();
            const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getCurrentUser();
            setIsAuthenticated(authenticated);
            setUser(currentUser);
            setLoading(false);
        };
        initAuth();
    }, []);
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (credentials)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].login(credentials);
            setUser(response.user);
            setIsAuthenticated(true);
            return response;
        } catch (error) {
            throw error;
        }
    }, []);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].logout();
            setUser(null);
            setIsAuthenticated(false);
        } catch (error) {
            console.error('Erro ao fazer logout:', error);
        }
    }, []);
    const selectContabilidade = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (contabilidadeId)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].selectContabilidade(contabilidadeId);
        } catch (error) {
            throw error;
        }
    }, []);
    return {
        isAuthenticated,
        user,
        loading,
        login,
        logout,
        selectContabilidade
    };
}
function useLoading() {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const execute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (asyncFunction)=>{
        setLoading(true);
        setError(null);
        try {
            const result = await asyncFunction();
            return result;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
            setError(errorMessage);
            return null;
        } finally{
            setLoading(false);
        }
    }, []);
    const clearError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setError(null);
    }, []);
    return {
        loading,
        error,
        execute,
        clearError
    };
}
function usePaginatedData(fetchFunction, initialFilters) {
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [total, setTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [limit, setLimit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(10);
    const [totalPages, setTotalPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialFilters || {});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setLoading(true);
        setError(null);
        try {
            const result = await fetchFunction({
                ...filters,
                page,
                page_size: limit
            });
            setData(result.data);
            setTotal(result.total);
            setTotalPages(result.totalPages);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Erro ao carregar dados';
            setError(errorMessage);
        } finally{
            setLoading(false);
        }
    }, [
        fetchFunction,
        filters,
        page,
        limit
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchData();
    }, [
        fetchData
    ]);
    const updateFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newFilters)=>{
        setFilters(newFilters);
        setPage(1); // Reset para primeira página
    }, []);
    const updatePage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newPage)=>{
        setPage(newPage);
    }, []);
    const updateLimit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newLimit)=>{
        setLimit(newLimit);
        setPage(1); // Reset para primeira página
    }, []);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        fetchData();
    }, [
        fetchData
    ]);
    return {
        data,
        total,
        page,
        limit,
        totalPages,
        filters,
        loading,
        error,
        updateFilters,
        updatePage,
        updateLimit,
        refresh
    };
}
function useForm(initialValues, validationSchema) {
    const [values, setValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialValues);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [touched, setTouched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const setValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((field, value)=>{
        setValues((prev)=>({
                ...prev,
                [field]: value
            }));
        // Limpar erro quando o campo é alterado
        if (errors[field]) {
            setErrors((prev)=>({
                    ...prev,
                    [field]: undefined
                }));
        }
    }, [
        errors
    ]);
    const setFieldTouched = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((field)=>{
        setTouched((prev)=>({
                ...prev,
                [field]: true
            }));
    }, []);
    const setError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((field, error)=>{
        setErrors((prev)=>({
                ...prev,
                [field]: error
            }));
    }, []);
    const clearErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setErrors({});
    }, []);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setValues(initialValues);
        setErrors({});
        setTouched({});
    }, [
        initialValues
    ]);
    const validate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!validationSchema) return true;
        try {
            validationSchema.parse(values);
            setErrors({});
            return true;
        } catch (err) {
            const newErrors = {};
            if (err.errors) {
                err.errors.forEach((error)=>{
                    const field = error.path[0];
                    newErrors[field] = error.message;
                });
            }
            setErrors(newErrors);
            return false;
        }
    }, [
        values,
        validationSchema
    ]);
    const isValid = Object.keys(errors).length === 0;
    return {
        values,
        errors,
        touched,
        isValid,
        setValue,
        setFieldTouched,
        setError,
        clearErrors,
        reset,
        validate
    };
}
}),
"[project]/packages/shared/src/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/utils/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/types/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/shared/src/api/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$hooks$2f$useApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/hooks/useApi.ts [app-ssr] (ecmascript)");
;
;
;
;
}),
"[project]/packages/shared/src/api/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminService",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdminService"],
    "ApiClient",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiClient"],
    "AuthService",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthService"],
    "ClientService",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$client$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClientService"],
    "adminService",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminService"],
    "apiClient",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"],
    "authService",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"],
    "clientService",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$client$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clientService"],
    "dashboardService",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dashboardService"],
    "exportService",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$export$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportService"],
    "gestaoService",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$gestao$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gestaoService"],
    "relatoriosService",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$relatorios$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["relatoriosService"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/shared/src/api/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/api/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/api/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/api/services/auth.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/api/services/admin.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$client$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/api/services/client.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$gestao$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/api/services/gestao.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/api/services/dashboard.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$export$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/api/services/export.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$services$2f$relatorios$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/api/services/relatorios.service.ts [app-ssr] (ecmascript)");
}),
"[project]/apps/client/src/components/export/ExportButtons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExportButtons",
    ()=>ExportButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js [app-ssr] (ecmascript) <export default as FileSpreadsheet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file.js [app-ssr] (ecmascript) <export default as File>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/ui/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/shared/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/api/index.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function ExportButtons({ data, nomeArquivo, colunas, filtros, className = '', disabled = false, onExportStart, onExportComplete, onExportError }) {
    const [isExporting, setIsExporting] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(null);
    const handleExport = async (formato)=>{
        if (disabled || isExporting) return;
        try {
            setIsExporting(formato);
            onExportStart?.();
            const opcoes = {
                formato,
                dados: data,
                nome_arquivo: nomeArquivo,
                colunas,
                filtros_aplicados: filtros
            };
            let result;
            if (formato === 'csv') {
                // Exportação CSV client-side
                result = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportService"].csv.exportar(data, nomeArquivo, colunas);
                if (result.sucesso && result.url) {
                    const link = document.createElement('a');
                    link.href = result.url;
                    link.download = result.nome_arquivo;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
            } else {
                // Exportação PDF/Excel via backend
                const response = formato === 'pdf' ? await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportService"].pdf.exportar(opcoes) : await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportService"].excel.exportar(opcoes);
                const blob = new Blob([
                    response.data
                ], {
                    type: formato === 'pdf' ? 'application/pdf' : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportService"].utils.baixarArquivo(blob, `${nomeArquivo}.${formato}`);
                result = {
                    sucesso: true,
                    nome_arquivo: `${nomeArquivo}.${formato}`
                };
            }
            onExportComplete?.(result);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
            onExportError?.(errorMessage);
        } finally{
            setIsExporting(null);
        }
    };
    const isDisabled = disabled || !data || data.length === 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center space-x-2 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                size: "sm",
                onClick: ()=>handleExport('csv'),
                disabled: isDisabled || isExporting === 'csv',
                className: "text-green-600 hover:text-green-800",
                children: [
                    isExporting === 'csv' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-4 w-4 border-b-2 border-green-600 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/export/ExportButtons.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                        className: "h-4 w-4 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/export/ExportButtons.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this),
                    "CSV"
                ]
            }, void 0, true, {
                fileName: "[project]/apps/client/src/components/export/ExportButtons.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                size: "sm",
                onClick: ()=>handleExport('excel'),
                disabled: isDisabled || isExporting === 'excel',
                className: "text-green-600 hover:text-green-800",
                children: [
                    isExporting === 'excel' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-4 w-4 border-b-2 border-green-600 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/export/ExportButtons.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                        className: "h-4 w-4 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/export/ExportButtons.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this),
                    "Excel"
                ]
            }, void 0, true, {
                fileName: "[project]/apps/client/src/components/export/ExportButtons.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                size: "sm",
                onClick: ()=>handleExport('pdf'),
                disabled: isDisabled || isExporting === 'pdf',
                className: "text-red-600 hover:text-red-800",
                children: [
                    isExporting === 'pdf' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-4 w-4 border-b-2 border-red-600 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/export/ExportButtons.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                        className: "h-4 w-4 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/components/export/ExportButtons.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this),
                    "PDF"
                ]
            }, void 0, true, {
                fileName: "[project]/apps/client/src/components/export/ExportButtons.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/client/src/components/export/ExportButtons.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/client/src/components/export/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$export$2f$ExportButtons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/src/components/export/ExportButtons.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/apps/client/src/lib/mocks/gestao.mock.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/apps/client/src/lib/mocks/dashboards.mock.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/apps/client/src/lib/mocks/aniversarios.mock.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/apps/client/src/lib/mocks/custo-operacional.mock.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/apps/client/src/lib/mocks/usuarios.mock.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/apps/client/src/lib/mocks/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$lib$2f$mocks$2f$gestao$2e$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/src/lib/mocks/gestao.mock.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$lib$2f$mocks$2f$dashboards$2e$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/src/lib/mocks/dashboards.mock.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$lib$2f$mocks$2f$aniversarios$2e$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/src/lib/mocks/aniversarios.mock.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$lib$2f$mocks$2f$custo$2d$operacional$2e$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/src/lib/mocks/custo-operacional.mock.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$lib$2f$mocks$2f$usuarios$2e$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/src/lib/mocks/usuarios.mock.ts [app-ssr] (ecmascript)");
;
;
;
;
;
}),
"[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UsuariosPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/ui/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/client/src/components/charts/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$LineChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/src/components/charts/LineChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$BarChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/src/components/charts/BarChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$PieChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/src/components/charts/PieChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$BarChartTest$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/src/components/charts/BarChartTest.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$export$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/client/src/components/export/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$export$2f$ExportButtons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/src/components/export/ExportButtons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$lib$2f$mocks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/client/src/lib/mocks/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$lib$2f$mocks$2f$usuarios$2e$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/src/lib/mocks/usuarios.mock.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parseISO.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$pt$2d$BR$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/pt-BR.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
function UsuariosPage() {
    const [viewType, setViewType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('analise');
    const [dataInicio, setDataInicio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('2025-01-01');
    const [dataFim, setDataFim] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('2025-09-30');
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Filtrar dados por período
    const dadosFiltrados = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const inicio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseISO"])(dataInicio);
        const fim = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseISO"])(dataFim);
        return {
            usuarios: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$lib$2f$mocks$2f$usuarios$2e$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockAtividadesUsuarios"].filter((ativ)=>{
                const competencia = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseISO"])(ativ.competencia + '-01');
                return competencia >= inicio && competencia <= fim;
            }),
            clientes: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$lib$2f$mocks$2f$usuarios$2e$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockAtividadesClientes"].filter((ativ)=>{
                const competencia = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseISO"])(ativ.competencia + '-01');
                return competencia >= inicio && competencia <= fim;
            })
        };
    }, [
        dataInicio,
        dataFim
    ]);
    // Calcular resumo dos dados filtrados
    const resumoFiltrado = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const { usuarios } = dadosFiltrados;
        const totalAtividades = usuarios.reduce((acc, ativ)=>acc + ativ.lancamentos, 0);
        const totalImportacoes = usuarios.reduce((acc, ativ)=>acc + ativ.importacoes, 0);
        const totalLancamentos = usuarios.reduce((acc, ativ)=>acc + ativ.lancamentos, 0);
        const totalLancamentosManuais = usuarios.reduce((acc, ativ)=>acc + ativ.lancamentos_manuais, 0);
        // Calcular total de horas
        const totalHoras = usuarios.reduce((acc, ativ)=>{
            const [hours, minutes, seconds] = ativ.horas_trabalhadas.split(':').map(Number);
            return acc + hours + minutes / 60 + seconds / 3600;
        }, 0);
        return {
            total_atividades: totalAtividades,
            total_importacoes: totalImportacoes,
            total_lancamentos: totalLancamentos,
            total_lancamentos_manuais: totalLancamentosManuais,
            total_horas_ativas: Math.round(totalHoras)
        };
    }, [
        dadosFiltrados
    ]);
    // Agrupar dados por usuário para análise
    const dadosPorUsuario = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const agrupado = dadosFiltrados.usuarios.reduce((acc, ativ)=>{
            if (!acc[ativ.usuario]) {
                acc[ativ.usuario] = {
                    usuario: ativ.usuario,
                    total_horas: 0,
                    total_importacoes: 0,
                    total_lancamentos: 0,
                    total_lancamentos_manuais: 0,
                    eficiencia_media: 0,
                    produtividade_media: 0,
                    competencias: []
                };
            }
            const [hours, minutes, seconds] = ativ.horas_trabalhadas.split(':').map(Number);
            const totalHoras = hours + minutes / 60 + seconds / 3600;
            acc[ativ.usuario].total_horas += totalHoras;
            acc[ativ.usuario].total_importacoes += ativ.importacoes;
            acc[ativ.usuario].total_lancamentos += ativ.lancamentos;
            acc[ativ.usuario].total_lancamentos_manuais += ativ.lancamentos_manuais;
            acc[ativ.usuario].competencias.push(ativ);
            return acc;
        }, {});
        // Calcular médias
        Object.values(agrupado).forEach((usuario)=>{
            usuario.eficiencia_media = usuario.competencias.reduce((acc, c)=>acc + c.eficiencia, 0) / usuario.competencias.length;
            usuario.produtividade_media = usuario.competencias.reduce((acc, c)=>acc + c.produtividade, 0) / usuario.competencias.length;
        });
        return Object.values(agrupado);
    }, [
        dadosFiltrados.usuarios
    ]);
    // Dados para gráfico de evolução mensal
    const dadosEvolucao = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const agrupado = dadosFiltrados.usuarios.reduce((acc, ativ)=>{
            const mes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseISO"])(ativ.competencia + '-01'), 'MMM/yyyy', {
                locale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$pt$2d$BR$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ptBR"]
            });
            if (!acc[mes]) {
                acc[mes] = 0;
            }
            acc[mes] += ativ.lancamentos;
            return acc;
        }, {});
        const dados = Object.entries(agrupado).sort((a, b)=>{
            const [mesA, anoA] = a[0].split('/');
            const [mesB, anoB] = b[0].split('/');
            const dataA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseISO"])(`${anoA}-${mesA === 'Jan' ? '01' : mesA === 'Fev' ? '02' : mesA === 'Mar' ? '03' : mesA === 'Abr' ? '04' : mesA === 'Mai' ? '05' : mesA === 'Jun' ? '06' : mesA === 'Jul' ? '07' : mesA === 'Ago' ? '08' : mesA === 'Set' ? '09' : mesA === 'Out' ? '10' : mesA === 'Nov' ? '11' : '12'}-01`);
            const dataB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseISO"])(`${anoB}-${mesB === 'Jan' ? '01' : mesB === 'Fev' ? '02' : mesB === 'Mar' ? '03' : mesB === 'Abr' ? '04' : mesB === 'Mai' ? '05' : mesB === 'Jun' ? '06' : mesB === 'Jul' ? '07' : mesB === 'Ago' ? '08' : mesB === 'Set' ? '09' : mesB === 'Out' ? '10' : mesB === 'Nov' ? '11' : '12'}-01`);
            return dataA.getTime() - dataB.getTime();
        }).map(([mes, atividades])=>({
                mes,
                atividades
            }));
        // Se não há dados, retornar dados de exemplo
        if (dados.length === 0) {
            return [
                {
                    mes: 'Jan/2025',
                    atividades: 3319
                },
                {
                    mes: 'Fev/2025',
                    atividades: 3200
                },
                {
                    mes: 'Mar/2025',
                    atividades: 2698
                },
                {
                    mes: 'Abr/2025',
                    atividades: 3404
                },
                {
                    mes: 'Mai/2025',
                    atividades: 3183
                },
                {
                    mes: 'Jun/2025',
                    atividades: 2911
                },
                {
                    mes: 'Jul/2025',
                    atividades: 3300
                },
                {
                    mes: 'Ago/2025',
                    atividades: 2753
                },
                {
                    mes: 'Set/2025',
                    atividades: 3161
                }
            ];
        }
        return dados;
    }, [
        dadosFiltrados.usuarios
    ]);
    // Dados para gráfico de produtividade
    const dadosProdutividade = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const dados = dadosPorUsuario.sort((a, b)=>b.produtividade_media - a.produtividade_media).slice(0, 8).map((usuario)=>({
                usuario: usuario.usuario,
                produtividade: Math.min(Math.round(usuario.produtividade_media * 10) / 10, 50) // Limitar a 50 para melhor visualização
            }));
        // Se não há dados, retornar dados de exemplo
        if (dados.length === 0) {
            return [
                {
                    usuario: 'GERENTE',
                    produtividade: 15.3
                },
                {
                    usuario: 'SAMYLE',
                    produtividade: 16.2
                },
                {
                    usuario: 'ALISSON',
                    produtividade: 12.5
                },
                {
                    usuario: 'FABIO1',
                    produtividade: 9.7
                },
                {
                    usuario: 'MARIA',
                    produtividade: 14.1
                },
                {
                    usuario: 'JOÃO',
                    produtividade: 11.4
                }
            ];
        }
        return dados;
    }, [
        dadosPorUsuario
    ]);
    // Dados para gráfico de eficiência
    const dadosEficiencia = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const distribuicao = {
            '90-100%': 0,
            '80-89%': 0,
            '70-79%': 0,
            '60-69%': 0,
            '50-59%': 0
        };
        dadosPorUsuario.forEach((usuario)=>{
            const eficiencia = usuario.eficiencia_media;
            if (eficiencia >= 90) distribuicao['90-100%']++;
            else if (eficiencia >= 80) distribuicao['80-89%']++;
            else if (eficiencia >= 70) distribuicao['70-79%']++;
            else if (eficiencia >= 60) distribuicao['60-69%']++;
            else distribuicao['50-59%']++;
        });
        const dados = Object.entries(distribuicao).filter(([_, count])=>count > 0).map(([faixa, count])=>({
                faixa,
                usuarios: count
            }));
        // Se não há dados, retornar dados de exemplo
        if (dados.length === 0) {
            return [
                {
                    faixa: '90-100%',
                    usuarios: 2
                },
                {
                    faixa: '80-89%',
                    usuarios: 3
                },
                {
                    faixa: '70-79%',
                    usuarios: 1
                },
                {
                    faixa: '60-69%',
                    usuarios: 0
                },
                {
                    faixa: '50-59%',
                    usuarios: 0
                }
            ];
        }
        return dados;
    }, [
        dadosPorUsuario
    ]);
    const formatarHoras = (horas)=>{
        const horasInt = Math.floor(horas);
        const minutos = Math.round((horas - horasInt) * 60);
        return `${horasInt}:${minutos.toString().padStart(2, '0')}:00`;
    };
    const renderAnaliseGeral = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    children: "Filtros de Período"
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                    children: "Selecione o período para análise das atividades dos usuários"
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 224,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                            lineNumber: 222,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 items-end",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-medium",
                                                children: "Data Início"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                lineNumber: 231,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                type: "date",
                                                value: dataInicio,
                                                onChange: (e)=>setDataInicio(e.target.value),
                                                className: "mt-1"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                lineNumber: 232,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-medium",
                                                children: "Data Fim"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                lineNumber: 240,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                type: "date",
                                                value: dataFim,
                                                onChange: (e)=>setDataFim(e.target.value),
                                                className: "mt-1"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                lineNumber: 241,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                        lineNumber: 239,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "bg-gray-800 hover:bg-gray-900",
                                        children: "Pesquisar"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                            lineNumber: 228,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                    lineNumber: 221,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "pb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-sm font-medium",
                                        children: "Total de Atividades Realizadas"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 258,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold",
                                        children: resumoFiltrado.total_atividades.toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                        lineNumber: 262,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 261,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                            lineNumber: 257,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "pb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-sm font-medium",
                                        children: "Importações Totais"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 267,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold",
                                        children: resumoFiltrado.total_importacoes.toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                        lineNumber: 271,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 270,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                            lineNumber: 266,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "pb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-sm font-medium",
                                        children: "Total de Lançamentos"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                        lineNumber: 277,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 276,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold",
                                        children: resumoFiltrado.total_lancamentos.toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                        lineNumber: 280,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 279,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                            lineNumber: 275,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "pb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-sm font-medium",
                                        children: "Total de Lançamentos Manuais"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                        lineNumber: 286,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 285,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold",
                                        children: resumoFiltrado.total_lancamentos_manuais.toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                        lineNumber: 289,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 288,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                            lineNumber: 284,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "pb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-sm font-medium",
                                        children: "Total de Horas Ativas"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                        lineNumber: 295,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 294,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold",
                                        children: [
                                            resumoFiltrado.total_horas_ativas.toLocaleString(),
                                            "h"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                        lineNumber: 298,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 297,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                            lineNumber: 293,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                    lineNumber: 256,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    children: "Atividades por Mês"
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 306,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                    children: "Evolução das atividades realizadas pelos usuários ao longo do período"
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 307,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                            lineNumber: 305,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$LineChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineChart"], {
                                data: dadosEvolucao,
                                xKey: "mes",
                                yKey: "atividades",
                                height: 300,
                                color: "#3b82f6"
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                            lineNumber: 311,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                    lineNumber: 304,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            children: "Produtividade dos Usuários"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                            lineNumber: 326,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                            children: "Lançamentos por hora dos usuários mais produtivos"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                            lineNumber: 327,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 325,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$BarChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                                        data: dadosProdutividade,
                                        xKey: "usuario",
                                        yKey: "produtividade",
                                        height: 250,
                                        color: "#10b981"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                        lineNumber: 332,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 331,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                            lineNumber: 324,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            children: "Distribuição de Eficiência"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                            lineNumber: 344,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                            children: "Percentual de usuários por faixa de eficiência"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                            lineNumber: 345,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 343,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$PieChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PieChart"], {
                                        data: dadosEficiencia,
                                        nameKey: "faixa",
                                        valueKey: "usuarios",
                                        height: 250
                                    }, void 0, false, {
                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                        lineNumber: 350,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 349,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                            lineNumber: 342,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                    lineNumber: 323,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
            lineNumber: 219,
            columnNumber: 5
        }, this);
    const renderAtividadesUsuarios = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold",
                            children: "Atividades por Usuário"
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                            lineNumber: 365,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "Buscar Usuário",
                                    value: searchTerm,
                                    onChange: (e)=>setSearchTerm(e.target.value),
                                    className: "w-64"
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 367,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$export$2f$ExportButtons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExportButtons"], {
                                    data: dadosPorUsuario,
                                    nomeArquivo: "atividades_por_usuario",
                                    colunas: [
                                        'usuario',
                                        'total_horas',
                                        'total_importacoes',
                                        'total_lancamentos',
                                        'total_lancamentos_manuais',
                                        'eficiencia_media',
                                        'produtividade_media'
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 373,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                            lineNumber: 366,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                    lineNumber: 364,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-4 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-gray-600",
                                                    children: "Total de Usuários"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-gray-900",
                                                    children: dadosPorUsuario.length
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                            lineNumber: 386,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-6 h-6 text-blue-600",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                lineNumber: 391,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                            lineNumber: 390,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 385,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                lineNumber: 384,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                            lineNumber: 383,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-gray-600",
                                                    children: "Horas Totais"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                    lineNumber: 403,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-gray-900",
                                                    children: [
                                                        Math.round(dadosPorUsuario.reduce((acc, u)=>acc + u.total_horas, 0)),
                                                        "h"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                    lineNumber: 404,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                            lineNumber: 402,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 bg-green-100 rounded-full flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-6 h-6 text-green-600",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                lineNumber: 409,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                            lineNumber: 408,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 401,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                lineNumber: 400,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                            lineNumber: 399,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-gray-600",
                                                    children: "Lançamentos Totais"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                    lineNumber: 421,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-gray-900",
                                                    children: dadosPorUsuario.reduce((acc, u)=>acc + u.total_lancamentos, 0).toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                    lineNumber: 422,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                            lineNumber: 420,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-6 h-6 text-purple-600",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                    lineNumber: 428,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                lineNumber: 427,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                            lineNumber: 426,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 419,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                lineNumber: 418,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                            lineNumber: 417,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-gray-600",
                                                    children: "Eficiência Média"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                    lineNumber: 439,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-gray-900",
                                                    children: [
                                                        Math.round(dadosPorUsuario.reduce((acc, u)=>acc + u.eficiencia_media, 0) / dadosPorUsuario.length),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                    lineNumber: 440,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                            lineNumber: 438,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-6 h-6 text-orange-600",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M13 10V3L4 14h7v7l9-11h-7z"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                    lineNumber: 446,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                lineNumber: 445,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                            lineNumber: 444,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 437,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                lineNumber: 436,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                            lineNumber: 435,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                    lineNumber: 382,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "p-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-gray-50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Usuários"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                lineNumber: 462,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-3 h-3",
                                                                fill: "currentColor",
                                                                viewBox: "0 0 20 20",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fillRule: "evenodd",
                                                                    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                                    clipRule: "evenodd"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                    lineNumber: 464,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                lineNumber: 463,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                        lineNumber: 461,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                    lineNumber: 460,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold text-gray-700",
                                                                children: "JAN/2025"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                lineNumber: 470,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-4 gap-2 text-xs",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center",
                                                                        children: "Horas"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                        lineNumber: 472,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center",
                                                                        children: "Import."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                        lineNumber: 473,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center",
                                                                        children: "Lanç."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                        lineNumber: 474,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center",
                                                                        children: "L. Man."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                        lineNumber: 475,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                lineNumber: 471,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                        lineNumber: 469,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                    lineNumber: 468,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold text-gray-700",
                                                                children: "FEV/2025"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                lineNumber: 481,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-4 gap-2 text-xs",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center",
                                                                        children: "Horas"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                        lineNumber: 483,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center",
                                                                        children: "Import."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                        lineNumber: 484,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center",
                                                                        children: "Lanç."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                        lineNumber: 485,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center",
                                                                        children: "L. Man."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                        lineNumber: 486,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                lineNumber: 482,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                        lineNumber: 480,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                    lineNumber: 479,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold text-gray-700",
                                                                children: "MAR/2025"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                lineNumber: 492,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-4 gap-2 text-xs",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center",
                                                                        children: "Horas"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                        lineNumber: 494,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center",
                                                                        children: "Import."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                        lineNumber: 495,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center",
                                                                        children: "Lanç."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                        lineNumber: 496,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center",
                                                                        children: "L. Man."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                        lineNumber: 497,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                lineNumber: 493,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                        lineNumber: 491,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                    lineNumber: 490,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                            lineNumber: 459,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                        lineNumber: 458,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "bg-white divide-y divide-gray-200",
                                        children: dadosPorUsuario.filter((usuario)=>usuario.usuario.toLowerCase().includes(searchTerm.toLowerCase())).map((usuario, index)=>{
                                            const jan = usuario.competencias.find((c)=>c.competencia === '2025-01');
                                            const fev = usuario.competencias.find((c)=>c.competencia === '2025-02');
                                            const mar = usuario.competencias.find((c)=>c.competencia === '2025-03');
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: `hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 border-r border-gray-200",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center space-x-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs font-bold text-blue-600",
                                                                        children: usuario.usuario.charAt(0)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                        lineNumber: 518,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                    lineNumber: 517,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: usuario.usuario
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                    lineNumber: 522,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                            lineNumber: 516,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                        lineNumber: 515,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-4 gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center font-mono text-xs bg-gray-100 px-2 py-1 rounded",
                                                                    children: jan?.horas_trabalhadas || '00:00:00'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                    lineNumber: 527,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center font-semibold text-blue-600",
                                                                    children: jan?.importacoes || 0
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                    lineNumber: 530,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center font-semibold text-green-600",
                                                                    children: jan?.lancamentos || 0
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                    lineNumber: 533,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center font-semibold text-orange-600",
                                                                    children: jan?.lancamentos_manuais || 0
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                    lineNumber: 536,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                            lineNumber: 526,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                        lineNumber: 525,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-4 gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center font-mono text-xs bg-gray-100 px-2 py-1 rounded",
                                                                    children: fev?.horas_trabalhadas || '00:00:00'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                    lineNumber: 543,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center font-semibold text-blue-600",
                                                                    children: fev?.importacoes || 0
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                    lineNumber: 546,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center font-semibold text-green-600",
                                                                    children: fev?.lancamentos || 0
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                    lineNumber: 549,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center font-semibold text-orange-600",
                                                                    children: fev?.lancamentos_manuais || 0
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                    lineNumber: 552,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                            lineNumber: 542,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                        lineNumber: 541,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-700",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-4 gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center font-mono text-xs bg-gray-100 px-2 py-1 rounded",
                                                                    children: mar?.horas_trabalhadas || '00:00:00'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                    lineNumber: 559,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center font-semibold text-blue-600",
                                                                    children: mar?.importacoes || 0
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                    lineNumber: 562,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center font-semibold text-green-600",
                                                                    children: mar?.lancamentos || 0
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                    lineNumber: 565,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center font-semibold text-orange-600",
                                                                    children: mar?.lancamentos_manuais || 0
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                    lineNumber: 568,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                            lineNumber: 558,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                        lineNumber: 557,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, usuario.usuario, true, {
                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                lineNumber: 514,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                        lineNumber: 503,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                lineNumber: 457,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                            lineNumber: 456,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                        lineNumber: 455,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                    lineNumber: 454,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
            lineNumber: 363,
            columnNumber: 5
        }, this);
    const renderAtividadesClientes = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold",
                            children: "Atividades por Cliente"
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                            lineNumber: 587,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "Buscar Empresa",
                                    value: searchTerm,
                                    onChange: (e)=>setSearchTerm(e.target.value),
                                    className: "w-64"
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 589,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$export$2f$ExportButtons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExportButtons"], {
                                    data: dadosFiltrados.clientes,
                                    nomeArquivo: "atividades_por_cliente",
                                    colunas: [
                                        'id',
                                        'razao_social',
                                        'competencia',
                                        'horas_trabalhadas',
                                        'importacoes',
                                        'lancamentos',
                                        'lancamentos_manuais',
                                        'valor_hora',
                                        'custo_total',
                                        'rentabilidade'
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 595,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                            lineNumber: 588,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                    lineNumber: 586,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "p-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-gray-50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "ID"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                lineNumber: 611,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-3 h-3",
                                                                fill: "currentColor",
                                                                viewBox: "0 0 20 20",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fillRule: "evenodd",
                                                                    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                                    clipRule: "evenodd"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                    lineNumber: 613,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                lineNumber: 612,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                        lineNumber: 610,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                    lineNumber: 609,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200",
                                                    children: "Razão Social"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                    lineNumber: 617,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold text-gray-700",
                                                                children: "JAN/2025"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                lineNumber: 622,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-4 gap-2 text-xs",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center",
                                                                        children: "Horas"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                        lineNumber: 624,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center",
                                                                        children: "Import."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                        lineNumber: 625,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center",
                                                                        children: "Lanç."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                        lineNumber: 626,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center",
                                                                        children: "L. Man."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                        lineNumber: 627,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                lineNumber: 623,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                        lineNumber: 621,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                    lineNumber: 620,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold text-gray-700",
                                                                children: "FEV/2025"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                lineNumber: 633,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-4 gap-2 text-xs",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center",
                                                                        children: "Horas"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                        lineNumber: 635,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center",
                                                                        children: "Import."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                        lineNumber: 636,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center",
                                                                        children: "Lanç."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                        lineNumber: 637,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center",
                                                                        children: "L. Man."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                        lineNumber: 638,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                lineNumber: 634,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                        lineNumber: 632,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                    lineNumber: 631,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold text-gray-700",
                                                                children: "MAR/2025"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                lineNumber: 644,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-4 gap-2 text-xs",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center",
                                                                        children: "Horas"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                        lineNumber: 646,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center",
                                                                        children: "Import."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                        lineNumber: 647,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center",
                                                                        children: "Lanç."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                        lineNumber: 648,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center",
                                                                        children: "L. Man."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                        lineNumber: 649,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                lineNumber: 645,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                        lineNumber: 643,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                    lineNumber: 642,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                            lineNumber: 608,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                        lineNumber: 607,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "bg-white divide-y divide-gray-200",
                                        children: dadosFiltrados.clientes.filter((cliente)=>cliente.razao_social.toLowerCase().includes(searchTerm.toLowerCase())).reduce((acc, cliente)=>{
                                            const existing = acc.find((c)=>c.id === cliente.id);
                                            if (existing) {
                                                existing.competencias.push(cliente);
                                            } else {
                                                acc.push({
                                                    id: cliente.id,
                                                    razao_social: cliente.razao_social,
                                                    competencias: [
                                                        cliente
                                                    ]
                                                });
                                            }
                                            return acc;
                                        }, []).map((cliente, index)=>{
                                            const jan = cliente.competencias.find((c)=>c.competencia === '2025-01');
                                            const fev = cliente.competencias.find((c)=>c.competencia === '2025-02');
                                            const mar = cliente.competencias.find((c)=>c.competencia === '2025-03');
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: `hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 border-r border-gray-200",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-8 h-8 bg-green-100 rounded-full flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-bold text-green-600",
                                                                children: cliente.id
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                lineNumber: 682,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                            lineNumber: 681,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                        lineNumber: 680,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 text-sm text-gray-900 max-w-xs border-r border-gray-200",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-medium truncate",
                                                            title: cliente.razao_social,
                                                            children: cliente.razao_social
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                            lineNumber: 688,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                        lineNumber: 687,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-4 gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center font-mono text-xs bg-gray-100 px-2 py-1 rounded",
                                                                    children: jan?.horas_trabalhadas || '00:00:00'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                    lineNumber: 694,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center font-semibold text-blue-600",
                                                                    children: jan?.importacoes || 0
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                    lineNumber: 697,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center font-semibold text-green-600",
                                                                    children: jan?.lancamentos || 0
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                    lineNumber: 700,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center font-semibold text-orange-600",
                                                                    children: jan?.lancamentos_manuais || 0
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                    lineNumber: 703,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                            lineNumber: 693,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                        lineNumber: 692,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-4 gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center font-mono text-xs bg-gray-100 px-2 py-1 rounded",
                                                                    children: fev?.horas_trabalhadas || '00:00:00'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                    lineNumber: 710,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center font-semibold text-blue-600",
                                                                    children: fev?.importacoes || 0
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                    lineNumber: 713,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center font-semibold text-green-600",
                                                                    children: fev?.lancamentos || 0
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                    lineNumber: 716,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center font-semibold text-orange-600",
                                                                    children: fev?.lancamentos_manuais || 0
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                    lineNumber: 719,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                            lineNumber: 709,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                        lineNumber: 708,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-700",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-4 gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center font-mono text-xs bg-gray-100 px-2 py-1 rounded",
                                                                    children: mar?.horas_trabalhadas || '00:00:00'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                    lineNumber: 726,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center font-semibold text-blue-600",
                                                                    children: mar?.importacoes || 0
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                    lineNumber: 729,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center font-semibold text-green-600",
                                                                    children: mar?.lancamentos || 0
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                    lineNumber: 732,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center font-semibold text-orange-600",
                                                                    children: mar?.lancamentos_manuais || 0
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                                    lineNumber: 735,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                            lineNumber: 725,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                        lineNumber: 724,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, cliente.id, true, {
                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                lineNumber: 679,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                        lineNumber: 655,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                lineNumber: 606,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                            lineNumber: 605,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                        lineNumber: 604,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                    lineNumber: 603,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
            lineNumber: 585,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold",
                                children: "Análise de Usuários"
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                lineNumber: 756,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mt-1",
                                children: "Desempenho e atividades dos usuários por competência"
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                lineNumber: 757,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                        lineNumber: 755,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/gestao/usuarios/estrategico",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    children: "Dashboard Estratégico"
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 763,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                lineNumber: 762,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$export$2f$ExportButtons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExportButtons"], {
                                data: dadosFiltrados.usuarios,
                                nomeArquivo: "atividades_usuarios",
                                colunas: [
                                    'usuario',
                                    'competencia',
                                    'horas_trabalhadas',
                                    'importacoes',
                                    'lancamentos',
                                    'lancamentos_manuais'
                                ]
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                lineNumber: 767,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                        lineNumber: 761,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                lineNumber: 754,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: viewType === 'analise' ? 'default' : 'outline',
                        onClick: ()=>setViewType('analise'),
                        children: "Análise Geral"
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                        lineNumber: 777,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: viewType === 'usuarios' ? 'default' : 'outline',
                        onClick: ()=>setViewType('usuarios'),
                        children: "Atividade por Usuário"
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                        lineNumber: 783,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: viewType === 'modulo' ? 'default' : 'outline',
                        onClick: ()=>setViewType('modulo'),
                        children: "Atividade por Módulo"
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                        lineNumber: 789,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: viewType === 'cliente' ? 'default' : 'outline',
                        onClick: ()=>setViewType('cliente'),
                        children: "Atividade por Cliente"
                    }, void 0, false, {
                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                        lineNumber: 795,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                lineNumber: 776,
                columnNumber: 7
            }, this),
            viewType === 'analise' && renderAnaliseGeral(),
            viewType === 'usuarios' && renderAtividadesUsuarios(),
            viewType === 'modulo' && renderAtividadesModulos(),
            viewType === 'cliente' && renderAtividadesClientes()
        ]
    }, void 0, true, {
        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
        lineNumber: 752,
        columnNumber: 5
    }, this);
    //TURBOPACK unreachable
    ;
    // Função para renderizar atividades por módulo
    function renderAtividadesModulos() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    children: "Teste BarChart Simples"
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 818,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                    children: "Teste para verificar se o problema é com o componente ou dados"
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 819,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                            lineNumber: 817,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$BarChartTest$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChartTest"], {}, void 0, false, {
                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                lineNumber: 822,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                            lineNumber: 821,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                    lineNumber: 816,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5 text-blue-600",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                lineNumber: 831,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                            lineNumber: 830,
                                            columnNumber: 15
                                        }, this),
                                        "Comparativo de Módulos"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 829,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                    children: "Distribuição de horas trabalhadas por módulo no período selecionado"
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 835,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                            lineNumber: 828,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-80",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$BarChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                                    data: [
                                        {
                                            name: 'Escrita Fiscal',
                                            value: 9644
                                        },
                                        {
                                            name: 'Folha de Pagamento',
                                            value: 9099
                                        },
                                        {
                                            name: 'Contabil',
                                            value: 8754
                                        },
                                        {
                                            name: 'Honorários',
                                            value: 443
                                        },
                                        {
                                            name: 'Patrimônio',
                                            value: 70
                                        },
                                        {
                                            name: 'Lalur',
                                            value: 33
                                        },
                                        {
                                            name: 'Atualizar',
                                            value: 2
                                        },
                                        {
                                            name: 'Protocolos',
                                            value: 2
                                        }
                                    ],
                                    xKey: "name",
                                    yKey: "value",
                                    color: "#3B82F6",
                                    title: "Horas por Módulo",
                                    description: "Total de horas trabalhadas em cada módulo"
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 841,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                lineNumber: 840,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                            lineNumber: 839,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                    lineNumber: 827,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5 text-green-600",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                lineNumber: 867,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                            lineNumber: 866,
                                            columnNumber: 15
                                        }, this),
                                        "Evolução Mensal dos Módulos"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 865,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                    children: "Comparação da evolução temporal de todos os módulos do sistema"
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 871,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                            lineNumber: 864,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-80",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$components$2f$charts$2f$LineChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineChart"], {
                                    data: [
                                        {
                                            mes: 'Jan/2025',
                                            'Escrita Fiscal': 1145,
                                            'Folha de Pagamento': 1175,
                                            'Contabil': 945
                                        },
                                        {
                                            mes: 'Fev/2025',
                                            'Escrita Fiscal': 1051,
                                            'Folha de Pagamento': 1171,
                                            'Contabil': 994
                                        },
                                        {
                                            mes: 'Mar/2025',
                                            'Escrita Fiscal': 974,
                                            'Folha de Pagamento': 876,
                                            'Contabil': 798
                                        },
                                        {
                                            mes: 'Abr/2025',
                                            'Escrita Fiscal': 1185,
                                            'Folha de Pagamento': 1071,
                                            'Contabil': 1092
                                        },
                                        {
                                            mes: 'Mai/2025',
                                            'Escrita Fiscal': 1077,
                                            'Folha de Pagamento': 999,
                                            'Contabil': 1053
                                        },
                                        {
                                            mes: 'Jun/2025',
                                            'Escrita Fiscal': 991,
                                            'Folha de Pagamento': 932,
                                            'Contabil': 961
                                        },
                                        {
                                            mes: 'Jul/2025',
                                            'Escrita Fiscal': 1164,
                                            'Folha de Pagamento': 1000,
                                            'Contabil': 1073
                                        },
                                        {
                                            mes: 'Ago/2025',
                                            'Escrita Fiscal': 966,
                                            'Folha de Pagamento': 885,
                                            'Contabil': 847
                                        },
                                        {
                                            mes: 'Set/2025',
                                            'Escrita Fiscal': 1092,
                                            'Folha de Pagamento': 990,
                                            'Contabil': 990
                                        }
                                    ],
                                    xKey: "mes",
                                    yKey: "Escrita Fiscal",
                                    color: "#3B82F6",
                                    title: "Evolução de Todos os Módulos",
                                    description: "Horas trabalhadas por mês em todos os módulos do sistema",
                                    multiLine: [
                                        {
                                            key: 'Escrita Fiscal',
                                            color: '#3B82F6',
                                            name: 'Escrita Fiscal'
                                        },
                                        {
                                            key: 'Folha de Pagamento',
                                            color: '#10B981',
                                            name: 'Folha de Pagamento'
                                        },
                                        {
                                            key: 'Contabil',
                                            color: '#F59E0B',
                                            name: 'Contabil'
                                        }
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 877,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                lineNumber: 876,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                            lineNumber: 875,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                    lineNumber: 863,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5 text-purple-600",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                lineNumber: 909,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                            lineNumber: 908,
                                            columnNumber: 15
                                        }, this),
                                        "Detalhamento por Módulo"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 907,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                    children: "Visão detalhada das horas trabalhadas em cada módulo por mês"
                                }, void 0, false, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 913,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                            lineNumber: 906,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "border-b border-gray-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "text-left py-3 px-4 font-semibold text-gray-700",
                                                        children: "Módulo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                        lineNumber: 922,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "text-center py-3 px-2 font-semibold text-gray-700",
                                                        children: "Jan/2025"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                        lineNumber: 923,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "text-center py-3 px-2 font-semibold text-gray-700",
                                                        children: "Fev/2025"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                        lineNumber: 924,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "text-center py-3 px-2 font-semibold text-gray-700",
                                                        children: "Mar/2025"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                        lineNumber: 925,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "text-center py-3 px-2 font-semibold text-gray-700",
                                                        children: "Abr/2025"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                        lineNumber: 926,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "text-center py-3 px-2 font-semibold text-gray-700",
                                                        children: "Mai/2025"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                        lineNumber: 927,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "text-center py-3 px-2 font-semibold text-gray-700",
                                                        children: "Jun/2025"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                        lineNumber: 928,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "text-center py-3 px-2 font-semibold text-gray-700",
                                                        children: "Jul/2025"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                        lineNumber: 929,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "text-center py-3 px-2 font-semibold text-gray-700",
                                                        children: "Ago/2025"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                        lineNumber: 930,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "text-center py-3 px-2 font-semibold text-gray-700",
                                                        children: "Set/2025"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                        lineNumber: 931,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "text-center py-3 px-2 font-semibold text-gray-700 bg-gray-50",
                                                        children: "Total"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                        lineNumber: 932,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                lineNumber: 921,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                            lineNumber: 920,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$src$2f$lib$2f$mocks$2f$usuarios$2e$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockComparativoModulos"].map((modulo, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: `border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 px-4 font-medium text-gray-900",
                                                            children: modulo.modulo
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                            lineNumber: 938,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "text-center py-3 px-2 text-gray-600 font-mono",
                                                            children: modulo.modulo === 'Escrita Fiscal' ? '1.145h' : modulo.modulo === 'Folha de Pagamento' ? '1.175h' : modulo.modulo === 'Contabil' ? '945h' : modulo.modulo === 'Honorários' ? '61h' : modulo.modulo === 'Patrimônio' ? '9h' : modulo.modulo === 'Lalur' ? '8h' : modulo.modulo === 'Atualizar' ? '0h' : modulo.modulo === 'Protocolos' ? '0h' : '0h'
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                            lineNumber: 939,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "text-center py-3 px-2 text-gray-600 font-mono",
                                                            children: modulo.modulo === 'Escrita Fiscal' ? '1.051h' : modulo.modulo === 'Folha de Pagamento' ? '1.171h' : modulo.modulo === 'Contabil' ? '994h' : modulo.modulo === 'Honorários' ? '45h' : modulo.modulo === 'Patrimônio' ? '10h' : modulo.modulo === 'Lalur' ? '1h' : modulo.modulo === 'Atualizar' ? '0h' : modulo.modulo === 'Protocolos' ? '0h' : '0h'
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                            lineNumber: 949,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "text-center py-3 px-2 text-gray-600 font-mono",
                                                            children: modulo.modulo === 'Escrita Fiscal' ? '974h' : modulo.modulo === 'Folha de Pagamento' ? '876h' : modulo.modulo === 'Contabil' ? '798h' : modulo.modulo === 'Honorários' ? '40h' : modulo.modulo === 'Patrimônio' ? '4h' : modulo.modulo === 'Lalur' ? '6h' : modulo.modulo === 'Atualizar' ? '0h' : modulo.modulo === 'Protocolos' ? '0h' : '0h'
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                            lineNumber: 959,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "text-center py-3 px-2 text-gray-600 font-mono",
                                                            children: modulo.modulo === 'Escrita Fiscal' ? '1.185h' : modulo.modulo === 'Folha de Pagamento' ? '1.071h' : modulo.modulo === 'Contabil' ? '1.092h' : modulo.modulo === 'Honorários' ? '40h' : modulo.modulo === 'Patrimônio' ? '11h' : modulo.modulo === 'Lalur' ? '6h' : modulo.modulo === 'Atualizar' ? '0h' : modulo.modulo === 'Protocolos' ? '0h' : '0h'
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                            lineNumber: 969,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "text-center py-3 px-2 text-gray-600 font-mono",
                                                            children: modulo.modulo === 'Escrita Fiscal' ? '1.077h' : modulo.modulo === 'Folha de Pagamento' ? '999h' : modulo.modulo === 'Contabil' ? '1.053h' : modulo.modulo === 'Honorários' ? '40h' : modulo.modulo === 'Patrimônio' ? '11h' : modulo.modulo === 'Lalur' ? '3h' : modulo.modulo === 'Atualizar' ? '0h' : modulo.modulo === 'Protocolos' ? '0h' : '0h'
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                            lineNumber: 979,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "text-center py-3 px-2 text-gray-600 font-mono",
                                                            children: modulo.modulo === 'Escrita Fiscal' ? '991h' : modulo.modulo === 'Folha de Pagamento' ? '932h' : modulo.modulo === 'Contabil' ? '961h' : modulo.modulo === 'Honorários' ? '43h' : modulo.modulo === 'Patrimônio' ? '7h' : modulo.modulo === 'Lalur' ? '0h' : modulo.modulo === 'Atualizar' ? '0h' : modulo.modulo === 'Protocolos' ? '0h' : '0h'
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                            lineNumber: 989,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "text-center py-3 px-2 text-gray-600 font-mono",
                                                            children: modulo.modulo === 'Escrita Fiscal' ? '1.164h' : modulo.modulo === 'Folha de Pagamento' ? '1.000h' : modulo.modulo === 'Contabil' ? '1.073h' : modulo.modulo === 'Honorários' ? '48h' : modulo.modulo === 'Patrimônio' ? '4h' : modulo.modulo === 'Lalur' ? '8h' : modulo.modulo === 'Atualizar' ? '2h' : modulo.modulo === 'Protocolos' ? '1h' : '0h'
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                            lineNumber: 999,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "text-center py-3 px-2 text-gray-600 font-mono",
                                                            children: modulo.modulo === 'Escrita Fiscal' ? '966h' : modulo.modulo === 'Folha de Pagamento' ? '885h' : modulo.modulo === 'Contabil' ? '847h' : modulo.modulo === 'Honorários' ? '50h' : modulo.modulo === 'Patrimônio' ? '4h' : modulo.modulo === 'Lalur' ? '1h' : modulo.modulo === 'Atualizar' ? '0h' : modulo.modulo === 'Protocolos' ? '0h' : '0h'
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                            lineNumber: 1009,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "text-center py-3 px-2 text-gray-600 font-mono",
                                                            children: modulo.modulo === 'Escrita Fiscal' ? '1.092h' : modulo.modulo === 'Folha de Pagamento' ? '990h' : modulo.modulo === 'Contabil' ? '990h' : modulo.modulo === 'Honorários' ? '77h' : modulo.modulo === 'Patrimônio' ? '11h' : modulo.modulo === 'Lalur' ? '1h' : modulo.modulo === 'Atualizar' ? '0h' : modulo.modulo === 'Protocolos' ? '0h' : '0h'
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                            lineNumber: 1019,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "text-center py-3 px-2 text-gray-600 font-mono font-bold bg-gray-100",
                                                            children: [
                                                                modulo.total_hours.toLocaleString(),
                                                                "h"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                            lineNumber: 1029,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, modulo.modulo, true, {
                                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                                    lineNumber: 937,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                            lineNumber: 935,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                    lineNumber: 919,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                                lineNumber: 918,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                            lineNumber: 917,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
                    lineNumber: 905,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/client/src/app/(dashboard)/gestao/usuarios/page.tsx",
            lineNumber: 814,
            columnNumber: 7
        }, this);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5881d213._.js.map