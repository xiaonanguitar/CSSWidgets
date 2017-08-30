import React, { Component } from 'react';
import _ from 'lodash';
import './index.css';

class ThreeDRotate extends Component {

    constructor(props,context) {
        super(props)
        this.state = {
            rotate: false
        }
        this.threeDRotate = this.threeDRotate.bind(this)
    }

    threeDRotate() {
        let rotate = this.state.rotate;
        this.setState({
            rotate: !rotate
        })
    }

    render() {
        return (
            <div className="container" onClick={this.threeDRotate}>
                <div className={this.state.rotate?"flip rotate" : "flip"}>
                    <div className="front">
                        <img src="../../images/delete.png" alt=""/>
                    </div>
                    <div className="back">
                        <img src="../../images/icon.png" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ThreeDRotate