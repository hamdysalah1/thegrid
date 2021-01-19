"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.Row = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

let _ = (t) => t,
  _t;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const RowEl = _styledComponents.default.div(
  _t ||
    (_t = _`
  margin-left: -15px;
  margin-right: -15px;
  display: flex;
  flex-wrap: wrap;
  ${0}
  ${0}
  ${0}
`),
  (alignContent) => alignContent && `align-content: ${alignContent};`,
  (alignItems) => alignItems && `align-items: ${alignItems};`,
  (justifyContent) => justifyContent && `justify-content: ${justifyContent};`
);

const Row = ({ children, alignContent, alignItems, justifyContent }) => {
  return /*#__PURE__*/ _react.default.createElement(
    RowEl,
    {
      alignContent: alignContent,
      alignItems: alignItems,
      justifyContent: justifyContent,
    },
    children
  );
};

exports.Row = Row;
