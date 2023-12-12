import { User, Admin, db } from '../../database/model.js'
import bcryptjs from 'bcryptjs'

const authHandlers = {

    sessionCheck: async (req, res) => {

        if (req.session.userId) {
            res.status(200).send({
                message: "User in session",
                userId: req.session.userId
            })
        } else {
            res.status(200).send({
                message: "No user in session",
                userId: null
            })
        }
    },

    login: async (req, res) => {

        const { username, password } = req.body

        const user = await User.scope('withPassword').findOne({
            where: {
                username: username
            }
        })

        if (!user) {
            res.status(401).send({
                message: "Username not found",
            })
            return
        }

        if (!bcryptjs.compareSync(password, user.password)) {
            res.status(401).send({
                message: "User password incorrect"
            })
            return
        }

        req.session.userId = user.userId

        res.status(200).send({
            message: "User logged in!",
            userId: user.userId
        })
    },

    adminLogin: async (req, res) => {

        const { username, password } = req.body

        const admin = await Admin.scope('withPassword').findOne({
            where: {
                username: username
            }
        })

        if (!admin) {
            res.status(401).send({
                message: "Admin username not found",
            })
            return
        }

        if (!bcryptjs.compareSync(password, admin.password)) {
            res.status(401).send({
                message: "Admin password incorrect"
            })
            return
        }

        req.session.adminId = admin.admin

        res.status(200).send({
            message: "Admin logged in!",
            adminId: admin.adminId
        })
    },

    logout: async (req, res) => {

        req.session.destroy()
        res.status(200).send({
            message: "Logged out. Goodbye!"
        })
    }
}

export default authHandlers