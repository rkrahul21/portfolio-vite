import { Outlet } from 'react-router-dom'
import Header from './componenets/Header'

function Layout() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      <Header />
      <div className="pt-[70px] mb-2">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout