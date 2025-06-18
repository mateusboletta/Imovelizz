import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { ToastProvider } from './contexts/ToastContext';
import { AuthProvider } from './contexts/AuthContext';
<<<<<<< Updated upstream
import { PrivateRoute } from './components/PrivateRoute';
=======
import Home from './pages/Home';
import { PrivateRoute } from './components/PrivateRoute';
import PropertyDetails from './pages/PropertyDetails';
import PropertyForm from './pages/PropertyForm';
import Favorites from './pages/Favorites';
import { CssBaseline } from '@mui/material';
import AppTheme from './theme/AppTheme';
>>>>>>> Stashed changes

function App() {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />

      <ToastProvider position={{ vertical: 'top', horizontal: 'center' }}>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
<<<<<<< Updated upstream
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
=======
            <Route path="/login" element={<Login />} />
            <Route
              path="/property/:id"
              element={
                <PrivateRoute>
                  <PropertyDetails />
                </PrivateRoute>
              }
            />
            <Route
              path="/property"
              element={
                <PrivateRoute>
                  <PropertyForm />
                </PrivateRoute>
              }
            />
            <Route
              path="/favorites"
              element={
                <PrivateRoute>
                  <Favorites />
>>>>>>> Stashed changes
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </ToastProvider>
    </AppTheme>
  );
}

export default App;
