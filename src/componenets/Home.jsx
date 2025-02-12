import profile from '../images/pic-self.jpg'
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";


const Home = () => {
  return (
    <div className="w-full h-auto  flex flex-col md:flex-row items-center justify-center gap-4 py-8">
      {/* left section */}
      <div className='w-full md:w-[40%] flex items-center justify-center'> 
        <img src={profile} alt="Rahul kumar"  className='w-[200px] h-[200px] md:w-[350px] md:h-[350px] rounded-full my-2' />
      </div>

      {/* right section */}
      <div className='w-[90%] md:w-[50%]  flex flex-col items-center justify-center p-4 text-2xl'> 
          <h1 className='text-[32px]'> Hello there! I am</h1>
          <h1 className='font-bold text-[56px] py-4'>Rahul Kumar</h1>
          <p className='text-[32px] text-amber-700 font-semibold'>Full Stack Developer</p>

          {/* social media icon */}
          <div className='flex items-center gap-8 p-4 h-auto '>
            <a href="https://www.linkedin.com/in/rahul-kumar-82654525b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel='noreferrer'>
              <CiLinkedin className='text-[48px] text-amber-700/80 hover:text-green-500 cursor-pointer' />

            </a>
            <a href="">
              <FaGithubSquare className='text-[48px] text-amber-700/80 hover:text-green-500 cursor-pointer' />
            </a>
            <a href="https://leetcode.com/u/rkumar21/" target='_blank' >
              <SiLeetcode className='text-4xl text-amber-700/80 hover:text-green-500 cursor-pointer' />
            </a>
            <a href="">
              <SiGeeksforgeeks className='text-4xl text-amber-700/80 hover:text-green-500 cursor-pointer' />
            </a>
              
          </div>

        
      </div>
      
    </div>
  )
}

export default Home
