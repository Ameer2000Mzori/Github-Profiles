// importing our elements
var searchBtn = document.getElementsByClassName("search-Btn")[0];
var inputText = document.getElementById("input-Text");
// Import Axios
var axios;
// GitHub user profile Api
var API_URL = "https://api.github.com/users/";
// Fetching data with Axios
function fetchData(name) {
    // Make a GET request
    axios
        .get(API_URL + name)
        .then(function (response) {
        // Handle the successful response
        console.log("Axios Response:", response.data);
    })
        .catch(function (error) {
        // Handle errors
        console.error("Axios Error:", error);
    });
}
// our functions
var dynamicData = function () { };
// our event lisnters
searchBtn.addEventListener("click", function () {
    var textVal = inputText.value;
    if (textVal) {
        console.log(textVal);
    }
    else {
        console.log("enter a name please");
    }
});
addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        var textVal = inputText.value;
        if (textVal) {
            console.log(textVal);
        }
        else {
            console.log("enter a name please");
        }
    }
});
// Call the function to fetch data
fetchData("Ameer2000Mzori");
