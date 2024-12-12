import React, { useState, useEffect } from 'react';
import './SearchPage.css';

const SearchPage: React.FC = () => {
  // Liste des événements
  const events = [
    { id: 1, name: 'Nettoyage de plage', date: '2024-01-15', type: 'Environnement', location: 'Plage', description: 'Un nettoyage pour protéger l\'environnement.', image: '/images/nettoyage.jpg' },
    { id: 2, name: 'Marche verte', date: '2024-02-10', type: 'Marche', location: 'Forêt', description: 'Une marche pour sensibiliser à l\'importance de la nature.', image: '/images/marche de verte.jpg' },
    { id: 3, name: 'Atelier de compostage', date: '2024-03-05', type: 'Atelier', location: 'Ville', description: 'Apprenez à composter vos déchets organiques.', image: '/images/atelier.jpg' },
    { id: 4, name: 'Journée sans plastique', date: '2024-04-22', type: 'Sensibilisation', location: 'Plage', description: 'Une journée pour vivre sans plastique.', image: '/images/journee.jpg' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [filters, setFilters] = useState({
    location: '',
    date: '',
    type: ''
  });

  // Gérer la recherche par mot-clé
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Gérer les filtres
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  // Appliquer les filtres et la recherche
  const applyFilters = () => {
    let filtered = events.filter((event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filters.location) {
      filtered = filtered.filter(event => event.location.toLowerCase().includes(filters.location.toLowerCase()));
    }

    if (filters.date) {
      filtered = filtered.filter(event => event.date === filters.date);
    }

    if (filters.type) {
      filtered = filtered.filter(event => event.type.toLowerCase().includes(filters.type.toLowerCase()));
    }

    setFilteredEvents(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [searchTerm, filters]);

  return (
    <div className="search-page">
      <h1>Page de Recherche</h1>

      {/* Barre de recherche */}
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Rechercher un événement..."
        />
      </div>

      {/* Filtres */}
      <div className="filters">
        <select name="location" onChange={handleFilterChange} value={filters.location}>
          <option value="">Filtrer par localisation</option>
          <option value="Plage">Plage</option>
          <option value="Forêt">Forêt</option>
          <option value="Ville">Ville</option>
        </select>

        <select name="date" onChange={handleFilterChange} value={filters.date}>
          <option value="">Filtrer par date</option>
          <option value="2024-01-15">2024-01-15</option>
          <option value="2024-02-10">2024-02-10</option>
          <option value="2024-03-05">2024-03-05</option>
          <option value="2024-04-22">2024-04-22</option>
        </select>

        <select name="type" onChange={handleFilterChange} value={filters.type}>
          <option value="">Filtrer par type</option>
          <option value="Environnement">Environnement</option>
          <option value="Marche">Marche</option>
          <option value="Atelier">Atelier</option>
          <option value="Sensibilisation">Sensibilisation</option>
        </select>
      </div>

      {/* Liste des événements filtrés */}
      <div className="events-container">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.name} className="event-image" />
              <h2>{event.name}</h2>
              <p>{event.description}</p>
              <p>{event.date}</p>
            </div>
          ))
        ) : (
          <p>Aucun événement trouvé.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
