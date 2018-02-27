import "stylesheets/application";

import React from "react";
import ReactDOM from "react-dom";
import PostsNew from "../../components/PostsNew";

document.addEventListener("DOMContentLoaded", () => {
  const authToken = document.getElementsByName("authenticity_token")[0].value;

  ReactDOM.render(
    <PostsNew authToken={authToken} />,
    document.getElementById("posts_new")
  );
});
