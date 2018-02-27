import React, { Component } from "react";

class Quote extends Component {
  render() {
    return (
      <div className="quotes">
        <div>{this.props.quote}</div>
        <div>{this.props.quote_author}</div>
      </div>
    );
  }
}

export default Quote;
