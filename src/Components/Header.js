import React, { Component } from "react";


import { Link } from "react-router-dom";

class Header extends Component {
  render() {

    return (
      <header id="home">
       

        <nav id="nav-wrap">
          

          <ul id="nav" className="nav" >
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Events
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Gallery
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        
        <img src={require('./Home.png')  } alt="description of image" style={

        {
          marginTop:'50px',
          maxWidth:"100%"
        }
        }/>
        
      </header>
      
    );
  }
}

export default Header;
