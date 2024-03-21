import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name} = user;
    // console.log(user);
    return (

        <div>
            <h3>Details about users: {name}</h3>
        </div>
    );
};

export default UserDetails;