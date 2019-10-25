import React, { useState } from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from 'styled-components';


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
        <form className="edit-class" onSubmit = {handleSubmit}>

            <h3>Add New Item!</h3>

                <Field>
                    Name of Interest:

                    <input
                        onChange = {e =>
                            setItems({...items, interestname: e.target.value})
                        }
                        value = {items.interestname}
                    />
                </Field>

                <Field>
                    Description of Interest:

                    <input
                        onChange = {e =>
                            setItems({...items, description: e.target.value})
                        }
                        value = {items.description}
                    />
                </Field>

            <Button type = "submit">Add New Item!</Button>
        </form>
    )
}

export default AddTop;


const Field = styled.label`
    font-weight: bold;
    margin-right: 3%;
    padding-right: 3%;
`

const Button = styled.button`
    margin-left: 2%;
    padding: 1.5%;
    border-radius: 3px;
    `

const New = styled.form`
    margin-top: 3%;
    margin-bottom: 5%;
`