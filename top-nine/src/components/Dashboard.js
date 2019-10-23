import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import TopList from './TopNine';


const Dashboard = () => {
    const [topNine, setTopNine] = useState([]);


    useEffect(() => {
        axiosWithAuth()
        .get("items")
        .then(res => setTopNine(res.data))
        .catch(err => console.log(err.response))
    }, [])

    return(
        <div>
            <TopList items = {topNine} updateItems = {setTopNine} />
        </div>
    );
};

export default Dashboard;