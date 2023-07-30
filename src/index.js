import './style.css';

import createMainBody from "./main-load";

import createHomeElements from "./home";

import createMenuElements from "./menu";

import createContactElements from "./contact";

createMainBody();

createHomeElements();

// createMenuElements();

// createContactElements();

// Stores all 
const tabArrays = [createHomeElements, createMenuElements,createContactElements];

function switchTab () {

    
    const navButtonNodes = document.querySelectorAll('.nav-btn');

    navButtonNodes[0].classList.add('nav-btn-clicked');

    for (let index = 0; index < navButtonNodes.length; index++) {
        // console.log('test');
        navButtonNodes[index].addEventListener('click', function(){

            navButtonNodes.forEach(button => {
                button.classList.remove('nav-btn-clicked')
            });

            const contentDisplayDiv = document.querySelector('.content-display');

            navButtonNodes[index].classList.add('nav-btn-clicked');


            // Clear the DOM Display first
            const firstChild = contentDisplayDiv.firstChild;

            if(firstChild){
                firstChild.remove();
                
            }

            const updateDisplay = tabArrays[index];

            updateDisplay();

        });
        
    }
}

switchTab();