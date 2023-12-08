import { User, Restaurant, db } from './model.js'

const user8 = await User.scope('withPassword').findByPk(6)
console.log(user8)

await db.close()