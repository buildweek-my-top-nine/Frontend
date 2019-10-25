import React from "react";

function Profilecard(props) {
    return (
        <div>
            <div className="card-info" key={props.id}>
                <h2>Username: {props.username}</h2>
                <p>Email: {props.email}</p>
            </div>
        </div>
    )
}

export default Profilecard;