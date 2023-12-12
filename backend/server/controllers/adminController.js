import { Admin, User, Restaurant, Rating, FoodItem, MealType, db } from '../../database/model.js'

const adminHandlers = {

    getAdminById: async (req, res) => {

        const admin = await Admin.findByPk(req.params.adminId)

        if (!admin) {
            res.status(400).send({
                message: "Somehow, this didn't work"
            })
        }

        res.status(200).send({
            message: "Admin found",
            admin: admin,
        })
    },

    createAdmin: async (req, res) => {

        if (!req.session.adminId) {
            res.status(401).send({
                message: "Only admins can create a new admin"
            })
        }

        const { username, password, email, firstName, lastName, img } = req.body

        if (await Admin.findOne({
            where: {
                username: username
            }
        })) {
            res.status(400).send({
                message: "Admin username already in use"
            })
            return 
        }

        const newAdmin = await Admin.create({
            username,
            password,
            email,
            firstName,
            lastName,
            img,
        })

        req.session.adminId = newAdmin.adminId

        res.status(201).send({
            message: "New admin created",
            adminId: newAdmin.adminId
        })
    },

    updateAdmin: async (req, res) => {

        if (!req.session.adminId) {
            res.status(401).send({
                message: "You must be logged in to do this"
            })
        }

        const { username, password, email, firstName, lastName, img } = req.body

        const admin = await Admin.findByPk(req.session.adminId)

        if (!bcryptjs.compareSync(password, admin.password)) {
            res.status(401).send({
                message: "Current password incorrect"
            })
            return
        }

        await admin.update({
            username: username ?? admin.username,
            email: email ?? admin.email,
            firstName: firstName ?? admin.firstName,
            lastName: lastName ?? admin.lastName,
            img: img ?? admin.img,
        })

        res.status(200).send({
            message: "Admin details updated"
        })
    },

    deleteAdmin: async (req, res) => {

        if (!req.session.adminId) {
            res.status(401).send({
                message: "You must be logged in to do this"
            })
        }

        const admin = await Admin.findByPk(req.session.adminId)

        const { password } = req.body

        if (!bcryptjs.compareSync(password, admin.password)) {
            res.status(401).send({
                message: "Password incorrect"
            })
            return
        }

        await admin.destroy()
        req.session.adminId = null

        res.status(200).send({
            message: "Admin deleted"
        })
    }
}

export default adminHandlers