import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {ContentCopy} from 'mdi-material-ui'
import tinycolor, {mostReadable} from 'tinycolor2';
import Clipboard from 'clipboard';
import {getColorFormat} from "../shared/convert";
import type {ColorType} from "../shared/colors";

class Color extends React.PureComponent<ColorPropType> {
  button: any;
  clipboard: any;

  componentDidMount () {
    const button = this.button;

    this.clipboard = new Clipboard(button, {
        text: trigger => trigger.getAttribute('clipboard-text')
      }
    )
  }

  componentWillUnmount() {
    this.clipboard.destroy()
  }

  static defaultProps = {
    format: 'hex'
  };

  render() {
    const {number, color, colorName, format} = this.props,
      actualColor: string = number ? (color[(number: any)]: any) : (color: any),
      tinyActualColor = tinycolor(actualColor),
      formattedColor = getColorFormat(actualColor, format),
      strColor = tinyActualColor.toHexString(),
      darkenedColor = tinyActualColor.darken(60).toHexString(),
      lightenedColor = tinyActualColor.lighten(80).toHexString(),
      readableColor = mostReadable(strColor, [darkenedColor, lightenedColor], {includeFallbackColors: true}).toHexString();

    return (
      <Card style={{backgroundColor: strColor, color: readableColor}}>
        <CardContent>
          <Typography type="headline" color="inherit" component="h2">
            {colorName} {number}
          </Typography>
        </CardContent>
        <CardActions disableActionSpacing>
          <div className="grow"/>
          <IconButton aria-label="Copy Color to Clipboard" color="inherit" buttonRef={(element) => {this.button = element}}
                      clipboard-text={formattedColor}>
            <ContentCopy/>
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

type ColorPropType = {
  color: ColorType | string,
  colorName: string,
  number?: string,
  format: string
}

export default Color;