import "stylesheets/application";

import React from "react";
import ReactDOM from "react-dom";
import PostsNew from "../../components/PostsNew";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<PostsNew />, document.getElementById("posts_new"));
});
