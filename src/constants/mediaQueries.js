import { BREAKPOINTS } from './breakpoints';

export const MEDIA_QUERIES = {
  xsMin: `screen and (min-width: ${BREAKPOINTS.xsMin}px)`,
  xs: `screen and (max-width: ${BREAKPOINTS.xsMax}px)`,
  xsMax: `screen and (max-width: ${BREAKPOINTS.xsMax}px)`,
  smMin: `screen and (min-width: ${BREAKPOINTS.smMin}px)`,
  sm: `screen and (min-width: ${BREAKPOINTS.smMin}px) and (max-width: ${BREAKPOINTS.smMax}px)`,
  smMax: `screen and (max-width: ${BREAKPOINTS.smMax}px)`,
  mdMin: `screen and (min-width: ${BREAKPOINTS.mdMin}px)`,
  md: `screen and (min-width: ${BREAKPOINTS.mdMin}px) and (max-width: ${BREAKPOINTS.mdMax}px)`,
  mdMax: `screen and (max-width: ${BREAKPOINTS.mdMax}px)`,
  lgMin: `screen and (min-width: ${BREAKPOINTS.lgMin}px)`,
  lg: `screen and (min-width: ${BREAKPOINTS.lgMin}px) and (max-width: ${BREAKPOINTS.lgMax}px)`,
  lgMax: `screen and (max-width: ${BREAKPOINTS.lgMax}px)`,
  xl: `screen and (min-width: ${BREAKPOINTS.xlMin}px)`
};
