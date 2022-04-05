// Declare initial tags
const commentElement = document.querySelector(".comment");
const commentSections = document.createElement("section");
const labelTag = document.createElement("label");
const inputTxt = document.createElement("input");
const labelTag2 = document.createElement("label");
const txtArea = document.createElement("textarea");

// Declare current date, format and add to review array
const currentSubmitDate = new Date ();

function formatSubmitDate(date) {
    let year = date.getFullYear();

    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month: "0" + month;

    let day = date.getDate().toString();
    day = day.length > 1 ? day: "0" + day;

    return month + "/" + day + "/" + year;
}

// Create section tag with class
function makeSection(section, name) {
    commentSections.classList.add("comment__sections");
    commentElement.appendChild(section);
    return;
}

// Create form
const userInput = document.createElement("form");
userInput.setAttribute("id", "formSubmission");
userInput.classList.add("comment__sections");
commentSections.appendChild(userInput);

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

// Passing arguments into functions to create tags in index.html
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


// Create band reviews
const reviews = [
    {
        name: "Connor Walton",
        date: "02/17/2021",
        review: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    },
    {
        name: "Emilie Beach",
        date: "01/09/2021",
        review: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
    {
        name: "Miles Acosta",
        date: "12/20/2020",
        review: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    }
];

function createReviews(reviesPosted) {
    const reviewSection = document.createElement("section");
    reviewSection.classList.add("profile--positioning");

    const headContainer = document.createElement("div");
    headContainer.classList.add("review");
    reviewSection.appendChild(headContainer);

    const reviewName = document.createElement("span");
    reviewName.classList.add("review__heading");
    reviewName.innerText = reviesPosted.name;
    headContainer.appendChild(reviewName);

    const reviewDate = document.createElement("span");
    reviewDate.classList.add("review--date");
    reviewDate.innerHTML = reviesPosted.date;
    headContainer.appendChild(reviewDate);

    // Review Paragraph
    const reviewComments = document.createElement("p");
    reviewComments.classList.add("review__paragraph");
    reviewComments.innerText = reviesPosted.review;
    reviewSection.appendChild(reviewComments);

    // Profile Picture
    const image = document.createElement("div");
    image.classList.add("profile__img--color");
    reviewSection.appendChild(image);

    return reviewSection;
};

for (let i = 0; i < reviews.length; i++) {
    let newReview = createReviews(reviews[i]);
    commentSections.appendChild(newReview);
}

userInput.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = event.target.name.value;
    const commentInput = event.target.comments.value;

    const newUserInputs = {
        name: nameInput,
        date: formatSubmitDate(currentSubmitDate),
        review: commentInput
    };

    commentSections.append(createReviews(newUserInputs));
    event.target.reset();
});
