import React, { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";
import axios from 'axios';
import { url } from '../index.js';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Alert from '@mui/material/Alert';

const DataTable = () => {
    const [data, setData] = useState([]);
    const [alert, setAlert] = useState(null);

    const updateData = async () => {
        try {
            const response = await axios.get(url + "/contacts");
            setData(response.data);
        } catch {
            setAlert({ type: 'error', message: `Error: Unable to Update Data` });
        }

        setTimeout(() => setAlert(null), 3000);
    };

    useEffect(() => {
        updateData();
    }, []);

    if (!data || data.length === 0)
        return (
            <>
                {alert && <Alert sx={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem'
                }} severity={alert.type}>{alert.message}</Alert>}
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Fab variant="extended" onClick={updateData}>
                        Navigate
                    </Fab>
                </Box>
                <p style={{ color: '#fff', fontSize: '2rem' }}>No data available</p>
            </>
        );

    const headers = Object.keys(data[0]).filter((header) => header !== '_id' && header !== '__v');

    return (
        <>
            {alert && <Alert sx={{
                position: 'absolute',
                top: '1rem',
                left: '1rem'
            }} severity={alert.type}>{alert.message}</Alert>}
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab variant="extended" onClick={updateData}>
                    Refresh
                </Fab>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {headers.map((header) => (
                                <TableCell key={header}>{header}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{
                                    backgroundColor: (!(index & 1)) ? '#F5F5DC' : ''
                                }}
                            >
                                {
                                    headers.map((header) => (
                                        <TableCell key={header}>{row[header]}</TableCell>
                                    ))
                                }
                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </>
    );
};

export default DataTable;