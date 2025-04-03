import React, { useState, useEffect } from "react";
import "../App.css"; 

function Profil() {
  // État pour stocker les informations du profil
  const [user, setUser] = useState({
    nom: "",
    prenom: "",
    profession: "",
    email: "",
    password: "",
  });

  // État pour gérer le mode édition
  const [editMode, setEditMode] = useState(false);

  // Simuler une API avec useEffect (chargement des données au montage)
  useEffect(() => {
    setTimeout(() => {
      const fakeUserData = {
        nom: "GUIRGUISSOU",
        prenom: "Ibrahim",
        profession: "Développeur-Web Junior",
        email: "ibrahimguirguissou@gmail.com",
        password: "Absohkle1254@er/",
      };
      setUser(fakeUserData);
    }, 1000); // Simulation d'un délai de réponse API
  }, []);

  // Fonction pour gérer le changement des champs du formulaire
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profil mis à jour !");
    setEditMode(false);
  };

  return (
    <div className="profil-container">
      <h2>Profil Utilisateur</h2>
      
      {user.nom ? (
        !editMode ? (
          <div className="profil-info">
            <p><strong>Nom :</strong> {user.nom}</p>
            <p><strong>Prénom :</strong> {user.prenom}</p>
            <p><strong>Profession :</strong> {user.profession}</p>
            <p><strong>Email :</strong> {user.email}</p>
            <button onClick={() => setEditMode(true)}>Modifier</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="profile-form">
            <label>Nom :</label>
            <input type="text" name="nom" value={user.nom} onChange={handleChange} required />

            <label>Prénom :</label>
            <input type="text" name="prenom" value={user.prenom} onChange={handleChange} required />

            <label>Profession :</label>
            <input type="text" name="profession" value={user.profession} onChange={handleChange} required />

            <label>Email :</label>
            <input type="email" name="email" value={user.email} onChange={handleChange} required />

            <label>Mot de passe :</label>
            <input type="password" name="password" value={user.password} onChange={handleChange} required />

            <button type="submit">Enregistrer</button>
            <button type="button" onClick={() => setEditMode(false)}>Annuler</button>
          </form>
        )
      ) : (
        <p>Chargement du profil...</p>
      )}
    </div>
  );
}

export default Profil;