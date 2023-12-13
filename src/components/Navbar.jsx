import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { notify } from '../assets/funx.js'

export default function Navbar() {

  const dispatch = useDispatch()
  const userId = useSelector(state => state.userId)
  const adminId = useSelector(state => state.adminId)

  const logout = async () => {
    axios.get('/api/logout')
      .then(res =>  {
        dispatch({
          type: "LOGOUT",
          payload: null
        })
        notify("", res.data.message)
      })
  } 

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
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Knotts_Berry_Farm_Logo.svg/2560px-Knotts_Berry_Farm_Logo.svg.png' alt='knotts-logo' id='knotts-nav-logo' />
        </div>

        {userId &&
        <div>
          <h4>Welcome, ${}</h4>
        </div>
        }
          
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
          <>
          <button className='nav-btn'>
            <NavLink
              to={`/profile/${userId}`}
              >
                Profile
            </NavLink>
          </button>

          <button className='nav-btn'
            onClick={logout}>
            {/* <NavLink
              onClick={logout}
              > */}
                Logout
            {/* </NavLink> */}
          </button>
          </>
          }

        {adminId && 
          <>
          <button className='nav-btn'>
            <NavLink 
              to={`/admin/${adminId}`}
              >
                Profile
            </NavLink>
          </button>

          <button className='nav-btn'>
            <NavLink
              to={'/'}
              onClick={logout}
              >
                Logout
            </NavLink>
          </button>
          </>
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

      <ToastContainer 
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
        />

      <main>
        <Outlet />
      </main>
    </div>
  )
}
