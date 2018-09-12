import React, { Component } from 'react';
import {withRouter} from 'react-router';

class PreviousPageBtn extends Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.router.goBack();
    }
    
    render() {
        return (
            <div>
                <button className="nav-btn" onClick={this.handleClick}> &lt; BACK</button>
            </div>
        );
    }
}

export default withRouter(PreviousPageBtn);