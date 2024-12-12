import React from "react";
import portada from "../assets/portada.jpg"; // Imagen principal
import docente1 from "../assets/persona1.jpeg"; // Imágenes de los docentes
import docente2 from "../assets/persona2.jpeg";
import docente3 from "../assets/persona3.jpeg";
import logo from "../assets/logo.png";
import people1 from "../assets/people1.jpg";
import people2 from "../assets/people2.jpg";
import people3 from "../assets/people3.jpg";
import logo1 from "../assets/youtube.png";
import logo2 from "../assets/twitter.png";
import logo3 from "../assets/facebook.png";
import logo4 from "../assets/instagram.png";
import img from "../assets/buss.jpg";
import minedu from "../assets/minedu.png";
import uc from "../assets/continental.png";

const LandingPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      {/* Sección principal */}
      <section
        style={{
          backgroundImage: `url(${portada})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <div>
          <h1 style={{ fontSize: "3rem", margin: "0 0 20px" }}>
            Bienvenidos Estudiantes
          </h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
            Explora una plataforma educativa diseñada para ti.
          </p>
        </div>
      </section>

      {/* Sección Sobre Nosotros */}
      <section
        style={{
          padding: "50px 20px",
          backgroundColor: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {/* Imagen a la izquierda */}
        <div style={{ flex: "1", textAlign: "center" }}>
          <img
            src={logo} // Reemplaza con la ruta de tu imagen
            alt="Sobre nosotros"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>

        {/* Contenido a la derecha */}
        <div style={{ flex: "1", textAlign: "left" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
            Sobre Nosotros
          </h2>
          <p style={{ lineHeight: "1.6" }}>
            Esta página web fue desarrollada con el objetivo de facilitar el
            acceso a información educativa de alta calidad, respaldada por el
            Ministerio de Educación (MINEDU). Promovemos un entorno de
            aprendizaje más accesible y eficiente, contribuyendo al éxito
            académico de estudiantes y profesores.
          </p>
          <button
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            VER MÁS
          </button>
        </div>
      </section>

      {/* Sección Recursos Educativos */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
          Recursos Educativos
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {/* ASESORÍA EN VIVO */}
          <div style={{ width: "300px", textAlign: "center" }}>
            <img
              src={people1}
              alt="Asesoría en Vivo"
              style={{
                width: "300px",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            />
            <h3>ASESORÍA EN VIVO</h3>
            <p>Clases en vivo para resolver tus dudas en tiempo real.</p>
          </div>

          {/* VIDEOS EDUCATIVOS */}
          <div style={{ width: "300px", textAlign: "center" }}>
            <img
              src={people2}
              alt="Videos Educativos"
              style={{
                width: "300px",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            />
            <h3>VIDEOS EDUCATIVOS</h3>
            <p>Contenido claro y completo para aprender a tu propio ritmo.</p>
          </div>

          {/* INFORMACIÓN EDUCATIVA */}
          <div style={{ width: "300px", textAlign: "center" }}>
            <img
              src={people3}
              alt="Información Educativa"
              style={{
                width: "300px",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            />
            <h3>INFORMACIÓN EDUCATIVA</h3>
            <p>
              Contenido educativo actualizado para ofrecerte conocimiento de
              calidad.
            </p>
          </div>
        </div>
      </section>

      {/* Sección Docentes */}
      <section style={{ backgroundColor: "#f5f5f5", padding: "50px 20px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2rem",
            marginBottom: "20px",
          }}
        >
          Nuestros Docentes
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <img
              src={docente1}
              alt="Profesor Ángel Cárdenas"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                marginBottom: "10px",
              }}
            />
            <p>Profesor Ángel Cárdenas</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              src={docente2}
              alt="Profesor Sergio López"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                marginBottom: "10px",
              }}
            />
            <p>Profesor Sergio López</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              src={docente3}
              alt="Profesor Smith Salazar"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                marginBottom: "10px",
              }}
            />
            <p>Profesor Smith Salazar</p>
          </div>
        </div>
      </section>

      {/* Sección Contacto */}
      <section
        style={{
          padding: "50px 100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          color: "#333",
        }}
      >
        {/* Columna Izquierda - Información de Contacto */}
        <div style={{ flex: 1, paddingRight: "20px" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
            Ponte en contacto.
          </h2>
          <p>
            <strong style={{ color: "#6c63ff" }}>DIRECCIÓN</strong>
            <br />
            Calle El Comercio N° 193 - San Borja
          </p>
          <p>
            <strong style={{ color: "#6c63ff" }}>CORREO ELECTRÓNICO</strong>
            <br />
            hola@sitioincreible.pe
          </p>
          <p>
            <strong style={{ color: "#6c63ff" }}>NÚMERO TELEFÓNICO</strong>
            <br />
            312567890
          </p>
          <p style={{ marginTop: "20px" }}>
            <strong style={{ color: "#6c63ff" }}>
              Conoce más sobre nosotros
            </strong>
          </p>
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <img
              src={logo1}
              alt="YouTube"
              style={{ width: "40px", height: "40px", cursor: "pointer" }}
            />
            <img
              src={logo2}
              alt="Twitter"
              style={{ width: "40px", height: "40px", cursor: "pointer" }}
            />
            <img
              src={logo3}
              alt="Facebook"
              style={{ width: "40px", height: "40px", cursor: "pointer" }}
            />
            <img
              src={logo4}
              alt="Instagram"
              style={{ width: "40px", height: "40px", cursor: "pointer" }}
            />
          </div>
        </div>

        {/* Columna Derecha - Imagen con Texto y Botón */}
        <div
          style={{
            flex: 1,
            position: "relative",
            textAlign: "center",
          }}
        >
          <img
            src={img}
            alt="Contacto"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
              ¿Estás listo para llevar la educación al siguiente nivel?
            </h3>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#6c63ff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              REGÍSTRATE GRATIS
            </button>
          </div>
        </div>
      </section>

      <section
        style={{
          position: "relative",
          height: "400px",
          backgroundImage: `url(${portada})`, // Reemplaza con la ruta de tu imagen
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        {/* Logo del lado izquierdo */}
        <img
          src={minedu} // Reemplaza con tu logo del lado izquierdo
          alt="Logo Izquierdo"
          style={{
            width: "150px",
            height: "auto",
            position: "absolute",
            bottom: "20px",
            left: "20px",
          }}
        />

        {/* Imagen principal o texto opcional (si es necesario) */}
        <div style={{ flex: 1, textAlign: "center" }}>
          {/* Este espacio es opcional para contenido centrado */}
        </div>

        {/* Logo del lado derecho */}
        <img
          src={uc} // Reemplaza con tu logo del lado derecho
          alt="Logo Derecho"
          style={{
            width: "150px",
            height: "auto",
            position: "absolute",
            bottom: "20px",
            right: "20px",
          }}
        />
      </section>
    </div>
  );
};

export default LandingPage;
