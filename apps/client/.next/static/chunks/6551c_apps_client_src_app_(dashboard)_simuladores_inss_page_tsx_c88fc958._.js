(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/gestk-frontend/apps/client/src/app/(dashboard)/simuladores/inss/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SimuladorINSSPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$packages$2f$ui$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/gestk-frontend/packages/ui/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gestk-frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function SimuladorINSSPage() {
    _s();
    const [salario, setSalario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [tipoSegurado, setTiposegurado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [modalidade, setModalidade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [resultado, setResultado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [calculando, setCalculando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gestk$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const modalidadesPorSegurado = {
        "individual": [
            {
                value: "normal",
                label: "Plano Normal"
            },
            {
                value: "simplificado",
                label: "Plano Simplificado"
            }
        ],
        "facultativo": [
            {
                value: "normal",
                label: "Plano Normal"
            },
            {
                value: "simplificado",
                label: "Plano Simplificado"
            },
            {
                value: "baixaRenda",
                label: "Baixa Renda"
            }
        ],
        "especial": [
            {
                value: "obrigatoria",
                label: "Contribuição Obrigatória"
            },
            {
                value: "facultativa",
                label: "Contribuição Facultativa"
            }
        ],
        "cooperativo": [
            {
                value: "normal",
                label: "Plano Normal"
            },
            {
                value: "simplificado",
                label: "Plano Simplificado"
            }
        ],
        "mei": [
            {
                value: "meiObrigatoria",
                label: "Contribuição Obrigatória"
            },
            {
                value: "meiComplementar",
                label: "Contribuição Complementar"
            }
        ]
    };
    const modalidadesDisponiveis = modalidadesPorSegurado[tipoSegurado] || [];
    const seguradosSemModalidade = [
        "empregado",
        "domestico",
        "avulso",
        ""
    ];
    const tiposDeSegurado = [
        "empregado",
        "domestico",
        "avulso",
        "individual",
        "facultativo",
        "especial",
        "cooperativo",
        "mei"
    ];
    // const modalidadesDisponiveis = tipoSegurado? modalidadesPorTipo[tipoSegurado] ?? []
    const calcularINSS = (salarioBruto1)=>{
        const seguradosTabelaProgressiva = [
            "empregado",
            "domestico",
            "avulso"
        ];
        const seguradosModalidades = [
            "individual",
            "facultativo",
            "especial",
            "cooperativo",
            "mei"
        ];
        const salario = salarioBruto1 // Teto do INSS 2025
        ;
        let valorContribuicao1 = 0;
        let faixa1 = '';
        let plano1 = '';
        let aliquotaEfetiva1 = 0;
        console.log(salario, typeof salario);
        if (seguradosTabelaProgressiva.includes(tipoSegurado)) {
            if (salario <= 1518.00) {
                valorContribuicao1 = 1518 * 0.075;
                faixa1 = 'Até R$ 1.518,00';
                aliquotaEfetiva1 = 7.5;
            } else if (salario > 1518 && salario <= 2793.88) {
                valorContribuicao1 = salario * 0.09 - 22.77;
                faixa1 = 'De R$ 1.518,01 até R$ 2.793,88';
                aliquotaEfetiva1 = 9;
            } else if (salario > 2793.88 && salario <= 4190.83) {
                valorContribuicao1 = salario * 0.12 - 106.59;
                faixa1 = 'De R$ 2.793,89 até R$ 4.190,83';
                aliquotaEfetiva1 = 12;
            } else if (salario > 4190.83 && salario <= 8157.41) {
                valorContribuicao1 = salario * 0.14 - 190.40;
                faixa1 = 'De R$ 4.190,84 até R$ 8.157,41';
                aliquotaEfetiva1 = 14;
            } else if (salario > 8157.41) {
                valorContribuicao1 = 8157.41 * 0.14;
                faixa1 = 'Acima de R$ 8.157,41 (Teto)';
                aliquotaEfetiva1 = 14;
            }
        } else if (seguradosModalidades.includes(tipoSegurado)) {
            switch(tipoSegurado){
                case "simplificado":
                    plano1 = "Plano Simplificado";
                    faixa1 = "11% sobre o salário mínimo";
                    aliquotaEfetiva1 = 11;
                    valorContribuicao1 = 1518.00 * 0.11;
                    break;
                case "normal":
                    plano1 = "Plano Normal (20%)";
                    faixa1 = "20% sobre o salário declarado";
                    aliquotaEfetiva1 = 20;
                    salario >= 1518.00 && salario <= 8157.41 ? valorContribuicao1 = salario * 0.20 : valorContribuicao1 = 8157.41 * 0.20;
                    break;
                case "baixaRenda":
                    plano1 = "Baixa Renda";
                    faixa1 = "5% sobre o salário mínimo";
                    aliquotaEfetiva1 = 5;
                    valorContribuicao1 = 1518.00 * 0.05;
            }
        }
    };
    return {
        salario: salarioBruto,
        aliquota: aliquotaEfetiva,
        valorContribuicao,
        faixa,
        plano,
        teto: 8157.41
    };
    //TURBOPACK unreachable
    ;
    const handleCalcular = undefined;
    const limparFormulario = undefined;
}
_s(SimuladorINSSPage, "Ur0aVS/mwLy8bfwm19SQ4+EWDhk=");
_c = SimuladorINSSPage;
var _c;
__turbopack_context__.k.register(_c, "SimuladorINSSPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=6551c_apps_client_src_app_%28dashboard%29_simuladores_inss_page_tsx_c88fc958._.js.map