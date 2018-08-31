
import React, { Component } from 'react';
import {withRouter} from 'react-router';

class Search extends Component {
    constructor (props){
        super(props);
        this.state = {
            value : ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.debounce = this.debounce.bind(this);
    };

    search = this.debounce(this.changeLocation , 800);

    changeLocation(query){
        this.props.router.push(`/films/search?search=${query}&page=1`)
    }

    handleChange(event){
        let value = event.target.value;
        this.search(value);
    };

    debounce(f, ms) {
        let timer = null;
      
        return function (...args) {
            const onComplete = () => {
                f.apply(this, args);
                timer = null;
            };

            if (timer) {
                clearTimeout(timer);
            };

            timer = setTimeout(onComplete, ms);
        };
    };

    render() {
        return (
            <div className="search-form ">
                <div><label htmlFor="search">Search</label></div>
                <input id="search" type="text" onChange={this.handleChange} placeholder="Search"/>
            </div>
        );
    };
};

export default withRouter(Search);
