import { User, Restaurant, Rating, db } from "../../database/model.js";
import bcryptjs from 'bcryptjs'

const userHandlers = {

    getUserById: async (req, res) => {

        const user = await User.findByPk(req.params.userId)
        console.log(user)

        if (!user) {
            res.status(400).send({
                message: "Not found",
                user: null
            })
        } else {
            res.status(200).send({
                message: "User found",
                user: user
            })
        }

    },

    getUserByUsername: async (req, res) => {

        const { username } = req.params

        const user = await User.findOne({
            where: {
                username: username
            },
            include: [
                { model: Rating }
            ]
        })

        if (!user) {
            res.status(400).send({
                message: "No user found",
                user: null,
            })
        } else {
            res.status(200).send({
                message: "User found",
                user: user,
            })
        }
    },

    createUser: async (req, res) => {

        const { username, password, email, firstName, lastName, img } = req.body

        const user = await User.create({
            username,
            password,
            // email,
            // firstName,
            // lastName,
            img,
        })

        req.session.userId = user.userId

        res.status(200).send({
            message: "User created and logged in",
            userId: user.userId,
        })
    },

    updateUser: async (req, res) => {

        if (!req.session.userId) {
            res.status(401).send({
                message: "You must be logged in to do this"
            })
            return
        }

        const { username, password, email, firstName, lastName, img } = req.body

        if (await User.findOne({ where: { username }})) {
            res.status(401).send({
                message: "Username already in use"
            })
            return
        } 
        // else if (await User.findOne({ where: { email }})) {
        //     res.status(401).send({
        //         message: "Email already in use"
        //     })
        //     return
        // }

        const user = await User.scope('withPassword').findByPk(req.session.userId)

        console.log(password)
        console.log(user.password)

        if (!bcryptjs.compareSync(password, user.password)) {
            res.status(401).send({
                message: "Password incorrect"
            })
            return
        }

        await user.update({
            username: username ?? user.username,
            // email: email ?? user.email,
            // firstName: firstName ?? user.firstName,
            // lastName: lastName ?? user.lastName,
            img: img ?? user.img,
        })

        res.status(200).send({
            message: "User details updated",
        })
    },

    updateUserPassword: async (req, res) => {

        if (!req.session.userId) {
            res.status(401).send({
                message: "You must be logged in to do this"
            })
            return
        }

        const user = await User.scope('withPassword').findByPk(req.session.userId)
        
        const { oldPassword, newPassword } = req.body

        if (!bcryptjs.compareSync(oldPassword, user.password)) {
            res.status(401).send({
                message: "Current password incorrect"
            })
            return
        }

        await user.update({
            password: newPassword,
        })

        res.status(200).send({
            message: "Hey, nice new password. I bet no one will crack it this time!"
        })
    },

    deleteUser: async (req, res) => {

        if (!req.session.userId) {
            res.status(401).send({
                message: "You must be logged in to do this"
            })
            return
        }

        const user = await User.findByPk(req.session.userId)

        const { password } = req.body

        if (!bcryptjs.compareSync(password, user.password)) {
            res.status(401).send({
                message: "Password incorrect"
            })
            return
        }

        await user.destroy()
        req.session.userId = null

        res.status(200).send({
            message: "User deleted"
        })
    }
}

export default userHandlers