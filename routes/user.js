const express = require('express')
const users = require('../model/usersInMongo')

let router = express.Router()

router.get('/user', async (req, res) => {    
    userName=req.query.name

    try {
        let user = await users.findUserByName(userName)
        res.send(user)    
    }
    catch (error) {
        console.log(error)
        res.status(404).send("user " + userName + " not found.\n")
    }
})

module.exports = router