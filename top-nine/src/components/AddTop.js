import React, { useState } from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth";



const AddTop = ({ updateItems }) => {

    const [items, setItems] = useState({
        users: Date.now(),
        list_name: "",
        items: [
            {
            name: '',
            desc: ''}
        ]
    })

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth.post('https://buildweek--top-nine.herokuapp.com/api/tops', items)
            .then(res => updateItems(res.data))
            .catch(err => console.log("FAILED POST", err))
        
        setItems({
            users: [''],
            list_name: [''],
            items : ['']
        })
    }

    return (
        <form onSubmit = {handleSubmit}>

            <h2>Add New Item!</h2>

                <label>
                    Name of Item:

                    <input
                        onChange = {e =>
                            setItems({...items, items: e.target.value})
                        }
                        value = {items.items}
                    />
                </label>

            <button type = "submit">Add New Item!</button>
        </form>
    )
}

export default AddTop;