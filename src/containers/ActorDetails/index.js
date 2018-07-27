import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getUrlParamId, getActorDetails, getActorFilms, getActorLoading} from 'redux-store/selectors';
import {getActorById} from 'redux-store/actions';

import PreviousPageBtn from 'components/PreviousPageBtn';
import MoviePreview from 'components/MoviePreview';

class ActorDetails extends Component {
    constructor(props) {
        super(props);
        
        
    }

    componentWillMount(){
        // console.log(this.id)
        this.props.getActorById(this.props.actorId)

    }

    renderActorDetails(actor, films){
        return (
            <div className="wrapper">
                <div>
                    <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${actor.profile_path}`} alt=""/>
                </div>
                <div>{actor.name}</div>
                <div className="movies-list">
                    {films.map(film => <div key={film.id} className="movies-list__item"><MoviePreview  film={film}/></div>)}
                </div>
            </div>
            
        )
    }

    render() {
        let {loading, films, actor} = this.props;
        return (
            <div >
                <div>
                    <PreviousPageBtn/>
                </div>
                { !loading && Object.keys(actor).length ? this.renderActorDetails(actor, films) : 'Loading' }
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        actor : getActorDetails(state),
        films : getActorFilms(state),
        loading : getActorLoading(state),
        actorId : getUrlParamId(props)
    }
}

const mapDispatchToProps = {
    getActorById
}
export default connect(mapStateToProps, mapDispatchToProps)(ActorDetails);