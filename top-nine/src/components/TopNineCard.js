import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';


function TopNineCard(props) {
    const [nineCard, setNineCard] = useState([])
    const userid = localStorage.getItem("userId");

    // axiosWithAuth()
    //     .get(`https://cameron-mytopnine.herokuapp.com/users/user/${userid}`)
    //     .then(response => {
    //         const profiles = response.data.userinterests
    //             (console.log(response))
    //             setNineCard([profiles]);
    //     })
    //     .catch(err => console.log(err))


    return (
        <>
        <div className="top-card-container">
            <div className="top-card">
                <div className="top-info" key={props.id}>
                    <h3>{props.data.interestname}</h3>
                    <p>{props.data.description}</p>
                    {console.log(props)}
                </div>
            </div>
        </div>
        <button className="button-copy" type="onSubmit">Copy my Top Nine!</button>
        </>
    )
}

export default TopNineCard;