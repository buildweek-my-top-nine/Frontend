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
 

    // useEffect(() => {
    //     // const id = localStorage.getItem("id")
    //     axiosWithAuth()
    //     .get('/topnine/interests')
    //     .then(res => 
          
    //         // console.log(res.data))
    //         setTopNine(res.data))
    //     .catch(err => console.log(err.response))
    // }, [])

    return(
        
        <div>
            {/* {console.log(topNine)} */}
        <TopList items = {topNine}  updateItems = {setTopNine} />
      </div>
    );
};

export default Dashboard;