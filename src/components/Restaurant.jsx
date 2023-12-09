import { NavLink } from 'react-router-dom'

export default function Restaurant({ restaurant }) {

  return (
    <div>
			<h4>
				<NavLink
					to={`/restaurant/${restaurant.restaurantId}`}
					>{restaurant.name}
				</NavLink>
			</h4>
				<ul>
					<li>
						<NavLink 
							to={`/land/rest/${restaurant.land.landId}`}
							>{restaurant.land.name}
						</NavLink>
					</li>
					<li>{restaurant.expense}</li>
				</ul>
    </div>
  )
}
