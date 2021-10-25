// **************************************************************************************************************************************************************************************
// **************************************************************************************************************************************************************************************
// BUTTON VIEW
// **************************************************************************************************************************************************************************************
// **************************************************************************************************************************************************************************************

            // Put body part of HTML into a variable
            // "Hey document! Find first "body" element and put it into a variable called "body"
const body = document.querySelector("body");
console.log(body);

            // Put section in which the button shall appear, into a variable
            // "Hey document! Find first element with (class="needHelp") and put it into a variable called "divContainer"
const divContainer = document.querySelector(".needHelp");
console.log(divContainer);

            // create a button element
            // "Hey document! We're going to create a button element, for later use"
const button = document.createElement("button");
console.log(button);

            // What text will appear on the button prior to clicking? (alt methods are are used later and include: createTextNode, innerHTML...)
            // "You know that button we made... here's the content we want it to display initially"
button.textContent = "Things to discuss with mentors!!!";
console.log(button.textContent);

            // How will the button be styled? Best way is by using "classlist"
            // "You know that button we made... the "buttonWithClass" styling will be added to it"
button.classList.add("buttonWithClass");
console.log(button);

            // Appending just the 1 x button element to the chosen section... the divContainer section (where it says 'needHelp')
            // just .append will append multiple elements
            // "Hey, now let's append the button we've styled and added text to, to the section on the webpage"
divContainer.appendChild(button);



// **************************************************************************************************************************************************************************************
// ***************************************************************************************************************************************************************************************
// MAKING ALERT ON BUTTON
// ***************************************************************************************************************************************************************************************
// **************************************************************************************************************************************************************************************



            // Here, we're adding an event listener to the button
            // "Hey Button! When we "click" you, you should carry out the function called "interactivity""
// button.addEventListener('click', interactivity);

            // Now, we need to design the actual function called "interactivtiy". (We want this to display something (i.e. a box) in the browswer)
// function interactivity() {
//     alert("Let's change this from an alert box, to a dialogue/modal box");
//     }

        //***// Here, Imoh said that an arrow function above (i.e. () => displayModal(data);) will allow us to take in a parameter
        //***// This need explaining to me!

            // We will now append this fully formed (styled and interactive) button, to the divContainer made earlier
            // 1 x element = appendChild. Multiple elements = append
// divContainer.appendChild(button);




// **************************************************************************************************************************************************************************************
// ***************************************************************************************************************************************************************************************
// MODAL CONTENT Separate file!
// ***************************************************************************************************************************************************************************************
// **************************************************************************************************************************************************************************************



            // Modal is another word for Dialogue Box!
            // It would be good to create a "modalContent.js" file that will contain the dialogue that will appear in the modal, once the button is clicked.

// const modalContent = `<ol>
// <p>Let's... </p>
// <li>Make a "X" button that closes this textbox</li>
// <li>How on earth have my group created this cake timeline?!?!</li>
// <li>The 1st part of the 1st task in React Session 5</li>
// <li>JS - session 7, from p.19... i.e. if inside while & filter & map... (see Trial_Affirmations JS file)</li>
// <li>How to implement responsive sizing of this red element</li>
// <li>How functions/ parameters work</li>
// <li>Literally everything React! i.e. session1 (what are the elements doing?) and session2 (where is the button)</li>
// </ol>`;

// console.log(modalContent)




// **************************************************************************************************************************************************************************************
// ***************************************************************************************************************************************************************************************
// INTERACTIVE button: ON CLICK, DISPLAY MODAL, & CLOSE
// ***************************************************************************************************************************************************************************************
// **************************************************************************************************************************************************************************************

            // function must be created first! (before calling it)
            // using "modal" allows us to design a pop-up/alert. Could be called "x", but that would be useful. Should be descriptive!
            // modalContent = in markup! therefore... uses innerHTML
            // innerHTML allows us to put markup into an element (in this case... a variable)
function displayModal() {
  const modal = document.createElement("div"); //Modal gets created
  modal.setAttribute("id", "modalContainer"); // simply giving our div an id
  const closeButton = document.createElement("button"); //Button within modal gets created
  closeButton.textContent = "X"; // Button text content  inside modal gets created
  closeButton.setAttribute("id", "forTheX");
  closeButton.addEventListener("click", removeModal); // Hey, keep your ears open, whenever someone clicks on you... removeModal!
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
  modal.innerHTML = modalContent;
  modal.appendChild(closeButton); //this adds to the HTMl!!! Only because this is after innerHTML. InnerHTML would have reset it. (appending an element that is already created = therefore no quotes
  body.appendChild(modal);
}

button.addEventListener("click", displayModal);

function removeModal() {
  const modal = document.querySelector("#modalContainer"); // Grabbing the modalContainer from a local scope! It's in quotes because its a class / id (not an element)
  body.removeChild(modal);
}



// **************************************************************************************************************************************************************************************
// ***************************************************************************************************************************************************************************************
// OTHER BITS OF CODE FOR LATER!
// ***************************************************************************************************************************************************************************************
// **************************************************************************************************************************************************************************************


// // if I want to take in a parameter... () => displayModal(data);
// button.addEventListener('click', displayModal);

// function toDisplay() {
//     console.log('toDisplay')
// };



// // create a modal here
// const modal = document.createElement('div');
// modal.setAttribute('id', 'modalWithId');
// modal.classList.add('modal-visible');

// // see line 9
// modal.innerHTML=modalContent;
// body.appendChild(modal);
// function displayModal() {
//     modal.classList.toggle('modal-visible');
// }