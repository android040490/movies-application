import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';

import {getRouter, getUrlParamId, getUrlParamPage, getCurrentPath} from 'redux-store/selectors';

class Pagination extends Component {
    constructor(props){
        super(props)

        this.onChangePage = this.onChangePage.bind(this);
    };
    
    onChangePage(event){
        let {id, page, path} = this.props;
        id = +id;
        let index = +event.target.getAttribute('data');
        if (!(id == 1 && index == -1)){
            id += index;
            this.props.history.push(`/${path}/${page}/${id}` )    
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
    path: getCurrentPath(props)
});


export default withRouter(connect(mapStateToProps)(Pagination));