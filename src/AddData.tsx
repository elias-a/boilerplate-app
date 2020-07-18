import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

function AddData() {
    const [data, setData] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    function handleChange(event) {
        const { value } = event.target;
        setData(value);
    }

    function handleSubmit() {
        axios.post('/api/add-data', { "data": data }).then(res => {
            setData("");
            setSuccess(res.data);
            setError("");
        }).catch(err => {
            setError(err);
        });
    }

    return (
        <div>
            <form>
                {success ? <Alert severity="success">{success}</Alert> : <></>}
                {error ? <Alert severity="error">{error}</Alert> : <></>}
                <TextField 
                    id="new-data"
                    value={data}
                    onChange={handleChange}
                />
                <Button onClick={handleSubmit}>
                    Add data
                </Button>
            </form>
        </div>
    );
}

export default AddData;