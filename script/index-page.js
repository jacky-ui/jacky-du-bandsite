const commentElement = document.querySelector(".comment");
const commentNameElement = document.createElement("section");
const labelTag = document.createElement("label");
const inputTxt = document.createElement("input");
const labelTag2 = document.createElement("label");
const txtArea = document.createElement("textarea");


// Create section tag with class
function makeSection(section, name) {
    section.classList.add(name);
    commentElement.appendChild(section);
    return;
}

// Will create other nested tags within the section
function makeCommentTags(tag, className, txt, attri1, attri2) {
    tag.classList.add(className);
    if (txt == true) tag.innerText = txt; 
    tag.setAttribute(attri1, attri2);
    commentNameElement.appendChild(tag); 
    return;
};

// Create additional attribute to text and text area
function additionalAttribute(element, attri3, attri4) {
    element.setAttribute(attri3, attri4);
    commentNameElement.appendChild(element);
    return;
}

// function makeProfilePicture(newUserImg, imgClass, source, path, alt, txt) {
//     const newUserImg = document.createElement("img");
//     newUserImg.classList.add(imgClass);
//     newUserImg.setAttribute(source, path);
// }

makeSection(commentNameElement, "comment__sections");

// Name label tag & input
makeCommentTags(labelTag, "comment__title", "NAME", "for", "name");
makeCommentTags(inputTxt, "comment--name", "Enter your name", "name", "comments");
additionalAttribute(inputTxt, "type", "text");
additionalAttribute(inputTxt, "placeholder", "Enter your name");

// Comment label tag & input
makeCommentTags(labelTag2, "comment__title", "COMMENT", "for", "comments");
makeCommentTags(txtArea, "comment--comments", " ", "name", "comments");
additionalAttribute(txtArea, "placeholder", "Add a new comment");
additionalAttribute(txtArea, "id", "comments");

// Add new comment profile picture


// Will allow user tp input review comments and name

const reviews = [
    {
        name: "Connor Walton",
        date: "02/17/2021",
        review: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
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