const users = require('./usersInMongo')

users.createUser('default',
                'password',
                 [{initialBalance : 10000,
                   yearsInvesting: 25,
                   rateReturn :5,
                   addlInvestAmts: 100,
                   frequency : 'monthly'}])