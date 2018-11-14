import {
  tabBorderSize,
  tabBorderColor,
  tabBorder,
  smallSize
} from '../style';

const inactiveTabMargin = '12px';
const iconSize = '50px';

export default () => ({
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
  },
  [`@media only screen and (min-width: ${smallSize})`]: {
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
    }
  },
  [`@media only screen and (max-width: ${smallSize})`]: {
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
    }
  },
  tabIcon: {
    height: iconSize,
    width: iconSize,
    marginBottom: '10px'
  }
});
