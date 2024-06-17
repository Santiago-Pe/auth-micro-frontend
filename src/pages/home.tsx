import React, { useState } from "react";
import styles from "./home.module.css"; // Importa los estilos CSS Modules

const Home: React.FC = () => {
  const [activePanel, setActivePanel] = useState<"sign-in" | "sign-up">(
    "sign-in"
  );

  const handleToggle = () => {
    setActivePanel(activePanel === "sign-in" ? "sign-up" : "sign-in");
  };

  return (
    <div
      className={`${styles.container} ${
        activePanel === "sign-up" ? styles.active : ""
      }`}
    >
      {/* Formulario de Registro */}
      <div className={`${styles.formContainer} ${styles.signUp}`}>
        <form>
          <h1>Create Account</h1>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.icon}>
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className={styles.icon}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className={styles.icon}>
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className={styles.icon}>
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email for registeration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>

      {/* Formulario de Inicio de Sesión */}
      <div className={`${styles.formContainer} ${styles.signIn}`}>
        <form>
          <h1>Sign In</h1>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.icon}>
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className={styles.icon}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className={styles.icon}>
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className={styles.icon}>
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button>Sign In</button>
        </form>
      </div>

      {/* Panel de Cambio entre Sign In y Sign Up */}
      <div className={styles.toggleContainer}>
        <div className={styles.toggle}>
          <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button
              className={`${styles.hidden} ${styles.login}`}
              id="login"
              onClick={handleToggle}
            >
              Sign In
            </button>
          </div>
          <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
            <h1>Hello, Friend!</h1>
            <p>
              Register with your personal details to use all of site features
            </p>
            <button
              className={`${styles.hidden} ${styles.register}`}
              id="register"
              onClick={handleToggle}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
