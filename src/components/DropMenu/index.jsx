import React, { Component } from 'react';
import _ from 'lodash';
import './index.css';

class DropMenu extends Component {

    constructor(props,context) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="demo-hover demo-ul t_c">
                    <ul className="fllil">
                        <li>
                            <a href="javascript:;">html</a>
                            <ul>
                                <li><a href="#">div</a></li>
                                <li><a href="#">h1</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">js</a>
                            <ul>
                                <li><a href="#">string</a></li>
                                <li><a href="#">array</a></li>
                                <li><a href="#">object</a></li>
                                <li><a href="#">number</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">css3</a>
                            <ul>
                                <li><a href="#">transition</a></li>
                                <li><a href="#">animation</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">框架</a>
                            <ul>
                                <li><a href="#">vue</a></li>
                                <li><a href="#">react</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div className="demo-hover demo-ul ul-transition t_c">
                    <ul className="fllil">
                        <li>
                            <a href="javascript:;">html</a>
                            <ul>
                                <li><a href="#">div</a></li>
                                <li><a href="#">h1</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">js</a>
                            <ul>
                                <li><a href="#">string</a></li>
                                <li><a href="#">array</a></li>
                                <li><a href="#">object</a></li>
                                <li><a href="#">number</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">css3</a>
                            <ul>
                                <li><a href="#">transition</a></li>
                                <li><a href="#">animation</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">框架</a>
                            <ul>
                                <li><a href="#">vue</a></li>
                                <li><a href="#">react</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
}

export default DropMenu