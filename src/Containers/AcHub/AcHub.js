import React, { Component } from 'react';
import HomeBox from '../../Components/HomeBox';
import "./AcHub.css";
import achub from "../../img/achub.png"
import { Button } from 'reactstrap';

export default class AcHub extends Component {
    render() {
        return (
            <div className="container achub">
                <div className="row">
                         <HomeBox className="col-md-6 title">
                            <h1 className="title">The AC Hub</h1>
                            <p className="my-5">Explore our dedicated online resources. We've got the tips,
                            tricks and online accounting know-how for business success.</p>
                        
                        <Button className="button" color="light">View Hub</Button>
                     </HomeBox>
                    
                         <HomeBox>
                             <img className="w-100 mt-5 achub__img" src={achub} alt="rasm" />
                        </HomeBox>
                </div>
            </div>
        )
    }
}
