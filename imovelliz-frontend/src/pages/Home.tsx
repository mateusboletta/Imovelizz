<<<<<<< Updated upstream
import React, { useEffect } from 'react';
import { AuthService } from '../services/AuthService';

function Home() {
  async function getProfile() {
    await AuthService.getProfile();
  }

  useEffect(() => {
    getProfile();
  }, []);

  return <>Home</>;
=======
import * as React from 'react';
import Container from '@mui/material/Container';
import AppAppBar from '../components/AppAppBar';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

export default function Home(props: { disableCustomTheme?: boolean }) {
  return (
    <>
      <AppAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
        <MainContent />
      </Container>
      <Footer />
    </>
  );
>>>>>>> Stashed changes
}

export default Home;
