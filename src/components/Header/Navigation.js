import React, { Component } from "react";
import { NavbarToggler, Collapse } from "reactstrap"
import { Link } from "react-router-dom";
import Logo from '../../../src/assets/image/mainLogo.png'

class Navigation extends Component{
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false
        }
    }
    navToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen 
        })
    }
   render(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
        <NavbarToggler onClick={this.navToggle} />
        <img src={Logo} alt="mainLogo" style={{width: "50px", marginRight: '15px'}} />
               
          <Collapse isOpen={this.state.isNavOpen} navbar>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/registration">Sign up</a>
              </li>
            </ul>
          </Collapse>
          </div>
        {/* </div> */}
      </nav>
    )
   }
}
export default Navigation