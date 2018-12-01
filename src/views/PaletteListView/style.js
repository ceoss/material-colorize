const dropdownButtonPadding = '20px';

export default theme => ({
  dropdownButton: {
    paddingTop: dropdownButtonPadding,
    paddingBottom: dropdownButtonPadding,
    paddingLeft: 'calc(var(--fullScreenBorderPadding) * 2)',
    paddingRight: 'calc(var(--fullScreenBorderPadding) * 2)',
    borderRadius: '0 0 var(--borderRadiusSize) var(--borderRadiusSize)'
  },
  dropdownArrow: {
    transition: 'transform 200ms ease-in-out'
  },
  colorFormatDisplay: {
    [theme.breakpoints.up('sm')]: {
      marginRight: '30px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginBottom: '30px'
    }
  },
  numbersList: {
    width: '120px'
  },
  colorListDiv: {
    paddingLeft: 'var(--fullScreenBorderPadding)',
    paddingRight: 'var(--fullScreenBorderPadding)'
  }
})
