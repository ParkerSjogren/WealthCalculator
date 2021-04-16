# Wealth Calculator

Calculates compounding interest given an initial investment and additionaly monthly/annual investmests

Getting started:
```
npm install
npm start
```
on a web brower:

localhost:3000

Curl commands
```
bash version
curl -X POST -H "Content-type: application/json" -d '{"name":"default","pwd":"password","initialBalance":666,"yearsInvesting":25,"rateReturn":5,"addlInvestAmts":100,"frequency":"monthly"}' http://localhost:3000/updateParameters
curl http://localhost:3000/user?name=default

windows
curl -X POST -H "Content-type: application/json" -d "{\"name\":\"default\",\"pwd\":\"password\",\"initialBalance\":666,\"yearsInvesting\":25,\"rateReturn\":5,\"addlInvestAmts\":100,\"frequency\":\"monthly\"}" http://localhost:3000/updateParameters
curl http://localhost:3000/user?name=default
