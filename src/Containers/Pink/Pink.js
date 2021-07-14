import React, { Component } from 'react';
import SwitchCase from '../../Components/SwitchCase';
import "./Pink.css";
import rocket1 from "../../img/rocket1.png";
import rocket2 from "../../img/rocket2.png";
import rocket3 from "../../img/rocket3.png";



export default class Pink extends Component {
    render() {
        return (
      <div className="pink">
                <div className="container py-3">
                    <div className="row py-5">
                        
                        <h1 className="mt-2">Plans built for growth</h1>
          
                    <SwitchCase className="col-md-4 mt-5 pinkRocket">
                            <img className="mb-5" src={rocket1} alt="rasm" />
                            <h2>Early stage startup</h2>
                            <p>
                                Need your accounting system set up? Learn financial best practice and prime your business for the next stage of growth.
                                We get you moving quickly with an accounting solution that does what you need.
                            </p>
                        </SwitchCase>
          
                        <SwitchCase className="col-md-4 mt-5 pinkRocket">
                            <img className="mb-5" src={rocket2} alt="rasm" />
                            <h2>Scale up</h2>
                            <p>Spend less time worrying about your finances and more time shaping your company’s future. Get your bookkeeping, RD credits and CFO problems, solved.</p>
                        </SwitchCase>
          
                        <SwitchCase className="col-md-4 mt-5 pinkRocket">
                            <img className="mb-5" src={rocket3} alt="rasm" />
                            <h2>High growth</h2>
                           <p>Gain the financial accuracy, visibility, and real-time analysis you need to make smarter decisions, drive efficiency, and achieve total organizational alignment.</p>
                        </SwitchCase>
          
                    </div>
                </div>
      </div>
        )
    }
}
