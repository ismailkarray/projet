import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import SearchPage from './pages/SearchPage';
import EventDetails from './pages/EventDetails';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Route pour la page de connexion */}
        <Route path="/" element={<LoginPage />} />
        
        {/* Route pour la page d'accueil */}
        <Route path="/home" element={<HomePage />} />
        
        {/* Route pour le profil utilisateur */}
        <Route path="/profile" element={<ProfilePage />} />
        
        {/* Route pour la page de recherche */}
        <Route path="/search" element={<SearchPage />} />
        
        {/* Route pour les détails d'un événement, avec un paramètre dynamique 'id' */}
        <Route path="/event/:id" element={<EventDetails />} />
        
        {/* Route pour la page d'inscription */}
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

export default App;
