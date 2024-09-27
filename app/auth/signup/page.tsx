'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../src/store';
import { signupAsync } from '../../../src/store/slices/authSlice';
import { Button, TextField, Typography, Container, Box, Link } from '@mui/material';

const SignupPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector((state: RootState) => state.auth.error);

  const handleSignup = () => {
    dispatch(signupAsync({ username, password }));
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          fullWidth
        />
        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}
        <Button variant="contained" color="primary" onClick={handleSignup} fullWidth>
          Sign Up
        </Button>
        <Typography variant="body2" mt={2}>
          Already have an account?{' '}
          <Link href="/auth/login" underline="none">
            Login
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default SignupPage;
