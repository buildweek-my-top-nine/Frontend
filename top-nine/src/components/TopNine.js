import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddTop from './AddTop';
import axios from 'axios';

const initialTop = {
   
        interestid: 0,
        interestname: 'one',
        description: 'one'

}

const TopList = ({ items, updateItems, GetData }) => {
    
    const [editing, setEditing] = useState(false);
    const [itemToEdit, setItemToEdit] = useState(initialTop);

    useEffect((props) => {
       return GetData();
    })


    const editItem = items => {
        setEditing(true);
        setItemToEdit(items);
    };

    const saveEdit = e => {
        e.preventDefault();

        axiosWithAuth().put(`/topnine/interest/${itemToEdit.interestid}`, itemToEdit)
            .then(res => {
                
                updateItems(items.map(interestname =>
                    interestname.interestid === itemToEdit.interestid ? res.data : interestname))
                    setEditing(false)
            })
            .catch(err => console.log("PUT FAILED", err))
    };

    const deleteItem = items => {
        
        axiosWithAuth().delete(`/topnine/interest/${items.interestid}`)
            .then(res => updateItems(items.filter(interestname =>
                interestname.interestid !== interestname.interestid)))
            // .then(res => console.log(res))
            .catch(err => console.log("DELETE FAILED", err))
    };

    return (
        
        <div>
            
            <h1>Your Top Nine!</h1>

             {/* <ul> */}
                {items.map(item => (
                    // console.log(item.interestname))
                    <div 
                    key = {item.interestid} 
                    onClick = {() => editItem(item)}>
                        <div>
                        <h3>{item.interestname}</h3>
                        <p>{item.description}</p>
                        </div>
                        <span>
                            <button
                                className = "delete"
                                onClick = {() => deleteItem(item)}>
                                    DELETE
                                </button>{" "}
                            {item.item}
                        </span>
                        
                {/* //         <div
                //             className = "item-box"
                            
                //             style = {{title: item.interestname}}
                //         /> */}
                    </div>
                ))}
            {/* </ul> */}

            {editing && (

                <form onSubmit = {saveEdit}>

                    <legend>Edit Option</legend>
                        <label>
                            Option Name:
                                <input
                                    onChange = {e =>
                                        setItemToEdit({...itemToEdit, 
                                            
                                            interestname: e.target.value,
                                           
                                        })
                                    }
                                    value = {itemToEdit.interestname}
                                />
                        </label> 

                         <label>
                            About:
                                <input
                                    onChange = {e =>
                                        setItemToEdit({
                                            ...itemToEdit,
                                            description: e.target.value})
                                    }
                                    value = {itemToEdit.description}
                                />
                        </label> 

                     <div className = "bottom">
                        <button type = "submit">Save Changes</button>
                        <button onClick = {() => setEditing(false)}>Cancel</button>
                    </div>
                </form>
            )} 
            <AddTop updateItems = {updateItems} GetData = {GetData}/>
        </div>
    )
}

export default TopList;