import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Stack } from '@mui/material';
import axios from "axios";
import { url } from '../index.js';
import Alert from '@mui/material/Alert';


const FormComponent = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        company: '',
        jobTitle: ''
    });

    const [alert, setAlert] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(url + "/contacts", formData);
            setAlert({ type: 'success', message: 'Contact added successfully!' });
        } catch (error) {
            setAlert({ type: 'error', message: `Error: ${error.response?.data.message}` });
        }

        setTimeout(() => setAlert(null), 3000);
    };


    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                width: '25rem',
                maxWidth: '90vw',
                mx: 'auto',
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                boxShadow: '0 0 5px #fff',
                borderRadius: 2,
                backgroundColor: '#ffffffe6'
            }}
        >
            {alert && <Alert sx={{
                position: 'absolute',
                top: '1rem',
                left: '1rem'
            }} severity={alert.type}>{alert.message}</Alert>}
            <Typography variant="h5" align="center" gutterBottom>
                Add Contact Details
            </Typography>
            <Stack spacing={2}>
                <TextField
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <TextField
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    type="email"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <TextField
                    type="tel"
                    label="Phone"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <TextField
                    label="Company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    label="Job Title"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    fullWidth
                />
                <Button type="submit" variant="contained" color="success" size="large">
                    Submit
                </Button>
            </Stack>
        </Box>
    );
};

export default FormComponent;
