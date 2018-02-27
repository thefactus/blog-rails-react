import React, { Component } from "react";
import Title from "./Title";
import Author from "./Author";
import Quote from "./Quote";
import LeftMenu from "./LeftMenu";

class Sidebar extends Component {
  render() {
    let title = "How to Geek";
    let author = "Pablo Bello";
    let quote =
      '"One of the best programming skills you can have is knowing when to walk away for awhile."';
    let quote_author = "- Oscar Godson";

    return (
      <div className="sidebar">
        <LeftMenu />
        <Title title={title} />
        <Author author={author} />
        <Quote quote={quote} quote_author={quote_author} />
      </div>
    );
  }
}

export default Sidebar;
