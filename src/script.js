// importing our elements
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
// our event lisnters
// Call the function to fetch data
fetchData("Ameer2000Mzori");
