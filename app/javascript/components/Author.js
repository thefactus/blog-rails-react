import React, { Component } from "react";

class Author extends Component {
  render() {
    return (
      <div>
        <div className="author">
          {this.props.author}
          <div className="underline">_</div>
        </div>
      </div>
    );
  }
}

export default Author;
