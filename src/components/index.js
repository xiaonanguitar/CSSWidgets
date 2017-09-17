import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Collapse from './Collapse';

const Panel = Collapse.Panel;

class App extends Component {
    
    constructor(props,context) {
        super(props)
    }

    render() {
        return (
            <Collapse>
                <Panel header="title1">
                    <div>xxxx</div>
                </Panel>
                <Panel header="title1">
                <div>xxxx</div>
                <div>xxxx</div>
                <div>xxxx</div>
                <div>xxxx</div>
                </Panel>
            </Collapse>
        )
    }
}

ReactDOM.render(<App/>,
  document.getElementById('content')
);

module.exports = {
    Collapse: Collapse
}