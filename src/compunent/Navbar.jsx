
const Navbar = () => {
    return (
        <div>
            <nav className="flex bg-indigo-900">
                <h1 className=" text-2xl px-5">StudyFlow</h1>
                <ul className="flex m-auto">
                    <li className="mx-4">Home</li>
                    <li className="mx-4">Feature</li>
                    <li className="mx-4">Survice</li>
                    <li className="mx-4">About</li>
                </ul>
                <button className= "btn border border-indigo-300 m-5 p-3 rounded-2xl">Sing up</button>
            </nav>
        </div>
    );
};

export default Navbar;