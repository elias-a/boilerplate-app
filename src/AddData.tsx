import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';

function AddData() {
    const [data, setData] = useState("");

    function handleChange(event) {
        const { value } = event.target;
        setData(value);
    }

    function handleSubmit() {
        axios.post('/api/add-data', { "data": data });
    }

    return (
        <div>
            <form>
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