import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

// Définir le type pour un événement
interface Event {
  id: number;
  name: string;
  date: string;
  image: string;
}

const events: Event[] = [
  { id: 1, name: 'Nettoyage de plage', date: '2024-01-15', image: '/images/nettoyage.jpg' },
  { id: 2, name: 'Marche verte', date: '2024-02-10', image: '/images/marche de verte.jpg' },
  { id: 3, name: 'Atelier de compostage', date: '2024-03-05', image: '/images/atelier.jpg' },
  { id: 4, name: 'Journée sans plastique', date: '2024-04-22', image: '/images/journee.jpg' },
];

interface InterestStatus {
  [key: number]: 'not-interested' | 'interested' | 'not-participating' | 'participating';
}

const HomePage: React.FC = () => {
  const [interestStatus, setInterestStatus] = useState<InterestStatus>({
    1: 'not-interested',
    2: 'not-interested',
    3: 'not-interested',
    4: 'not-interested',
  });

  const toggleInterest = (id: number) => {
    setInterestStatus((prevStatus) => ({
      ...prevStatus,
      [id]: prevStatus[id] === 'not-interested' ? 'interested' : 'not-interested',
    }));
  };

  const toggleParticipation = (id: number) => {
    setInterestStatus((prevStatus) => ({
      ...prevStatus,
      [id]: prevStatus[id] === 'not-participating' ? 'participating' : 'not-participating',
    }));
  };

  return (
    <div className="homepage">
      {/* Barre de navigation */}
      <nav className="navbar">
        <div className="logo">EcoEvents</div>
        <div className="nav-links">
          <a href="/">Accueil</a>
          <a href="/profile">Profil</a>
          <a href="/search">Recherche</a>
          <a href="/register">login/logout</a>

        </div>
      </nav>

      {/* Titre principal */}
      <h1>Événements éco-responsables</h1>

      {/* Liste des événements */}
      <div className="events-container">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <Link to={`/event/${event.id}`} className="event-link">
              <img src={event.image} alt={event.name} className="event-image" />
              <h2>{event.name}</h2>
              <p>Date : {event.date}</p>
            </Link>

            {/* Boutons pour "Intéressé" et "Participer" */}
            <div className="event-actions">
              <button
                onClick={() => toggleInterest(event.id)}
                className={`interest-button ${interestStatus[event.id] === 'interested' ? 'active' : ''}`}
              >
                <i className={`fas ${interestStatus[event.id] === 'interested' ? 'fa-check-circle' : 'fa-circle'}`}></i>
                <span>Intéressé</span>
              </button>

              <button
                onClick={() => toggleParticipation(event.id)}
                className={`participation-button ${interestStatus[event.id] === 'participating' ? 'active' : ''}`}
              >
                <i className={`fas ${interestStatus[event.id] === 'participating' ? 'fa-check' : 'fa-times'}`}></i>
                <span>Participer</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
