import React from "react";

const LandingPage = () => {
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <section
        style={{
          backgroundColor: "#f5f5f5",
          padding: "50px 20px",
          marginBottom: "30px",
        }}
      >
        <h1>Bienvenidos Estudiantes</h1>
        <p>Explora una plataforma educativa diseñada para ti.</p>
        <button style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}>
          INICIAR SESIÓN
        </button>
        <button style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}>
          REGÍSTRATE AHORA
        </button>
      </section>

      <section
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div>
          <h2>Sobre nosotros</h2>
          <p>
            Esta página web fue desarrollada con el objetivo de facilitar el
            acceso a información educativa de alta calidad, respaldada por
            el Ministerio de Educación (MINEDU).
          </p>
          <button style={{ marginTop: "10px", padding: "10px 20px" }}>
            VER MÁS
          </button>
        </div>
        <img
          src="https://via.placeholder.com/300x200"
          alt="Educación"
          style={{ borderRadius: "8px" }}
        />
      </section>

      <section
        style={{
          backgroundColor: "#f5f5f5",
          padding: "50px 20px",
          marginBottom: "30px",
        }}
      >
        <h2>Recursos Educativos</h2>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <h3>ASESORÍA EN VIVO</h3>
            <p>Clases en vivo para resolver tus dudas en tiempo real.</p>
          </div>
          <div>
            <h3>VIDEOS EDUCATIVOS</h3>
            <p>Contenido claro y completo para aprender a tu propio ritmo.</p>
          </div>
          <div>
            <h3>INFORMACIÓN EDUCATIVA</h3>
            <p>
              Contenido educativo actualizado para ofrecerte conocimiento de calidad.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "50px 20px" }}>
        <h2>Nuestros Docentes</h2>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <img
              src="https://via.placeholder.com/150"
              alt="Profesor"
              style={{ borderRadius: "50%" }}
            />
            <p>Profesor Ángel Cárdenas</p>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/150"
              alt="Profesor"
              style={{ borderRadius: "50%" }}
            />
            <p>Profesor Sergio López</p>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/150"
              alt="Profesor"
              style={{ borderRadius: "50%" }}
            />
            <p>Profesor Smith Salazar</p>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#f5f5f5", padding: "50px 20px" }}>
        <h2>Contacto</h2>
        <p>
          Dirección: Calle El Comercio N° 193 - San Borja <br />
          Correo: hola@sitioincreible.pe <br />
          Teléfono: 312567890
        </p>
        <button style={{ padding: "10px 20px" }}>REGÍSTRATE GRATIS</button>
      </section>
    </div>
  );
};

export default LandingPage;
