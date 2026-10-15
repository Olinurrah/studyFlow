import { Menu, MenuIcon, X } from "lucide-react";
import { useState } from "react";


const datas = [
  {
    id: 1,
    name: "Home",
    link: "home"

  },
  {
    id: 2,
    name: "Survice",
    link: "home"

  },
  {
    id: 3,
    name: "Blog",
    link: "home"

  },
  {
    id: 4,
    name: "Products",
    link: "home"

  },
  {
    id: 5,
    name: "About Us",
    link: "home"

  },
]

// const datas = ["dd","fdsfs","sdfsdf"]
const Navbar = () => {

  const [hide,setHide] = useState(false)
  const links =  datas.map(data => <h1 className=" text-xl " key={data.id}>{data.name}</h1>)
             
  
  return (
        <div>
        <nav className="flex justify-between mx-5 m-5">
         
          <span className="flex gap-30" onClick={ () => setHide(!hide)}>
            {hide ?
             <Menu className="md:hidden"></Menu> : 
             <X className="md:hidden"></X>}
            {/* <MenuIcon className=""></MenuIcon> */}
             <h3 className="text-2xl">My Navbar</h3>
            <ul className={`md:hidden absolute duration-1000 ${!hide ? "top-10 " : " -top-55"}`}>{ links}</ul>
          </span>
          <ul className="md:flex gap-5 hidden">{links}</ul>

          
        </nav>
          {/* <nav className="flex m-5 justify-between text-3xl">
            <div> AL-ROZI </div>
            <span className="flex gap-6 " 
            
            onClick={()=> {setHide(!hide)}} >{hide ? "open" : "close"}
            
            {links}
            </span>
            <menu className="lg:hidden"  onClick={()=> {setHide(!hide)}} >{hide ? <Menu /> : <X />}
               </menu>
          <button > Sing In</button>
</nav> */}


        </div>
    );
};

export default Navbar;