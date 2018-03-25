import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Collapse from '../../src/components/Collapse';
import RouterTester from '../../src/components/RouterTester';
import HashRouterTester from '../../src/components/HashRouterTester';
import history from '../../src/components/RouterTester/history';
import hashhistory from '../../src/components/HashRouterTester/history';
import EnhancedList from '../../src/components/HOComponent';

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

    changeHashRouter() {
        hashhistory.push({
            pathname: '/pagetwo/zzn',
            search: '?aa=2',
        });
    }

    render() {
        return (
            <Collapse>
                <Panel header="router">
                    <div>
                        <button onClick={this.changeRouter}>Test</button>
                        <RouterTester />
                    </div>
                </Panel>
                <Panel header="hash router">
                    <div>
                        <EnhancedList list={{
                            data: [{
                                name: "xx",
                            }, {
                                name: "aa",
                            }, {
                                name: "cc",
                            }],
                            isLoading: false
                        }}/>
                    </div>
                </Panel>
            </Collapse>
        )
    }
}

ReactDOM.render(<App/>,
  document.getElementById('content')
);