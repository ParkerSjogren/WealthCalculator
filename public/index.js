function populateDefaultValues(user) {
    document.getElementById("initialBalance").value = user.investParams[0].initialBalance
    document.getElementById("yearsInvesting").value = user.investParams[0].yearsInvesting
    document.getElementById("rateReturn").value = user.investParams[0].rateReturn
    document.getElementById("addlInvestAmts").value = user.investParams[0].addlInvestAmts
    document.getElementById("frequency").value = user.investParams[0].frequency
}

function updateParameters() {
    params='{"initialBalance":' + document.getElementById("initialBalance").value + "," + '"yearsInvesting":' + document.getElementById("yearsInvesting").value + "," + '"rateReturn":' + document.getElementById("rateReturn").value + "," + '"addlInvestAmts":' + document.getElementById("addlInvestAmts").value + "," + '"frequency":' + '"'+ document.getElementById("frequency").value + '"'+"}"

    fetch('/updateParameters', {      
        method: "POST",
        body: params,
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then((response) => {console.log('It came back')})
    
    setTimeout(function(){retrieveParameters()}, 1000)
}

function CalculateWealth() {
    let P = document.getElementById("initialBalance").value
    let t = document.getElementById("yearsInvesting").value
    let r = (document.getElementById("rateReturn").value)/100.
    let A = document.getElementById("addlInvestAmts").value
    let n = (document.getElementById("frequency").value==='monthly' ? 12:1)
  
    // https://math.stackexchange.com/questions/1698578/compound-interest-formula-adding-annual-contributions
    // https://structx.com/annual_compound_interest_with_contributions.html

    let FVPrincipal = P*(1 + r/n)**(n*t)
    let FVContributions = A*((1 + r/n)**(n*t) - 1)/(r/n)
    let futureValue = Math.round((FVPrincipal+ FVContributions)*100.)/100.

    let totalContributions = Math.round(( A * t * n   )*100.)/100.
    let interestOnPrincipal = Math.round((FVPrincipal - P)*100.)/100.
    let intertestOnContributions = Math.round((FVContributions - A* n * t)*100.)/100.
    let totalInterest = Math.round((interestOnPrincipal + intertestOnContributions)*100.)/100.

    // window.location="/result.html?futureValue=" + futureValue + "&" + "totalContributions=" + totalContributions + "&" + "interestOnPrincipal=" + interestOnPrincipal + "&" + "intertestOnContributions=" + intertestOnContributions + "&" + "totalInterest=" + totalInterest    
    setTimeout(function(){window.location=`/result.html?futureValue=${futureValue}&totalContributions=${totalContributions}&interestOnPrincipal=${interestOnPrincipal}&intertestOnContributions=${intertestOnContributions}&totalInterest=${totalInterest}`}, 500)
}

function retrieveParameters(){
    // poulate investment parameters with default user parameters in our MongoDB 
    fetch('/user?name=default', {      
        method: "GET",
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then((response)       => response.json())
      .then((userParameters) => {populateDefaultValues(userParameters)})
}

retrieveParameters()