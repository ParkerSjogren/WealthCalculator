# Wealth Calculator

Calculates compounding interest given an initial investment and additionaly monthly/annual investmests

Getting started:
```
Create a MongoDB database with the name:WealthCalaculator (mongodb://localhost:27017)

At the command prompt and in a directory that you wish to stage the Wealth Calculator application, enter:

git clone https://github.com/ParkerSjogren/WealthCalculator.git

Change your directory down and into the  .\WealthCalculator directory and then run:

npm install
node model\loadInitialUsers
--> above two commands run only one time for installation

npm start
--> run everytime use wish to run the application

On a web brower, enter: localhost:3000
- You will presented with the Wealth Calculator screen, from which you can enter/modify calculation parameters, save those paramters if you desire and calculate the future value of your investments

Curl commands, which you do not need & should not use. They are listed here for use by technical support.
```
bash version
curl -X POST -H "Content-type: application/json" -d '{"name":"default","pwd":"password","initialBalance":666,"yearsInvesting":25,"rateReturn":5,"addlInvestAmts":100,"frequency":"monthly"}' http://localhost:3000/updateParameters

curl http://localhost:3000/user?name=default

windows
curl -X POST -H "Content-type: application/json" -d "{\"name\":\"default\",\"pwd\":\"password\",\"initialBalance\":666,\"yearsInvesting\":25,\"rateReturn\":5,\"addlInvestAmts\":100,\"frequency\":\"monthly\"}" http://localhost:3000/updateParameters

curl http://localhost:3000/user?name=default
