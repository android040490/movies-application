import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';

import queryString from 'query-string';

import {getRouter, getUrlParamId, getUrlParamPage, getCurrentPath, getFullLocationPath} from 'redux-store/selectors';

class Pagination extends Component {
    constructor(props){
        super(props)

        this.onChangePage = this.onChangePage.bind(this);
    };
    
    onChangePage(event){
        let {id, page, path, location} = this.props;
        id = +id;
        let index = +event.target.getAttribute('data');
        if (!(id == 1 && index == -1)){
            id += index;
            let search = queryString.parse( location.search );
            search.page = id;
            let newSearch = queryString.stringify(search);
            this.props.history.push(`${path}?${newSearch}` )    
        };
    };

    render() {
        return (
            <div> 
                <button className="nav-btn"  data={-1} onClick={this.onChangePage}>&lt; Prev</button>
                <button className="nav-btn"  data={1} onClick={this.onChangePage}>Next &gt;</button>
            </div>
        );
    };
};

const mapStateToProps = (state, props) =>({
    id: getUrlParamId(props),
    history : getRouter(props),
    page: getUrlParamPage(props),
    path: getFullLocationPath(props)
});


export default withRouter(connect(mapStateToProps)(Pagination));