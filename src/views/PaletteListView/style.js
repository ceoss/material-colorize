const dropdownButtonPadding = '20px'

export default () => ({
  dropdownButton: {
    width: 'calc(100% + (var(--fullScreenBorderPadding) * 2))',
    paddingTop: dropdownButtonPadding ,
    paddingBottom: dropdownButtonPadding,
    paddingLeft: 'var(--fullScreenBorderPadding)',
    paddingRight: 'var(--fullScreenBorderPadding)',
    marginLeft: 'calc(0px - var(--fullScreenBorderPadding))',
    marginRight: 'calc(0px - var(--fullScreenBorderPadding))',
    marginTop: 'calc(0px - var(--fullScreenBorderPadding))',
    borderRadius: '0 0 var(--borderRadiusSize) var(--borderRadiusSize)'
  },
  dropdownArrow: {
    transition: 'transform 200ms ease-in-out'
  }
})
