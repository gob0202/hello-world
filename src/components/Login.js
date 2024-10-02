import React, { useState } from 'react';
import { SERVER_URL } from '../contants.js';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Carlist from './Carlist.js';

function Login() {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });
  const [isAuthenticated, setAuth] = useState(false);

  const login = () => {
    fetch(SERVER_URL + 'login', {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(user)  
     })
     .then(res => {
      const jwtToken = res.headers.get('Authorization');
      if(jwtToken !== null) {
        sessionStorage.setItem('jwt', jwtToken);
        setAuth(true);
      }
     })
     .catch(err => console.error(err));
  }

  const handleChange = (event) => {
    setUser({...user, [event.target.name]: event.target.value});
  }
  if(isAuthenticated) {
    return <Carlist />;
  }
  else {
  return(
     <div>
      <Stack spacing={2} alignItems='center' mt={2}>
        <TextField name="username" label ="Username" onChange={handleChange} />
        <TextField type="password" name="password" label ="Password" onChange={handleChange} />
        <Button variant="outlined" color="primary" onClick={login}>
          Login
        </Button>       
      </Stack>
    </div>
  );
 }
}
export default Login;