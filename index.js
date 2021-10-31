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
              <li>JS - session 7, from p.19... i.e. if inside while & filter & map... (see Trial_Affirmations JS file)</li>
              <br>   
              <h2>And... </h2>           
              <li>The 1st part of the 1st task in React Session 5</li>
              <li>Reviewing how my group created the timeline... <a href="https://cupcakemania.netlify.app/" target="blank">Cupcake Mania</a></li>
              <li>How functions with parameters work</li>
              <li>Literally everything React! i.e. session2 (where is the button)</li>
              </ol>
              <br>
              <h2>I will...</h2>
              <li>Edit this JS file (specifically remove markup)</li>
              <li>Make this text fill the yellow box</li>`
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



// Added with Ed... review!
let counter = 0;
let counterText = document.createTextNode(counter);
counterTag.appendChild(counterText);


alertButton.addEventListener('click', () => {
  divContainer.appendChild(counterTag)
  console.log('This is running')
});