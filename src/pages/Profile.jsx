import "../styles/profile.css";


export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src="/photo/photo.png" alt="Profil" className="profile-photo" />

        <div>
          <h1>Elbich Tasnim</h1>
          <h3>Étudiante en Informatique de Gestion – Business Intelligence</h3>
          <p className="profile-desc">
           Étudiante en informatique de gestion, motivée et compétente en programmation
            et bases de données, je cherche à contribuer à une équipe dynamique.
          </p>
        </div>
      </div>

      <div className="profile-section">
        <h2>Contact</h2>
        <ul className="profile-list">
          <li><strong>Adresse :</strong> Ras Jebel, Bizerte 7070</li>
          <li><strong>Téléphone :</strong> (+216) 51 650 940</li>
          <li><strong>Email :</strong> elbichtasnim@gmail.com</li>
          <li><strong>LinkedIn :</strong> 
            <a href="www.linkedin.com/in/tasnim-elbich-5778082b0" target="_blank"> Voir profil</a>
          </li>
          <li><strong>GitHub :</strong> 
            <a href="https://github.com/tasnim208" target="_blank"> github.com/TasnimElBich</a>
          </li>
        </ul>
      </div>

      <div className="profile-section">
        <h2>Compétences</h2>
        <ul className="profile-list">
          <li><strong>Langages :</strong> Java, C, PHP, Python, R</li>
          <li><strong>Web & Mobile :</strong> HTML, CSS, JavaScript, React Native</li>
          <li><strong>Frameworks :</strong> FastAPI</li>
          <li><strong>SGBD :</strong> MySQL, PL/SQL</li>
        </ul>
      </div>

      <div className="profile-section">
        <h2>Formations</h2>
        <ul className="profile-list">
          <li><strong>2024–2025 :</strong> 3ème année IG – BI (ISG Bizerte)</li>
          <li><strong>2022–2023 :</strong> Bac Sciences Informatiques – Mention Bien</li>
        </ul>
      </div>

      <div className="profile-section">
        <h2>Expériences Professionnelles</h2>
        <ul className="profile-list">
          <li>
            <strong>Stagiaire Dev Mobile – Smart For Green</strong> (Juil–Août 2025)  
            <br />Développement d’une application mobile de covoiturage.
          </li>
          <li>
            <strong>Secrétaire – Talaba</strong> (Sep 2023 – Avr 2024)  
            <br />Gestion des appels entrants et sortants auprès des étudiants.
          </li>
        </ul>
      </div>

      <div className="profile-section">
        <h2>Expériences Associatives</h2>
        <ul className="profile-list">
          <li>Volontaire – Croissant Rouge Ras Jebel</li>
          <li>Membre RH – Tunivisions ISG Bizerte</li>
          <li>Membre Sponsoring – Tunisia 88</li>
          <li>Membre Projet – MTC ISG Bizerte</li>
        </ul>
      </div>

      <div className="profile-section">
        <h2>Projets Académiques</h2>
        <ul className="profile-list">
          <li>Gestion de recettes – (HTML, CSS, JS)</li>
          <li>Green Food – (HTML, CSS, JS, PHP, MySQL)</li>
          <li>Application de contact – (Java)</li>
          <li>Agence de voyage – (VB)</li>
          <li>Covoiturage mobile – (React Native, FastAPI, PostgreSQL)</li>
        </ul>
      </div>
    </div>
  );
}
