import React, { useState } from "react";
import { Link } from "react-router-dom";
import usersData from "../users.json";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

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
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        backgroundColor: "#343a40",
        color: "white",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1 style={{ margin: "0 20px", fontSize: "1.5rem" }}>Educación para Todos</h1>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "15px",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/inicial" style={{ color: "white", textDecoration: "none" }}>
              Nivel Inicial
            </Link>
          </li>
          <li>
            <Link to="/primaria" style={{ color: "white", textDecoration: "none" }}>
              Primaria
            </Link>
          </li>
          <li>
            <Link to="/secundaria" style={{ color: "white", textDecoration: "none" }}>
              Secundaria
            </Link>
          </li>
        </ul>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => setShowLogin(true)}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Iniciar Sesión
        </button>
        <button
          onClick={() => setShowRegister(true)}
          style={{
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Registrarse
        </button>
      </div>

      {/* Modal de Inicio de Sesión */}
      {showLogin && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
          }}
        >
          <h3>Iniciar Sesión</h3>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              display: "block",
              marginBottom: "10px",
              width: "100%",
              padding: "10px",
            }}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              display: "block",
              marginBottom: "10px",
              width: "100%",
              padding: "10px",
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              onClick={handleLogin}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Ingresar
            </button>
            <button
              onClick={() => setShowLogin(false)}
              style={{
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Modal de Registro */}
      {showRegister && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
          }}
        >
          <h3>Registrarse</h3>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              display: "block",
              marginBottom: "10px",
              width: "100%",
              padding: "10px",
            }}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              display: "block",
              marginBottom: "10px",
              width: "100%",
              padding: "10px",
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              onClick={handleRegister}
              style={{
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Registrar
            </button>
            <button
              onClick={() => setShowRegister(false)}
              style={{
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {message && (
        <p style={{ color: "#28a745", marginTop: "10px", textAlign: "center" }}>{message}</p>
      )}
    </nav>
  );
};

export default Navbar;
