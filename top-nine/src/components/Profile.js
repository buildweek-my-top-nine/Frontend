import React, { useEffect, useState } from 'react';
import './Profile.css'
import Header from "./Header";
import TopNineCard from "./TopNineCard";
import Profilecard from "./Profilecard";
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function Profile() {
    const [profiles, setProfile] = useState([]);
    const [data, setData] = useState([]);

    const userid = localStorage.getItem("userId");

    useEffect(() => {
        axiosWithAuth()
            .get(`https://cameron-mytopnine.herokuapp.com/users/user/${userid}`)
            .then(response => {
                const profiles = response.data;
                setData(response.data.userinterests);
                setProfile([profiles]);
            })
            .catch(error => {
                console.log("Sorry, you've got an error!", error)
            });
    }, [])
    return (
        <>
            <Header/>
            <div className="profile-image">
                <h1 className="top-nine-h1">Your Top Nine!</h1>

                {/* <ul> */}
                    {profiles.map((profile, index) => {
                        // console.log(item.interestname))
                        return(
                        <Profilecard key = {index}
                            username = {profile.username}
                            email = {profile.primaryemail}
                        />
                        )
                    })}
                    {data.map(element => {
                        return (
                        <div className="top-card-container">
                            <div className="top-card">
                                <div className="top-info" key={element.interest.interestid}>
                                    <h3>Interest: <span>{element.interest.interestname}</span></h3>
                                    <p> Description: <span>{element.interest.description}</span></p>
                                    {console.log(element)}
                                </div>
                            </div>
                        </div>
                    )
                    })}
            </div>
        </>
    )
}