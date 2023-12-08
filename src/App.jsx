import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Profile from './pages/Profile.jsx'
import Navbar from './components/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar />} >
      <Route index element={<Home />} />
      <Route 
        path='profile/:userId'
        element={<Profile />}
        loader={profileLoader}
      />

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {

  return (
    <>
      Allo
    </>
  )
}

export default App
