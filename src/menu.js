import './style.css';

// Create individual menu items
function createFoodBox(name, price, description, category) {
    const foodBox = document.createElement('div'); // class='food-box'
    const foodHead = document.createElement('div'); // class='food-head'
    const foodDetails = document.createElement('div'); // class='description'
    const foodTitle = document.createElement('h2'); // -> name
    const foodPrice = document.createElement('h2'); // -> price
    const foodDescription = document.createElement('p'); // -> description
    const foodImage = document.createElement('img'); // foodImage
    
    foodBox.classList.add('food-box');
    foodHead.classList.add('food-head');
    foodDetails.classList.add('food-details');
    foodTitle.classList.add('food-title');
    foodPrice.classList.add('food-price');
    foodDescription.classList.add('food-description');
    foodImage.classList.add('food-image');

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

// Create category title
function createFoodTitle(category) {
    const foodTitle = document.createElement('div');
    const categoryTitle = document.createElement('h1');

    foodTitle.classList.add('food-title');
    categoryTitle.classList.add('category');

    categoryTitle.textContent = category;
    foodTitle.appendChild(categoryTitle);

    return foodTitle;
}

// Create box to hold all category food boxes
function createFoodBoxes(category) {
    const foodBoxes = document.createElement('div'); // class='food-boxes'
    foodBoxes.classList.add('food-boxes');

    if(category === 'Breakfast') {
        foodBoxes.appendChild(
            createFoodBox(
                'Eggs',
                '$1',
                'Cooked the way you like them, the smile on these eggs is as tasty as the birds they came from!',
                category
            )
        );
        foodBoxes.appendChild(
            createFoodBox(
                'Toast with Jelly',
                '$1',
                'Toast with jelly. Choose your flavor of jelly from our list of world-famous jelly flavors!',
                category
            )
        );
        foodBoxes.appendChild(
            createFoodBox(
                'Eggs on Toast',
                '$2',
                "Sunny-side-up or over-easy eggs on toast. Let the yolk run and you're sure to leave happy!",
                category
            )
        );
        foodBoxes.appendChild(
            createFoodBox(
                'Pancakes',
                '$3',
                "A stack of 5 friendly flapjacks with butter and syrup. Additional pancakes are $0.50 each.",
                category
            )
        );
        foodBoxes.appendChild(
            createFoodBox(
                'Waffles',
                '$4',
                "Waffles topped with an assortment fruit and a dollop of whipped cream. Fruit varies depending on season.",
                category
            )
        );
    } else if (category === 'Food') {
        foodBoxes.appendChild(
            createFoodBox(
                'Classic Cheeseburger',
                '$4',
                "A classic cheeseburger with an all-beef patty, cheddar cheese, lettuce, tomatoes, mayonaisse, and mustard.",
                category
            )
        )
        foodBoxes.appendChild(
            createFoodBox(
                'Hotdog',
                '$3',
                "A classic hotdog. Pick your toppings: mustard, ketchup, relish, jalapeños, sourkraut.",
                category
            )
        )
        foodBoxes.appendChild(
            createFoodBox(
                "Pizza Slice",
                "$3",
                "A slice of our famous pizza. Pick from several flavors including cheese, pepperoni, hawaiian, meat lovers, and combination.",
                category
            )
        )
        foodBoxes.appendChild(
            createFoodBox(
                "Spaghetti with Meatballs",
                "$4",
                "In the mood for some pasta? Try our spaghetti! With homemade noodles, homemade sauce, and 2 giant homemade meatballs, you won't regret it.",
                category
            )
        )
        foodBoxes.appendChild(
            createFoodBox(
                "Hard-Shelled Taco",
                "$2",
                "Our hard-shelled tacos come with beef or chicken, lettuce, tomato, and cheddar cheese. Sour cream: Add $0.50.",
                category
            )
        )
    } else if (category === 'Snacks and Sides') {
        foodBoxes.appendChild(
            createFoodBox(
                "French Fries",
                "$2",
                "Salty and savory, our fries are sure to hit the spot. Pick our waffle-shaped fries for an additional $1.",
                category
            )
        )
        foodBoxes.appendChild(
            createFoodBox(
                "Bagel",
                "$2",
                "Head to our Bagel Wall to pick from an array of bagel and cream cheese flavors. Add cream cheese for an additional $0.50.",
                category
            )
        )
        foodBoxes.appendChild(
            createFoodBox(
                "Giant Pretzel",
                "$3",
                "You don't have to go to the mall for a soft pretzel. Mustard available on request.",
                category
            )
        )
        foodBoxes.appendChild(
            createFoodBox(
                "Summer Sorbet",
                "$3",
                "Try our strawberry, chocolate, and peach sorbet for a cold treat that's sure to please.",
                category
            )
        )
        foodBoxes.appendChild(
            createFoodBox(
                "Lollipop",
                "$0.50",
                "If you have a sweet tooth, we have an assortment of lollipop flavors that are great for an afternoon treat.",
                category
            )
        )
    } else if (category === "Beverages") {
        foodBoxes.appendChild(
            createFoodBox(
                "Soft Drink",
                "$2",
                "Pick from our collection of sodas and teas. Upgrade to a large for an extra $0.75.",
                category
            )
        )
        foodBoxes.appendChild(
            createFoodBox(
                "Coffee",
                "$1.50",
                "You can never go wrong with a classic. Black coffee, roasted fresh every hour.",
                category
            )
        )
        foodBoxes.appendChild(
            createFoodBox(
                "Latte",
                "$3",
                "A classic latte. Adorable foam art available on request. Add caramel for an extra $1.",
                category
            )
        )
        foodBoxes.appendChild(
            createFoodBox(
                "Fruit Smoothie",
                "$3.50",
                "Choose between strawberry, peach, mango, wild berry, and guava.",
                category
            )
        )
        foodBoxes.appendChild(
            createFoodBox(
                "Homemade Orange Juice",
                "$2",
                "Try our homemade orange juice. Perfect for breakfast or relaxing in the afternoon.",
                category
            )
        )
    }

    return foodBoxes;
}

// Create category box
function createFoodGrid(category, catClass) {
    const foodGrid = document.createElement('div'); // class='food-grid'

    foodGrid.classList.add('food-grid', catClass);
    foodGrid.appendChild(createFoodTitle(category));
    foodGrid.appendChild(createFoodBoxes(category));

    return foodGrid;
}

// Create entire menu
function createMenu() {
    const content = document.querySelector('.bodydiv');

    content.innerHTML = "";
    content.appendChild(
        createFoodGrid('Breakfast', 'breakfast')
    );

    content.appendChild(
        createFoodGrid('Food', 'food')
    );

    content.appendChild(
        createFoodGrid('Snacks and Sides', 'snacks-and-sides')
    );

    content.appendChild(
        createFoodGrid('Beverages', 'beverages')
    );
}

export default createMenu