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
divContainer.appendChild(button);
