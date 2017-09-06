import React, { Component } from 'react';
import _ from 'lodash';
import DropMenu from './DropMenu';
import ThreeDRotate from './ThreeDRotate';
import Collapse, {Panel} from './Collapse';


class App extends Component {

    constructor(props,context) {
        super(props)
    }

    render() {
        return (
            <div className="mainContent">
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
                    <Panel header="title1">
                        <div>xxxx</div>
                        <div>xxxx</div>
                    </Panel>
               </Collapse>
            </div>
        )
    }
}

export default App