import React, { Component } from "react";


class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer>
        <div className="row">
          
            <div className="twelve columns">
              <ul className="social-links">{networks}</ul>

              <ul className="copyright">
                <li>&copy; Copyright 2022 Hamed</li>
                <li>
                  Design by{" "}
                  <a title="Instagram Page" href="https://www.instagram.com/hamed_dadrs/?hl=en">
                    Hamed Dadras Sofyani
                  </a>
                </li>
              </ul>
            </div>
          

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
