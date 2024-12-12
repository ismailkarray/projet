import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import './RegisterPage.css';

const RegisterPage: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate(); // Initialiser useNavigate

  const handleRegister = () => {
    if (!firstName || !lastName || !birthDate || !password) {
      setError('Veuillez remplir tous les champs.');
    } else {
      setError('');
      console.log('Utilisateur enregistré avec succès :', {
        firstName,
        lastName,
        birthDate,
        password,
      });

      // Rediriger vers HomePage après inscription
      navigate('/home');
    }
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <h1>Inscription</h1>
        {error && <p className="error-message">{error}</p>}
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
          <label>Nom :</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Entrez votre nom"
          />
        </div>
        <div className="form-group">
          <label>Date de naissance :</label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Mot de passe :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Entrez votre mot de passe"
          />
        </div>
        <button className="register-button" onClick={handleRegister}>
          S'inscrire
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
