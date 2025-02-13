import { Outlet } from 'react-router-dom'
import Navbar from './componenets/Navbar'
import Header from './componenets/Header'

function Layout() {
  return (
    <div className='pb-20'>
    <Header/>
    <Navbar/>
    <Outlet />
    
    </div>
  )
}

export default Layout