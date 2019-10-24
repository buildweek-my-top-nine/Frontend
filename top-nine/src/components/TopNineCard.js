import React from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';


function TopNineCard(props) {

    axiosWithAuth()
        .get(`/topnine/interests`)
        .then(res => console.log(res))
        .catch(err => console.log(err))


    return (
        <>
        <div className="top-card-container">
            <div className="top-card">
                <div className="top-info" key={props.id}>
                    <h2>Name: {props.interestname}</h2>
                    <p>About: {props.description}</p>
                </div>
            </div>
        </div>
        <button className="button-copy" type="onSubmit">Copy my Top Nine!</button>
        </>
    )
}

export default TopNineCard;