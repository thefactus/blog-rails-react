import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
import Paper from "material-ui/Paper";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

function SimpleTable(props) {
  const { classes } = props;

  function createData(id, title, body, created_at, updated_at, actions) {
    const max_length = 30;
    body =
      typeof body === "string" && body.length > max_length
        ? body.substring(0, max_length) + "..."
        : body;
    return { id, title, body, created_at, updated_at, actions };
  }

  const data = [];

  props.posts.map(post => {
    if (post.type == "post") {
      data.push(
        createData(
          post.id,
          post.attributes.title,
          post.attributes.body,
          post.attributes.created_at,
          post.attributes.updated_at,
          ""
        )
      );
    }
  });

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Title</TableCell>
            <TableCell numeric>Body</TableCell>
            <TableCell numeric>Created At</TableCell>
            <TableCell numeric>Updated At</TableCell>
            <TableCell numeric>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(post => {
            return (
              <TableRow key={post.id}>
                <TableCell>{post.id}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.body}</TableCell>
                <TableCell numeric>{post.created_at}</TableCell>
                <TableCell numeric>{post.updated_at}</TableCell>
                <TableCell numeric>{"+"}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
