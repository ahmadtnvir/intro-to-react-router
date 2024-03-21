import './User.css'
const User = ({user}) => {
    const {name, username, email, phone, website, address} = user;
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
        </div>
    );
};

export default User;