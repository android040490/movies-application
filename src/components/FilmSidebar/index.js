import React from 'react';

import { getStringOfFields , getDateFromString} from 'Pipes';

const FilmSidbar = ({ film }) => {

    return (
        <div className="film-sidebar">
            <h3 className="film-sidebar__title">Facts : </h3>
            <p className="film-sidebar__field"><strong>Release date:</strong> <span>{getDateFromString(film.release_date)}</span></p>
            <p className="film-sidebar__field"><strong>Original language: </strong><span>{film.original_language}</span></p>
            <p className="film-sidebar__field"><strong>Production companies: </strong>{getStringOfFields('name', film.production_companies)}</p>
            <p className="film-sidebar__field"><strong>Production countries: </strong>{getStringOfFields('name', film.production_countries)}</p>
            <p className="film-sidebar__field"><strong>Genre: </strong>{getStringOfFields('name', film.genres)}</p>
            <p className="film-sidebar__field"><strong>Budget: </strong>{film.budget} $</p>
            <p className="film-sidebar__field"><strong>Revenue: </strong>{film.revenue} $</p>
            <p className="film-sidebar__field"><strong>Runtime: </strong>{film.runtime} m</p>
        </div>
    );
};

export default FilmSidbar;