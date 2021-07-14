import React, { Component } from 'react';
import "./Logo.css";
import logo1 from "../../img/logo1.png";
import logo2 from "../../img/logo2.png";
import logo3 from "../../img/logo3.png";
import logo4 from "../../img/logo4.png";
import logo5 from "../../img/logo5.png";
import logo6 from "../../img/logo6.png";
import logo7 from "../../img/logo7.png";
import logo8 from "../../img/logo8.png";
import logo9 from "../../img/logo9.png";

const logo = [
    {
        img: logo1,
    },
    {
        img: logo2,
    },
    {
        img: logo3,
    },
    {
        img: logo4,
    },
    {
        img: logo5,
    },
    {
        img: logo6,
    },
    {
        img: logo7,
    },
    {
        img: logo8,
    },
    {
        img: logo9,
    },

]

class Logotip extends Component {
    render() {
        return <div className={this.props.className}>
            {
                this.props.children
            }
        </div>
    }
}

export default class Logo extends Component {
    render() {
        return (
            <div className="container logo">
                <div className="row d-flex justify-content-center align-items-center">
                    <Logotip className="col-12 col-md-5 logotip">
                        <h1 className="mt-4">Join 200+ amazing <br /> companies</h1>
                    </Logotip>

                    <Logotip className="col-6 col-sm-12 col-md-7 text-center">
                        {
                            logo.map((v, i) => {
                               return <img src={v.img} className="m-3" alt="rasm" />
                            })
                           
                       }
                    </Logotip>  
                </div>
            </div>
        )
    }
}
