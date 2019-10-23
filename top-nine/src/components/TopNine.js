import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const initialTop = {
    item : {
        name: '',
        about: ''
    }
};

const TopList = ({ items, updateItems }) => {
    const [editing, setEditing] = useState(false);
    const [itemToEdit, setItemToEdit] = useState(initialTop);

    const editItem = item => {
        setEditing(true);
        setItemToEdit(item);
    };

    const saveEdit = e => {
        e.preventDefault();

        axiosWithAuth().put(`item/${itemToEdit.id}`, itemToEdit)
            .then(res => {
                updateItems(items.map(item =>
                    item.id === itemToEdit.id ? res.data : item))
                    setEditing(false)
            })
            .catch(err => console.log("PUT FAILED", err))
    };

    const deleteItem = item => {

        axiosWithAuth().delete(`items/${item.id}`)
            .then(res => updateItems(items.filter(option =>
                option.id !== item.id)))
            .catch(err => console.log("DELETE FAILED", err))
    };

    return (
        <div>
            <p>Edit Your Top Nine!</p>

            <ul>
                {items.map(item => (
                    <li 
                    key = {item.item} 
                    onClick = {() => editItem(item)}>

                        <span>
                            <span
                                className = "delete"
                                onClick = {() => deleteItem(item)}>
                                    DELETE
                                </span>{" "}
                            {item.item}
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
                                        setItemToEdit({...itemToEdit, name: e.target.value})
                                    }
                                    value = {itemToEdit.name}
                                />
                        </label>

                        <label>
                            About:
                                <input
                                    onChange = {e =>
                                        setItemToEdit({
                                            ...itemToEdit,
                                            about: e.target.value})
                                    }
                                    value = {itemToEdit.about}
                                />
                        </label>

                    <div className = "bottom">
                        <button type = "submit">Save Changes</button>
                        <button onClick = {() => setEditing(false)}>Cancel</button>
                    </div>
                </form>
            )}
        </div>
    )
}

export default TopList;