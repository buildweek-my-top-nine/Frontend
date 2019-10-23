import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddTop from './AddTop';

const initialTop = {
    users: 1,
    list_name: "ones",
    items: [{
        name: 'one',
        desc: 'one'
    }]
}

const TopList = ({ items, updateItems }) => {
    
    const [editing, setEditing] = useState(false);
    const [itemToEdit, setItemToEdit] = useState(initialTop);

    const editItem = items => {
        setEditing(true);
        setItemToEdit(items);
    };

    const saveEdit = e => {
        e.preventDefault();

        axiosWithAuth().put(`https://buildweek--top-nine.herokuapp.com/api/tops/${itemToEdit.id}`, itemToEdit)
            .then(res => {
                updateItems(items.map(items =>
                    items.id === itemToEdit.id ? res.data : items))
                    setEditing(false)
            })
            .catch(err => console.log("PUT FAILED", err))
    };

    const deleteItem = items => {

        axiosWithAuth().delete(`https://buildweek--top-nine.herokuapp.com/api/tops/${items.id}`)
            .then(res => updateItems(items.filter(option =>
                option.id !== items.id)))
            .catch(err => console.log("DELETE FAILED", err))
    };

    return (
        <div>
            <p>Your Top Nine!</p>

            <ul>
                {items.map(items => (
                    <li 
                    key = {items.items} 
                    onClick = {() => editItem(items)}>

                        <span>
                            <span
                                className = "delete"
                                onClick = {() => deleteItem(items)}>
                                    DELETE
                                </span>{" "}
                            {items.items}
                        </span>

                        <div
                            className = "item-box"
                        />
                    </li>
                ))}
            </ul>

            {editing && (

                <form onSubmit = {saveEdit}>

                    <legend>Edit Option</legend>
                        <label>
                            Option Name:
                                <input
                                    onChange = {e =>
                                        setItemToEdit({...itemToEdit, items: e.target.value})
                                    }
                                    value = {itemToEdit.items}
                                />
                        </label>

                        {/* <label>
                            About:
                                <input
                                    onChange = {e =>
                                        setItemToEdit({
                                            ...itemToEdit,
                                            about: e.target.value})
                                    }
                                    value = {itemToEdit.about}
                                />
                        </label> */}

                    <div className = "bottom">
                        <button type = "submit">Save Changes</button>
                        <button onClick = {() => setEditing(false)}>Cancel</button>
                    </div>
                </form>
            )}
            <AddTop updateItems = {updateItems}/>
        </div>
    )
}

export default TopList;