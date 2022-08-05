import React, { useState } from "react";
import styles from "../styles/Publish.module.css";

export default function () {
  const [file, setFile] = useState([]);
  const onChange = (e) => {
    for (const file of e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setFile((imgs) => [...imgs, reader.result]);
      };
      reader.onerror = () => {
        console.log(reader.error);
      };
    }
  };

  console.log(file, file.length);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.title}>
          <span className={`${styles.titleWord} ${styles.word2}`}>
            Publish{" "}
          </span>
          <span className={`${styles.titleWord} ${styles.word1}`}>
            Research
          </span>
        </div>
        <div className={styles.publish}>
          Research Title
          <input
            className={styles.research_title}
            type="text"
            placeholder="Research title"
          />
          Research Description
          <textarea
            className={styles.research_desc}
            type="text"
            placeholder="Research details here"
          />

          Select Additional Media Files

          <div className={styles.upload}>
            <input
              className={styles.research_docs}
              onChange={onChange}
              type="file"
              name="file"
              multiple
            />
            {file.map((link) => (
              <img src={link} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
