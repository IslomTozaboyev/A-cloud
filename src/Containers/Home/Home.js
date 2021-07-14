import { Button } from 'reactstrap';
import React, { Component } from 'react';
import "./Home.css";
import home from "../../img/home.png";
import HomeBox from '../../Components/HomeBox';




export default class Home extends Component {
    render() {
        return (
            <div className="container home">
                <div className="row">

                        <HomeBox className="col-md-6 homebox__title">
                            <h1>Get your <br /> finances right</h1>
                            <p className="my-5">Get your finances right with Accountancy Cloud. We offer the best accounting,
                                RD credits and CFO services for ambitious businesses who want to grow.</p>
                            <p className="description">Switching to us is simple</p>
                            <Button color="dark button">Talk to us</Button>
                         </HomeBox>
                    
                        <HomeBox>
                            <img className="w-100" src={home} alt="rasm" />
                        </HomeBox>
                </div>
            </div>
        )
    }
}
