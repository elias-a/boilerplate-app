import React, { useState } from 'react';
import axios from 'axios';
import { Container, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useStyles } from './styles';

function ViewData() {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const styles = useStyles();

    function handleSubmit() {
        axios.get('/api/get-data').then(res => {
            setData(res.data);
            setError("");
        }).catch(err => {
            setError(err);
        });
    }

    return (
        <Container className={styles.container}>
            {data.map(d => { return <p key={d.id} className={styles.data}>{d.data}</p>})}
            {error ? <Alert severity="error">{error}</Alert> : <></>}
            <form className={styles.form}>
                <Button 
                    className={styles.button}
                    onClick={handleSubmit}
                >
                    Get data
                </Button>
            </form>
        </Container>
    );
}

export default ViewData;