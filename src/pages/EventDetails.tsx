import React from 'react';
import { useParams } from 'react-router-dom'; // Importer useParams pour obtenir l'ID de l'événement depuis l'URL
import './EventDetails.css';

// Définition du type pour un événement
interface Event {
  id: number;
  name: string;
  date: string;
  description: string;
  image: string;
}

const events: Event[] = [
  { id: 1, name: 'Nettoyage de plage', date: '2024-01-15', description: 'Un nettoyage de plage pour protéger l\'environnement.', image: '/images/nettoyage.jpg' },
  { id: 2, name: 'Marche verte', date: '2024-02-10', description: 'Une marche pour sensibiliser à l\'importance de la nature.', image: '/images/marche de verte.jpg' },
  { id: 3, name: 'Atelier de compostage', date: '2024-03-05', description: 'Apprenez à composter vos déchets organiques.', image: '/images/atelier.jpg' },
  { id: 4, name: 'Journée sans plastique', date: '2024-04-22', description: 'Une journée pour vivre sans plastique.', image: '/images/journee.jpg' },
];

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id?: string }>(); // Le paramètre 'id' peut être indéfini

  // Vérification de la présence de 'id' et conversion en entier
  if (!id) {
    return <div>Événement non trouvé</div>;
  }

  const eventId = parseInt(id, 10);

  // Trouver l'événement avec l'ID correspondant
  const event = events.find((event) => event.id === eventId);

  if (!event) {
    return <div>Événement non trouvé</div>;
  }

  return (
    <div className="event-details">
      <img src={event.image} alt={event.name} className="event-image" />
      <h1>{event.name}</h1>
      <p>Date : {event.date}</p>
      <p>{event.description}</p>
    </div>
  );
};

export default EventDetails;
