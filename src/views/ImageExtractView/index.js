// @flow

import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import type {ColorPalette} from "../../shared/image";
import {getImagePalette} from "../../shared/image";
import type {ColorMatchType} from "../../shared/colors";
import type {SetStateType} from "../../shared/generic";
// import {titleFromCamelCase} from "../../shared/generic";
import IconButton from "@material-ui/core/IconButton/IconButton";
import MountainIcon from "@material-ui/icons/FilterHdrOutlined";
import CloseIcon from "@material-ui/icons/Close";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import Grid from "@material-ui/core/Grid/Grid";
import style from "./style";
import {withStyles} from "@material-ui/core";

type ImageExtractViewPropType = {
  classes?: typeof style
}

export function ImageExtractView(props: ImageExtractViewPropType) {
  const [fileUrl, setFileURL]: SetStateType<string> = useState('');
  const [palette, setPalette]: SetStateType<ColorPalette<ColorMatchType>> = useState(null);
  const [showSnackbar, setShowSnackbar]: SetStateType<boolean> = useState(false);
  const {classes} = props;

  useEffect(() => {
    if (fileUrl) {
      getImagePalette(fileUrl)
        .then(palette => setPalette(palette))
        .catch(err => {
          console.error(err);
          setShowSnackbar(true);
        });
      return () => {
        window.URL.revokeObjectURL(fileUrl)
      }
    }
  }, [fileUrl]);

  const handleEvent = (event: SyntheticEvent<HTMLInputElement>) => {
    if (event.target.files.length > 0) {
      const fileUrl = URL.createObjectURL(event.target.files[0]);
      setFileURL(fileUrl);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setShowSnackbar(false);
  };

  return <React.Fragment>
    <Grid container direction="column" wrap="nowrap">
      <Grid container direction="column" className={`text-center ${classes.imgPreviewDiv}`} justify="center">
        <div className="relative full-width">
        <div className={`center-img square ${classes.imgPreview}`}
              style={fileUrl ? {backgroundImage: `url(${fileUrl})`} : {}}/>
          {!fileUrl && <MountainIcon className={`absolute ${classes.mountIcon}`}/>}
        </div>
        <input
          accept="image/*"
          hidden
          onChange={handleEvent}
          id="upload-file-button"
          type="file"
        />
        <label htmlFor="upload-file-button">
          <Button variant="contained" component="span" color="primary" className="full-width"
                  style={{marginTop: '15px'}}>
            Select File
          </Button>
        </label>
        <p>JPG, PNG, GIF, WEBM</p>
      </Grid>

      <Grid
        className="grow"
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        {
          palette ?
            Object.keys(palette).map((swatchKey: string) => {
              // const readableKey = titleFromCamelCase(swatchKey);
              // const {color, number, value} = palette[swatchKey];
              return <div/>
            }) : null
        }
      </Grid>
    </Grid>
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={showSnackbar}
      autoHideDuration={6000}
      onClose={handleSnackbarClose}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<span id="message-id">There was an error grabbing colors from that image</span>}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={handleSnackbarClose}
        >
          <CloseIcon/>
        </IconButton>,
      ]}
    />
  </React.Fragment>
}

export default withStyles(style)(ImageExtractView);
