import React, { Component } from 'react';
import {withRouter} from 'react-router';

class ActorThumbnail extends Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        this.props.router.push(`/actor/${this.props.data.id}`)
    }

    render() {
        let {data : actor} = this.props 
        return (
            <div className="actor-card-thumbnail" onClick={this.handleClick}>
                <div className="actor-card-thumbnail__img">
                    <img src={`https://image.tmdb.org/t/p/w138_and_h175_face${actor.profile_path}`} alt=""/>
                </div>
                <div className="actor-card-thumbnail__text">
                    <h3 className="actor-card-thumbnail__name">{actor.name}</h3>
                    <p className="actor-card-thumbnail__character">{actor.character}</p>
                </div>
            </div>
        );
    }
}

export default withRouter(ActorThumbnail);