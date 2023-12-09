import { User, Restaurant, Rating, Land, db } from './model.js'

const allRestaurants = await Restaurant.findAll({
    include: [
        {
            model: Rating,
            include: {
                model: User
            }
        },
        {
            model: Land
        }
        ]
    }
)

console.log(allRestaurants)

await db.close()