import React, { Component } from 'react';
import _ from 'lodash';
import './index.css';

export class Panel extends Component {
    
    constructor(props,context) {
        super(props)
        this.state = {
            collabrate: false
        }
        this.collabrate = this.collabrate.bind(this)
    }

    collabrate() {
        this.setState({
            collabrate: !this.state.collabrate
        })
    }

    render() {
        return (
            <div className="panel">
                <div className={!this.state.collabrate?"header collabrate":"header"} onClick={this.collabrate}>{this.props.header}</div>
                <div className={this.state.collabrate?"content collabrate":"content"}>
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

class Collapse extends Component {

    constructor(props,context) {
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Collapse
