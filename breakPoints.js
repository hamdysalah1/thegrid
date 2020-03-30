"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.breakPoint = exports.mdMax = exports.smMax = exports.xsMax = exports.lgMin = exports.mdMin = exports.smMin = exports.xsMin = void 0;
var xsMin = 320;
exports.xsMin = xsMin;
var smMin = 768;
exports.smMin = smMin;
var mdMin = 1025;
exports.mdMin = mdMin;
var lgMin = 1366;
exports.lgMin = lgMin;
var xsMax = smMin - 1;
exports.xsMax = xsMax;
var smMax = mdMin - 1;
exports.smMax = smMax;
var mdMax = lgMin - 1;
exports.mdMax = mdMax;
var breakPoint = {
  mobileOnly: "@media (min-width: ".concat(xsMin, "px) and (max-width: ").concat(xsMax, "px)"),
  tabletOnly: "@media (min-width: ".concat(smMin, "px) and (max-width: ").concat(smMax, "px)"),
  tablet: "@media all and  (min-width: ".concat(smMin, "px)"),
  desktop: "@media all and  (min-width: ".concat(mdMin, "px)"),
  largeDesktop: "@media all and  (min-width: ".concat(lgMin, "px)"),
  mobileMax: "@media all and (max-width: ".concat(xsMax, "px)"),
  tabletMax: "@media all and  (max-width: ".concat(smMax, "px)")
};
exports.breakPoint = breakPoint;