import React, { Component } from 'react';
import {Link} from 'react-router';

import {getSliceIfOverflow} from 'Pipes';

class PersonPreview extends Component {
    render() {
        let { person } = this.props;
        return (
            <Link to={`/person/${person.id}`} className="person-preview">
                <div className="person-preview-img">
                    <img src={`https://image.tmdb.org/t/p/w235_and_h235_face${person.profile_path}`} alt={person.name} />
                </div>
                <div className="person-preview-text">
                    <h3 className="person-preview-title">{person.name}</h3>
                    <p >
                        {getSliceIfOverflow(person.known_for.map(item => item.title).join(', '), 30)}
                    </p>
                </div>
            </Link>
        );
    }
}

export default PersonPreview;