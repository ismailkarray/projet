import React, { useState } from 'react';
import './ProfilePage.css';

// Définir les types pour l'utilisateur et les événements
interface User {
  firstName: string;
  lastName: string;
  email: string;
}

interface Event {
  id: number;
  name: string;
  date: string;
  description: string;
}

const ProfilePage: React.FC = () => {
  // Informations de l'utilisateur avec un type explicite
  const [user, setUser] = useState<User>({
    firstName: 'roua',
    lastName: 'bensaid',
    email: 'bensaidroua31@gmail.com',
  });

  // Liste des événements auxquels l'utilisateur a marqué son intérêt avec un type explicite
  const [interestedEvents, setInterestedEvents] = useState<Event[]>([
    { id: 1, name: 'Nettoyage de plage', date: '2024-01-15', description: 'Un nettoyage de plage pour protéger l\'environnement.' },
    { id: 2, name: 'Marche verte', date: '2024-02-10', description: 'Une marche pour sensibiliser à l\'importance de la nature.' },
  ]);

  // Gestion de la modification des informations personnelles avec un type pour l'événement
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="profile-page">
      <h1>Profil utilisateur</h1>

      {/* Formulaire de modification des informations personnelles */}
      <div className="profile-info">
        <h2>Informations personnelles</h2>
        <form>
          <label>Prénom:</label>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
          />
          <br />
          <label>Nom:</label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />
          <br />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </form>
      </div>

      {/* Liste des événements auxquels l'utilisateur a marqué son intérêt */}
      <div className="interested-events">
        <h2>Événements intéressants</h2>
        {interestedEvents.length > 0 ? (
          <ul>
            {interestedEvents.map((event) => (
              <li key={event.id}>
                <h3>{event.name}</h3>
                <p>{event.date}</p>
                <p>{event.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucun événement marqué comme intéressant.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
