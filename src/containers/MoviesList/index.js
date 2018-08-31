import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import R from 'ramda';

import {getFilms, getFilmsBySearch} from 'redux-store/actions';
import {
    getFilmsList,
    getLoading,
    getUrlParamId,
    getCurrentPageFromStore,
    getFullLocationPath,
    getUrlParamPage,
    getQueryParamSearch
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
            this.fetchFilms(this.props)
        } 
    }

    componentWillReceiveProps(nextProps){
        let pathNamesEqual = nextProps.pathName != this.props.pathName;
        let searchParamsEqual = nextProps.location.search != this.props.location.search;
        if( pathNamesEqual || searchParamsEqual ){
            this.fetchFilms(nextProps)
        }
    }

    fetchFilms(props){
        if( props.page == 'search'){
            this.props.getFilmsBySearch( props.search , props.pathName, props.pageId)
        }else{
            this.props.getFilms( props.page , props.pageId, props.pathName)
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
    films: getFilmsList(state),
    loading: getLoading(state),
    currentPage: getCurrentPageFromStore(state),
    page: getUrlParamPage(ownProps),
    pageId: getUrlParamId(ownProps),
    pathName : getFullLocationPath(ownProps),
    search : getQueryParamSearch(ownProps)

})

const mapDispatchToProps = { 
    getFilms,
    getFilmsBySearch
}

export default connect( mapStateToProps , mapDispatchToProps)(MoviesList);
