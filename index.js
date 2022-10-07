//========Global Variables

//select the first button
const firstBtn = document.querySelector("button");

// Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");

//=============================================================


//--------------------truncate & add a link to each park display paragraph
// const descriptions = document.querySelectorAll(".description-display");
// for (let desc of descriptions.values()) {
//   let content = desc.innerText;

//   if (content.length > 250) {
//     content = content.slice(0, 250);
//     content = `${content} <a href="#">...</a>`;
//   }
//   desc.innerHTML = content;
// }
//------------------------------------------------------------------

//-------------------------change styling of specific elements
// const ratings = document.querySelectorAll(".rating-display .value");
// for (let rating of ratings) {
//   let ratingValue = parseFloat(rating.innerText);

//   if(ratingValue > 4.7) {
//     rating.classList.add("high-rating");
//     rating.classList.remove("value");
//   }
// }
//----------------------------------------------------

//---------------add a number of parks element
// const parks = document.querySelectorAll(".park-display");
// const numParks = parks.length;
// const newElement = document.createElement("div");
// newElement.innerText = `${numParks} exciting parks to visit`;
// newElement.classList.add("header-statement");

// const header = document.querySelector("header");
// header.appendChild(newElement);
//-------------------------------------

//----------------remove elements
// Get the parent element of all parks
//const main = document.querySelector("main");

// Select the first park in the HTML body
//const park = main.querySelector(".park-display");

// Remove that park
//main.removeChild(park);
//------------------------------------------

//--------------event listener
// firstBtn.addEventListener("click", (event) => {
//   console.log("you clicked the button", event);
// });
//------------------------------

//-----Event target
// firstBtn.addEventListener("click", (event) => {
//   console.log(event.target);
// });
//----------------------------------

//------------Event Target ParentNode

// Iterate through the list of buttons and add an event handler to each
// allBtns.forEach((btn) => {
//   btn.addEventListener("click", (event) => {
//     console.log(event.target.parentNode);
//   });
// });
//-------------------------------

//-----------change background color with button click
// allBtns.forEach((btn) => {
//   btn.addEventListener("click", (event) => {
//     const park = event.target.parentNode;
//     park.style.backgroundColor = "#c8e6c9";
//   });
// });
//-------------------------------



//=======================================Sort Parks List by Name=============================================

// Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");

// Function for sorting by name
const sortByName = (parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
};

// Function for handling the `nameSorter` click
const nameSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. Empty the main
  main.innerHTML = "";

  // 4. Create an array
  const parksArray = Array.from(parksList);

  // 5. Sort the array
  parksArray.sort(sortByName);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

// Add an event listener
nameSorter.addEventListener("click", nameSorterClickHandler);
//===========================================================================================================

//================================Sort Parks by Rating=======================================================

//select the rating sorter link
const ratingSorter = document.querySelector("#rating-sorter");

//function sorting by rating
const sortByRating = (parkA, parkB) => {
  const parkAVal = parkA.querySelector(".rating-display .value").innerText;
  let parkARating = parseFloat(parkAVal);
  const parkBVal = parkB.querySelector(".rating-display .value").innerText;
  let parkBRating = parseFloat(parkBVal);
  if (parkARating < parkBRating) {
    return 1;
  } else if (parkARating > parkBRating) {
    return -1;
  } else {
    return 0;
  }
};

//function for handling the "ratingSorter" click
const ratingSorterClickHandler = (event) => {
  event.preventDefault();

  // 1. get the main element
  const main = document.querySelector("main");

  // 2. get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. empty the main element
  main.innerHTML = "";

  // 4. create an array
  const ratingsArray = Array.from(parksList);

  // 5. sort the array
  ratingsArray.sort(sortByRating);

  // 6. insert each park into the DOM
  ratingsArray.forEach((park) => {
    main.appendChild(park);
  });
}

//Add an event listener
ratingSorter.addEventListener("click", ratingSorterClickHandler);
//===========================================================================================================