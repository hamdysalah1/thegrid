import React from "react";
import styled from "styled-components";

const Row = styled.div`
  margin-left: -15px;
  margin-right: -15px;
  display: flex;
  flex-wrap: wrap;
  ${(alignContent) => alignContent && `align-content: ${alignContent};`}
  ${(alignItems) => alignItems && `align-items: ${alignItems};`}
  ${(justifyContent) => justifyContent && `justify-content: ${justifyContent};`}
`;

export const Row = ({ children, alignContent, alignItems, justifyContent }) => {
  return (
    <Row
      alignContent={alignContent}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {children}
    </Row>
  );
};
