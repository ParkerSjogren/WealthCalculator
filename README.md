# Wealth Calculator

Calculates compounding interest given an initial investment and additionaly monthly/annual investmests

Getting started:
```
Create a MongoDB database with the name:WealthCalaculator (mongodb://localhost:27017)

in the .\WealthCalculator directory run:

npm install
node model\loadInitialUsers
npm start

On a web brower, enter: localhost:3000
- You will presented with the Wealth Calculator screen, from which you can enter/modify calculation parameters, save those paramters if you desire and calculate the future value of your investments

Curl commands
```
bash version
curl -X POST -H "Content-type: application/json" -d '{"name":"default","pwd":"password","initialBalance":666,"yearsInvesting":25,"rateReturn":5,"addlInvestAmts":100,"frequency":"monthly"}' http://localhost:3000/updateParameters
curl http://localhost:3000/user?name=default

windows
curl -X POST -H "Content-type: application/json" -d "{\"name\":\"default\",\"pwd\":\"password\",\"initialBalance\":666,\"yearsInvesting\":25,\"rateReturn\":5,\"addlInvestAmts\":100,\"frequency\":\"monthly\"}" http://localhost:3000/updateParameters
curl http://localhost:3000/user?name=default
