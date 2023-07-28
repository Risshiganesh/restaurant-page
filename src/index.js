import './style.css';

import createMainBody from "./main-load";

import createHomeElements from "./home";

import createMenuElements from "./menu";

import createContactElements from "./contact";

createMainBody();

createHomeElements();

// createMenuElements();

// createContactElements();

// console.log('test-works!');

// Stores all 
const tabArrays = [createHomeElements, createMenuElements,createContactElements];

function switchTab () {

    
    const navButtonNodes = document.querySelectorAll('.nav-btn');

    for (let index = 0; index < navButtonNodes.length; index++) {
        // console.log('test');
        navButtonNodes[index].addEventListener('click', function(){

            const contentDisplayDiv = document.querySelector('.content-display');


            // Clear the DOM Display first
            const firstChild = contentDisplayDiv.firstChild;

            if(firstChild){
                firstChild.remove();
                
            }
            
            // console.log(firstChild);

            // console.log(tabArrays[index]);

            const updateDisplay = tabArrays[index];

            updateDisplay();

        });
        
    }
}

switchTab();