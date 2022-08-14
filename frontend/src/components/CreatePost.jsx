import React from "react";
import styles from "./Post.module.css";

export default function CreatePost() {
  return (
    <>
    <div className={styles.post}>

    <div className={styles.create_post}>
      <h2>Create New Post</h2>
      {/* <textarea
        className={styles.post_content}
        placeholder="create a new post"
        type="text"
      /> */}

      <textarea
        className={styles.post_content}
        placeholder="create a new post"
        cols={150}
      />
      <input
        className={styles.register_input}
        type="file"
        onChange={(e) => setPfp(e.target.files[0])}
        />
      <input className={styles.create_post_btn} type="submit" value="post" />
    </div>
    </div>
        </>
  );
}
