import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

function ViewData() {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    function handleSubmit() {
        axios.get('/api/get-data').then(res => {
            setData(res.data);
            setError("");
        }).catch(err => {
            setError(err);
        });
    }

    return (
        <div>
            {data.map(d => { return <p key={d.id}>{d.data}</p>})}
            {error ? <Alert severity="error">{error}</Alert> : <></>}
            <Button onClick={handleSubmit}>
                Get data
            </Button>
        </div>
    );
}

export default ViewData;