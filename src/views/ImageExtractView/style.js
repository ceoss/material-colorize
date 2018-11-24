const iconSize = '120px';

export default () => ({
  imgPreviewDiv: {
    maxWidth: '300px',
    margin: '0 20px'
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
