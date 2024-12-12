import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '') {
      setError('Veuillez remplir tous les champs.');
    } else {
      setError('');
      navigate('/home'); // Redirige vers la page d'accueil
    }
  };

  const handleGoogleLogin = () => {
    console.log('Authentification avec Google');
    navigate('/home'); // Redirige après une connexion réussie
  };

  const handleFacebookLogin = () => {
    console.log('Authentification avec Facebook');
    navigate('/home'); // Redirige après une connexion réussie
  };

  const handleRegisterRedirect = () => {
    navigate('/register'); // Redirige vers la page d'inscription
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Connexion</h1>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label>Email :</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entrez votre email"
          />
        </div>
        <div className="form-group">
          <label>Nom :</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Entrez votre nom"
          />
        </div>
        <div className="form-group">
          <label>Prénom :</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Entrez votre prénom"
          />
        </div>
        <div className="form-group">
          <label>Mot de passe :</label>
          <input
            type="password"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Entrez votre mot de passe"
          />
        </div>
        <button className="login-button" onClick={handleLogin}>
          Se connecter
        </button>
        <div className="social-login">
          <p>Ou connectez-vous avec :</p>
          <button className="google-login-button" onClick={handleGoogleLogin}>
            Google
          </button>
          <button className="facebook-login-button" onClick={handleFacebookLogin}>
            Facebook
          </button>
        </div>
        {/* Section pour redirection vers la page d'inscription */}
        <div className="register-redirect">
          <p>Pas encore inscrit ?</p>
          <button className="register-button" onClick={handleRegisterRedirect}>
            Créer un compte
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
