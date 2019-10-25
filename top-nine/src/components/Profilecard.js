import React from "react";

function Profilecard(props) {
    return (
        <div>
            <div className="profile-stuff" key={props.id}>
                <img className="dummy-img" src="http://www.buckinghamandcompany.com.au/wp-content/uploads/2016/03/profile-placeholder.png"/>
                <h3>Username: <span>{props.username}</span></h3>
                <p>Email: <span>{props.email}</span></p>
            </div>
        </div>
    )
}

export default Profilecard;