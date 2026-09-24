
const Button = () => {
    return (
        <div className="p-">
            <button className="bg-orange-500 border-0 btn min-w-2/5 p-8 m-5 mx-15 text-3xl hover:bg-white hover:text-orange-400 hover:border-4 hover:border-orange-400 ">All </button>
            <button className="bg-gray-200 border-4 border-orange-400 btn min-w-2/5 p-7 m-5 text-3xl text-orange-500 hover:bg-orange-500 hover:text-white">In Stock </button>
        </div>
    );
};

export default Button;