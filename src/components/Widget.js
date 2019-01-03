//@flow

import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: "none",
  },
});

type Props = {
  buttonLogger: () => void,
  wipe: () => void,
  classes: Object,
};

class Widget extends Component<Props> {
  render() {
    const { buttonLogger, classes, wipe } = this.props;

    return (
      <div>
        <Button
          onClick={buttonLogger}
          variant="contained"
          className={classes.button}
        >
          Button
        </Button>
        <Button onClick={wipe} variant="contained" className={classes.button}>
          Wipe
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Widget);
