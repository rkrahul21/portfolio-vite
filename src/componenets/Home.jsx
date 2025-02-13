import profile from '../images/pic-self.jpg'
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";


const Home = () => {
  return (
    <div className='pt-[70px]'>

    <div className="w-full h-auto  flex flex-col md:flex-row items-center justify-center gap-4 py-8">
      {/* left section */}
      <div className='w-full md:w-[40%] flex items-center  justify-center'> 
        <img src={profile} alt="Rahul kumar"  className='w-[200px] h-[200px] md:w-[350px] md:h-[350px] rounded-full my-2' />
      </div>

      {/* right section */}
      <div className='w-[90%] md:w-[50%]  flex  md:flex-col items-center justify-center p-2 '>
    
          <div className='flex items-center flex-col gap-4'> 
          <h1 className='text-[32px]'> Hello there! I am</h1>
          <h1 className='font-bold text-[56px] py-2'>Rahul Kumar</h1>
          <p className='text-[32px] text-amber-700 font-semibold'>Full Stack Developer</p>
          </div>
          {/* social media icon */}
          <div className='flex flex-col z-10 fixed right-0 top-1/3 items-center gap-4  h-auto shadow-md p-2 rounded-md bg-white md:z-0 md:flex-row md:shadow-none md:relative'>
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

    {/* educational section */}
    <div className='w-full  py-2 flex flex-col items-center justify-around gap-4'>
      <h1 className='text-3xl underline  justify-start '> Educational Details</h1>
      <div className='w-full md:w-[70%] flex  items-center justify-center gap-4 hover:shadow-md p-4 hover:bg-[#FEF9E1] hover:rounded-md '>
        <div className='w-1/4 text-center'>
        2021 - <span className='sm:inline-block'>20</span>25

        </div>
        <div className="w-3/4">
          <h2 className="text-xl">
            Muzaffarpur Institute of Technlogy, Muzaffarpur
          </h2>
          <h3 className="text-base">Leather Technology ( B.Tech )</h3>
          <h3 className="text-base">CGPA: 8.12</h3>
        </div>

      </div>

      <div className='w-full md:w-[70%] flex  items-center justify-center gap-4 hover:shadow-md p-4 hover:bg-[#FEF9E1] hover:rounded-md '>
        <div className='w-1/4 text-center'>
        2018 - <span className='sm:inline-block'>20</span>20

        </div>
        <div className="w-3/4">
          <h2 className="text-xl">
            DAV Public School, Alkusa, Dhanbad
          </h2>
          <h3 className="text-base">Intermediate CBSE (PCM)</h3>
          <h3 className="text-base">Percentage - 87%</h3>
        </div>

      </div>

      <div className='w-full md:w-[70%] flex  items-center justify-center gap-4 hover:shadow-md p-4 hover:bg-[#FEF9E1] hover:rounded-md '>
        <div className='w-1/4 text-center'>
        2021 - <span className='sm:inline-block'>20</span>25

        </div>
        <div className="w-3/4">
          <h2 className="text-xl">
           Doon Public School, Dhanbad          </h2>
          <h3 className="text-base">Matriculation (CBSE)</h3>
          <h3 className="text-base">Percentage - 75%</h3>
        </div>

      </div>

    </div>
    </div>
  )
}

export default Home
