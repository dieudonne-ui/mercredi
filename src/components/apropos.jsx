// Apropos.jsx
import React, { useEffect, useState } from "react";
import 
const Apropos = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1") // Exemple d'API
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Erreur lors de la récupération des données:", error));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Bienvenue sur la page À Propos</h1>
      <p className="text-lg">Cette page vous donne plus d'informations sur notre projet.</p>
      {data ? (
        <div className="mt-4 p-4 bg-white shadow rounded">
          <h2 className="text-xl font-semibold">Données API:</h2>
          <p>ID: {data.id}</p>
          <p>Titre: {data.title}</p>
        </div>
      ) : (
        <p>Chargement des données...</p>
      )}
    </div>
  );
};

export default Apropos;
