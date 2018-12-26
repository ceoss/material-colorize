// @flow

import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import type {ColorPalette} from "../../shared/image";
import {getImagePalette} from "../../shared/image";
import type {ColorMatchType} from "../../shared/colors";
import type {SetStateType} from "../../shared/generic";
import {titleFromCamelCase} from "../../shared/generic";
import IconButton from "@material-ui/core/IconButton";
import MountainIcon from "@material-ui/icons/FilterHdrOutlined";
import CloseIcon from "@material-ui/icons/Close";
import Snackbar from "@material-ui/core/Snackbar";
import Grid from "@material-ui/core/Grid";
import style from "./style";
import {withStyles} from "@material-ui/core";
import Color from "../../components/Color";
import ColorFormatsDisplay from "../../components/ColorFormatsDisplay";
import {Breakpoint} from "@material-ui/core/styles/createBreakpoints";
import withWidth from "@material-ui/core/withWidth";
import {useIsSmall} from "../../shared/generic-hooks";
import Typography from '@material-ui/core/Typography';

type ImageExtractViewPropType = {
  classes?: typeof style,
  width: Breakpoint
}

export function ImageExtractView(props: ImageExtractViewPropType) {
  const [fileUrl, setFileURL]: SetStateType<string> = useState('');
  const [palette, setPalette]: SetStateType<ColorPalette<ColorMatchType>> = useState(null);
  const [selectedPallete, setSelected]: SetStateType<string> = useState('');
  const [showSnackbar, setShowSnackbar]: SetStateType<boolean> = useState(false);
  const {classes, width} = props;
  const isSmall = useIsSmall(width);
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

  useEffect(() => setSelected(''), [palette]);

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
    <Grid container
          wrap="nowrap"
          direction={isSmall ? 'column' : 'row'}
          className="full-height">
      <Grid container direction="column" className={`text-center ${classes.imgPreviewDiv}`} wrap="nowrap" alignContent="center">
        <div className="relative full-width">
            <div className={classes.centerImgParent}>
        <div className={`center-img square ${classes.imgPreview}`}
              style={fileUrl ? {backgroundImage: `url(${fileUrl})`} : {}}/>
          {!fileUrl && <MountainIcon className={`absolute ${classes.mountIcon}`}/>}
        </div>
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
        <Typography variant="body1" className={classes.margin16}>JPG, PNG, GIF, WEBM</Typography>
        {palette && <ColorFormatsDisplay color={palette[selectedPallete || 'Vibrant'].value} allowCopy={true}/>}
      </Grid>

      <Grid
        className={`grow full-screen-border ${classes.paletteList} ${isSmall ? 'show-bottom' : ''}`}
        container
        direction="column"
        wrap="nowrap"
      >
        {
          palette ?
            Object.keys(palette).map((swatchKey: string) => {
              const readableKey = titleFromCamelCase(swatchKey);
              const match = swatchKey === selectedPallete || (!selectedPallete && swatchKey ===  'Vibrant');
              const {value} = palette[swatchKey];
              // TODO: These are placeholders - the style doesn't work at all. Needs more breathing room, so we'll display
              // The palette name on top in a larger font then the color name in the smaller size below. We'll figure it out
              // TODO: Rename the `Color` and `ColorList` components, since they're not really generic enough style wise to handle that
              // OR make them generic enough by passing the `Color` component with the props being consistent between the two - I like this better
              return <Color key={swatchKey} displayUnselected color={value} className={classes.colorPad} colorName={readableKey}
                            select={() => setSelected(swatchKey)} isSelected={match}/>
            }) : <Typography variant="body1" className={`${classes.margin16} ${isSmall ? 'text-center' : ''}`}>Your swatches will appear here once an image is given</Typography>
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

export default withStyles(style)(withWidth()(ImageExtractView));
