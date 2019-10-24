import React from 'react';
import './Profile.css'
import Header from "./Header";
import TopNineCard from "./TopNineCard";

export default function Profile(props) {
    return (
        <>
        <Header/>
        <div className="profile-image">
        <div className="profile-container">
            <div className="profile-header">
                <h1>My Top Nine</h1>
            </div>
            <div className="profile-stuff">
                <img className="dummy-img" src="https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Bob_at_Easel.jpg/220px-Bob_at_Easel.jpg"/>
                <h3>Username: <span>BRoss</span></h3>
                <h3>First Name: <span>Bob</span></h3>
                <h3>Last Name: <span>Ross</span></h3>
            </div>
        </div>
        <TopNineCard/>
        </div>
        </>
    )
}