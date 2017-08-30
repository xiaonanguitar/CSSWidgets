import React, { Component } from 'react';
import _ from 'lodash';
import DropMenu from './DropMenu';
import ThreeDRotate from './ThreeDRotate';


class App extends Component {

    constructor(props,context) {
        super(props)
    }

    render() {
        return (
            <div className="mainContent">
               <DropMenu/>
               <ThreeDRotate/>
            </div>
        )
    }
}

export default App