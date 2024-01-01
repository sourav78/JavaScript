const express = require("express")

const router = express.Router()
const router2 = express.Router()

const { getAllUsers, getUserById, updateUserById, deleteUserById, createNewUser, showAllUsers } = require("../controllers/userControllers")

router2.get("/", showAllUsers)

router.route("/").get(getAllUsers).post(createNewUser)

router.route("/:id")
    .get(getUserById)
    .patch(updateUserById)
    .delete(deleteUserById)


module.exports = {
    router,
    router2
}
