import { Link } from 'react-router-dom';
import './Post.css'
const PostDetails = ({post}) => {
    const {id, userId, title} = post;
    return (
        <div className="postStyle">
            <h4>User Id : {userId}</h4>
            <p>Title : {title}</p>
            <Link to={`/post/${id}`}>
                <button>See More Details</button>
            </Link>
        </div>
    );
};

export default PostDetails;