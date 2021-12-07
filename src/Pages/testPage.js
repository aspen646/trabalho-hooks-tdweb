import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import ResponsiveAppBar from '../Components/responsiveAppBar'
import React from 'react';

function TestPage() {
    return (
        <>
        <ResponsiveAppBar />
        <Box sx={{
            bgcolor: 'background.default',
            color: 'text.primary'
        }}>
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
            
        </Box>
        </>
    );
}

export default TestPage;