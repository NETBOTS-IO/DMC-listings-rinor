import React from 'react';
import {
    Container,
    Box,
    FormControl,
    Typography,
    Stack,
    Button,
    TextField,
    Paper,
} from '@mui/material';

const containerStyle = {
    backgroundColor: '#f8f8f8',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const ChangePassword = () => {
    return (
        <div>
            <Container maxWidth='lg' >
                <Box borderBottom='1px solid #ccc' mt={5} mb={3} p={3}>
                    <Typography variant='h5'>Change Password</Typography>
                </Box>
                <Paper elevation={3} style={containerStyle}>
                    <form>
                        <Box ml={3} mt={3}>
                            <Typography>Login ID</Typography>
                            <TextField
                                fullWidth
                                disabled
                                id="filled-disabled"
                                label="khadim@rinor.pk"
                            />
                        </Box>
                        <Box ml={3} mt={3}>
                            <FormControl fullWidth>
                                <Typography>Old Password</Typography>
                                <TextField
                                    type='password'
                                    style={{ backgroundColor: '#fff', borderRadius: '5px' }}
                                    id="outlined-disabled"
                                    defaultValue=""
                                />
                            </FormControl>
                        </Box>
                        <Box ml={3} mt={3}>
                            <FormControl fullWidth>
                                <Typography>New Password</Typography>
                                <TextField
                                    type='password'
                                    style={{ backgroundColor: '#fff', borderRadius: '5px' }}
                                    id="outlined-disabled"
                                    defaultValue=""
                                />
                            </FormControl>
                        </Box>
                        <Box ml={3} mt={3}>
                            <FormControl fullWidth>
                                <Typography>Retype New Password</Typography>
                                <TextField
                                    type='password'
                                    style={{ backgroundColor: '#fff', borderRadius: '5px' }}
                                    id="outlined-disabled"
                                    defaultValue=""
                                />
                            </FormControl>
                        </Box>
                        <Box mt={4} p={2} bgcolor='#ccc' borderRadius='5px'>
                            <Typography variant='body2'>
                                Note: (Minimum 8 and Maximum 20 Characters, and the password must contain at least one capital letter, one number, and one special character)
                            </Typography>
                        </Box>
                        <Stack direction="row" justifyContent='flex-end' mt={3}>
                            <Button variant='contained' color='primary'>
                                Update
                            </Button>
                            <Button href="#text-buttons">Close</Button>
                        </Stack>
                    </form>
                </Paper>
            </Container>
        </div>
    );
};

export default ChangePassword;
