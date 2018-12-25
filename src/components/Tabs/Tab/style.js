import {tabBorder} from '../style';

const inactiveTabMargin = '12px';
const iconSize = '50px';

export default theme => ({
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
      background: 'var(--borderColor)',
    },
    '&:active, &:hover, &:focus': {
      outline: 'none'
    },
    '&:hover, &:focus': {
      background: '#eceff1'
    }
  },
  [theme.breakpoints.up('md')]: {
    tab: {
      borderRight: tabBorder,
      '&::after': {
        height: 'var(--borderSize)',
        bottom: '-1px',
        left: inactiveTabMargin,
        width: `calc(100% - (${inactiveTabMargin} * 2))`
      }
    },
    tabDivActive: {
      borderBottom: tabBorder,
      '&:not(:first-child)': {
        borderTop: tabBorder
      },
      '& $tab': {
        borderRight: 'none !important'
      }
    }
  },
  [theme.breakpoints.down('sm')]: {
    tab: {
      borderTop: tabBorder,
      '&::after': {
        width: 'var(--borderSize)',
        right: '-1px',
        top: inactiveTabMargin,
        height: `calc(100% - (${inactiveTabMargin} * 2))`,
      }
    },
    tabDivActive: {
      borderLeft: tabBorder,
      borderRight: tabBorder,
      '& $tab': {
        borderTop: 'none !important'
      }
    }
  },
  tabIcon: {
    height: iconSize,
    width: iconSize,
    marginBottom: '10px'
  }
});
