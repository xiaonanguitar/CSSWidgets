import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Collapse from '../../src/components/Collapse';
import RouterTester from '../../src/components/RouterTester';
import history from '../../src/components/RouterTester/history';

const Panel = Collapse.Panel;

class App extends Component {
    
    constructor(props,context) {
        super(props)
    }

    changeRouter() {
        history.push({
            pathname: '/pagetwo/zzn',
            search: '?aa=2',
        });
    }

    render() {
        return (
            <Collapse>
                <Panel header="title1">
                    <div>
                        <button onClick={this.changeRouter}>Test</button>
                        <RouterTester />
                    </div>
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