import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, TextField, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import axios from 'axios';
import { url } from '../index.js';
import Alert from '@mui/material/Alert';

const ContactCard = ({ contact }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedContact, setEditedContact] = useState(contact);
    const [alert, setAlert] = useState(null);

    const handleEditClick = async () => {
        if (isEditing) {
            try {
                await axios.put(
                    `${url}/contacts/${editedContact._id}`, editedContact);
                setIsEditing(false);
                window.location.reload();
            } catch (err) {
                setAlert({
                    type: 'error',
                    message: `Error: ${err}`
                });
                setTimeout(() => setAlert(null), 3000);
            }
        } else {
            setIsEditing(true);
        }
    };


    const handleDelete = async () => {
        try {
            await axios.delete(`${url}/contacts/${contact._id}`)
        } catch (err) {
            alert(err);
        }
        window.location.reload();
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedContact({
            ...editedContact,
            [name]: value,
        });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 2,
                width: '100%',
                maxWidth: 400, // Control max width
                margin: 'auto',
            }}
        >
            {alert && <Alert sx={{
                position: 'absolute',
                top: '1rem',
                left: '1rem'
            }} severity={alert.type}>{alert.message}</Alert>}
            <Card sx={{ width: '100%', backgroundColor: '#ffffffe6', boxShadow: '0 0 5px #fff', margin: '0.5rem' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        {isEditing ? (
                            <>
                                <TextField
                                    name="firstName"
                                    value={editedContact.firstName}
                                    onChange={handleInputChange}
                                    fullWidth
                                    variant="standard"
                                    margin="dense"
                                />
                                <TextField
                                    name="lastName"
                                    value={editedContact.lastName}
                                    onChange={handleInputChange}
                                    fullWidth
                                    variant="standard"
                                    margin="dense"
                                />
                            </>
                        ) : (
                            `${contact.firstName} ${contact.lastName}` // Combined display
                        )}
                    </Typography>

                    <Typography variant="body1" color="textSecondary">
                        Job Title:{' '}
                        {isEditing ? (
                            <TextField
                                name="jobTitle"
                                value={editedContact.jobTitle}
                                onChange={handleInputChange}
                                fullWidth
                                variant="standard"
                            />
                        ) : (
                            contact.jobTitle
                        )}
                    </Typography>

                    <Typography variant="body1" color="textSecondary">
                        Company:{' '}
                        {isEditing ? (
                            <TextField
                                name="company"
                                value={editedContact.company}
                                onChange={handleInputChange}
                                fullWidth
                                variant="standard"
                            />
                        ) : (
                            contact.company
                        )}
                    </Typography>

                    <Typography variant="body1" color="textSecondary">
                        Email:{' '}
                        {isEditing ? (
                            <TextField
                                name="email"
                                value={editedContact.email}
                                onChange={handleInputChange}
                                fullWidth
                                variant="standard"
                            />
                        ) : (
                            contact.email
                        )}
                    </Typography>

                    <Typography variant="body1" color="textSecondary">
                        Phone:{' '}
                        {isEditing ? (
                            <TextField
                                name="phoneNumber"
                                value={editedContact.phoneNumber}
                                onChange={handleInputChange}
                                fullWidth
                                variant="standard"
                            />
                        ) : (
                            contact.phoneNumber
                        )}
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '10px' }}>
                        <IconButton onClick={handleEditClick}>
                            {isEditing ? (
                                <CheckIcon sx={{ color: '#1a1a1a' }} />
                            ) : (
                                <EditIcon sx={{ color: '#1a1a1a' }} />
                            )}
                        </IconButton>
                        <IconButton onClick={handleDelete}>
                            <DeleteIcon sx={{ color: 'rgb(180, 0, 0)' }} />
                        </IconButton>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ContactCard;
