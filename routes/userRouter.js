const express =require("express")
const router= express.Router()
const {
    getAllUser,
    getUser,
    editUser,
    deleteUser
} =require("../controllers/userController")

router.get("/users", getAllUser)
router.get("/users/:id", getUser)
router.put("/users",editUser)
router.delete("/users",deleteUser)

module.exports= router