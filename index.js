const divContainer = document.querySelector('.needHelp');
console.log(divContainer);

const body = document.querySelector('body');

// create a button
const button = document.createElement('button');

// alt methods are createTextNode, innerHTML...
button.textContent = 'Things to discuss with mentors!!!';

// best way to manipulate classlist on an element...
// "Hey button, add the class"
button.classList.add('buttonWithClass');

// if I want to take in a parameter... () => displayModal(data);
button.addEventListener('click', displayModal);

function toDisplay() {
    console.log('toDisplay')
};

// to append just 1 x element (just append, can append multiple)
divContainer.appendChild(button);

// create a modal here
const modal = document.createElement('div');
modal.setAttribute('id', 'modalWithId');
modal.classList.add('modal-visible');

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

// see line 9
modal.innerHTML=modalContent;

body.appendChild(modal);

function displayModal() {
    modal.classList.toggle('modal-visible');
}