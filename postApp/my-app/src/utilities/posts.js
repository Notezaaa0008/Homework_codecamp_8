import { useState, useEffect } from "react"
import { getPosts } from "../features/post/postSlice"
import { useDispatch, useSelector } from "react-redux"

//เป็นการ reuse function ที่มีการใช้นำมารวมกันแล้วเรียกไปใช้ในแต่ละจุด
export function usePosts() {
  //วิธีแบบ custom hook
  // const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(null);

  const posts = useSelector((state) => state.posts.posts)
  const isLoading = useSelector((state) => state.posts.status === 'pending')
  const dispatch = useDispatch()

  useEffect(function () {
    //วิธีแบบ custom hook
    // async function getPosts() {
    //   try {
    //     let response = await fetch("http://localhost:8000/posts");
    //     let data = await response.json();
    //     setPosts(data.data);
    //   } catch (error) {
    //     setIsError(true);
    //     console.log("error !");
    //   }
    // }
    //วิธี redux เรียกว่า redux Thunk
    dispatch(getPosts());
  }, []);

  async function handleDeletePost(postId) {
    // console.log("postId:", postId);
    // let response = await fetch("http://localhost:8000/posts/" + postId, {
    //   method: "DELETE",
    // });

    // if (response.ok) {
    //   let newPosts = posts.filter((post) => {
    //     return post.id !== postId;
    //   });
    //   setPosts(newPosts);
    // }
  }

  return { posts, isError, isLoading, handleDeletePost }
}

