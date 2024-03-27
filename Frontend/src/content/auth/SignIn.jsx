import React, { useState } from 'react';
import axios from 'axios'
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { Container, Card, CardContent, TextField, Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';


const BASE_URL =
    // "https://git.heroku.com/dmc-listing-rinor.git"
"https://dmc-listings-rinor.onrender.com"
//  "https://dmc-listings-server-rinor.vercel.app"
// "http://localhost:8000"


export var userData;
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState({})
    userData = data
    const Navigate = useNavigate();
    const auth = useAuth();

    const handleLogin = async () => {
        const apiUrl = `${BASE_URL}/api/auth/login/`;
        const user = {
            username: username,
            password: password,
        };

        const response = await axios.post(apiUrl, user, {
            withCredentials: true,
            // header: {
            //     "Access-Control-Allow-Origin": "*",
            //     "Access-Control-Allow-Credentials": true,
            //     "Access-Control-Allow-Headers": "content-type",
            //     "Content-Type": "application/json"
            // }
        })
            .then((response) => {
                console.log(response.data);
                if (response.data.details) {
                    auth.isAuthenticated = true;
                    setData(response.data.details)
                    alert("user login success fully");

                }
            });
        Navigate('/listing/')
        const token = Cookies.get('access_token');
        console.log("token", token)
    };
    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}
        >
            <Card sx={{ minWidth: 275 }}>
                <CardContent >
                    <Container maxWidth='sm'>
                        <Grid container spacing={3} >
                            <Grid item xs={12}>
                                <Typography variant="h4" align="center">
                                    LOGIN
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Username"
                                    id="exampleInputEmail"
                                    sx={{ borderRadius: '25px', mt: 5 }}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    type="password"
                                    label="Password"
                                    id="exampleInputPassword"
                                    sx={{ borderRadius: '25px' }}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>

                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    sx={{ borderRadius: '25px', mt: 5 }}
                                    onClick={handleLogin}
                                >
                                    Login
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body2" align="center">
                                    Create an Account!
                                    <Link to="/register" variant="body2">
                                        {" Register "}
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </CardContent>
            </Card>
        </Container>
    );
}
export default Login;
