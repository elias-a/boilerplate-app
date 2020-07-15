import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';

function Component() {
    const [data, setData] = useState([]);

    function handleSubmit() {
        axios.get('/api/').then(res => {
            setData(res.data);
        });
    }

    return (
        <div>
            {data.map(d => { return <p key={d.id}>{d.data}</p>})}
            <Button onClick={handleSubmit}>
                Get data
            </Button>
        </div>
    );
}

export default Component;