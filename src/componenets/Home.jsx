import profile from '../images/pic-self.jpg';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithubSquare } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import About from './About';

const Home = () => {
  return (
    <div className="bg-[#0a192f] text-white ">
      {/* Hero Section */}
      <div
        className="w-full  flex flex-col md:flex-row items-center justify-center text-center px-4 gap-6 relative "
     
      >
        {/* Content */}
        <div className="relative flex flex-col  items-center md:justify-around gap-8 mt-10 mb-8">
          {/* Profile Image */}
          <img
            src={profile}
            alt="Rahul Kumar"
            className="w-40 h-40 md:w-60 md:h-60 rounded-full border-4 border-orange-500 shadow-lg"
          />

          {/* Name and Title */}
          <div className='flex flex-col items-center text-center'>
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide mt-4">
            Rahul Kumar
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 mt-2">
            Full Stack Developer
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-6 mt-6">
            <a
              href="https://www.linkedin.com/in/rahul-kumar-82654525b"
              target="_blank"
              rel="noreferrer"
              className="text-4xl text-gray-400 hover:text-orange-500 transition"
            >
              <CiLinkedin />
            </a>
            <a
              href="https://github.com/rkrahul21"
              target="_blank"
              rel="noreferrer"
              className="text-4xl text-gray-400 hover:text-orange-500 transition"
            >
              <FaGithubSquare />
            </a>
            <a
              href="https://leetcode.com/u/rkumar21/"
              target="_blank"
              rel="noreferrer"
              className="text-4xl text-gray-400 hover:text-orange-500 transition"
            >
              <SiLeetcode />
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/rahul2125/"
              target="_blank"
              rel="noreferrer"
              className="text-4xl text-gray-400 hover:text-orange-500 transition"
            >
              <SiGeeksforgeeks />
            </a>
          </div>

          </div>
        </div>
      {/* About Section */}
      <div className="w-full bg-[#112240] py-12">
        <About />
      </div>
      </div>


      {/* Educational Section */}
      <div className="w-full bg-[#0a192f] py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-500 underline mb-8">
          Educational Details
        </h1>
        <div className="flex flex-col items-center gap-8">
          {/* Education Card */}
          <div className="w-[90%] md:w-[70%] bg-[#112240] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-400">
                2021 - 2025
              </span>
              <div>
                <h2 className="text-xl font-bold">
                  Muzaffarpur Institute of Technology
                </h2>
                <p className="text-gray-400">Leather Technology (B.Tech)</p>
                <p className="text-gray-400">CGPA: 8.12</p>
              </div>
            </div>
          </div>

          <div className="w-[90%] md:w-[70%] bg-[#112240] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-400">
                2018 - 2020
              </span>
              <div>
                <h2 className="text-xl font-bold">
                  DAV Public School, Alkusa, Dhanbad
                </h2>
                <p className="text-gray-400">Intermediate CBSE (PCM)</p>
                <p className="text-gray-400">Percentage: 87%</p>
              </div>
            </div>
          </div>

          <div className="w-[90%] md:w-[70%] bg-[#112240] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-400">
                2016 - 2018
              </span>
              <div>
                <h2 className="text-xl font-bold">
                  Doon Public School, Dhanbad
                </h2>
                <p className="text-gray-400">Matriculation (CBSE)</p>
                <p className="text-gray-400">Percentage: 75%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;