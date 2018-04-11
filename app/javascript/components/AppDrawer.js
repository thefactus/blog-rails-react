import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import List from "material-ui/List";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import { mailFolderListItems, otherMailFolderListItems } from "./tileData";
import Button from "material-ui/Button";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    height: "100vh"
  },
  button: {
    // margin: theme.spacing.unit,
    float: "right",
    textAlign: "right"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0 // So the Typography noWrap works
  },
  mainContent: {
    marginTop: theme.spacing.unit * 3
  },
  toolbar: theme.mixins.toolbar,
  toolbarDisplay: {
    display: "flex"
  },
  tools: {
    flexGrow: 1,
    margin: 0
  },
  title: {
    marginTop: 10
  }
});

class AppDrawer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              Admin
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.toolbar} />
          <List>{mailFolderListItems}</List>
          <Divider />
          <List>{otherMailFolderListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div className={classes.toolbarDisplay}>
            <Typography variant="title" className={classes.title}>
              {this.props.title}
            </Typography>
            <ul className={classes.tools}>
              <Button
                variant="raised"
                color="primary"
                className={classes.button}
                href="/admin/posts/new"
              >
                New Post
              </Button>
            </ul>
          </div>
          <div className={classes.mainContent}>{this.props.content}</div>
        </main>
      </div>
    );
  }
}

AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppDrawer);
