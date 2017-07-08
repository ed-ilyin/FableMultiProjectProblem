const fableSplitter = require("fable-splitter").default;

// const babelOptions = {
//   plugins: [
//     ["transform-es2015-modules-commonjs"],
//   ],
//   sourceMaps: true
// };

// const fableOptions = {
//   fableCore: "./node_modules/fable-core",
  // plugins: [],
  // define: [],
  // etc.
// };

const prepackOptions = {
  // etc.
};

const options = {
  entry: "./src/ProjectA/ProjectA.fsproj",
  outDir: "./out",
  // port: 61225,
//   babel: babelOptions,
//   fable: fableOptions,
  // prepack: prepackOptions, // if added, fable ==> babel ==> prepack
};

fableSplitter(options);
