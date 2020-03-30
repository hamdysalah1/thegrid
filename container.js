"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _breakPoints = require("./breakPoints");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Container = function Container(_ref) {
  var _styled$div;

  var fluid = _ref.fluid,
      children = _ref.children;

  var ContainerDiv = _styledComponents.default.div((_styled$div = {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto"
  }, _defineProperty(_styled$div, _breakPoints.breakPoint.desktop, {
    width: fluid ? "100%" : "1140px"
  }), _defineProperty(_styled$div, _breakPoints.breakPoint.tabletOnly, {
    width: fluid ? "100%" : "720px"
  }), _defineProperty(_styled$div, _breakPoints.breakPoint.mobileOnly, {
    width: "100%"
  }), _styled$div));

  return /*#__PURE__*/_react.default.createElement(ContainerDiv, null, children);
};

exports.Container = Container;