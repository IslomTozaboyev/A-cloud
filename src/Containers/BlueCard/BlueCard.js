import React, { Component } from 'react';
import "./BlueCard.css";
import { Button } from 'reactstrap';

export default class BlueCard extends Component {
    render() {
        return (
            <div className="container blue my-5">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-between align-items-center">
                        <div className="">
                            <h1>Ready to Switch? It's simple.</h1>
                            <p>Speak to an expert today</p>
                        </div>
                        <div>
                            <Button className="button" color="dark">Get Started</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
