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
            className={styles.post_input}
            placeholder="Create a new post"
            cols={150}
          />
          <h4>Select Media File</h4> 
          <input
            className={styles.post_media}
            type="file"
            // onChange={(e) => setPfp(e.target.files[0])}
          />
          <button className={styles.create_post_btn} type="button">
            Post
          </button>
        </div>
      </div>
    </>
  );
}
