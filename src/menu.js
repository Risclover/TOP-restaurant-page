import './style.css';

function createFoodBox(name, price, description, category) {
    const foodBox = document.createElement('div'); // class='food-box'
    const foodHead = document.createElement('div'); // class='food-head'
    const foodDetails = document.createElement('div'); // class='description'
    const foodTitle = document.createElement('h2'); // -> name
    const foodPrice = document.createElement('h2'); // -> price
    const foodDescription = document.createElement('p'); // -> description
    const foodImage = document.createElement('img'); // foodImage
    
    foodBox.classList.add('food-box');
    foodImage.src = `images/${category.toLowerCase()}/${name.toLowerCase()}.png`;
    foodImage.alt = name;
    foodDescription.textContent = description;
    foodTitle.textContent = name;
    foodPrice.textContent = price;

    foodHead.appendChild(foodTitle);
    foodHead.appendChild(foodPrice);
    foodDetails.appendChild(foodHead);
    foodDetails.appendChild(foodDescription);
    foodBox.appendChild(foodImage);
    foodBox.appendChild(foodDetails);

    return foodBox;
}

function createFoodTitle(category) {
    const foodTitle = document.createElement('div');
    const categoryTitle = document.createElement('h1');

    categoryTitle.textContent = category;
    foodTitle.appendChild(categoryTitle);

    return foodTitle;
}

function createFoodBoxes(category) {
    const foodBoxes = document.createElement('div'); // class='food-boxes'

    foodBoxes.appendChild(
        createFoodBox(
            'Coffee',
            '$2',
            'Testing description',
            category
        )
    )

    foodBoxes.appendChild(
        createFoodBox(
            'Latte',
            '$1',
            'Testing another description',
            category
        )
    )

    return foodBoxes;
}

function createFoodGrid(category, catClass) {
    const beveragesCategory = document.querySelector('beverages');
    const foodCategory = document.querySelector('food');
    const sidesCategory = document.querySelector('sides');
    const breakfastCategory = document.querySelector('breakfast');
    const foodGrid = document.createElement('div'); // class='food-grid'
    foodGrid.classList.add(catClass);
    
    foodGrid.appendChild(
        createFoodTitle(category)
    );
    foodGrid.appendChild(
        createFoodBoxes(category)
    )
    
    return foodGrid;
}

function createMenu() {
    const content = document.querySelector('.bodydiv');

    content.appendChild(
        createFoodGrid('Beverages', 'beverages')
    );

    content.appendChild(
        createFoodGrid('Food', 'food')
    );

    content.appendChild(
        createFoodGrid('Breakfast', 'breakfast')
    );

    content.appendChild(
        createFoodGrid('Sides', 'sides')
    );
}

export default createMenu