import { User, Restaurant, Rating, Land, db } from './model.js'

const rory = await User.findOne({where: {username: "rory"}})

// await rory.createRating({
//     restaurantId: 1,
//     stars: 4,
//     review: "Neato McTeeto"
// })
// await rory.createRating({
//     restaurantId: 2,
//     stars: 3,
//     review: "Cool beans here"
// })

await db.close()