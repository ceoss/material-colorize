const tabBorderSize = '1px';
const tabBorderColor = '#e5e5e5';
const tabBorder = `${tabBorderSize} ${tabBorderColor} solid !important`;
const inactiveTabMargin = '12px';
const iconSize = '50px';
const smallSize = '600px';

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
  [`@media only screen and (min-width: ${smallSize})`]: {
    bodyDiv: {
      paddingLeft: '25px',
    },
    tabs: {
      flexDirection: 'column'
    },
    tab: {
      borderRight: tabBorder,
      '&::after': {
        height: tabBorderSize,
        bottom: '-1px',
        left: inactiveTabMargin,
        width: `calc(100% - (${inactiveTabMargin} * 2))`,

      }
    },
    tabActive: {
      borderBottom: tabBorder,
      borderRight: 'none !important',
      '&:not(:first-of-type)': {
        borderTop: tabBorder
      }
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
    tab: {
      borderTop: tabBorder,
      '&::after': {
        width: tabBorderSize,
        right: '-1px',
        top: inactiveTabMargin,
        height: `calc(100% - (${inactiveTabMargin} * 2))`,
      }
    },
    tabActive: {
      borderLeft: tabBorder,
      borderTop: 'none !important',
      borderRight: tabBorder
    },
    tabSideBorder: {
      borderTop: tabBorder,
    },
  },
  tabIcon: {
    height: iconSize,
    width: iconSize,
    marginBottom: '10px'
  },
  tab: {
    textAlign: 'center',
    '-webkit-appearance': 'none',
    background: 'none',
    border: 'none',
    width: '100px',
    padding: '15px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    '&::after': {
      position: 'absolute',
      content: '" "',
      background: tabBorderColor,
    },
    '&:active, &:hover, &:focus': {
      outline: 'none'
    },
    '&:hover, &:focus': {
      background: '#eceff1'
    }
  }
});
