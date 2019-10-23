import React from 'react';
import './Profile.css'

export default function Profile(props) {
    return (
        <div className="profile-container">
            <div className="profile-header">
                <h1>My Top Nine</h1>
            </div>
            <div className="profile-stuff">
                <img className="dummy-img" src="https://cvbay.co.uk/wp-content/uploads/2017/03/dummy-image.jpg"/>
                <h3>Username: <span>{props.username}</span></h3>
                <h3>Full Name: <span>{props.name}</span></h3>
            </div>
        </div>
    )
}