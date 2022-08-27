import React, { useState } from "react";
import UAuth from "@uauth/js";
import styles from "../../styles/Home.module.css";

const uauth = new UAuth({
  clientID: "31822393-2b0c-44dd-95ef-b0d54e956869",
  redirectUri: "https://caze-tfntj.spheron.app/",
});

function UnstoppableDomain() {
  const [auth, setAuth] = useState();

  async function Connect() {
    try {
      const authorization = await uauth.loginWithPopup();
      setAuth(JSON.parse(JSON.stringify(authorization))["idToken"]);

      await authenticate();
    } catch (error) {
      console.error(error);
    }
  }

  async function logOut() {
    uauth.logout();
    logout();
  }

  function login() {
    if (auth === null || auth === undefined) {
      Connect();
    } else {
      logOut();
    }
  }

  return (
    <>
      <button onClick={login} className={styles.explore_btn}>
        {auth != null ? auth["sub"] : "Login with Unstoppable"}
      </button>
    </>
  );
}

export default UnstoppableDomain;
