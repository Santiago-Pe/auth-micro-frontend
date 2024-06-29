import React, { useState } from "react";
import styles from "./home.module.css"; // Importa los estilos CSS Modules
import { Button, SignIn, Signup } from "../components";
// import { Signup } from "../components";

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
      <Signup customClass={styles.signUp} />

      <SignIn customClass={styles.signIn} />

      {/* Panel de Cambio entre Sign In y Sign Up */}
      <div className={styles.toggleContainer}>
        <div className={`${styles.toggle} bg-violet`}>
          <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <Button secondary text="Sing In" onClick={handleToggle} />
          </div>
          <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
            <h1>Hello, Friend!</h1>
            <p>
              Register with your personal details to use all of site features
            </p>

            <Button secondary text="Sing up" onClick={handleToggle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
