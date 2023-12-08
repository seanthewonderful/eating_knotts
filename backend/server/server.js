import express from 'express'
import morgan from 'morgan'
import session from 'express-session'
import ViteExpress from 'vite-express'

import authHandlers from './controllers/authController.js'
import userHandlers from './controllers/userController.js'
import adminHandlers from './controllers/adminController.js'
import restaurantHandlers from './controllers/restaurantController.js'
import ratingHandlers from './controllers/ratingController.js'

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(session({
    secret: 'ihadapony',
    saveUninitialized: false,
    resave: false,
}))

// Authentication
const {
    sessionCheck,
    login,
    adminLogin,
    logout,
} = authHandlers

app.get('/session-check', sessionCheck)
app.post('/login', login)
app.post('/login/admin', adminLogin)
app.get('/logout', logout)

// Users
const {
    getUserById,
    getUserByUsername,
    createUser,
    updateUser,
    updateUserPassword,
    deleteUser,
} = userHandlers

app.get('/user/id/:userId', getUserById)
app.get('/user/username/:username', getUserByUsername)
app.post('/user/create', createUser)
app.put('/user/update/:userId', updateUser)
app.put('/user/update/password/:userId', updateUserPassword)
app.delete('/user/delete/:userId', deleteUser)

// Admins
const {
    getAdminById,
    createAdmin,
    updateAdmin,
    deleteAdmin,
} = adminHandlers

app.get('/admin/id/:adminId', getAdminById)
app.post('/admin/create', createAdmin)
app.put('/admin/update/:adminId', updateAdmin)
app.delete('/admin/delete/:adminId', deleteAdmin)

// Restaurants
const {
    getAllRestaurants,
    getRestaurantsByLand,
    getRestaurantByName,
    getRestaurantRatingAvg,
    getRestaurantRatings,
    getUserRatingOfRestaurant,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant,
} = restaurantHandlers

app.get('/restaurants/all', getAllRestaurants)
app.get('/restaurants/land/:landId', getRestaurantsByLand)
app.get('/restaurant/name', getRestaurantByName)
app.get('/restaurant/rating/:restaurantId', getRestaurantRatings)
app.get('/restaurant/avg-rating/:restaurantId', getRestaurantRatingAvg)
app.get('/restaurant/rating/by-user/:restaurantId', getUserRatingOfRestaurant)
app.post('/restaurant/create', createRestaurant)
app.put('/restaurant/update/:restaurantId', updateRestaurant)
app.delete('/restaurant/delete/:restaurantId', deleteRestaurant)

// Ratings
const {
    getUserRatings,
    createRating,
    updateRating,
    deleteRating,
} = ratingHandlers

app.get('/ratings/user-ratings/:userId', getUserRatings)
app.post('/rating/create/:restaurantId', createRating)
app.put('/rating/update/:ratingId', updateRating)
app.delete('/rating/delete/:ratingId', deleteRating)

ViteExpress.listen(app, 9009, () => console.log(`Knotted up at http://localhost:9009`))