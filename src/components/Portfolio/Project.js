import React, { Component } from "react";

export default class Project extends Component {
  render() {
    let { name, languages, source, picture } = this.props.item;

    return (
      <div className="project">
        <img src={picture} alt=""></img>

        <span className="infos">
          <h3>{name}</h3>
          <p>{languages}</p>
        </span>
        <div className="btn_link">
          <a href={source}>Github</a>
        </div>
      </div>
    );
  }
}
