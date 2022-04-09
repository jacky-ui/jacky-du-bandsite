// {"api_key":"d7a62256-2579-452c-ab0f-cd64c67a0d19"}
const API_KEY = "d7a62256-2579-452c-ab0f-cd64c67a0d19";

const mainContainer = document.querySelector(".shows");
// // const activeSelected = document.querySelector(".shows__section");

// create div
const sectionContainers = document.createElement("div");
sectionContainers.classList.add("shows__container");
mainContainer.appendChild(sectionContainers);

const showTimes = [
    {
        dateHeader: "DATE",
        date: "Mon Sept 06 2021",
        venueHeader: "VENUE",
        venue: "Ronald Lane",
        locationHeader: "LOCATION",
        location: "San Francisco, CA",
    },
    {
        dateHeader: "DATE",
        date: "Tue Sept 21 2021",
        venueHeader: "VENUE",
        venue: "Pier 3 East",
        locationHeader: "LOCATION",
        location: "San Francisco, CA"
    },
    {
        dateHeader: "DATE",
        date: "Fri Oct 15 2021",
        venueHeader: "VENUE",
        venue: "View Lounge",
        locationHeader: "LOCATION",
        location: "San Francisco, CA"
    },
    {
        dateHeader: "DATE",
        date: "Sat Nov 06 2021",
        venueHeader: "VENUE",
        venue: "Hyatt Agency",
        locationHeader: "LOCATION",
        location: "San Francisco, CA"
    },
    {
        dateHeader: "DATE",
        date: "Fri Nov 26 2021",
        venueHeader: "VENUE",
        venue: "Moscow Center",
        locationHeader: "LOCATION",
        location: "San Francisco, CA"
    },
    {
        dateHeader: "DATE",
        date: "Wed Dec 15 2021",
        venueHeader: "VENUE",
        venue: "Press Club",
        locationHeader: "LOCATION",
        location: "San Francisco, CA"
    },
];

showTimes.forEach( (showTime) => {
    const showsSection = document.createElement("section");
    showsSection.classList.add("shows__section");
    mainContainer.appendChild(showsSection);

    const showsDetails = document.createElement("span");
    showsDetails.classList.add("shows__details");
    showsDetails.innerText = showTime.dateHeader;
    showsSection.appendChild(showsDetails);

    const showsDescription = document.createElement("span");
    showsDescription.classList.add("shows__description--bold");
    showsDescription.innerText = showTime.date;
    showsSection.appendChild(showsDescription);

    const showsDetails2 = document.createElement("span");
    showsDetails2.classList.add("shows__details");
    showsDetails2.innerText = showTime.venueHeader;
    showsSection.appendChild(showsDetails2);

    const showsDescription2 = document.createElement("span");
    showsDescription2.classList.add("shows__description");
    showsDescription2.innerText = showTime.venue;
    showsSection.appendChild(showsDescription2);

    const showsDetails3 = document.createElement("span");
    showsDetails3.classList.add("shows__details");
    showsDetails3.innerText = showTime.locationHeader;
    showsSection.appendChild(showsDetails3);

    const showsDescription3 = document.createElement("span");
    showsDescription3.classList.add("shows__description");
    showsDescription3.innerText = showTime.location;
    showsSection.appendChild(showsDescription3);

    const addShowBtn = document.createElement("button");
    addShowBtn.setAttribute("type", "submit");
    addShowBtn.classList.add("shows__button");
    addShowBtn.innerText = "BUY TICKETS";
    showsSection.appendChild(addShowBtn);

    return showsSection;
});
// function makeShows(show) {
//     const showsSection = document.createElement("section");
//     showsSection.classList.add("shows__section");

//     const showsDetails = document.createElement("span");
//     showsDetails.classList.add("shows__details");
//     showsDetails.innerText = show.dateHeader;
//     showsSection.appendChild(showsDetails);

//     const showsDescription = document.createElement("span");
//     showsDescription.classList.add("shows__description--bold");
//     showsDescription.innerText = show.date;
//     showsSection.appendChild(showsDescription);

//     const showsDetails2 = document.createElement("span");
//     showsDetails2.classList.add("shows__details", "shows__description--venue");
//     showsDetails2.innerText = show.venueHeader;
//     showsSection.appendChild(showsDetails2);

//     const showsDescription2 = document.createElement("span");
//     showsDescription2.classList.add("shows__description");
//     showsDescription2.innerText = show.venue;
//     showsSection.appendChild(showsDescription2);

//     const showsDetails3 = document.createElement("span");
//     showsDetails3.classList.add("shows__details", "shows__details--margin");
//     showsDetails3.innerText = show.locationHeader;
//     showsSection.appendChild(showsDetails3);

//     const showsDescription3 = document.createElement("span");
//     showsDescription3.classList.add("shows__description", "shows__description--margin");
//     showsDescription3.innerText = show.location;
//     showsSection.appendChild(showsDescription3);

//     const addShowBtn = document.createElement("button");
//     addShowBtn.setAttribute("type", "submit");
//     addShowBtn.classList.add("shows__button");
//     addShowBtn.innerText = "BUY TICKETS";
//     showsSection.appendChild(addShowBtn);

//     return showsSection;
// }

// for (let i = 0; i < showTimes.length; i++) {
//     let showCreate = makeShows(showTimes[i]);
//     sectionContainers.appendChild(showCreate);
// };

// const activeSelected = document.querySelectorAll(".shows__section");


// const delayCreation = setTimeout(function () {
//     const activeSelected = document.querySelectorAll(".shows__section");
//     console.log(activeSelected)
//     return activeSelected;
// },3000);

// activeSelected.addEventListener("click", (event) =>{
//     activeSelected.classList.add(".activeshow");
// });

// mainContainer.addEventListener("click", function(e) {
//     if(e.target && e.target.matches("section.shows__section")) {
//         activeSelected.classList.add("activeShow");
//     }
// })

// activeSelected.addEventListener("click", (event) => {
//     activeSelected.classList.add("activeShow");
//     // activeSelected.classList.remove.toggle;
// });