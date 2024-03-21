import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    // console.log(post);
    const {id, body} = post;
    return (
        <div>
            <h4>Id : {id}</h4>
            <p>Title : {body}</p>
        </div>
    );
};

export default PostDetails;