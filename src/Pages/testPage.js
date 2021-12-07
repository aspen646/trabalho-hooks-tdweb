import { Button, Container, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import ResponsiveAppBar from '../Components/responsiveAppBar'
import React from 'react';

function TestPage() {
    return (
        <>
        <ResponsiveAppBar />
        <Container>
            <Typography
                variant="h2"
                component="h1"
                color="textSecondary"
            >
                Hello
            </Typography>

            <Button
                onClick={() => { alert('You clicked me')}}
                variant="contained"
            >
                Primary
            </Button>

            <Button
                color="secondary"
            >
                Secondary
            </Button>
            
            <Button
                variant="contained"
                color="success"
            >
                Success
            </Button>

            <Button variant="outlined" color="error">
                Error
            </Button>

            <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
            </Button>

            <IconButton color="secondary" aria-label="add an alarm">
                <AlarmIcon />
            </IconButton>
            
        </Container>
        </>
    );
}

export default TestPage;