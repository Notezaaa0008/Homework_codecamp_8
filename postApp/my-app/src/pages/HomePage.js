/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import { useCounter } from "../contexts/context"
import { usePosts } from "../utilities/posts"
import { useSelector } from "react-redux"

function HomePage() {


  const { state, dispatch } = useCounter();

  const { posts, isError, isLoading, handleDeletePost } = usePosts();

  const counter = useSelector((state) => state.counter.counter)

  let history = useHistory();



  function handleAddPostClick() {
    history.push("/addpost");
  }


  return (
    <div>
      <div className="postapp-header">
        <h1
          css={css`
            color: rgb(254, 255, 67);
            font-size: 100px;
          `}
        >
          Post App
        </h1>
        <Button onClick={handleAddPostClick} primary={true}>
          Add Post
        </Button>
      </div>

      <div className="post-list">
        {isLoading && <h1>Loading ...</h1>}
        {isError && <h1>Something went wrong Please try again tmr.</h1>}
        {posts.map((post) => {
          return (
            <div key={post.id} className="post">
              <h3
                onClick={() => {
                  history.push("/post/" + post.id);
                }}
              >
                Title: {post.title}
              </h3>
              <p>{post.content}</p>
              <div className="post-footer">
                <span>Author: John</span>
                <div className="post-footer-buttons">
                  <Button>Edit</Button>
                  <Button
                    onClick={function () {
                      handleDeletePost(post.id);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        {/* state.counter ไปดูหน้า counterPage เพราะเรา ดีสตักมาเชื่อ state แต่จะเรียกใช้ counter ซึ่งเป็น obj ดังนั้นจึงต้องเรียกแบบนี้  */}
        <h1>Counter : {counter}</h1>
      </div>

      <div>
        <button onClick={() => history.push("/counter")}>Counter</button>
      </div>

    </div>
  );
}

export default HomePage;
