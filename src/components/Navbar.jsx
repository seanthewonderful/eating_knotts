import { NavLink, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <h1>Navbar</h1>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
