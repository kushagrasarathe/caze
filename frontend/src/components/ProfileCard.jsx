import React from "react";
import styles from "./ProfileCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ProfileCard(props) {
  return (
    <>
      <div className={`${styles.profile_card} ${styles.card_border} `}>
        <div className={styles.profile_image}>
          <Image
            src={props.image}
            className={styles.profile_image}
            alt="creator profile picture"
            width={200}
            height={200}
          />
        </div>
        <h1 className={styles.profile_name}>{props.name}</h1>
        <p className={styles.profile_intro}>{props.intro}</p>
        <Link href={`/profile/${props.id}`}>
          <button className={styles.visit_btn}>Visit Profile</button>
        </Link>
      </div>
    </>
  );
}
