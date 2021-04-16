const db = require('./db')

async function createUser(name, pwd, investParams) {
    if (!investParams) {
        investParams = []
    }
    return db.getCollection("users").then((users) => {
        return users.insertOne({name,pwd,investParams})    
        .then((insertResult) => {
            console.log("inserted a user!")
        })    
    })
    // .then(() => {
    //     db.close()
    // })
}

async function findUserByName(userName) {
    return db.getCollection("users").then((users) => {
        return users.findOne({name: userName})
    })
}

module.exports = {
    createUser,
    findUserByName
}