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
  [theme.breakpoints.up('md')]: {
    tabs: {
      flexDirection: 'column'
    },
    tabSideBorder: {
      borderRight: tabBorder,
    },
    tabPlaceholder: {
      display: 'none'
    }
  },
  [theme.breakpoints.down('sm')]: {
    tabsDiv: {
      gridTemplateColumns: '1fr'
    },
    tabs: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      flexDirection: 'row',
      background: 'white',
      width: '100%',
      zIndex: 3
    },
    tabPlaceholder: {
      height: '107.11px',
      order: 1
    },
    tabSideBorder: {
      borderTop: tabBorder,
    },
  },
  [theme.breakpoints.down('xs')]: {
    tabPlaceholder: {
      // TODO: Hardcoding these values are UGLY. Let's fix that up soon. This exists to edgecase for Chrome mobile
      height: '62.11px'
    },
  }
  });
