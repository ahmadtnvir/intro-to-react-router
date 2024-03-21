import { Link } from 'react-router-dom';
import './User.css'
const User = ({user}) => {
    const {id,name, username, email, phone, website, address} = user;
    const {street} = address;
    
    return (
        <div className="userStyle">
            <h3>Clint Details</h3>
            <p><strong>Name :</strong> {name}</p>
            <p><strong>Username :</strong> {username}</p>
            <p><strong>Email :</strong> {email}</p>
            <p><strong>Phone :</strong> {phone}</p>
            <p><strong>Website :</strong> {website}</p>
            <p><strong>Address :</strong> {street}</p>
            {/* <Link to={`/user/${id}`}>Show Details</Link> */}
            <Link to={`/user/${id}`}>
                <button>See More Details</button>
            </Link>
        </div>
    );
};

export default User;