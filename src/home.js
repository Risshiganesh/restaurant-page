
import createMenuElements from "./menu";

function createHomeElements(){

    const contentDisplayDiv = document.querySelector('.content-display');

    // home-content
    const homeContentDiv = document.createElement('div');

    homeContentDiv.classList.add('home-content');

    contentDisplayDiv.appendChild(homeContentDiv);

        //home-header-div
        const homeHeaderDiv = document.createElement('div');

        homeHeaderDiv.classList.add('home-header');

        homeContentDiv.appendChild(homeHeaderDiv);

            //home-header-title 
            const homeHeader = document.createElement('h1');

            homeHeader.textContent = "The Best Food";

            homeHeaderDiv.appendChild(homeHeader);

        //home-info
        const homeInfoDiv = document.createElement('div');

        homeInfoDiv.classList.add('home-info');

        homeContentDiv.appendChild(homeInfoDiv);

            const homeParagraph = document.createElement('p');

            homeParagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.";

            homeInfoDiv.appendChild(homeParagraph);
        
        // Button
        const homeButton = document.createElement('button');

        homeButton.classList.add('explore');

        homeButton.textContent = 'Explore';

        homeContentDiv.appendChild(homeButton);

        homeButton.addEventListener('click', function(){
            
            const firstChild = contentDisplayDiv.firstChild;

            if(firstChild){
                firstChild.remove();
                
            }

            createMenuElements();
        })

}

export default createHomeElements;
