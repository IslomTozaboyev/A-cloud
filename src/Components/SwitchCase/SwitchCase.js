import React, { Component } from 'react';
import "./SwitchCase.css";

export default  class SwitchCase extends Component {
    render() {
        return <div className={this.props.className}>
            {
                this.props.children
            }
        </div>
    }
}
