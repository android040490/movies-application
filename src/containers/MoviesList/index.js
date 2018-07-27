import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import R from 'ramda';

import {getFilms} from 'redux-store/actions';
import {
    getFilteredFilms,
    getLoading,
    getUrlParamId,
    getCurrentPage,
    getCurrentLocation
    } from 'redux-store/selectors';

import MoviePreview from 'components/MoviePreview';
import Pagination from 'components/Pagination';
import Search from 'components/SearchComponent';


class MoviesList extends Component {
    componentWillMount() {
        let {currentPage, pageId} = this.props;
        if( currentPage != pageId){
            this.props.getFilms(this.props.pageId, this.props.page)
        }
        
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.pageId != this.props.pageId){
            this.props.getFilms(nextProps.pageId, this.props.page)
        }  
    }

    renderFilms (film) {
        return (
            <div key={film.id}  className="movies-list__item">
                <MoviePreview  film={film}/>
            </div>
        )
    }
    
    render() {
        const {films} = this.props;
        
        return (
            <div>
                <Search/>
                <Pagination/>
                <div className="movies-list wrapper">
                    { this.props.loading ? 'Loading' : this.props.films.map((film) => this.renderFilms(film))}
                </div>      
            </div>
                
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    films: getFilteredFilms(state),
    loading: getLoading(state),
    currentPage: getCurrentPage(state),
    page: getCurrentLocation(ownProps),
    pageId: getUrlParamId(ownProps)

})

const mapDispatchToProps = { 
    getFilms
}

export default connect( mapStateToProps , mapDispatchToProps)(MoviesList);