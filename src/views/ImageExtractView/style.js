const iconSize = '120px';
const maxWidthSize = '300px';

export default theme => ({
  [theme.breakpoints.up('md')]: {
    imgPreviewDiv: {
      maxWidth: maxWidthSize,
      margin: '0 20px'
    }
  },
  [theme.breakpoints.down('sm')]: {
    centerImgParent: {
      maxWidth: maxWidthSize,
      margin: '0 auto'
    },
    imgPreviewDiv: {
      flexShrink: 0
    },
    paletteList: {
      flexShrink: 0
    }
  },
  imgPreview: {
    borderRadius: 'var(--borderRadiusSize)',
    backgroundColor: '#E5E5E5'
  },
  mountIcon: {
    width: iconSize,
    height: iconSize,
    left: `calc(50% - (${iconSize} / 2))`,
    top: `calc(50% - (${iconSize} / 2))`
  },
  colorPad: {
    '&:not(:first-of-type)': {
      marginTop: '10px'
    },
    '&:not(:last-of-type)': {
      marginBottom: '10px'
    }
  }
})
