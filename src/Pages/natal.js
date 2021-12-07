import React from 'react';
import ResponsiveAppBar from '../Components/responsiveAppBar'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

function Natal() {
    return (
        <>
            <ResponsiveAppBar />
            <Box className="container" 
            sx={{
                bgcolor: 'background.default',
                color: 'text.primary'
            }}>
            <Container maxWidth="sm">
                <Button variant="contained">Ver a data do natal</Button>
            </Container>
            </Box>
        </>
    );
}

export default Natal;