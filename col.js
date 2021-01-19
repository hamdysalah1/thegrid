"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.Col = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("./index");

var _styledComponents = _interopRequireDefault(require("styled-components"));

let _ = (t) => t,
  _t;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const defaultCol = `
max-width: "100%",
width: "auto",
flex: "1 0 auto",
`;
const viewPorts = [
  {
    media: null,
    size: xs,
  },
  {
    media: _index.breakPoint.tablet,
    size: sm,
  },
  {
    media: _index.breakPoint.desktop,
    size: md,
  },
  {
    media: _index.breakPoint.largeDesktop,
    size: lg,
  },
];

const createCol = (media, cols) => {
  const styles = `
  flex: 0 0 ${(100 * cols) / 12}%;
  max-width: ${(100 * cols) / 12}%;
`;

  if (!cols) {
    return;
  }

  if (!media) {
    return styles;
  }

  return `${media} { ${styles} }`;
};

const mediaQuery = viewPorts
  .reduce((acc, el) => {
    if (el.size) {
      const _mediaQuery = createCol(el.media, el.size);

      acc.push(_mediaQuery);
    }

    return acc;
  }, [])
  .toString()
  .replace(",@media", " @media");

const Cols = _styledComponents.default.div(
  _t ||
    (_t = _`
  ${0}
  ${0}
  width: 100%;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
  ${0};
  ${0}
`),
  ({ order }) => order && `order: ${order};`,
  ({ alignSelf }) => alignSelf && `align-self: ${alignSelf};`,
  ({ xs, sm, md, lg }) => !xs && !sm && !md && !lg && defaultCol,
  mediaQuery
);

const Col = ({ xs, sm, md, lg, alignSelf, order, children }) => {
  return /*#__PURE__*/ _react.default.createElement(
    Cols,
    {
      xs: xs,
      sm: sm,
      md: md,
      lg: lg,
      alignSelf: alignSelf,
      order: order,
    },
    children
  );
};

exports.Col = Col;
