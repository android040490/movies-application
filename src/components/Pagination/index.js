import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';

import {getRouter, getUrlParamId, getCurrentLocation} from 'redux-store/selectors';

class Pagination extends Component {
    constructor(props){
        super(props)

        this.onChangePage = this.onChangePage.bind(this);
    };
    
    onChangePage(event){
        let param = +this.props.param;
        let {page} = this.props;
        let index = +event.target.getAttribute('data');
        if (!(param == 1 && index == -1)){
            param += index;
            this.props.history.push(`/${page}/${param}` )    
        };
    };

    render() {
        return (
            <div className="pagination wrapper"> 
                <button className="btn btn-primary pagination__btn"  data={-1} onClick={this.onChangePage}>&lt; Prev</button>
                <button className="btn btn-primary pagination__btn"  data={1} onClick={this.onChangePage}>Next &gt;</button>
            </div>
        );
    };
};

const mapStateToProps = (state, props) =>({
    param: getUrlParamId(props),
    history : getRouter(props),
    page: getCurrentLocation(props)
});


export default withRouter(connect(mapStateToProps)(Pagination));