import React,{Component} from 'react';
import { Router , Link, Route } from 'react-router';
import history from './history';
import PageOne from './PageOne';
import PageTwo from './PageTwo';

class RouterTester extends Component {
    
    constructor(props,context) {
        super(props)
    }

    render() {
        return (
            <Router  history={history}>
                <div>
                    <Route exact path='/' component={PageOne} />
                    <Route path="/pagetwo/:id" component={PageTwo} />
                </div>
            </Router>
        )
    }
}

export default RouterTester;
