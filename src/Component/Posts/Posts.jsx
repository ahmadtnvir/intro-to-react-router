import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import './Posts.css'

const Posts = () => {
    const posts = useLoaderData();
    // console.log(post);
    return (
        <div>
            <h3>Total Posts : {posts.length}</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, saepe!</p>
            <div className="postsStyle">
            {
                posts.map(post=><Post key={post.id} post={post}></Post>)
            }
            </div>
            
        </div>
    );
};

export default Posts;