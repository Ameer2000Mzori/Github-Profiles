// importing our elements
var searchBtn = document.getElementsByClassName("search-Btn")[0];
var inputText = document.getElementById("input-Text");
var profileCard = document.getElementsByClassName("profile-Card")[0];
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
        var data = response.data;
        dynamicData(data);
        console.log(data);
    })
        .catch(function (error) {
        // Handle errors
        console.error("Axios Error:", error);
    });
}
// our functions
var dynamicData = function (data) {
    profileCard.innerHTML = "\n\n<div class=\"prifle-Pic-Wrap\">\n  <img\n    class=\"profile-Img\"\n    src=\" ".concat(data.avatar_url, "\"\n    alt=\"\"\n  />\n</div>\n<div class=\"profile-Text-Wrap\">\n  <div class=\"name-And-Link-Wrap\">\n    <h1 class=\"name-Surename\">").concat(data.name, "</h1>\n    <a href=\"").concat(data.html_url, "\" target=\"_blank\">GO TO PROFILE</a>\n  </div>\n  <p class=\"bio-Text\">\n    ").concat(data.bio, "\n  </p>\n  <div class=\"repos-Followers-Wrap\">\n    <ul>\n      <li><p> ").concat(data.followers, " Followers</p></li>\n      <li><p> ").concat(data.following, " Following</p></li>\n      <li><p>").concat(data.public_repos, " Repos</p></li>\n    </ul>\n  </div>\n</div>\n    ");
};
// our event lisnters
searchBtn.addEventListener("click", function () {
    profileCard.innerHTML = "LOADING";
    var textVal = inputText.value;
    if (textVal) {
        fetchData(textVal);
        inputText.value = "";
    }
    else {
        console.log("enter a name please");
    }
});
addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        profileCard.innerHTML = "LOADING";
        var textVal = inputText.value;
        if (textVal) {
            fetchData(textVal);
            inputText.value = "";
        }
        else {
            console.log("enter a name please");
        }
    }
});
// Call the function to fetch data by defualt :')
fetchData("Ameer2000Mzori");
