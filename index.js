//--------------------truncate & add a link to a paragraph
const descriptions = document.querySelectorAll(".description-display");
for (let desc of descriptions.values()) {
  let content = desc.innerText;
  
  if(content.length > 250) {
    content = content.slice(0, 250);
    content = `${content} <a href="#">...</a>`
  }
  desc.innerHTML = content;
}
//------------------------------------------------------------------

//-------------------------change styling of specific elements
const ratings = document.querySelectorAll(".rating-display .value");
for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);
  
  if(ratingValue > 4.7) {
    rating.classList.add("high-rating");
    rating.classList.remove("value");
  }
}
//----------------------------------------------------

//---------------add element
const parks = document.querySelectorAll(".park-display");
const numParks = parks.length;
const newElement = document.createElement("div");
newElement.innerText = `${numParks} exciting parks to visit`;
newElement.classList.add("header-statement");

const header = document.querySelector("header");
header.appendChild(newElement);
//-------------------------------------

//----------------remove elements
// Get the parent element of all parks
//const main = document.querySelector("main");

// Select the first park in the HTML body
//const park = main.querySelector(".park-display");

// Remove that park
//main.removeChild(park);
//------------------------------------------


//select the first button
const firstBtn = document.querySelector("button");

// Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");

// Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");

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
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
  });
});
//-------------------------------

//------------Sort Parks List start

// Add an event listener
// nameSorter.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("You clicked the name sorter");
// });
//---------------------------------------

//-----------------Complete Sort Parks List
nameSorter.addEventListener("click", (event) => {
  event.preventDefault();

  // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. Empty the main element
  main.innerHTML = "";

// 4. Create an array
const parksArray = Array.from(parksList);

// 5. Sort the array
parksArray.sort((parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
});

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
});

// Add an event listener
//nameSorter.addEventListener("click", nameSorterClickHandler);