import { User, Restaurant, db } from './model.js'

const user8 = await User.scope('withPassword').findByPk(8)

await db.close()