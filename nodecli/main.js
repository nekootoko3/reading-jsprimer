const program = require("commander");
const fs = require("fs");
const marked = require("marked");

program.option("--gfm", "GFM を有効にする");
program.parse(process.argv);
const filePath = program.args[0];

const cliOptions = {
  gfm: false,
  ...program.opts(),
};
const options = program.opts();

fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
    return;
  }

  const html = marked(file, { gfm: cliOptions.gfm });
  console.log(html);
});
