import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import MenuItem from "material-ui/Menu/MenuItem";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import RichTextEditor from "react-rte";

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
  },
  styleTest: {
    width: "100%"
  }
});

class PostsForm extends React.Component {
  static propTypes = {
    onChange: PropTypes.func
  };

  state = {
    title: "",
    body: "",
    value: RichTextEditor.createEmptyValue()
  };

  handleChange = event => {
    const state = this.state;
    state[event.target.id] = event.target.value;
    this.setState(state);
    console.log(state);
  };

  onChange = value => {
    const state = this.state;
    state["body"] = value.toString("html");
    this.setState({ value });
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(value.toString("html"));
    }
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
        <input
          type="hidden"
          name="post[body]"
          id="body"
          label="Body"
          value={this.state.body}
          onChange={this.handleChange}
        />
        <RichTextEditor value={this.state.value} onChange={this.onChange} />
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
