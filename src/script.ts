// importing our elements
const searchBtn = document.getElementsByClassName(
  "search-Btn"
)[0] as HTMLElement;
let inputText = document.getElementById("input-Text") as any;
const profileCard = document.getElementsByClassName(
  "profile-Card"
)[0] as HTMLElement;
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
      let data: any = response.data;
      dynamicData(data);
      console.log(data);
    })
    .catch(function (error) {
      // Handle errors
      console.error("Axios Error:", error);
    });
}

// our functions
const dynamicData = (data): void => {
  profileCard.innerHTML = `

<div class="prifle-Pic-Wrap">
  <img
    class="profile-Img"
    src=" ${data.avatar_url}"
    alt=""
  />
</div>
<div class="profile-Text-Wrap">
  <div class="name-And-Link-Wrap">
    <h1 class="name-Surename">${data.name}</h1>
    <a href="${data.html_url}" target="_blank">GO TO PROFILE</a>
  </div>
  <p class="bio-Text">
    ${data.bio}
  </p>
  <div class="repos-Followers-Wrap">
    <ul>
      <li><p> ${data.followers} Followers</p></li>
      <li><p> ${data.following} Following</p></li>
      <li><p>${data.public_repos} Repos</p></li>
    </ul>
  </div>
</div>
    `;
};

// our event lisnters

searchBtn.addEventListener("click", () => {
  profileCard.innerHTML = `LOADING`;
  const textVal = inputText.value;
  if (textVal) {
    fetchData(textVal);
    inputText.value = "";
  } else {
    console.log("enter a name please");
  }
});

addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    profileCard.innerHTML = `LOADING`;
    const textVal = inputText.value;
    if (textVal) {
      fetchData(textVal);
      inputText.value = "";
    } else {
      console.log("enter a name please");
    }
  }
});

// Call the function to fetch data by defualt :')
fetchData(`Ameer2000Mzori`);
