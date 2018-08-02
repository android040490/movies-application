import React from 'react';

import { getDateFromString } from 'Pipes';

const PersonPageSidebar = ({person}) => {
    return (
        <div className="sidebar">
            <h3 className="sidebar__title">Information about the person</h3>
            <div className="sidebar__field"><strong>Known For : </strong> {person.known_for_department}</div>
            <div className="sidebar__field"><strong>Birthday : </strong> {getDateFromString(person.birthday)}</div>
            <div className="sidebar__field"><strong>Place of birth : </strong> {person.place_of_birth}</div>
            <div className="sidebar__field">
                <strong>Also known as : </strong>
                { person.also_known_as.map((item, index) => <p key={index}>{item}</p>)
            }
            </div>
            <div className="sidebar__field"><strong></strong></div>
            <div className="sidebar__field"><strong></strong></div>
            <div className="sidebar__field"><strong></strong></div>
            <div className="sidebar__field"><strong></strong></div>
            <div className="sidebar__field"><strong></strong></div>
        </div>
    );
};

export default PersonPageSidebar;