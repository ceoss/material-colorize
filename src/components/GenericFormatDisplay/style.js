// @flow

export default () => ({
  formatName: {
    marginRight: 'auto'
  },
  colorDisplay: {
    '&:not(:first-of-type)': {
      marginTop: '12px',
    },
    height: '65px',
    border: 'var(--borderStyling)',
    borderRadius: 'var(--borderRadiusSize)',
    padding: '18px 20px 18px 12px'
  },
  copyIcon: {
    marginTop: '-12px',
    marginBottom: '-12px',
    marginLeft: '45px'
  },
  threeCharLength: {
    width: '30px',
    textAlign: 'right',
    marginLeft: '18px'
  }
});
