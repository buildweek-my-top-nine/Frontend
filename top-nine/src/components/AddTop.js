import React, { useState } from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth";



const AddTop = ({ updateItems }) => {

    const [items, setItems] = useState({
        
        interestid: Date.now(),
        interestname: '',
        description: ''

    })

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post('/topnine/catagories/category/add', items)
            .then(res => updateItems(res.data))
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