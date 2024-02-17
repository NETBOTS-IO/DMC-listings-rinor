import React, { useState } from 'react';
import { Button, Card, CardContent, TextField, Grid, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import SignInForm from './SignIn';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [designation, setDesignation] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const Navigate = useNavigate()

    const handleSignUp = () => {
        const apiUrl = 'http://localhost:8000/api/auth/register/'
        const user = {
            name: name,
            username: username,
            email: email,
            designation: designation,
            password: password,
        };

        axios.post(apiUrl, user)
            .then((response) => {
                console.log('Registration successful!', response);
                Navigate('/')
            })
            .catch((error) => {
                console.error('Error registering user:', error);
            });



    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const passwordsMatch = password === confirmPassword;
    const passwordErrorMessage = passwordsMatch ? '' : 'Passwords do not match';




    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'

            }}
            component="main"
            maxWidth="sm"
        >
            <Card sx={{ minWidth: 275 }}>
                <CardContent >
                    <Container maxWidth='sm'>
                        <Grid container spacing={2} >
                            <Grid item xs={12}>
                                <Typography variant="h4" align='center' marginBottom='15px'>
                                    Sign Up
                                </Typography>
                            </Grid>


                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="username"
                                    autoFocus
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="designation"
                                    label="Designation"
                                    name="designation"
                                    autoComplete="designation"
                                    value={designation}
                                    onChange={(e) => setDesignation(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"

                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"

                                    required
                                    fullWidth
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirmPassword"
                                    autoComplete="new-password"
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography color={passwordsMatch ? 'inherit' : 'error'} variant="caption">
                                    {passwordErrorMessage}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="button"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSignUp}
                                    sx={{ mt: 3, borderRadius: '25px' }}
                                >
                                    Sign Up
                                </Button>
                            </Grid>



                            <Grid item xs={12}>

                                Already have an account?{' '}
                                <Link to="/" variant="body2">
                                    Sign in
                                </Link>


                            </Grid>
                        </Grid>

                    </Container>
                </CardContent >
            </Card >
        </Container >
    );
};

export default SignUpForm;
