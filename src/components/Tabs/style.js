export const tabBorder = 'var(--borderStyling) !important';
const paddingScreenSize = '25px';
export default theme => ({
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
  [theme.breakpoints.up('sm')]: {
    tabs: {
      flexDirection: 'column'
    },
    tabSideBorder: {
      borderRight: tabBorder,
    },
  },
  [theme.breakpoints.down('sm')]: {
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
