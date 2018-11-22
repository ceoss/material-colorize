export const tabBorderSize = '1px';
export const tabBorderColor = '#e5e5e5';
export const tabBorder = `${tabBorderSize} ${tabBorderColor} solid !important`;
export const smallSize = '600px';
const paddingScreenSize = '25px';
export default () => ({
  tabsDiv: {
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: 'minmax(100px, min-content) minmax(600px, 1fr)',
    gridTemplateRows: 'minmax(100px, 1fr)',
    borderTop: tabBorder
  },
  tabs: {
    display: 'flex',
    flexShrink: 0,
    flexGrow: 0,
    flexWrap: 'nowrap'
  },
  offScreen: {
    top: '-100vh'
  },
  bodyDiv: {
    position: 'absolute',
    width: `calc(100% - (${paddingScreenSize} * 2))`,
    height: `calc(100% - ${paddingScreenSize})`,
    paddingLeft: paddingScreenSize,
    paddingRight: paddingScreenSize,
    paddingTop: paddingScreenSize
  },
  [`@media only screen and (min-width: ${smallSize})`]: {
    tabs: {
      flexDirection: 'column'
    },
    tabSideBorder: {
      borderRight: tabBorder,
    },
  },
  [`@media only screen and (max-width: ${smallSize})`]: {
    tabsDiv: {
      gridTemplateColumns: '1fr'
    },
    tabs: {
      order: 1,
      flexDirection: 'row'
    },
    tabSideBorder: {
      borderTop: tabBorder,
    },
  }
});
