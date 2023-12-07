import { DataTypes, Model } from 'sequelize'
import connectToDB from './database.js'
import util from 'util'
import bcryptjs from 'bcryptjs'

export const db = await connectToDB('postgresql:///averagedb')

export class User extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}
User.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING(30),
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(80),
            allowNull: false,
            unique: true,
        },
        firstName: {
            type: DataTypes.STRING(25),
            allowNull: true,
        },
        lastName: {
            type: DataTypes.STRING(25),
            allowNull: true,
        },
        img: {
            type: DataTypes.STRING(50),
            defaultValue: "/public/proficons/default.png",
            allowNull: false,
        }
    },
    {
        hooks: {
            beforeCreate: (user, options) => {
                const hashedPassword = bcryptjs.hashSync(user.password, bcryptjs.genSaltSync(5))
                user.password = hashedPassword
            },
            beforeBulkCreate: (users, options) => {
                for (let user of users) {
                    const hashedPassword = bcryptjs.hashSync(user.password, bcryptjs.genSaltSync(5))
                    user.password = hashedPassword
                }
            },
            beforeUpdate: (user, options) => {
                if (user.password) {
                    const hashedPassword = bcryptjs.hashSync(user.password, bcryptjs.genSaltSync(5))
                    user.password = hashedPassword
                }
            }
        },
        defaultScope: {
            attributes: {
                exclude: ['password']
            }
        },
        scopes: {
            withPassword: {
                attributes: {
                    include: ['password']
                }
            }
        },
        modelName: 'user',
        sequelize: db,
    }
)

export class Admin extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}
Admin.init(
    {
        adminId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING(30),
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(80),
            allowNull: false,
            unique: true,
        },
        firstName: {
            type: DataTypes.STRING(25),
            allowNull: true,
        },
        lastName: {
            type: DataTypes.STRING(25),
            allowNull: true,
        },
        img: {
            type: DataTypes.STRING(50),
            defaultValue: "/public/proficons/default.png",
            allowNull: false,
        }
    },
    {
        hooks: {
            beforeCreate: (admin, options) => {
                const hashedPassword = bcryptjs.hashSync(admin.password, bcryptjs.genSaltSync(5))
                admin.password = hashedPassword
            },
            beforeBulkCreate: (admins, options) => {
                for (let admin of admins) {
                    const hashedPassword = bcryptjs.hashSync(admin.password, bcryptjs.genSaltSync(5))
                    admin.password = hashedPassword
                }
            },
            beforeUpdate: (admin, options) => {
                if (admin.password) {
                    const hashedPassword = bcryptjs.hashSync(admin.password, bcryptjs.genSaltSync(5))
                    admin.password = hashedPassword
                }
            }
        },
        defaultScope: {
            attributes: {
                exclude: ['password']
            }
        },
        scopes: {
            withPassword: {
                attributes: {
                    include: ['password']
                }
            }
        },
        modelName: 'admin',
        sequelize: db,
    }
)

export class Restaurant extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}
Restaurant.init(
    {
        restaurantId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        expense: {
            type: DataTypes.STRING(3),
            allowNull: false,
            unique: false,
        },
        img: {
            type: DataTypes.STRING(50),
            allowNull: false,
            defaultValue: "/public/restaurants/default.png"
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: "This restaurant still needs a description."
        },
        full_service: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        x_coord: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        y_coord: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
    },
    {
        modelName: 'restaurant',
        sequelize: db
    }
)

export class Land extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}
Land.init(
    {
        landId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
        }
    },
    {
        modelName: 'land',
        sequelize: db,
    }
)

export class Cuisine extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}
Cuisine.init(
    {
        cuisineId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(25),
            allowNull: false,
            unique: true,
        }
    },
    {
        modelName: 'cuisine',
        sequelize: db,
    }
)

export class Rating extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}
Rating.init(
    {
        ratingId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        stars: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        review: {
            type: DataTypes.TEXT,
            allowNull: true,
        }
    },
    {
        modelName: 'rating',
        sequelize: db
    }
)

export class FoodItem extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}
FoodItem.init(
    {
        foodItemId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(25),
            unique: true,
            allowNull: false,
        },

    },
    {
        modelName: 'foodItem',
        sequelize: db,
    }
)

export class MealType extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}
MealType.init(
    {
        mealTypeId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(20),
            unique: true,
            allowNull: false,
        }
    },
    {
        modelName: 'mealType',
        sequelize: db
    }
)

// Relationships