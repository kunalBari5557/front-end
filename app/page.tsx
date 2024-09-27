// app/page.tsx
'use client';

import { Button, Container, Typography } from '@mui/material';
import Link from 'next/link';

const HomePage = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" gutterBottom>
        Welcome to the App
      </Typography>
      <Button variant="contained" color="primary" component={Link} href="/auth/login">
        Login
      </Button>
      <Button variant="contained" color="secondary" component={Link} href="/auth/signup" style={{ marginLeft: '10px' }}>
        Sign Up
      </Button>
    </Container>
  );
};

export default HomePage;