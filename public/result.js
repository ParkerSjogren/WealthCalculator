// Utility method to support reading a "parameter" from the anchor tag that brought us here
// https://stackoverflow.com/questions/5448545/how-to-retrieve-get-parameters-from-javascript
function getParametersFromUrl() {
    let queryDict = {}
    location.search.substr(1).split("&").forEach(function(item) {queryDict[item.split("=")[0]] = item.split("=")[1]})
    return queryDict
}

document.getElementById("futureValue").innerText=getParametersFromUrl().futureValue
document.getElementById("totalContributions").innerText=getParametersFromUrl().totalContributions
document.getElementById("interestOnPrincipal").innerText=getParametersFromUrl().interestOnPrincipal
document.getElementById("intertestOnContributions").innerText=getParametersFromUrl().intertestOnContributions
document.getElementById("totalInterest").innerText=getParametersFromUrl().totalInterest