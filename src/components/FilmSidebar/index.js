import React from 'react';

import { getStringOfFields , getDateFromString} from 'Pipes';

const FilmSidebar = ({ film }) => {

    return (
        <div className="sidebar">
            <h3 className="sidebar__title">Facts : </h3>
            <p className="sidebar__field"><strong>Release date:</strong> <span>{getDateFromString(film.release_date)}</span></p>
            <p className="sidebar__field"><strong>Original language: </strong><span>{film.original_language}</span></p>
            <p className="sidebar__field"><strong>Production companies: </strong>{getStringOfFields('name', film.production_companies)}</p>
            {
                film.production_countries ? <p className="sidebar__field"><strong>Production countries: </strong>{getStringOfFields('name', film.production_countries)}</p> : null
            }
            <p className="sidebar__field"><strong>Genre: </strong>{getStringOfFields('name', film.genres)}</p>
            <p className="sidebar__field"><strong>Budget: </strong>{film.budget} $</p>
            <p className="sidebar__field"><strong>Revenue: </strong>{film.revenue} $</p>
            <p className="sidebar__field"><strong>Runtime: </strong>{film.runtime} m</p>
        </div>
    );
};

export default FilmSidebar;