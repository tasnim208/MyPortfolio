import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";


export default function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && pass) {
      setIsLoggedIn(true);
      navigate("/profile");

    }
  };

  return (
    <div className="login-container">
      <h2>Connexion</h2>

      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Mot de passe" onChange={(e) => setPass(e.target.value)} />

      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
}
