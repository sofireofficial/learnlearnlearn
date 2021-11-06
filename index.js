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
              <li>Make this website from scratch using React (learn_react doc)</li>
              <li>The 1st part of the 1st task in React Session 5</li>
              <li>Reviewing how my group created the timeline functionality... <a href="https://cupcakemania.netlify.app/" target="blank">Cupcake Mania</a></li>
              <li>How functions with parameters work</li>
              <li>Literally everything React! i.e. session2 (where is the button)</li>
              </ul>
              <br>
              <h2>I will...</h2>
              <ul>
              <li>Continue JS (S7,p.19), with filter & map (see W3Schools & Trial_Affirmations folder)</li>   
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