import React, { Component } from 'react';
import { Button } from 'reactstrap';
import HomeBox from '../../Components/HomeBox';
import "./About.css"
import img from "../../img/photo.png"

export default class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row about__title">

                         <HomeBox>
                            <img className="w-100" src={img} alt="rasm" />
                        </HomeBox>

                         <HomeBox className="col-md-6 ">
                            <h1 className="title">The best finance stack for entrepreneurs</h1>
                              <p className="my-5">70% of companies switch to us from their DIY or legacy system. Now, get your bookkeeping, tax prep and CFO problems,
                            solved. Complete our <a className="text-primary" href="#">contact form</a> , and find out why 9 out of 10 customers recommend us.</p>
                         </HomeBox>
                   
                </div>
            </div>
        )
    }
}
