import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';
import { url } from '../index.js';
import Alert from '@mui/material/Alert';
import ContactCard from './ContactCard.jsx';

const SearchForm = () => {
    const [input, setInput] = useState('');
    const [alert, setAlert] = useState(null);
    const [contact, setContact] = useState(null); // Store contact data

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`${url}/search/${input}`);
            setContact(response.data); // Set the contact data here
        } catch (err) {
            setAlert({ type: 'error', message: `Error: ${err.message}` });
        }

        setTimeout(() => setAlert(null), 3000);
    };

    return (
        <>
            {alert && <Alert sx={{
                position: 'absolute',
                top: '1rem',
                left: '1rem'
            }} severity={alert.type}>{alert.message}</Alert>}
            <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSearch}
                sx={{
                    display: 'flex',
                    gap: 2,
                    alignItems: 'center',
                    padding: '1rem',
                    backgroundColor: '#ffffffe6',
                    borderRadius: '3px',
                    boxShadow: '0 0 3px #fff',
                }}
            >
                <TextField
                    label="Mobile Number or Email"
                    variant="outlined"
                    fullWidth
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Search
                </Button>
            </Box>

            {contact && <ContactCard contact={contact} />}
        </>
    );
};

export default SearchForm;
