const express = require('express')
const db      = require('../model/db')
const users   = require('../model/usersInMongo')    

let router = express.Router()

router.post('/updateParameters', async (req, res) => {
    try {
        const params = req.body

        // console.log("req.body is: ",req.body)

        db.getCollection('users')
            .then((users)  => {return users.findOne({name:'default'})
            .then((result) => {return result._id})
            .then((id) =>     {return users.deleteOne({_id: id})})})
        // .then(() => {
        //     db.close()
        // })
        
        users.createUser('default',
                        'password',
                        [{initialBalance : params.initialBalance,
                          yearsInvesting: params.yearsInvesting,
                          rateReturn :params.rateReturn,
                          addlInvestAmts: params.addlInvestAmts,
                          frequency : params.frequency}])    
        res.send("Hocus Pocus")
    }
    catch (error) {
        console.log(error)
        res.status(404).send("bad stuff******************\n")
    }
})

module.exports = router
