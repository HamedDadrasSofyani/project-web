import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Register from "./Components/Register";
import Log from "./Components/Log";
import Admin from "./Components/Admin/Admin";
import Events from "./Components/Admin/Events";
import Navbar from "./Components/Admin/Navbar";
import Users from "./Components/Admin/Users";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <Router>
        <div className="App">
          
          <div className="content">
            <Switch>
              <Route exact path = "/">
              <Header data={this.state.resumeData.main} />
              <About data={this.state.resumeData.main} />
              <Resume data={this.state.resumeData.resume} />
              <Portfolio data={this.state.resumeData.portfolio} />
              <Contact data={this.state.resumeData.main} />
              </Route>
              <Route path = "/log">
                <Log />
              </Route>
              <Route path = "/register">
                <Register />
              </Route>
              
              <Route path = "/admin">
              <Navbar/>
                <Admin/>

              </Route>
              <Route path = "/AdminEvents">
              <Navbar/>
                <Events/>
              </Route>
              <Route path = "/AdminUsers">
              <Navbar/>
                <Users/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
