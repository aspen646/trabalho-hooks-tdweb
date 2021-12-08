import React,{ useState } from 'react';
import ResponsiveAppBar from '../Components/responsiveAppBar';
import moment from 'moment/min/moment-with-locales';

import "./natalStyle.css";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Natal() {
    const [data, setData] = useState("");
    
    function verData(){
        moment.locale('pt-br')
        let data = "25/12/2021";
        let resp = moment(data, "DD/MM/YYYY").fromNow();
        setData(resp);
    }

    return (
        <>
            <ResponsiveAppBar />
            <Box className="container" 
            sx={{
                bgcolor: 'background.default',
                color: 'text.primary'
            }}>
            <Container maxWidth="sm">
                <Button variant="contained" className="botao" onClick={verData}>Quanto tempo falta para o natal</Button>
            </Container>
            <div className="container-dataNatal">
                <Stack spacing={2} direction="row" className="tags">
                    <Chip label="Natal" variant="outlined"/>
                    <Chip label="Dezembro" variant="outlined"/>
                    <Chip label="Papai Noel" variant="outlined"/>
                    <Chip label="Ano Novo" variant="outlined"/>
                </Stack>
                <div className="data">{data}</div>
            </div>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>Natal 🎅🏻</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                O dia de Natal é celebrado em 25 de Dezembro nos países que partilham da tradição cristã e é uma das datas mais importantes do ano nesses países.
                </Typography>
                </AccordionDetails>
            </Accordion>
            </Box>
        </>
    );
}

export default Natal;