"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.Container = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _breakPoints = require("./breakPoints");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const ContainerDiv = _styledComponents.default.div({
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  [_breakPoints.breakPoint.desktop]: {
    width: ({ fluid }) => (fluid === "true" ? "100%" : "1140px"),
  },
  [_breakPoints.breakPoint.tabletOnly]: {
    width: ({ fluid }) => (fluid === "true" ? "100%" : "720px"),
  },
  [_breakPoints.breakPoint.mobileOnly]: {
    width: "100%",
  },
});

const Container = ({ fluid, children }) => {
  return /*#__PURE__*/ _react.default.createElement(
    ContainerDiv,
    {
      fluid: fluid.toString(),
    },
    children
  );
};

exports.Container = Container;
