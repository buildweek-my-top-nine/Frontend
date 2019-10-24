import React, { useState } from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth";



const AddTop = ({ updateItems, GetData }) => {

    const [items, setItems] = useState({
        
        interestid: Date.now(),
        interestname: '',
        description: '',
        category: {
            categoryid: 2
            }
    })
    const userid = localStorage.getItem("userId");

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post(`/topnine/interests/interest/add/${userid}`, items)
            .then(res => {
                console.log(res.data);  
            return GetData()})
            .catch(err => console.log("FAILED POST", err))
        
        setItems({
            
            interestid: Date.now(),
            interestname: '',
            description: ''
        })
    }

    return (
        <form onSubmit = {handleSubmit}>

            <h3>Add New Item!</h3>

                <label>
                    Name of Interest:

                    <input
                        onChange = {e =>
                            setItems({...items, interestname: e.target.value})
                        }
                        value = {items.interestname}
                    />
                </label>

                <label>
                    Desciption of Interest:

                    <input
                        onChange = {e =>
                            setItems({...items, description: e.target.value})
                        }
                        value = {items.description}
                    />
                </label>

            <button type = "submit">Add New Item!</button>
        </form>
    )
}

export default AddTop;