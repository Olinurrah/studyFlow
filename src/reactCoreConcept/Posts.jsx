import { use } from "react";
import Post from "./Post";

const Posts = ({fetchposts}) => {
    const posts =use(fetchposts)
    return (
        <div className="p-5 grid grid-cols-3 gap-3">
            <h1>{posts.length}</h1>
            {
                posts.map((post) => <Post key={post.id} post={post}></Post>)
            }
            
        </div>
    );
};

export default Posts;