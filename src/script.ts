// importing our elements
const searchBtn = document.getElementsByClassName(
  "search-Btn"
)[0] as HTMLElement;
const inputText = document.getElementById("input-Text") as any;

// Import Axios
var axios;

// GitHub user profile Api
var API_URL = "https://api.github.com/users/";

// Fetching data with Axios
function fetchData(name: any) {
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
const dynamicData = (): void => {};

// our event lisnters

searchBtn.addEventListener("click", () => {
  const textVal = inputText.value;
  if (textVal) {
    console.log(textVal);
  } else {
    console.log("enter a name please");
  }
});

addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const textVal = inputText.value;
    if (textVal) {
      console.log(textVal);
    } else {
      console.log("enter a name please");
    }
  }
});

// Call the function to fetch data
fetchData(`Ameer2000Mzori`);
