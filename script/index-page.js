// Website and API below
const API_KEY = "d7a62256-2579-452c-ab0f-cd64c67a0d19";
const apiWebsite = "https://project-1-api.herokuapp.com/";

// Declare initial tags
const commentElement = document.querySelector(".comment");
const commentSections = document.createElement("section");
const labelTag = document.createElement("label");
const inputTxt = document.createElement("input");
const labelTag2 = document.createElement("label");
const txtArea = document.createElement("textarea");
const reviewSection = document.createElement("section");

// Declare empty array which comments from apiWebsite will be passed into
let reviews = [];


// Create section tag with class
function makeSection(section, name) {
    commentSections.classList.add("comment__sections");
    commentElement.appendChild(section);
    return;
}

// Create form for comments submit
const userInput = document.createElement("form");
userInput.setAttribute("id", "formSubmission");
userInput.classList.add("comment__sections");
commentSections.appendChild(userInput);

// Grab parent that will nest all past generate comments from api
const commentContainer = document.createElement("section");
commentSections.appendChild(commentContainer);

// Will create other nested tags within the section
function makeCommentTags(tag, className, txt, attri1, attri2) {
    tag.classList.add(className);
    if (txt == true) tag.innerText = txt; 
    tag.setAttribute(attri1, attri2);
    userInput.appendChild(tag); 
    return;
};

// Create additional attribute to text and text area
function additionalAttribute(element, attri3, attri4) {
    element.setAttribute(attri3, attri4);
    userInput.appendChild(element);
    return;
}

// Pass arguments into function to create tags for comment submission ---BEGINS
makeSection(commentSections, "comment__sections");

// Name label tag & input
makeCommentTags(labelTag, "comment__title", "NAME", "for", "name");
makeCommentTags(inputTxt, "comment--name", "Enter your name", "name", "name");
additionalAttribute(inputTxt, "type", "text");
additionalAttribute(inputTxt, "placeholder", "Enter your name");

// Comment label tag & input
makeCommentTags(labelTag2, "comment__title", "COMMENT", "for", "comments");
makeCommentTags(txtArea, "comment--comments", " ", "name", "comments");
additionalAttribute(txtArea, "placeholder", "Add a new comment");
additionalAttribute(txtArea, "id", "comments");

// Will make sure user cannot submit without typing
inputTxt.setAttribute("required", " ");
txtArea.setAttribute("required", " ");

// Maybe make a setTimeout to make this generated after the top. This will fix the button being created first. Maybe look into creating function
// Add new comment profile picture
const newUserImg = document.createElement("img");
newUserImg.classList.add("profile__img");
newUserImg.setAttribute("src", "./assets/images/Mohan-muruge.jpg");
newUserImg.setAttribute("alt", "profile icon");
userInput.appendChild(newUserImg);

// Create submit button
const submitButton = document.createElement("button");
submitButton.classList.add("comment__button");
submitButton.setAttribute("type", "submit");
submitButton.innerText = "COMMENT";
userInput.appendChild(submitButton);
// -- ENDS

// fuction that will create reviews from apiWebsite/comment when invoked --BEGIN
function displayComments() {

    reviewSection.innerText = "";
    // For every timestamp in the array it will convert to MM/DD/YYYY
    for (let i = 0; i < reviews.length; i++) {
            reviews[i].timestamp = new Date(reviews[i].timestamp).toLocaleDateString();
        }

        // Will loop through every item in the array to create and append to HTML
        reviews.forEach( (review) => {
            reviewSection.classList.add("profile--positioning");
            commentSections.appendChild(reviewSection);
            
            // Create a div that all elements below will append to
            const headContainer = document.createElement("div");
            headContainer.classList.add("review");
            reviewSection.appendChild(headContainer);

            // Review Name
            const reviewName = document.createElement("span");
            reviewName.classList.add("review__heading");
            reviewName.innerText = review.name;
            headContainer.appendChild(reviewName);

            // Review Date
            const reviewDate = document.createElement("span");
            reviewDate.classList.add("review--date");
            reviewDate.innerText = review.timestamp;
            headContainer.appendChild(reviewDate);

            // Review Paragraph
            const reviewComments = document.createElement("p");
            reviewComments.classList.add("review__paragraph");
            reviewComments.innerText = review.comment;
            reviewSection.appendChild(reviewComments);

            // Profile Picture
            const image = document.createElement("div");
            image.classList.add("profile__img--color");
            reviewName.appendChild(image);
        });
}
// --ENDS

// Will make a request for comments and invoke displayComments --BEGIN
    axios
        .get(apiWebsite + "comments/?api_key=" + API_KEY)
        .then((response) => {
            reviews = (response.data);
            displayComments();
    })
        .catch((error) => {
            console.log("Sorry, there seems to be something wrong with your url. It's dangerous to go alone! Take this.");
        });
// --ENDS

// Will take user inputs, post to api and display on page --BEGIN
userInput.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = event.target.name.value;
    const commentInput = event.target.comments.value;

    axios
        .post(apiWebsite + "comments/?api_key=" + API_KEY, {
            'name': nameInput,
            'comment': commentInput,
        })
        .then(() => {
            axios.get(apiWebsite + "comments/?api_key=" + API_KEY)
                .then((response) => {
                reviews = (response.data);
                displayComments();
        })
        .catch((error) => {
            console.log("Uh oh! Seems like you are missing the 'name' and 'comments'. Please try again!")
        });
    });
    event.target.reset();
});
// --END


// Archived codes from sprint-2 

// Declare current date, format and add to review array
// const currentSubmitDate = new Date ();

// function formatSubmitDate(date) {
//     let year = date.getFullYear();

//     let month = (1 + date.getMonth()).toString();
//     month = month.length > 1 ? month: "0" + month;

//     let day = date.getDate().toString();
//     day = day.length > 1 ? day: "0" + day;

//     return month + "/" + day + "/" + year;
// }

// Function will take review array as argument and create elements on HTML
// function createReviews(reviesPosted) {
//     const reviewSection = document.createElement("section");
//     reviewSection.classList.add("profile--positioning");

//     const headContainer = document.createElement("div");
//     headContainer.classList.add("review");
//     reviewSection.appendChild(headContainer);

//     const reviewName = document.createElement("span");
//     reviewName.classList.add("review__heading");
//     reviewName.innerText = reviesPosted.name;
//     headContainer.appendChild(reviewName);

//     const reviewDate = document.createElement("span");
//     reviewDate.classList.add("review--date");
//     reviewDate.innerText = reviesPosted.date;
//     headContainer.appendChild(reviewDate);

//     // Review Paragraph
//     const reviewComments = document.createElement("p");
//     reviewComments.classList.add("review__paragraph");
//     reviewComments.innerText = reviesPosted.review;
//     reviewSection.appendChild(reviewComments);

//     // Profile Picture
//     const image = document.createElement("div");
//     image.classList.add("profile__img--color");
//     reviewSection.appendChild(image);

//     return reviewSection;
// };

// Function will take review array as argument and create elements on HTML
// function createReviews(reviesPosted) {
//     const reviewSection = document.createElement("section");
//     reviewSection.classList.add("profile--positioning");

//     const headContainer = document.createElement("div");
//     headContainer.classList.add("review");
//     reviewSection.appendChild(headContainer);

//     const reviewName = document.createElement("span");
//     reviewName.classList.add("review__heading");
//     reviewName.innerText = reviesPosted.name;
//     headContainer.appendChild(reviewName);

//     const reviewDate = document.createElement("span");
//     reviewDate.classList.add("review--date");
//     reviewDate.innerText = reviesPosted.date;
//     headContainer.appendChild(reviewDate);

//     // Review Paragraph
//     const reviewComments = document.createElement("p");
//     reviewComments.classList.add("review__paragraph");
//     reviewComments.innerText = reviesPosted.review;
//     reviewSection.appendChild(reviewComments);

//     // Profile Picture
//     const image = document.createElement("div");
//     image.classList.add("profile__img--color");
//     reviewSection.appendChild(image);

//     return reviewSection;
// };

// for (let i = 0; i < reviews.length; i++) {
//     let newReview = createReviews(reviews[i]);
//     commentContainer.appendChild(newReview);
// }

// userInput.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const nameInput = event.target.name.value;
//     const commentInput = event.target.comments.value;

//     let newUserInputs = {
//         name: nameInput,
//         date: formatSubmitDate(currentSubmitDate),
//         review: commentInput
//     };

//     reviews.push(newUserInputs);
//     commentContainer.prepend(createReviews(newUserInputs));
//     event.target.reset();
//     return reviews;
// });

// Will take user inputs, post to api and display on page --BEGIN
// userInput.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const nameInput = event.target.name.value;
//     const commentInput = event.target.comments.value;

    // let newUserInputs = {
    //     name: nameInput,
    //     date: formatSubmitDate(currentSubmitDate),
    //     review: commentInput
    // };

    // axios
    //     .post(apiWebsite + "comments/?api_key=" + API_KEY, {
    //         name: nameInput,
    //         date: formatSubmitDate(currentSubmitDate),
    //         review: commentInput
    //     });

    // reviews.push(newUserInputs);
    // commentContainer.prepend(createReviews(newUserInputs));
    // event.target.reset();
    // return reviews;
// });