import React, { Component } from 'react';
import "./Footer.css";
import omeru2 from "../../img/photo2.png";
import { Button } from 'reactstrap';
import acca from "../../img/acca.png"


class Column extends Component {
    render() {

        const { column: { title, list, colProps}, } = this.props;
        console.log(title, list);

        return <div className={colProps || `col-6 col-sm-6 col-md-4 col-lg-2 py-5 mb-4 mt-5`}>
            <ul className="fw-bold text-white list-unstyled">
                <li>{title}</li>
            {
                list.map((value, index) => {
                    return<li> <a href={value.url} className={`d-block my-3 text-secondary ${value.className}`}>{ value.title} {value.badge }</a></li>
                })
                }
                </ul>
        </div>
    }
}


export default class Footer extends Component {
    render() {

        const { colProps, data } = this.props;

        return (
            <footer className="bg-dark mt-5 footer">
                <div className="container py-3">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center mt-4">
                                <img src={omeru2} alt="rasm" />
                                <h1 className="text-white ms-3">Your new finance team</h1>
                          </div>
                            <Button color="primary">Start free trial</Button>
                        </div>
                    
                    {
                        this.props.data.map((column, index) => {
                            return <Column column={column} colProps={colProps}></Column>
                        })
                        }

                      <div className="col-12 col-md-12">
                            <div className="d-flex justify-content-between align-items-center finish">
                               <div className="d-flex">
                                    <p className="text-white">© Accountancy Cloud 2021</p>
                                    <p className="ms-5 text-white">Privacy Policy and Cookies</p>
                                    <p className="ms-5 text-white">Terms of Service</p>
                                </div>
                                <div>
                                    <img src={acca} alt="rasm" />
                                </div>
                            </div>
                      </div>

                 </div>
             </div>
            </footer>
        )
    }
}