import React from "react";
import { breakPoint } from "./index";
import styled from "styled-components";

export const Col = ({ xs, sm, md, lg, alignSelf, order, children }) => {
  const defaultCol = `
    max-width: "100%",
    width: "auto",
    flex: "1 0 auto",
  `;
  const viewPorts = [
    { media: null, size: xs },
    { media: breakPoint.tablet, size: sm },
    { media: breakPoint.desktop, size: md },
    { media: breakPoint.largeDesktop, size: lg },
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

  const Cols = styled.div`
    order: ${order && order};
    width: 100%;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
    align-self: ${alignSelf && alignSelf};
    ${!xs && !sm && !md && !lg && defaultCol};
    ${mediaQuery}
  `;
  return <Cols>{children}</Cols>;
};
