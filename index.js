// Creating the button visually!

const divContainer = document.querySelector(".needHelp");
const body = document.querySelector("body");
const counterTag = document.createElement("p"); 
const button = document.createElement("button");
button.textContent = "Things to discuss with mentors!!!";
button.classList.add("buttonWithClass");

divContainer.appendChild(button);

// Assigning functionality to the button... on click, it should display a modal

function displayModal() {
  const modal = document.createElement("div");
  modal.setAttribute("id", "modalContainer"); // assigning an id to a div
  const closeButton = document.createElement("button"); // adding button into modal 
  closeButton.textContent = "X"; //
  closeButton.setAttribute("id", "forTheX");
  closeButton.addEventListener("click", removeModal);
  const modalContent = `<ol>
              <h2>Let's... </h2>
              <ul>
              <li style="background-color: rgba(216, 216, 23, 0.774)">Javascript Session 8, p.28+ & Homework (Removing Event Handlers)</li>
              <li>Make this website from scratch using React, adding "completedTasks" modal/component (learn_react doc)</li>
              <li>The 1st part of the 1st task in React Session 5</li>
              <li>Reviewing how my group created the timeline functionality... <a href="https://cupcakemania.netlify.app/" target="blank">Cupcake Mania</a></li>
              <li>How functions with parameters work</li>
              <li>Literally everything React! i.e. session2 (where is the button)</li>
              </ul>
              <br>
              <h2>I will...</h2>
              <ul>
              <li>Practice filter & map via W3Schools</li>
              <li>Image to be Position:Absolute in middle of smaller screens</li>  
              <li>Edit this JS file (specifically remove markup)</li>
              <li>Complete text resizing for the modal</li>
              </ul>`
  modal.innerHTML = modalContent; // HTML before append! Else, re-assigned!
  modal.appendChild(closeButton);
  body.appendChild(modal);
}

button.addEventListener("click", displayModal);

// Creating the function that removes the modal display from the webpage

function removeModal() {
  const modal = document.querySelector("#modalContainer");
  body.removeChild(modal);
}


// Creating the "Click Me" functionality... for fun
const alertButton = document.getElementById("alertButton"); //allows interaction with button

alertButton.addEventListener('click', () => {
  alert("OMG! You clicked me!!!... Nothing to see here")
  console.log('Yayyyy alert worked');
});



// Below was Added with Ed (to append "0" when button is clicked)... review!

// let counter = 0;
// let counterText = document.createTextNode(counter);
// counterTag.appendChild(counterText);

// alertButton.addEventListener('click', () => {
//   divContainer.appendChild(counterTag)
//   console.log('This is running')
// });

// **************************************************works no.1!!! ******************************
// let btnAdd = document.querySelector("#add");
// let btnRemove = document.querySelector("#remove");
// let unclicked = document.querySelector("h3");

// btnAdd.addEventListener("click", onFunction);
// btnRemove.addEventListener("click", offFunction);


// function onFunction() {
//   unclicked.innerText = `Function On`
//   btnAdd.style="background-color: pink";
//   console.log(`pink button, function on`)
// }

// function offFunction() {
//   unclicked.innerText = `Function Off`
//   btnAdd.removeEventListener("click", () => console.log()); //logical to pass inside fucntion
//   btnAdd.style="";
//   btnRemove.style="background-color: green";
//   console.log(`white button, function off`)
// }
// **************************************************works no.1!!! ******************************









// executes all until when hits condition/function

// let btnAdd = document.querySelector("#add");
// let btnRemove = document.querySelector("#remove");
// let h3 = document.querySelector("h3");

// btnAdd.addEventListener("click", checkOut);
// btnRemove.addEventListener("click", checkedOut);


// function checkOut() {
//   btnAdd.style="font-size: 30px";
//   btnRemove.click(); //added ".click()"
// }

// function checkedOut() {
//   btnAdd.removeEventListener("click", checkOut);
//   h3.innerText= `You can no longer click the check out button! You have checkout out!`;
//   console.log('clicked');
//   }









// ****************This works, but only through styling & layering event listeners**********
// let happy = document.querySelector("#happy");
// let sad = document.querySelector("#sad");
// let emotion = document.querySelector("h2");
// let reset = document.querySelector("#reset");

// happy.addEventListener("click", makeHappyFace);
// sad.addEventListener("click", makeSadFace);
// reset.addEventListener("click", makeFaceless)

// function makeHappyFace() {
//   emotion.innerText = `🙂`
//   happy.style="font-size:30px; background-color:grey";
//   sad.style="";
//   console.log(`I'm glad you're happy`)
// }

// function makeSadFace() {
//   emotion.innerText = `🙁`
//   // happy.removeEventListener("click", () => console.log()); //logical to pass inside fucntion
//   happy.style="";
//   sad.style="font-size:30px; background-color:grey";
//   console.log(`Cheer up, Chuck!`);
// }

// function makeFaceless() {
//   emotion.innerText = `...`
//   happy.style="";
//   sad.style="";
//   console.log(`Indifferent is okay`)
// }
// ****************This works, but only through styling & layering event listeners**********




let happy = document.querySelector("#happy");
let sad = document.querySelector("#sad");
let emotion = document.querySelector("h2");
let reset = document.querySelector("#reset");

happy.addEventListener("click", makeHappyFace);
sad.addEventListener("click", makeSadFace);
reset.addEventListener("click", makeFaceless)

function makeHappyFace() {
  emotion.innerText = `🙂`
  happy.style="font-size:30px; background-color:grey";
  sad.style="";
  console.log(`I'm glad you're happy`)
}

function makeSadFace() {
  emotion.innerText = `🙁`
  // happy.removeEventListener("click", () => console.log()); //logical to pass inside fucntion
  happy.style="";
  sad.style="font-size:30px; background-color:grey";
  console.log(`Cheer up, Chuck!`);
}

function makeFaceless() {
  emotion.innerText = `...`
  happy.style="";
  sad.style="";
  console.log(`Indifferent is okay`)
}