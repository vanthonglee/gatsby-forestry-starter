"use strict";

// const lost = require("lost")
const autoprefixer = require("autoprefixer");
const postcssCssVariables = require("postcss-css-variables");
const postcssCalc = require("postcss-calc");
module.exports = [autoprefixer(), postcssCssVariables(), postcssCalc()];
