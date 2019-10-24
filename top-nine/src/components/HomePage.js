import React, { useState } from "react";
import { Route } from 'react-router-dom';

import Header from "./Header";
import Profilecard from "./Profilecard";
import Dashboard  from "./Dashboard";

import { useContext } from "react";
import { TopNineContext } from '../context/TopNineContext';

export const HomePage = props => {

    const { topnine } = useContext(TopNineContext)

    const [newNine, setNewNine] = useState(props)
    const addNewNine = e => {
        setNewNine([...newNine, e])
    }

    return(
        <div>
            <Header/>
            <div>
                <Route exact path='/homepage' render={() => <Profilecard {...props} topnine={props.nine} />} />
                <Route exact path='/dashboard' render={() => <Dashboard {...topnine} nine={props.nine}/>} />

            </div>
        </div>
    )
}