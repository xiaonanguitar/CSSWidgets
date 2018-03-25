import React,{Component, PropTypes} from 'react';

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
                   this.context.router.history.push({
                       pathname: '/',
                   });
               }}>back</button>
           </div>
        )
    }
}

PageTwo.contextTypes = {
    router: PropTypes.object.isRequired
}

export default PageTwo;