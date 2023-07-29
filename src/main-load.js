import logo from "./assets/logo.png"

function createMainBody (){

    const contentDiv = document.querySelector('#content');

    

    //Create nav container and main container

    const navContainer = document.createElement("div");

    navContainer.classList.add('nav-container');

    contentDiv.appendChild(navContainer);


    // Create logo div 

    // const logoContainer = document.createElement('div');

    // logoContainer.classList.add('logo-container');

    // navContainer.appendChild(logoContainer);

    //     const logoDiv = document.createElement('div');

    //     logoDiv.classList.add('logo-div');

    //     logoContainer.appendChild(logoDiv);

    //         const logoIcon = new Image();
    //         logoIcon.src = logo;
    //         logoDiv.appendChild(logoIcon);

    // Create and append nav buttons

    const buttonArray = ['Home','Menu','Contact'];

    buttonArray.forEach(element => {
        const navButton = document.createElement('button');
        navButton.textContent = element;
        navButton.classList.add('nav-btn')
        navContainer.appendChild(navButton);
    });

    // Create and append main container to content div

    const mainContainer = document.createElement('div');

    mainContainer.classList.add('main-content');

    contentDiv.appendChild(mainContainer);

    // Create and append display container to main container

    const displayContainer = document.createElement('div');

    displayContainer.classList.add('content-display');

    mainContainer.appendChild(displayContainer);

    // Create and append footer container to content div

    const footerDiv = document.createElement("div");

    footerDiv.classList.add('footer');

    contentDiv.appendChild(footerDiv);

    // Create and append footer link div to footer container

    const footerLinkDiv = document.createElement("div");

    footerLinkDiv.classList.add('footer-link');

    footerDiv.appendChild(footerLinkDiv);

    // Create and append footer link to footer container
    
    const footerLink = document.createElement('a');

    footerLink.textContent = "Made by Risshiganesh Villalan";

    // const footerText = document.createTextNode('TTTTTTT');



    footerLink.href = "https://github.com/Risshiganesh/restaurant-page";

    footerLinkDiv.appendChild(footerLink);

    // footerLink.appendChild(footerText);


}

export default createMainBody;