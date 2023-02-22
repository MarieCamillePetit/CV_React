import React, { Component } from "react";

export default class Project extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    let { name, languages, languagesIcons, source, info, picture } =
      this.props.item;

    return (
      <div className="project" onClick={this.handleInfo}>
        <img src={picture} alt=""></img>

        <span className="infos">
          <h3>{name}</h3>
          <p> Languages : {languages}</p>
        </span>

        <div className="btn_link">
          <a>See more</a>
        </div>
        {this.state.showInfo && (
          <div className="showInfos">
            <div className="infosContent">
              <img src={picture} alt=""></img>
              <div className="head">
                <h2>{name}</h2>
                <div className="sourceCode">
                  <a
                    href={source}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="a_detail"
                  >
                    Github
                  </a>
                </div>
              </div>
              <p className="text">{info}</p>
              <div className="a_detail">
                <a onClick={this.handleInfo}>Return</a>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
