import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'

export default function Navbar() {

  const dispatch = useDispatch()
  const userId = useSelector(state => state.userId)
  const adminId = useSelector(state => state.adminId)

  const sessionCheck = async () => {
    const { data } = await axios.get('/api/session-check')

    if (data.userId) {
      dispatch({
        type: 'USER_AUTH',
        payload: data.userId
      })
    }
  }

  useEffect(() => {
    sessionCheck()
  }, [])

  return (
    <div id="main">
      <div id='navbar'>

        <div id='navTitle'>
          <h1>Eating</h1>
          <img src='https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/kb-en-us/logos/knotts-berry-logo.png' alt='knotts-logo' id='knotts-nav-logo' />
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
              to='/restaurants'
              >Restaurants
            </NavLink>
          </button>

        {userId && 
          <button className='nav-btn'>
            <NavLink
              to={`/profile/${userId}`}
              >Profile
            </NavLink>
          </button>
          }

        {adminId && 
          <button className='nav-btn'>
            <NavLink 
              to={`/admin/${adminId}`}
              >
                Profile
            </NavLink>
          </button>
          }

        {!userId && !adminId &&
          <button className='nav-btn'>
            <NavLink
              to={'/login'}
            >
              Login
            </NavLink>
          </button>
          }

        </div>
        
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
