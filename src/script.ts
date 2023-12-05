// Import Axios
let axios;
// GitHub user profile URL
const API_URL = "https://api.github.com/users/Ameer2000Mzori";

// Fetching data with Axios
function fetchData() {
  // Make a GET request
  axios
    .get(API_URL)
    .then((response) => {
      // Handle the successful response
      console.log("Axios Response:", response.data);
    })
    .catch((error) => {
      // Handle errors
      console.error("Axios Error:", error);
    });
}

// Call the function to fetch data
fetchData();
