import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Button } from 'react-bootstrap'
import { notify } from '../assets/funx.js'

export default function Navbar() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.user)
  const adminId = useSelector(state => state.adminId)


  const logout = async () => {
    axios.get('/api/logout')
      .then(res =>  {
        dispatch({
          type: "LOGOUT",
          payload: null
        })
        notify("success", res.data.message)
        navigate('/')
      })
  } 

  const sessionCheck = async () => {
    const { data } = await axios.get('/api/session-check')

    if (data.user) {
      dispatch({
        type: 'USER_AUTH',
        payload: data.user
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
          
        <div id='navLinks'>
          <Button className='nav-btn'>
            <NavLink
              to='/'
              >Home
            </NavLink>
          </Button>

          <Button className='nav-btn'>
            <NavLink
              to='/restaurants'
              >Restaurants
            </NavLink>
          </Button>

        {user && 
          <>
          <Button className='nav-btn'>
            <NavLink
              to={`/profile/${user.userId}`}
              >
                Profile
            </NavLink>
          </Button>

          <img 
            src={user.img}
            alt='user-icon'
            id='nav-profile-icon'
            />

          <Button 
            className='nav-btn'
            onClick={logout}
            >
                Logout
          </Button>

          </>
          }

        {adminId && 
          <>
          <Button className='nav-btn'>
            <NavLink 
              to={`/admin/${adminId}`}
              >
                Profile
            </NavLink>
          </Button>

          <Button className='nav-btn'>
            <NavLink
              to={'/'}
              onClick={logout}
              >
                Logout
            </NavLink>
          </Button>
          </>
          }

        {!user && !adminId &&
          <Button className='nav-btn'>
            <NavLink
              to={'/login'}
            >
              Login
            </NavLink>
          </Button>
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
