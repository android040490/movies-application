import React, { Component } from 'react';

class Label extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            blink: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log('click')
        this.setState((state) => ({ blink : !state.blink }))
    }
    
    render() {
        return (
            <div onClick={this.handleClick} className={`app-logo ${ this.state.blink ? 'blink' : ''}`}>
                <span>M</span>
                <span>o</span>
                <span>v</span>
                <span>i</span>
                <span>e</span>
                <span>s</span>
            </div>
        );
    }
}

export default Label;
