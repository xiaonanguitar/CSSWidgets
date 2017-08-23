import React, { Component } from 'react';
import _ from 'lodash';
import DropMenu from './DropMenu';


class App extends Component {

    constructor(props,context) {
        super(props)
    }

    render() {
        return (
            <div className="mainContent">
               <DropMenu/>
            </div>
        )
    }
}

export default App