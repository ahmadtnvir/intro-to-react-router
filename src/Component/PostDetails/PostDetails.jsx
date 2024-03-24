import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    // console.log(post);
    const {postId} = useParams();
    const {id, body} = post;
    const navigate = useNavigate();
    console.log(postId);
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <h4>Id : {id}</h4>
            <p>Title : {body}</p>
            <button onClick={handleGoBack}>GO Back</button>
        </div>
    );
};

export default PostDetails;