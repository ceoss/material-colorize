const tabBorderSize = '1px';
const tabBorderColor = '#e5e5e5';
const tabBorder = `${tabBorderSize} ${tabBorderColor} solid`;
const inactiveTabMargin = '12px';
const iconSize = '50px';

export default (theme: any) => ({
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
  '@media only screen and (min-width: 600px)': {
    bodyDiv: {
      paddingLeft: '25px',
    },
    tabs: {
      flexDirection: 'column'
    }
  },
  '@media only screen and (max-width: 600px)': {
    tabsDiv: {
      gridTemplateColumns: '1fr'
    },
    tabs: {
      order: 1,
      flexDirection: 'row'
    }
  },
  tabActive: {
    borderBottom: tabBorder,
    borderRight: 'none !important',
    '&:not(:first-of-type)': {
      borderTop: tabBorder
    }
  },
  tabIcon: {
    height: iconSize,
    width: iconSize,
    marginBottom: '10px'
  },
  tabText: {
    textAlign: 'center'
  },
  tabRightBorder: {
    borderRight: tabBorder,
  },
  tab: {
    width: '100px',
    padding: '15px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRight: tabBorder,
    '&::after': {
      position: 'absolute',
      content: '" "',
      background: tabBorderColor,
      height: tabBorderSize,
      bottom: '-1px',
      left: inactiveTabMargin,
      width: `calc(100% - (${inactiveTabMargin} * 2))`,
    }
  }
});
