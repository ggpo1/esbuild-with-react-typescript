const { build } = require("esbuild");

build({
  entryPoints: ["src/index.tsx"],
  bundle: true,
  minify: true,
  format: "cjs",
  sourcemap: false,
  outfile: "public/js/build.js",
  // external: ["react", "react-dom"],
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
