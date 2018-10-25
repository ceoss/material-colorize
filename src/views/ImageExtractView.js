// @flow

import React from 'react';
import Button from '@material-ui/core/Button';
import {getImagePalette} from "../shared/image";

type ImageExtractViewPropType = {
  format?: string
}

export default class ImageExtractView extends React.Component<ImageExtractViewPropType, {
  fileUrl: string
}> {
  state = {
    fileUrl: ''
  };

  handleEvent = (event: SyntheticEvent<HTMLInputElement>) => {
    if (event.target.files.length > 0) {
      if (this.state.fileUrl) {
        window.URL.revokeObjectURL(this.state.fileUrl);
      }
      const fileUrl = URL.createObjectURL(event.target.files[0]);
      this.setState({fileUrl});
      getImagePalette(fileUrl)
        .then(a => console.log(a));
    }
  };

  render() {
    return (
<React.Fragment>
      <input
        accept="image/*"
        hidden
        onChange={this.handleEvent.bind(this)}
        id="upload-file-button"
        type="file"
      />
      <label htmlFor="upload-file-button">
      <Button variant="contained" component="span" color="primary">
      Upload
      </Button>
  </label>
</React.Fragment>
    );
  }
}
