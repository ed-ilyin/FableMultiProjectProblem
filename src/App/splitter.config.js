const fableSplitter = require("fable-splitter").default;

const options = {
  entry: "./App.fsproj",
  outDir: "./out"
};

fableSplitter(options);
