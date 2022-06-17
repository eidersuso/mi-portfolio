import React, { Component } from 'react'
export default class footer extends Component {
    render() {
      return (
        <>
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-dribbble" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-skype" />
                  </a>
                </li>
              </ul>
              <ul className="copyright">
                <li>© Copyright 2014 CeeVee</li>
                <li>
                  Design by{" "}
                  <a
                    href="http://www.styleshout.com/"
                    title="Styleshout"
                    target="_blank"
                  >
                    Styleshout
                  </a>
                </li>
              </ul>
            </div>
            <div id="go-top">
              <a className="smoothscroll" title="Back to Top" href="#home">
                <i className="icon-up-open" />
              </a>
            </div>
          </div>
        </footer>{" "}
        {/* Footer End*/}
      </>
      
      )
    }
  }