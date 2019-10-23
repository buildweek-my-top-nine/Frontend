import React from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

function CopyTopNine(props) {

    axiosWithAuth()
        .put(`#`)
        .then(res => console.log(res))
        .catch(err => console.log(err))


    return (
        <div className="copy-card">
            <div className="card-info" key={props.id}>
                <h2>Name: {props.name}</h2>
                <p>About: {props.about}</p>
            </div>
        </div>
    )
}

export default CopyTopNine;