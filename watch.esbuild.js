const { build } = require("esbuild");

build({
  entryPoints: ["src/index.tsx"],
  bundle: true,
  minify: false,
  format: "cjs",
  sourcemap: true,
  watch: {
    onRebuild(error, result) {
      if (error) console.error("watch build failed:", error);
      else console.log("watch build succeeded:", result);
    },
  },
  outfile: "public/js/build.js",
  // external: ["react", "react-dom"],
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
