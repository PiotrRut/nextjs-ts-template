// File used by the plop generators, do not change this!
/* eslint-disable @typescript-eslint/no-var-requires */
const argv = require("yargs").argv;

const log = require("./generators/log");
const generatePage = require("./generators/page/generate");
const generateComponent = require("./generators/component/generate");

log.logo();

module.exports = function (plop) {
  if (argv["generate-component"]) {
    generateComponent.setGenerator(plop);
  } else if (argv["generate-page"]) {
    generatePage.setGenerator(plop);
  }
};
