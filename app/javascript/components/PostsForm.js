import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import MenuItem from "material-ui/Menu/MenuItem";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  }
});

class PostsForm extends React.Component {
  state = {
    title: "",
    body: ""
  };

  handleChange = event => {
    const state = this.state;
    state[event.target.id] = event.target.value;
    this.setState(state);
  };

  render() {
    const { classes } = this.props;

    return (
      <form
        action="/admin/posts"
        method="post"
        className={classes.container}
        autoComplete="off"
      >
        <input
          type="hidden"
          name="authenticity_token"
          value={this.props.authToken}
        />
        <TextField
          required
          fullWidth
          id="title"
          name="post[title]"
          label="Title"
          margin="normal"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <TextField
          required
          fullWidth
          name="post[body]"
          id="body"
          label="Body"
          multiline
          rows="4"
          margin="normal"
          value={this.state.body}
          onChange={this.handleChange}
        />
        <Button
          type="submit"
          variant="raised"
          color="primary"
          className={classes.button}
        >
          Create
        </Button>
      </form>
    );
  }
}

PostsForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PostsForm);
