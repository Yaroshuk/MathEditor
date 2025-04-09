import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
    define: {
        global: "window",
    },
    base: "/MathEditor/",
    // build: {
    //     commonjsOptions: { transformMixedEsModules: true },
    //     rollupOptions: {
    //         input: {
    //             main: path.resolve(__dirname, "index.html"),
    //         },
    //     },
    // },
});
