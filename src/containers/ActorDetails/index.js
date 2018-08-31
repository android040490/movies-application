import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPersonId, getActorDetails, getActorFilms, getActorLoading } from 'redux-store/selectors';
import { getActorById } from 'redux-store/actions';
import {getSliceIfOverflow} from 'Pipes';
 
import PreviousPageBtn from 'components/PreviousPageBtn';
import Preloader from 'components/Preloader';
import ControllPanel from 'components/ControllPanel';
import FilmThumbnail from 'components/FilmThumbnail';
import PersonPageSidebar from 'components/PersonPageSidebar';

class ActorDetails extends Component {
    constructor(props) {
        super(props);


    }

    componentWillMount() {
        this.props.getActorById(this.props.actorId)

    }

    renderActorDetails(actor, films) {
    
        return (
            <div className="person-page wrapper">
                <div className="person-page__header">
                    <div className="person-card">
                        <div className="person-card__img"><img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${actor.profile_path}`} alt={actor.name} /></div>
                        <div className="person-card__description">
                            <h2 className="person-card__title">{actor.name}</h2>
                            <div className="person-card__biography">
                                <h4>Biography</h4>
                                <p>{getSliceIfOverflow(actor.biography, 500) }</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="person-page__content">
                    <div className="person-page__sidebar">
                        <PersonPageSidebar person={actor}/>
                    </div>
                    <div className="person-page__main-content">
                        <h3>Known for :</h3>
                        <div className="list-cards">
                            {films.map(film => <div key={film.id} className="list-cards__item"><FilmThumbnail film={film} /></div>)}
                        </div>
                    </div>
                </div>

            </div>

        )
    }

    render() {
        let { loading, films, actor } = this.props;
        return (
            <div >
                <ControllPanel>
                    <PreviousPageBtn />
                </ControllPanel>
                {!loading && Object.keys(actor).length ? this.renderActorDetails(actor, films) : <Preloader />}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        actor: getActorDetails(state),
        films: getActorFilms(state),
        loading: getActorLoading(state),
        actorId: getPersonId(props)
    }
}

const mapDispatchToProps = {
    getActorById
}
export default connect(mapStateToProps, mapDispatchToProps)(ActorDetails);