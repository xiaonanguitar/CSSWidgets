import React,{Component} from 'react';
import history from './history';

class PageTwo extends Component {
    
    constructor(props,context) {
        super(props)
    }

    render() {
        return (
           <div>
               <span>sssss</span>
               <button onClick={() => {
                   console.log(this.props);
                   history.push({
                       pathname: '/',
                   });
               }}>back</button>
           </div>
        )
    }
}

export default PageTwo;