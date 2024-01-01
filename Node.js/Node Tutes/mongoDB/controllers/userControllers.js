const userModel = require("../models/user")

async function getAllUsers(req, res) {
    const dbUsers = await userModel.find({})

    console.log(dbUsers.length);

    res.json(dbUsers)
}

async function getUserById(req, res) {
    const usersData = await userModel.findById(req.params.id)

    // const users = usersData.find(user => user.id === userID)
    if (!usersData) return res.status(404).json({ status: "Page not found" })

    res.json(usersData)
}

async function updateUserById(req, res) {
    const updateUser = await userModel.findByIdAndUpdate(req.params.id, { jobTitle: "devloper" })

    // console.log(updateUser);

    return res.json({ msg: "success" })
}

async function deleteUserById(req, res) {
    await userModel.findByIdAndDelete(req.params.id)

    return res.json({ msg: "Deleted" })
}

async function createNewUser(req, res){
    const body = req.body
    // console.log("Body is", body);

    if (!body || !body.firstName || !body.lastName || !body.email || !body.gender || !body.jobTitle) {
        return res.status(400).json({ "status": "Please provide valid information" })
    }

    const result = await userModel.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        jobTitle: body.jobTitle,
        gender: body.gender,
    })

    // console.log(result);

    return res.status(200).json({ status: "Created" })
}

async function showAllUsers(req, res){
    const dbUsers = await userModel.find({})
    const listOfUsers = `
        <ul>
            ${dbUsers.map((ele) => `<li>${ele.firstName} ${ele.lastName} - ${ele.email}</li>`).join("")}
        </ul>
    `

    res.send(listOfUsers)
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    createNewUser,
    showAllUsers
}