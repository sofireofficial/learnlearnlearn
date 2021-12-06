// Creating the button visually!

const divContainer = document.querySelector(".needHelp");
const body = document.querySelector("body");
const counterTag = document.createElement("p"); 
const button = document.createElement("button");
button.textContent = "Mentor!!! Please click here";
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
      <h2>Today, we shall:</h2>
      <ul>
      <li>Review <span style="background-color: rgba(216, 216, 23, 0.774)">LearnReact progress/functionality... </span><a href="https://sophlearnsreact.netlify.app/" target="blank">Click Here</a></li>
      </ul>
      <br>

      <h2>Areas I'd like further support:</h2>
      <ul>       
      <li>Completing LearnReact webpage, ensuring desired functionality (add & remove actions within both modals)</li>
      <li>Reviewing <a href="https://cupcakemania.netlify.app/" target="blank">Cupcake Mania</a> timeline functionality</li>
      </ul>
      <br>

      <h2>I will:</h2>
      <ul>
      <li>Review<span style="background-color: rgba(216, 216, 23, 0.774)"> props usage on LearnReact site</span> and progression with Ed on 2.12.21</li>
      <li>Watch full <span style="background-color: rgba(216, 216, 23, 0.774)">Node tutorial</span> on YouTube</li>
      <li>Revise React esp. s5(task1) & s2(where is the button?)</li>
      <li>Practice: filter(), map(), passing arguments, removing Event Handlers</li>
      <li>Perfect styling: resize modal texts</li>
      <li>Edit this JS file (specifically remove markup)</li>
      </ul>
      <br>

      <h2>I have successfully:</h2>
      <ul>
      <li>Created React App from scratch</li>
      <li>Linked socials to LearnReact page</li>
      <li>Added image to Learn-react page</li> 
      <li>And more...</li> 
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
// Ed help...
let btnAdd = document.querySelector("#add");
let btnRemove = document.querySelector("#remove");
let h3 = document.querySelector("h3");

btnAdd.addEventListener("click", added);

function added() {
  btnAdd.style="background-color: blue";
  h3.innerText= `clicked, you cannot add anything else!`;
  console.log('Number of times added');
  btnAdd.removeEventListener("click", added)
  btnRemove.addEventListener("click", removed);
}

function removed() {
      btnAdd.style="";
      btnAdd.addEventListener("click", added);
      console.log('you have removed the item');
      h3.innerText= `you can add items`;
      btnRemove.removeEventListener("click", removed);
  }







let happy = document.querySelector("#happy");
let sad = document.querySelector("#sad");
let emotion = document.querySelector("h2");
let reset = document.querySelector("#reset");

happy.addEventListener("click", makeHappyFace);
sad.addEventListener("click", makeSadFace);
reset.addEventListener("click", makeFaceless)

function makeHappyFace() {
  resetFaces();
  emotion.innerText = `🙂`
  happy.innerText= `You are happy`
  happy.style="font-size:30px; background-color:grey";
  sad.style="";
  console.log(`I'm glad you're happy`)
}

function makeSadFace() {
  resetFaces();
  emotion.innerText = `🙁`
  sad.style="font-size:30px; background-color:grey";
  sad.innerText = `You are sad`
  console.log(`Cheer up, Chuck!`);
  // happy.removeEventListener("click", makeHappyFace); === says "remove the click event listener (called makeHappyFace) on the happy element"
}

function makeFaceless() {
  emotion.innerText = `...`
  resetFaces();
  console.log(`Indifferent is okay`)
}

function resetFaces() {
  happy.innerText = `Click me if you're happy`
  happy.style="";
  sad.innerText = `Click me if you're sad`
  sad.style="";
}