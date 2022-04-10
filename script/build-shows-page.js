// Website and API below
const API_KEY = "d7a62256-2579-452c-ab0f-cd64c67a0d19";
const apiWebsite = "https://project-1-api.herokuapp.com/";

const mainContainer = document.querySelector(".shows");

// create div
const sectionContainers = document.createElement("div");
sectionContainers.classList.add("shows__container");
mainContainer.appendChild(sectionContainers);

// Empty show array which will be push from api
let shows = [];

// Will take array and create show times --BEGIN
function createShows() {

    // for loop will convert date in array
    let dateToNumber = [];
    for (let i = 0; i < shows.length; i++) {
        shows[i].date = parseInt(shows[i].date);
        shows[i].date = new Date(shows[i].date).toDateString();
    }

    // forEach will loop through array from api and print out elements
    shows.forEach((show) => {

        // Creates section tag 
        const showsSection = document.createElement("section");
        showsSection.classList.add("shows__section");
        sectionContainers.appendChild(showsSection); 

        // create date header
        const showsDetails = document.createElement("span");
        showsDetails.classList.add("shows__details");
        showsDetails.innerText = "DATE";
        showsSection.appendChild(showsDetails);

        // span for show date
        const showsDescription = document.createElement("span");
        showsDescription.classList.add("shows__description--bold");
        showsDescription.innerText = show.date;
        showsSection.appendChild(showsDescription);

        // span for venue header
        const showsDetails2 = document.createElement("span");
        showsDetails2.classList.add("shows__details");
        showsDetails2.innerText = "VENUE";
        showsSection.appendChild(showsDetails2);

        // span for venue text
        const showsDescription2 = document.createElement("span");
        showsDescription2.classList.add("shows__description");
        showsDescription2.innerText = show.place;
        showsSection.appendChild(showsDescription2);

        // span for location header
        const showsDetails3 = document.createElement("span");
        showsDetails3.classList.add("shows__details");
        showsDetails3.innerText = "LOCATION";
        showsSection.appendChild(showsDetails3);

        // span for location text
        const showsDescription3 = document.createElement("span");
        showsDescription3.classList.add("shows__description");
        showsDescription3.innerText = show.location;
        showsSection.appendChild(showsDescription3);

        // button to buy tickets
        const addShowBtn = document.createElement("button");
        addShowBtn.setAttribute("type", "submit");
        addShowBtn.classList.add("shows__button");
        addShowBtn.innerText = "BUY TICKETS";
        showsSection.appendChild(addShowBtn);
    });
    // let showsClass = document.querySelectorAll(".shows__details");
    //     for (let i = 3; i < 18; i++) {
    //         showsClass[i].classList.add(".shows__details--hidden");
    //         console.log(showsClass[i]);
    //     }
    addClasses();
};
// --END

// Will add additional classes to element --BEGIN
function addClasses() {
    let showsClass = document.querySelectorAll(".shows__details");
        for (let i = 3; i < 18; i++) {
            showsClass[i].classList.add("shows__details--hidden");
            console.log(showsClass[i]);
        }
    showsClass[1].classList.add("shows__details--venue");
    showsClass[2].classList.add("shows__details--location");
    console.log(showsClass[1]);
};
// --END

axios
    .get(apiWebsite + "showdates/?api_key=" + API_KEY)
    .then((response) => {
        shows = response.data
        createShows();
    });

// activeSelected.addEventListener("click", (event) =>{
//     activeSelected.classList.add(".activeshow");
// });


// const activeSelected = document.querySelector(".shows__section");

// setTimeout(function () {
//     console.log(activeSelected);
// }, 3000);

// mainContainer.addEventListener("click", function(e) {
//     if(e.target && e.target.matches("section.shows__section")) {
//         activeSelected.classList.add("activeShow");
//     }
// })

// activeSelected.addEventListener("click", (event) => {
//     activeSelected.classList.add("activeShow");
//     console.log(event);
//     // activeSelected.classList.remove.toggle;
// });