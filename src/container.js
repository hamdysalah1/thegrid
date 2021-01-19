import React from "react";
import styled from "styled-components";
import { breakPoint } from "./breakPoints";

const ContainerDiv = styled.div({
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  [breakPoint.desktop]: {
    width: ({ fluid }) =>
      fluid && fluid.toString() === "true" ? "100%" : "1140px",
  },
  [breakPoint.tabletOnly]: {
    width: ({ fluid }) =>
      fluid && fluid.toString() === "true" ? "100%" : "720px",
  },
  [breakPoint.mobileOnly]: {
    width: "100%",
  },
});

export const Container = ({ fluid, children }) => {
  return <ContainerDiv fluid={fluid}>{children}</ContainerDiv>;
};
