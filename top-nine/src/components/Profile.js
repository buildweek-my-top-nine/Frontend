import React, { useEffect } from 'react';
import './Profile.css'
import Header from "./Header";
import TopNineCard from "./TopNineCard";
import Profilecard from "./Profilecard";

export default function Profile(items) {
    return (
        <div>
            <Header/>
            <h1>Your Top Nine!</h1>

             {/* <ul> */}
                {items.map((item, index) => {
                    // console.log(item.interestname))
                    return(
                    <Profilecard key = {index}
                        username = {item.username}
                        email = {item.primaryemail}
                    />
                    )
                })}
        </div>
        
    )
}