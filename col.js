"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("./index");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    order: ", ";\n    width: 100%;\n    min-height: 1px;\n    padding-left: 15px;\n    padding-right: 15px;\n    align-self: ", ";\n    ", ";\n    ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Col = function Col(_ref) {
  var xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      alignSelf = _ref.alignSelf,
      order = _ref.order,
      children = _ref.children;
  var defaultCol = "\n    max-width: \"100%\",\n    width: \"auto\",\n    flex: \"1 0 auto\",\n  ";
  var viewPorts = [{
    media: null,
    size: xs
  }, {
    media: _index.breakPoint.tablet,
    size: sm
  }, {
    media: _index.breakPoint.desktop,
    size: md
  }, {
    media: _index.breakPoint.largeDesktop,
    size: lg
  }];

  var createCol = function createCol(media, cols) {
    var styles = "\n      flex: 0 0 ".concat(100 * cols / 12, "%;\n      max-width: ").concat(100 * cols / 12, "%;\n    ");

    if (!cols) {
      return;
    }

    if (!media) {
      return styles;
    }

    return "".concat(media, " { ").concat(styles, " }");
  };

  var mediaQuery = viewPorts.reduce(function (acc, el) {
    if (el.size) {
      var _mediaQuery = createCol(el.media, el.size);

      acc.push(_mediaQuery);
    }

    return acc;
  }, []).toString().replace(",@media", " @media");

  var Cols = _styledComponents.default.div(_templateObject(), order && order, alignSelf && alignSelf, !xs && !sm && !md && !lg && defaultCol, mediaQuery);

  return /*#__PURE__*/_react.default.createElement(Cols, null, children);
};

exports.Col = Col;