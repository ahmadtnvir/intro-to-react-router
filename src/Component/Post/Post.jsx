import { Link, useNavigate } from 'react-router-dom';
import './Post.css'
const PostDetails = ({post}) => {
    const {id, userId, title} = post;

    const navigate = useNavigate();

    const handleSeeDetails = () => {
        navigate(`/post/${id}`);
    }

    return (
        <div className="postStyle">
            <h4>User Id : {userId}</h4>
            <p>Title : {title}</p>
            <Link to={`/post/${id}`}>
                <button>See More Details</button>
            </Link>
            <button onClick={handleSeeDetails}>See Details</button>
        </div>
    );
};

export default PostDetails;