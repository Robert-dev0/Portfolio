(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/New Portfólio/hooks/use-scroll-reveal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollReveal",
    ()=>useScrollReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Portf$f3$lio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Portfólio/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useScrollReveal(options) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Portf$f3$lio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollReveal.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const elements = Array.from(document.querySelectorAll('[data-scroll-reveal]'));
            if (!elements.length) {
                return;
            }
            const observer = new IntersectionObserver({
                "useScrollReveal.useEffect": (entries)=>{
                    entries.forEach({
                        "useScrollReveal.useEffect": (entry)=>{
                            if (!entry.isIntersecting) {
                                return;
                            }
                            const target = entry.target;
                            const delay = target.dataset.scrollDelay ?? '0';
                            target.style.setProperty('--reveal-delay', `${delay}ms`);
                            target.dataset.scrollReveal = 'visible';
                            observer.unobserve(target);
                        }
                    }["useScrollReveal.useEffect"]);
                }
            }["useScrollReveal.useEffect"], {
                rootMargin: options?.rootMargin ?? '0px 0px -1% 0px',
                threshold: options?.threshold ?? 0.15
            });
            elements.forEach({
                "useScrollReveal.useEffect": (element)=>{
                    if (element.dataset.scrollReveal !== 'visible') {
                        element.dataset.scrollReveal = 'hidden';
                    }
                    if (!element.style.getPropertyValue('--reveal-delay')) {
                        const delay = element.dataset.scrollDelay ?? '0';
                        element.style.setProperty('--reveal-delay', `${delay}ms`);
                    }
                    observer.observe(element);
                }
            }["useScrollReveal.useEffect"]);
            return ({
                "useScrollReveal.useEffect": ()=>observer.disconnect()
            })["useScrollReveal.useEffect"];
        }
    }["useScrollReveal.useEffect"], [
        options?.rootMargin,
        options?.threshold
    ]);
}
_s(useScrollReveal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/New Portfólio/components/scroll-reveal-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollRevealProvider",
    ()=>ScrollRevealProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Portf$f3$lio$2f$hooks$2f$use$2d$scroll$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Portfólio/hooks/use-scroll-reveal.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function ScrollRevealProvider({ options }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Portf$f3$lio$2f$hooks$2f$use$2d$scroll$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"])(options);
    return null;
}
_s(ScrollRevealProvider, "NvHbW0HlqZnMS/1n+oYG11Qtyeg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Portf$f3$lio$2f$hooks$2f$use$2d$scroll$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"]
    ];
});
_c = ScrollRevealProvider;
var _c;
__turbopack_context__.k.register(_c, "ScrollRevealProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/New Portfólio/components/theme-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Portf$f3$lio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Portfólio/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Portf$f3$lio$2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$6_react$2d$dom_c91534e86f74096d969606227a1c49a3$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Portfólio/node_modules/.pnpm/next-themes@0.4.6_react-dom_c91534e86f74096d969606227a1c49a3/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
'use client';
'use client';
;
;
function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Portf$f3$lio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Portf$f3$lio$2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$6_react$2d$dom_c91534e86f74096d969606227a1c49a3$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/New Portfólio/components/theme-provider.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_New%20Portf%C3%B3lio_0eb3d848._.js.map