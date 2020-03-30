import React from "react";
import styled from "styled-components";

export const Row = ({ children, alignContent, alignItems, justifyContent }) => {
  const Row = styled.div`
    margin-left: -15px;
    margin-right: -15px;
    display: flex;
    flex-wrap: wrap;
    align-content: ${alignContent && alignContent};
    align-items: ${alignItems && alignItems};
    justify-content: ${justifyContent};
  `;
  return <Row>{children}</Row>;
};
