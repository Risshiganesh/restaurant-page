// Factory function for menu items
function menuItemFactory(name,desc,price,img){

    return{name,desc,price,img};
}

const item1 = menuItemFactory('Burger','Absolutely Delicious','RM12.00','./item1');

const item2 = menuItemFactory('Burger','Absolutely Delicious','RM12.00','./item1');

const item3 = menuItemFactory('Burger','Absolutely Delicious','RM12.00','./item1');

const item4 = menuItemFactory('Burger','Absolutely Delicious','RM12.00','./item1');

const menuArray = [item1,item2,item3,item4];

function createMenuElements(){
    const contentDisplayDiv = document.querySelector('.content-display');

    const menuMainDiv = document.createElement('div');
    menuMainDiv.classList.add('menu-content');
    contentDisplayDiv.appendChild(menuMainDiv);

        const menuHeaderDiv = document.createElement('div');
        menuHeaderDiv.classList.add('menu-header');
        menuMainDiv.appendChild(menuHeaderDiv);

            const menuHeader = document.createElement('h1');
            menuHeader.textContent = 'Menu';
            menuHeaderDiv.appendChild(menuHeader);


        for (let index = 0; index < menuArray.length; index++) {
            
            const menuCard = document.createElement('div');
            menuCard.classList.add('menu-card');
            menuMainDiv.appendChild(menuCard);

                const foodImgDiv = document.createElement('div');
                foodImgDiv.classList.add('food-img');
                menuCard.appendChild(foodImgDiv);

                const foodDetails = document.createElement('div');
                foodDetails.classList.add('food-details');
                menuCard.appendChild(foodDetails);


            
        }    
        


}

export default createMenuElements;