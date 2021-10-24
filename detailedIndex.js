// **************************************************************************************************************************************************************************************
// **************************************************************************************************************************************************************************************
// BUTTON VIEW
// **************************************************************************************************************************************************************************************
// **************************************************************************************************************************************************************************************



            // Put body part of HTML into a variable
            // "Hey document! Find first "body" element and put it into a variable called "body"
const body = document.querySelector('body');
console.log(body);


            // Put section in which the button shall appear, into a variable
            // "Hey document! Find first element with (class="needHelp") and put it into a variable called "divContainer"
const divContainer = document.querySelector('.needHelp');
console.log(divContainer);


            // create a button element
            // "Hey document! We're going to create a button element, for later use"
const button = document.createElement('button');
console.log(button);


            // What text will appear on the button prior to clicking? (alt methods are are used later and include: createTextNode, innerHTML...)
            // "You know that button we made... here's the content we want it to display initially"
button.textContent = 'Things to discuss with mentors!!!';
console.log(button.textContent);


            // How will the button be styled? Best way is by using "classlist"
            // "You know that button we made... the "buttonWithClass" styling will be added to it"
button.classList.add('buttonWithClass')
console.log(button);



            // Appending just the 1 x button element to the chosen section... the divContainer section (where it says 'needHelp')
            // "Hey, now let's append the button we've styled and added text to, to the section on the webpage"
// divContainer.appendChild(button);
            // I am commenting this out for now, as we want to append this button with an eventlistener also





// **************************************************************************************************************************************************************************************
// ***************************************************************************************************************************************************************************************
// MAKING BUTTON INTERACTIVE
// ***************************************************************************************************************************************************************************************
// **************************************************************************************************************************************************************************************

            // Here, we're adding an event listener to the button
            // "Hey Button! When we "click" you, you should carry out the function called "interactivity""
            button.addEventListener('click', interactivity);
            
            // Now, we need to design the actual function called "interactivtiy". (We want this to display something (i.e. a box) in the browswer)
            function interactivity() {
            alert("Let's change this from an alert box, to a dialogue/modal box");
            }

       //***// Here, Imoh said that an arrow function above (i.e. () => displayModal(data);) will allow us to take in a parameter
       //***// This need explaining to me! 
          
            // We will now append this fully formed (styled and interactive) button, to the divContainer made earlier
            // 1 x element = appendChild. Multiple elements = append
            divContainer.appendChild(button);



// **************************************************************************************************************************************************************************************
// ***************************************************************************************************************************************************************************************
// MODAL CONTENT
// ***************************************************************************************************************************************************************************************
// **************************************************************************************************************************************************************************************


            // Modal is another word for Dialogue Box!
            // This "modalContent.js" file will contain the dialogue that will appear in the modal, once the button is clicked.

            const modalContent = `<ol>
            <p>Let's... </p>
            <li>Make a "X" button that closes this textbox</li>
            <li>How on earth have my group created this cake timeline?!?!</li>
            <li>The 1st part of the 1st task in React Session 5</li>
            <li>JS - session 7, from p.19... i.e. if inside while & filter & map... (see Trial_Affirmations JS file)</li>
            <li>How to implement responsive sizing of this red element</li>
            <li>How functions/ parameters work</li>
            <li>Literally everything React! i.e. session1 (what are the elements doing?) and session2 (where is the button)</li>
            </ol>`;
            
            console.log(modalContent)



            
// **************************************************************************************************************************************************************************************
// ***************************************************************************************************************************************************************************************
// ON CLICK, DISPLAY MODAL... NOT ALERT (AS ABOVE)
// ***************************************************************************************************************************************************************************************
// **************************************************************************************************************************************************************************************            
       

            // Here, create a dialogue box (aka modal), by making a variable that will create a div element
            // "Hey document! Create an element called 'div'... name this activity under a variable called modal"
const modal = document.createElement('div');

// modal.setAttribute('id', 'modalWithId');
// modal.classList.add('modal-visible');

function displayModal() {
    divContainer.appendChild(modalContent);
}

button.addEventListener('mouseover', displayModal);


            




// // see line 9
// modal.innerHTML=modalContent;

// body.appendChild(modal);
 
// function displayModal() {
//     modal.classList.toggle('modal-visible');
// }














// **************************************************************************************************************************************************************************************
// ***************************************************************************************************************************************************************************************
// ALL TOGETHER
// ***************************************************************************************************************************************************************************************
// **************************************************************************************************************************************************************************************

