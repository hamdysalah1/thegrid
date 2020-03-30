"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Row = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin-left: -15px;\n    margin-right: -15px;\n    display: flex;\n    flex-wrap: wrap;\n    align-content: ", ";\n    align-items: ", ";\n    justify-content: ", ";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Row = function Row(_ref) {
  var children = _ref.children,
      alignContent = _ref.alignContent,
      alignItems = _ref.alignItems,
      justifyContent = _ref.justifyContent;

  var Row = _styledComponents.default.div(_templateObject(), alignContent && alignContent, alignItems && alignItems, justifyContent);

  return /*#__PURE__*/_react.default.createElement(Row, null, children);
};

exports.Row = Row;