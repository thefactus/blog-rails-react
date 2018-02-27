import React, { Component } from "react";
import AppDrawer from "./AppDrawer";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";
import { withStyles } from "material-ui/styles";
import PropTypes from "prop-types";
import PostsForm from "./PostsForm";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "",
    color: theme.palette.text.secondary
  }
});

class PostsNew extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    const title = "New Post";
    const content = (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <PostsForm authToken={this.props.authToken} />
          </Paper>
        </Grid>
      </Grid>
    );

    return (
      <div>
        <AppDrawer title={title} content={content} />
      </div>
    );
  }
}

PostsNew.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PostsNew);
