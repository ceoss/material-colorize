import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {ContentCopy} from 'mdi-material-ui'

function Color(props) {
  return (
    <Card style={{backgroundColor: props.color[props.number]}}>
      <CardContent>
        <Typography type="headline" component="h2">
          {props.colorName} {props.number}
        </Typography>
      </CardContent>
      <CardActions disableActionSpacing>
        <div className="grow"/>
        <IconButton aria-label="Add to favorites">
          <ContentCopy/>
        </IconButton>
      </CardActions>
    </Card>
  );
}

Color.propTypes = {
  colorName: PropTypes.string.isRequired,
  color: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired,
};

export default Color;