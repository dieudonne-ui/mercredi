// About.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../partiels/Footer';
import Navebar from '../partiels/Navebar';

const Apropos = () => {
  const [apiData, setApiData] = useState(null);
  const navigate = useNavigate();

  // Faire un appel API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data'); // Remplacez par l'URL de votre API
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error('Erreur lors de l\'appel API:', error);
      }
    };
    fetchData();
  }, []);

  // Fonction pour rediriger vers une autre page
  const handleRedirect = () => {
    navigate('/contact'); // Remplacez "/contact" par la route où vous voulez rediriger
  };

  return (
    <div>
      <h1>À propos de nous</h1>
      <p>Voici quelques informations sur notre entreprise...</p>

      {/* Afficher les données de l'API */}
      {apiData ? (
        <div>
          <h2>Informations API:</h2>
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      ) : (
        <p>Chargement des données...</p>
      )}

      {/* Bouton de redirection */}
      <button onClick={handleRedirect}>Contactez-nous</button>
    </div>
  );
};

export default Apropos;
