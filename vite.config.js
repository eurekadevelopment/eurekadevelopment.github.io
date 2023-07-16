import { defineConfig } from "vite";
const { resolve } = require("path");

export default defineConfig({
    base: '/',
    root: "src",
    assetsInclude: ["./assets/**/*.*"],
    build: {
        emptyOutDir: true,
        outDir: "../dist",
        rollupOptions: {
            input: {
                index: resolve(__dirname, "./src/index.html"),
                about: resolve(__dirname, "./src/about.html"),
                team: resolve(__dirname, "./src/team.html"),
                support: resolve(__dirname, "./src/support.html"),
                recovery: resolve(__dirname, "./src/recovery.html"),
                kernel: resolve(__dirname, "./src/kernel.html"),
                kernelsu: resolve(__dirname, "./src/kernelsu.html"),
                guide: resolve(__dirname, "./src/guide.html"),
                download: resolve(__dirname, "./src/download.html"),
                stats: resolve(__dirname, "./src/statistics.html"),
                404: resolve(__dirname, "./src/404.html"),
                rom11: resolve(__dirname, "./src/rom11.html"),
                rom12: resolve(__dirname, "./src/rom12.html"),
                rom13: resolve(__dirname, "./src/rom13.html"),
                gapps: resolve(__dirname, "./src/gapps.html"),
                main: resolve(__dirname, "./src/js/main.js"),
                colorpalette: resolve(__dirname, "./src/js/colorpalette.js"),
                lazyload: resolve(__dirname, "./src/js/lazyload.js"),
                search: resolve(__dirname, "./src/js/search.js"),
                stats_a11: resolve(__dirname, "./src/js/stats_a11.js"),
                stats_a12: resolve(__dirname, "./src/js/stats_a12.js"),
                stats_a13: resolve(__dirname, "./src/js/stats_a13.js"),
                stats_derp: resolve(__dirname, "./src/js/stats_derp.js"),
                stats_spark: resolve(__dirname, "./src/js/stats_spark.js"),
                jquery: resolve(__dirname, "./node_modules/jquery/dist/jquery.js"),
            },
            output: {
                entryFileNames: "assets/js/[name].js",
                assetFileNames: ({ name }) => {
                    if (/\.webp$/.test(name ?? '')) {
                        return 'assets/images/[name]-[hash][extname]';
                    }

                    if (/\.(svg|gif|jpe?g|png)$/.test(name ?? '')) {
                        return 'assets/images/[name][extname]';
                    }

                    if (/\.css$/.test(name ?? '')) {
                        return 'assets/css/[name][extname]';
                    }

                    if (/\.ttf$/.test(name ?? '')) {
                        return 'assets/fonts/[name][extname]';
                    }

                    if (/\.mp4$/.test(name ?? '')) {
                        return 'assets/media/video/[name][extname]';
                    }

                    return 'assets/[name]-[hash][extname]';
                },
            },
        }
    },
});