const iconSize = '120px';

export default () => ({
  imgPreviewDiv: {
    maxWidth: '300px',
    margin: '0 20px'
  },
  imgPreview: {
    borderRadius: 'var(--borderRadiusSize)',
    background: '#E5E5E5'
  },
  mountIcon: {
    width: iconSize,
    height: iconSize,
    left: `calc(50% - (${iconSize} / 2))`,
    top: `calc(50% - (${iconSize} / 2))`
  }
})
