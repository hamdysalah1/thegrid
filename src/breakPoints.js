export const xsMin = 320;
export const smMin = 768;
export const mdMin = 1025;
export const lgMin = 1366;

export const xsMax = smMin - 1;
export const smMax = mdMin - 1;
export const mdMax = lgMin - 1;

export const breakPoint = {
  mobileOnly: `@media (min-width: ${xsMin}px) and (max-width: ${xsMax}px)`,
  tabletOnly: `@media (min-width: ${smMin}px) and (max-width: ${smMax}px)`,

  tablet: `@media all and  (min-width: ${smMin}px)`,
  desktop: `@media all and  (min-width: ${mdMin}px)`,
  largeDesktop: `@media all and  (min-width: ${lgMin}px)`,

  mobileMax: `@media all and (max-width: ${xsMax}px)`,
  tabletMax: `@media all and  (max-width: ${smMax}px)`,
};
