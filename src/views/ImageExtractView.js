// @flow

import React from 'react';
import Button from '@material-ui/core/Button';
import {getImagePalette} from "../shared/image";
import Color from "../components/Color";
import type {ColorMatchType} from "../shared/colors";
import type {ColorPalette} from "../shared/image";
import {titleFromCamelCase} from "../shared/generic";
import IconButton from "@material-ui/core/IconButton/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import Grid from "@material-ui/core/Grid/Grid";

type ImageExtractViewPropType = {
  format?: string
}

export default class ImageExtractView extends React.Component<ImageExtractViewPropType, {
  fileUrl: string,
  palette: ColorPalette<ColorMatchType>,
  showSnackbar: boolean
}> {
  state = {
    fileUrl: '',
    palette: null,
    showSnackbar: false
  };

  handleEvent = (event: SyntheticEvent<HTMLInputElement>) => {
    if (event.target.files.length > 0) {
      if (this.state.fileUrl) {
        window.URL.revokeObjectURL(this.state.fileUrl);
      }
      const fileUrl = URL.createObjectURL(event.target.files[0]);
      this.setState({fileUrl});
      getImagePalette(fileUrl)
        .then(palette => this.setState({palette}))
        .catch(err => {
          console.error(err);
          this.setState({showSnackbar: true});
        });
    }
  };

  handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({showSnackbar: false});
  };

  render() {
    const {fileUrl, palette, showSnackbar} = this.state;
    const {format} = this.props;
    return <React.Fragment>
      {fileUrl ? <img alt="Colors will be extracted from this" src={fileUrl}/> : null}
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
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        {
          palette ?
            Object.keys(palette).map((swatchKey: string) => {
              const readableKey = titleFromCamelCase(swatchKey);
              const {color, number, value} = palette[swatchKey];
              return <Color color={value}
                            colorName={color}
                            number={number}
                            format={format}
                            subText={readableKey}/>
            }) : null
        }
      </Grid>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={this.handleSnackbarClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">There was an error grabbing colors from that image</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={this.handleSnackbarClose}
          >
            <CloseIcon/>
          </IconButton>,
        ]}
      />
    </React.Fragment>
  }
}
