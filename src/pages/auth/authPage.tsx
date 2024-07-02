import React, { useState } from "react";
import styles from "./authPage.module.css";
import { Button, SignIn, Signup } from "../../components";

const AuthPage: React.FC = () => {
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
      <Signup customClass={styles.signUp} callback={handleToggle} />
      <SignIn customClass={styles.signIn} />

      <div className={styles.toggleContainer}>
        <div className={`${styles.toggle} bg-violet`}>
          <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <Button secondary text="Sign In" onClick={handleToggle} />
          </div>
          <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all site features</p>
            <Button secondary text="Sign up" onClick={handleToggle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
