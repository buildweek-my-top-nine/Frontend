import React, { useState, useEffect } from 'react';
import Profile from "./Profile";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import { useContext } from "react"
import { TopNineContext } from "../context/TopNineContext";

export const Profilecard = props => {
    useEffect(() => {props.getNine()}, [])
    const {nine} = useContext(TopNineContext);

    // useEffect(() => {
    //     axiosWithAuth()
    //         .get('/users')
    //         .then(object => {
    //             const profile = object.data;
    //             (console.log(object))
    //             setProfile([profile]);
    //         })
    //         .catch(error => {
    //             console.log("Sorry, you've got an error!", error);
    //         });

    // }, []);

// console.log(profile)
    
    return (
        <div>
            <div>
                {nine.map((user, index) => {
                    return (
                        <Profile key={index}
                        getNine={props.getNine}
                        id={user.id}
                        first_name={user.first_name}
                        last_name={user.last_name}
                        username={user.username}
                        />
                    )
                })}
            </div>
        </div>
    )
}
