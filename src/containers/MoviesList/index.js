import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getFilms, getFilmsBySearch} from 'redux-store/actions';
import {
    getFilmsList,
    getLoading,
    getUrlParamId,
    getCurrentPageFromStore,
    getFullLocationPath,
    getUrlParamPage,
    getQueryParamSearch,
    getUrlParamMoviesType
    } from 'redux-store/selectors';

import { splitStringBy, firstCharToUpperCase } from 'Pipes';

import MoviePreview from 'components/MoviePreview';
import Pagination from 'components/Pagination';
import Search from 'components/SearchComponent';
import Preloader from 'components/Preloader';
import ControllPanel from 'components/ControllPanel';


class MoviesList extends Component {
    componentWillMount() {
        console.log(this.props)
        let {currentPage, pathName} = this.props;
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
            this.props.getFilmsBySearch( props.search , props.pathName, props.pageId )
        }else{
            this.props.getFilms( props.moviesType, props.page , props.pathName, props.pageId)
        }
    }

    renderFilms (film) {
        return (
            <div key={film.id}  className="movies-page__list-item">
                <MoviePreview type={this.props.moviesType}  film={film}/>
            </div>
        )
    }
    
    render() {
        const {films, page, moviesType} = this.props;
        
        return (
            <div >
                <ControllPanel>
                    <Search/>
                    <Pagination/>
                </ControllPanel>
                <hr/>
                <div className="movies-page wrapper">
                    <h2 className="movies-page__title">{firstCharToUpperCase(splitStringBy( moviesType, '-', ' '))}: {splitStringBy( page , '-', ' ')}</h2>
                    <div className="movies-page__list">
                        { this.props.loading ? <Preloader/> : films.map((film) => this.renderFilms(film))}
                    </div> 
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
    search : getQueryParamSearch(ownProps),
    moviesType : getUrlParamMoviesType(ownProps)

})

const mapDispatchToProps = { 
    getFilms,
    getFilmsBySearch
}

export default connect( mapStateToProps , mapDispatchToProps)(MoviesList);
