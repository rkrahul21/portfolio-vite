import { Link } from "react-router-dom"
import {BiHomeAlt , BiUser} from 'react-icons/bi' ;
import { BsBriefcase, BsChatSquareText } from 'react-icons/bs' ;
const Navbar = () => {
  return (
    
    <nav className="fixed bottom-4 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto" >

        {/* nav inner */}
        <div className="w-full bg-blue-500/40 h-[46px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between item-center text-2xl text-black">
          <Link to={'/'} smooth={true } spy={true} className="cursor-pointer w-[60px] h-[50px] flex items-center justify-center rounded-full hover:bg-white/20">
            <BiHomeAlt />
          </Link>
          <Link to={'/about'} smooth={true  } spy={true} className="cursor-pointer w-[60px] h-[50px] flex items-center justify-center rounded-full hover:bg-white/20">
            <BiUser />
          </Link>
          <Link to={'/projects'} smooth={true } spy={true} className="cursor-pointer w-[60px] h-[50px] flex items-center justify-center rounded-full hover:bg-white/20">
            <BsBriefcase />
          </Link>
          <Link to={'/contact'} smooth={true  } spy={true} className="cursor-pointer w-[60px] h-[50px] flex items-center justify-center rounded-full hover:bg-white/20">
            <BsChatSquareText />
          </Link>
        </div>
      </div>

    </nav>
  )
}

export default Navbar









// <div className="flex justify-between items-center p-4 px-8 bg-blue-200  shadow-amber-100 shadow-md">
    //   {/* right section */}
    //   <div className="flex text-black px-2">
    //     <Link to="/">
    //       <img src="./images/pic-self.jpg" alt="Rahul" />
    //     </Link>
        
    //   </div>
    //   <div className="flex flex-row gap-4 px-2 text-black">
    //     <Link to="/about"> <p>About</p></Link>
    //     <Link to="/Projects"><p>Projects</p></Link>
    //     <Link to="/Contact"><p>Contact</p></Link>
    //   </div>

      
    // </div>