
const User = (user) => {
    console.log(user)
    return (
        <div className="card bg-gray-800 text-4xl gap-5 m-3 p-5">
            <h1>{user?.user?.name}</h1>
            <h1>{user?.user?.website}</h1>
            <h1>{user?.user?.phone}</h1>
        </div>
    );
};

export default User;