import React, { useState } from "react";
import { Link } from "react-router-dom";
import usersData from "../users.json";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogin = () => {
    const user = usersData.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setMessage(`¡Bienvenido, ${user.username}!`);
      setShowLogin(false);
    } else {
      setMessage("Usuario o contraseña incorrectos.");
    }
  };

  const handleRegister = () => {
    if (username && password) {
      setMessage(`Usuario registrado: ${username}`);
      setShowRegister(false);
    } else {
      setMessage("Por favor, complete todos los campos.");
    }
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <h2>Educación para Todos</h2>
      </div>
      <button
        style={styles.menuButton}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </button>
      <ul style={{ ...styles.navLinks, display: menuOpen ? "block" : "none" }}>
        <li>
          <Link style={styles.link} to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link style={styles.link} to="/inicial">
            Nivel Inicial
          </Link>
        </li>
        <li>
          <Link style={styles.link} to="/primaria">
            Primaria
          </Link>
        </li>
        <li>
          <Link style={styles.link} to="/secundaria">
            Secundaria
          </Link>
        </li>
      </ul>
      <div style={styles.buttons}>
        <button style={styles.button} onClick={() => setShowLogin(true)}>
          Iniciar Sesión
        </button>
        <button style={styles.button} onClick={() => setShowRegister(true)}>
          Registrarse
        </button>
      </div>

      {/* Modal de Inicio de Sesión */}
      {showLogin && (
        <div style={styles.modal}>
          <h3>Iniciar Sesión</h3>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button style={styles.modalButton} onClick={handleLogin}>
            Ingresar
          </button>
          <button style={styles.modalButton} onClick={() => setShowLogin(false)}>
            Cerrar
          </button>
        </div>
      )}

      {/* Modal de Registro */}
      {showRegister && (
        <div style={styles.modal}>
          <h3>Registrarse</h3>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button style={styles.modalButton} onClick={handleRegister}>
            Registrar
          </button>
          <button
            style={styles.modalButton}
            onClick={() => setShowRegister(false)}
          >
            Cerrar
          </button>
        </div>
      )}

      {message && <p style={styles.message}>{message}</p>}
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "#f0f0f0",
    borderBottom: "1px solid #ddd",
  },
  logo: {
    fontWeight: "bold",
  },
  menuButton: {
    display: "none",
    fontSize: "24px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: "16px",
  },
  buttons: {
    display: "flex",
    gap: "10px",
  },
  button: {
    padding: "8px 16px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  modal: {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -20%)",
    backgroundColor: "#fff",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    zIndex: 1000,
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
  },
  modalButton: {
    padding: "8px 16px",
    fontSize: "14px",
    margin: "5px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  input: {
    display: "block",
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
  message: {
    color: "green",
    marginTop: "10px",
  },
};

export default Navbar;
