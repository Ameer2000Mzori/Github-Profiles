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
    profileCard.innerHTML = "\n\n<div class=\"prifle-Pic-Wrap\">\n  <img\n    class=\"profile-Img\"\n    src=\" ".concat(data.avatar_url, "\"\n    alt=\"\"\n  />\n</div>\n<div class=\"profile-Text-Wrap\">\n  <div class=\"name-And-Link-Wrap\">\n    <h1 class=\"name-Surename\">").concat(data.name, "</h1>\n    <a href=\"#\" target=\"_blank\">GO TO PROFILE</a>\n  </div>\n  <p class=\"bio-Text\">\n    ").concat(data.bio, "\n  </p>\n  <div class=\"repos-Followers-Wrap\">\n    <ul>\n      <li><p> ").concat(data.followers, " Followers</p></li>\n      <li><p> ").concat(data.following, " Following</p></li>\n      <li><p>").concat(data.public_repos, " Repos</p></li>\n    </ul>\n  </div>\n</div>\n    ");
};
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
// dynamic insert html tree
// <div class="profile-Card">
// <div class="prifle-Pic-Wrap">
//   <img
//     class="profile-Img"
//     src=" https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
//     alt=""
//   />
// </div>
// <div class="profile-Text-Wrap">
//   <div class="name-And-Link-Wrap">
//     <h1 class="name-Surename">Ameer Ameen</h1>
//     <a href="#" target="_blank">GO TO PROFILE</a>
//   </div>
//   <p class="bio-Text">
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
//     placeat hic explicabo nisi magni, ipsa et molestias quae enim
//     repudiandae temporibus molestiae? Exercitationem voluptatem,
//     perspiciatis expedita fugiat doloremque consectetur ab? Lorem
//     ipsum dolor sit amet consectetur adipisicing elit. Aut placeat hic
//     explicabo nisi magni, ipsa et molestias quae enim repudiandae
//     temporibus molestiae? Exercitationem voluptatem, perspiciatis
//     expedita fugiat doloremque consectetur ab? Lorem ipsum dolor sit
//     amet consectetur adipisicing elit. Aut placeat hic explicabo nisi
//     magni, ipsa et molestias quae enim repudiandae temporibus
//     molestiae? Exercitationem voluptatem, perspiciatis expedita fugiat
//     doloremque consectetur ab?
//   </p>
//   <div class="repos-Followers-Wrap">
//     <ul>
//       <li><p>300 Followers</p></li>
//       <li><p>15 Following</p></li>
//       <li><p>10 Repos</p></li>
//     </ul>
//   </div>
// </div>
// </div>
