import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {ContentCopy} from 'mdi-material-ui'

const styles = theme => ({
  card: {
  },
  flexGrow: {
    flex: '1 1 auto',
  },
});

class Color extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card} style={{backgroundColor: this.props.color[this.props.number]}}>
          <CardContent>
            <Typography type="headline" component="h2">
              {this.props.colorName} {this.props.number}
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <div className={classes.flexGrow} />
            <IconButton aria-label="Add to favorites">
              <ContentCopy />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

Color.propTypes = {
  classes: PropTypes.object.isRequired,
  colorName: PropTypes.string.isRequired,
  color: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired,
};

export default withStyles(styles)(Color);