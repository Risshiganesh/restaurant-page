import menuitem1 from "./assets/menu-item1.jpg"
import menuitem2 from "./assets/menu-item2.jpg"
import menuitem3 from "./assets/menu-item3.jpg"
import menuitem4 from "./assets/menu-item4.jpg"

// Factory function for menu items
function menuItemFactory(name,price,desc,img){

    return{name,desc,price,img};
}

const item1 = menuItemFactory('Chicken Burger','RM12.00','\"Unleash burger opulence. Pure indulgence awaits.\"', menuitem1);

const item2 = menuItemFactory('Chicken Pizza','RM12.00','\"Experience pizza magnificence. Pure luxury in every slice.\"', menuitem2);

const item3 = menuItemFactory('Grilled Chicken', 'RM12.00','\"Savor gourmet perfection. Elevate your senses with our luxury roast chicken.\"', menuitem3);

const item4 = menuItemFactory('Chicken Kebab','RM12.00', "\"Unleash the kebab luxury. Succulent chicken, perfectly spiced, a taste like no other.\"", menuitem4);

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

                    const menuImg = new Image();
                    menuImg.src = menuArray[index].img;
                    foodImgDiv.appendChild(menuImg);

                const foodDetails = document.createElement('div');
                foodDetails.classList.add('food-details');
                menuCard.appendChild(foodDetails);

                    const foodTitle = document.createElement('div');
                    foodTitle.classList.add('food-title');
                    foodTitle.textContent = menuArray[index].name;
                    foodDetails.appendChild(foodTitle);

                    const foodPrice = document.createElement('div');
                    foodPrice.classList.add('food-price');
                    foodPrice.textContent = menuArray[index].price;
                    foodDetails.appendChild(foodPrice);

                    const foodDesc = document.createElement('div');
                    foodDesc.classList.add('food-desc');
                    foodDesc.textContent = menuArray[index].desc;
                    foodDetails.appendChild(foodDesc);

                    


            
        }    
        


}

export default createMenuElements;