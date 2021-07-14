import React, { Component } from 'react';
import "./Header.css";
import logo from "../../img/img.png"
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


export default class Header extends Component {
    
    state = { a: false }
        showNav = () => {
        this.setState((state) => {
            return {a: !state.a}
        })
}   

    render() {
        return (
            <header className="px-5 py-2 header">
              <div className="container-fluid my-2">
                   <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex">
                            <img className="w-100 h-100  mt-1" src={logo} alt="rasm" />
                            <h5 className="ms-3 fw-bold subtitle">Accoundance <br /> Cloud</h5>
                        </div>
                       
                        
                        <div className={`nav__menu ${this.state.a && "nav__start" || ""}`}>
                            <a href="#Product">Home</a>
                            <a href="#Templates">How it works
                            </a>
                            <a href="#Pricing">What we do</a>
                            <a href="#Customers">Who we help</a>
                                <a href="#Learn">Resources</a>                            
                                <Button className="times" onClick={this.showNav} color="success">
                                    <FontAwesomeIcon icon={faTimes}/>
                                </Button>

                            </div>
                       
                     
                       
                        <div className="nav__btn d-flex">
                        <Button className="d-none d-lg-flex me-4 light__button" color="light">Login</Button>
                                <Button className="button d-none d-lg-flex text-white" color="dark">Talk to an Expert</Button>
                                
                                <Button className="bars ms-3" onClick={this.showNav}>
                                    <FontAwesomeIcon icon={faBars}/>
                                </Button>
                        </div>
                   </div>
              </div>
            </header>
        )
    }
}