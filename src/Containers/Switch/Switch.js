import React, { Component } from 'react';
import "./Switch.css";
import water1 from "../../img/water1.png";
import water2 from "../../img/water2.png";
import water3 from "../../img/water3.png";
import { Button } from 'reactstrap';
import SwitchCase from '../../Components/SwitchCase';
 

export default class Switch extends Component {
    render() {
        return (
            <div className="container">
                <div className="row switch">
                    <h1 className="mb-5">Why Switch?</h1>

                    <SwitchCase className="col-md-4 mt-5 water">
                        <img className="mb-5" src={water1} alt="rasm" />
                        <h2>Powerful software</h2>
                        <p>
                        Included in our service, each customer gets in-house software
                        to access live financial dashboards and real-time management reports.
                        </p>
                    </SwitchCase>

                    <SwitchCase className="col-md-4 mt-5 water">
                        <img className="mb-5" src={water2} alt="rasm" />
                        <h2>Track cashflow</h2>
                        <p>Stay on top of your working capital, taxes, and cashflow, to ensure your business is performing at its best.</p>
                    </SwitchCase>

                    <SwitchCase className="col-md-4 mt-5 water">
                        <img className="mb-5" src={water3} alt="rasm" />
                        <h2>Award winning support</h2>
                       <p> Expect the best from us. Get a dedicated finance team that will handle all your accounting, RD credits and CFO needs.</p>
                    </SwitchCase>

                    <Button className="button mt-5" color="success">Discover what we do</Button>

                </div>
            </div>
        )
    }
}
