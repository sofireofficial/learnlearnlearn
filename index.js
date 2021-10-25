// Creating the button visually!

const divContainer = document.querySelector(".needHelp");
const body = document.querySelector("body");
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
              <li>Edit this JS... "remove markup"</li>
              <li>How on earth have my group created this cake timeline?!?!</li>
              <li>The 1st part of the 1st task in React Session 5</li>
              <li>JS - session 7, from p.19... i.e. if inside while & filter & map... (see Trial_Affirmations JS file)</li>
              <li>How to implement responsive sizing of this red element</li>
              <li>How functions/ parameters work</li>
              <li>Literally everything React! i.e. session1 (what are the elements doing?) and session2 (where is the button)</li>
              </ol>`;
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
