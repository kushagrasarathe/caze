import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import subscription_nft from "../../src/assets/gold.png";
import profile from "../../src/assets/profile.png";

export default function user() {
  /// renders some basic users info ,
  /// subscribed creators list

  return (
    <>
      <div className={`${styles.explore}`}>
        <h1 className={styles.section_heading}>User Account Details</h1>
        <div className={`${styles.user_section}`}>
          <div className={styles.account_card}>
            {/* <div className={styles.profile_image}>
              <Image src={profile} />
            </div> */}
            <h2 className={styles.card_title}>Wallet Details</h2>
            <h3>Address: </h3>
            <span>0xA25c5bE1324764573dE0a14ABFe0279B4291adfA</span>
            <h3>Balance: </h3>
            <span>10 MATIC</span>

            <div className={styles.user_subscription}>
              <h2 className={styles.card_title}>Subscribed to Gold Plan</h2>
              <Image src={subscription_nft} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
