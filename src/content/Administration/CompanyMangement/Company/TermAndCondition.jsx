import React from 'react'
import { Box, Container, Typography, Paper, FormControl, Select, Stack, FormLabel, Button, MenuItem, FormControlLabel, Checkbox, TextField, Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material';


const TermAndCondition = () => {
    return (
        <React.Fragment>
            <Container maxWidth='lg'>
                <Box sx={{ mb: 1, mt: 5, ml: 2, mr: 2, p: 2, borderBottom: 'solid', borderColor: 'black' }}>
                    <Typography variant='h4'>Term and Condition</Typography>
                </Box>
                <form>
                    <Box sx={{ display: 'flex', jsutifycontent: 'space-between', mt: 5, ml: 2, mr: 10, p: 2, }}>
                        <FormControl fullWidth sx={{ mr: 2 }}>
                            <FormLabel>Language</FormLabel>
                            <Select value='lang'> <MenuItem value='lang'>English</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <FormLabel>To be presented to the</FormLabel>
                            <Select value='bo'> <MenuItem value='bo'>BO-CA</MenuItem>

                            </Select>
                        </FormControl>
                    </Box>

                    <Box sx={{ mt: 2, ml: 2, mb: 5, mr: 10 }}>
                        <FormLabel><Typography variant='h5'>Terms and Conditions</Typography></FormLabel>
                        <Paper maxWidth={600} sx={{ p: 3, maxHeight: 200 }}>
                            <Typography variant='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita labore nobis ut iste pariatur inventore officiis neque magni debitis aspernatur aliquid corporis dicta rem cum, ratione veniam architecto. Aliquid, maxime.</Typography>
                            <Typography variant='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita labore nobis ut iste pariatur inventore officiis neque magni debitis aspernatur aliquid corporis dicta rem cum, ratione veniam architecto. Aliquid, maxime.</Typography>
                            <Typography variant='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita labore nobis ut iste pariatur inventore officiis neque magni debitis aspernatur aliquid corporis dicta rem cum, ratione veniam architecto. Aliquid, maxime.</Typography>
                            <Typography variant='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita labore nobis ut iste pariatur inventore officiis neque magni debitis aspernatur aliquid corporis dicta rem cum, ratione veniam architecto. Aliquid, maxime.</Typography>
                            <Typography variant='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita labore nobis ut iste pariatur inventore officiis neque magni debitis aspernatur aliquid corporis dicta rem cum, ratione veniam architecto. Aliquid, maxime.</Typography>
                            <Typography variant='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita labore nobis ut iste pariatur inventore officiis neque magni debitis aspernatur aliquid corporis dicta rem cum, ratione veniam architecto. Aliquid, maxime.</Typography>
                            <Typography variant='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita labore nobis ut iste pariatur inventore officiis neque magni debitis aspernatur aliquid corporis dicta rem cum, ratione veniam architecto. Aliquid, maxime.</Typography>
                        </Paper>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'end', mt: 2, ml: 2, mb: 5, mr: 10 }}>
                        <Button variant='contained' color='error' sx={{ mr: 2 }}>Close</Button>
                        <Button variant='contained'>Save</Button>
                    </Box>
                </form>
            </Container>
        </React.Fragment>
    )
}

export default TermAndCondition