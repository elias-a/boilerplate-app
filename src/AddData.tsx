import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TextField, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useStyles } from './styles';

function AddData() {
    const [data, setData] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const styles = useStyles();

    useEffect(() => {
        data.length === 0 ? setDisabled(true) : setDisabled(false);
        setSuccess("");
        setError("");
    }, [data]);

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
        <Container className={styles.container}>
            <form className={styles.form}>
                {success ? <Alert severity="success">{success}</Alert> : <></>}
                {error ? <Alert severity="error">{error}</Alert> : <></>}
                <TextField 
                    id="new-data"
                    label="New data"
                    variant="outlined"
                    className={styles.input}
                    value={data}
                    onChange={handleChange}
                />
                <Button 
                    className={styles.button}
                    disabled={disabled}
                    onClick={handleSubmit} 
                >
                    Add data
                </Button>
            </form>
        </Container>
    );
}

export default AddData;