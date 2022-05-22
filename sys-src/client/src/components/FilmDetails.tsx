import React from 'react';
import {useParams} from "react-router-dom";

function FilmDetails() {
    const params = useParams();
    return (
        <div>
            <p>This should be the Film Details Page for the Film with id {params.filmId}</p>
        </div>
    );
}

export default FilmDetails;