import profile from '../images/pic-self.jpg'

const Home = () => {
  return (
    <div className="w-full h-auto  flex flex-col md:flex-row items-center justify-center gap-4 py-4">
      {/* left section */}
      <div className='w-full md:w-[40%] flex items-center justify-center'> 
        <img src={profile} alt="Rahul kumar"  className='w-[200px] h-[200px] rounded-md'/>
      </div>

      {/* right section */}
      <div className='w-[90%] md:w-[50%]  flex flex-col items-center justify-center p-4 rounded-md border-2 border-gray-300 shadow-md md'> 
       
          <h1 >Rahul Kumar</h1>
          <p>Full Stack Developer</p>
          <p>React | Node | Express | MongoDB</p>

        
      </div>
      
    </div>
  )
}

export default Home
