const converter = require("widdershins");
const fs = require("fs");
const fileData = fs.readFileSync("swagger.json", "utf8");
const swaggerFile = JSON.parse(fileData);

let options = {}; // defaults shown
options.codeSamples = false;
options.httpsnippet = false;
// options.language_tabs = [
//   { http: "HTTP" },
//   { javascript: "JavaScript" },
//   { python: "Python" },
// ];
// options.language_clients = [{ shell: "curl" }];
//options.loadedFrom = sourceUrl; // only needed if input document is relative
//options.user_templates = './user_templates';
options.templateCallback = function (templateName, stage, data) {
  return data;
};
options.theme = "darkula";
options.search = true;
options.sample = true; // set false by --raw
options.discovery = false;
options.includes = [];
options.shallowSchemas = false;
options.tocSummary = false;
options.headings = 2;
options.yaml = false;
//options.resolve = false;
//options.source = sourceUrl; // if resolve is true, must be set to full path or URL of the input document

converter
  .convert(swaggerFile, options)
  .then((str) => {
    fs.writeFileSync("swagger.md", str, "utf8");
  })
  .catch((err) => {
    console.error(err);
  });
