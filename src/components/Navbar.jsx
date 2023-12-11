import { NavLink, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <div id="main">
      <div id='navbar'>

        <div id='navTitle'>
          <h1>Navbar</h1>
        </div>
          
        <div id='navLinks'>
          <button className='nav-btn'>
            <NavLink
              to='/'
              >Home
            </NavLink>
          </button>

          <button className='nav-btn'>
            <NavLink
              to='/profile/2'
              >User 2's Profile
            </NavLink>
          </button>

          <button className='nav-btn'>
            <NavLink
              to='/restaurants'
              >Restaurants
            </NavLink>
          </button>
        </div>
        
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
