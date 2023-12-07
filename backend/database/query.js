import { User, Restaurant, db } from './model.js'

console.log(await Restaurant.findAll())

await db.close()