import React from "react";
import styled from "styled-components";
import { breakPoint } from "./breakPoints";

export const Container = ({ fluid, children }) => {
  const ContainerDiv = styled.div({
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    [breakPoint.desktop]: {
      width: fluid ? "100%" : "1140px",
    },
    [breakPoint.tabletOnly]: {
      width: fluid ? "100%" : "720px",
    },
    [breakPoint.mobileOnly]: {
      width: "100%",
    },
  });

  return <ContainerDiv>{children}</ContainerDiv>;
};
