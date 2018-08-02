import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import R from 'ramda';

import {getFilms} from 'redux-store/actions';
import {
    getFilteredFilms,
    getLoading,
    getUrlParamId,
    getCurrentPageFromStore,
    getFullLocationPath,
    getUrlParamPage
    } from 'redux-store/selectors';

import MoviePreview from 'components/MoviePreview';
import Pagination from 'components/Pagination';
import Search from 'components/SearchComponent';
import Preloader from 'components/Preloader';
import ControllPanel from 'components/ControllPanel';


class MoviesList extends Component {
    componentWillMount() {
        let {currentPage, pageId, pathName} = this.props;
        if( currentPage != pathName){
            this.props.getFilms( this.props.page, this.props.pageId, this.props.pathName)
        }
        
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.pathName != this.props.pathName){
            this.props.getFilms( nextProps.page , nextProps.pageId, nextProps.pathName)
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
            <div >
                <ControllPanel>
                    <Search/>
                    <Pagination/>
                </ControllPanel>
                <hr/>
                <div className="movies-list wrapper">
                    { this.props.loading ? <Preloader/> : this.props.films.map((film) => this.renderFilms(film))}
                </div>      
            </div>
                
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    films: getFilteredFilms(state),
    loading: getLoading(state),
    currentPage: getCurrentPageFromStore(state),
    page: getUrlParamPage(ownProps),
    pageId: getUrlParamId(ownProps),
    pathName : getFullLocationPath(ownProps)

})

const mapDispatchToProps = { 
    getFilms
}

export default connect( mapStateToProps , mapDispatchToProps)(MoviesList);