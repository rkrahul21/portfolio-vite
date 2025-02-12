import logo from '../images/logo-image2.png'

const Header = () => {
  return (
    <header className=" py-4">
        <div className="container mx-auto">
            <div className='flex justify-between items-center px-10'>
                <div className='flex items-center  p-0 m-0 '>
               
                    <img src={logo} alt="" className='w-8 h-8 rounded-full'/>
                    <p className='text-2xl pb-1 '>ahul kumar</p>

                </div>
                <button className='bg-amber-400 px-2 py-1 rounded-2xl'> work with me</button>
            </div>
        </div>

    </header>
  )
}

export default Header
