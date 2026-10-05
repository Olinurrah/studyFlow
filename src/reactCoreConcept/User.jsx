
const User = ({user}) => {
    return (
        <div className="border">
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>
            <h1>{user.email}</h1>
            <h1>{user.company.name}</h1>
            <h1>{user.address.geo.lat}</h1>
            <h1>{}</h1>
        </div>
    );
};

export default User;