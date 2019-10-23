import React from 'react';
import './Profile.css'

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-header">
                <h1>My Top Nine</h1>
            </div>
            <div className="profile-stuff">
                <img className="dummy-img" src="https://cvbay.co.uk/wp-content/uploads/2017/03/dummy-image.jpg"/>
                <h3>Username: <span>Bbaney</span></h3>
                <h3>Full Name: <span>Billy Baney</span></h3>
            </div>
        </div>
    )
}