import React,{Component} from 'react';
import { HashRouter as Router , Link, Route, HashHistory } from 'react-router-dom';
import history from './history';
import PageOne from './PageOne';
import PageTwo from './PageTwo';

class HashRouterTester extends Component {
    
    constructor(props,context) {
        super(props)
    }

    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path='/' component={PageOne} />
                    <Route path="/pagetwo/:id" component={PageTwo} />
                </div>
            </Router>
        )
    }
}

export default HashRouterTester;
