import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import TopList from './TopNine';


const Dashboard = () => {
    const [topNine, setTopNine] = useState([
        {
   
            interestid: 0,
            interestname: 'Test Interest',
            description: 'Test Description'
    
    }
    ]);
 
    const GetData = () => {
        axiosWithAuth()
        .get('/topnine/interests')
        .then(res => 
          
            // console.log(res.data))
            setTopNine(res.data))
        .catch(err => console.log(err.response))
    }

    useEffect(() => {
        // const id = localStorage.getItem("id")
        return
            GetData();
        
    }, [GetData])

    return(
        
        <div>
            {/* {console.log(topNine)} */}
        <TopList items = {topNine} GetData = {GetData} updateItems = {setTopNine} />
      </div>
    );
};

export default Dashboard;