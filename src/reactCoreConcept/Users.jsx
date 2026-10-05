import { use } from "react";
import User from "./User";


const Users = ({fetchUsers}) => {
    const users = use(fetchUsers);
    console.log(users)
    return (
        <div className="grid grid-cols-3 gap-5 m-5 border p-5">
            <h1>users: {users.length}</h1>
            {
                users.map((user) => <User cla key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;