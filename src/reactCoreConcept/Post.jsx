
const Post = ({post}) => {
    const {title,body} = post
    return (
        <div>
            <div className="border p-5">
                <h1 className="text-2xl">{title}</h1>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default Post;