import './style.css';

function home() {
    const bodyDiv = document.querySelector('.bodydiv');

    bodyDiv.innerHTML = "";
    bodyDiv.appendChild(homeBox());
}

function homeBox() {
    const homeDiv = document.createElement('div');
    const intro = document.createElement('p');
    const hoursTitleBox = document.createElement('div');
    const hoursTitle = document.createElement('h1');
    const hoursBox = document.createElement('div');
    const hours = document.createElement('ul');
    const locationTitleBox = document.createElement('div');
    const locationTitle = document.createElement('h1');
    const location = document.createElement('p');

    intro.classList.add('intro');
    hoursTitleBox.classList.add('home-title');
    hoursTitle.classList.add('hours-title');
    hoursBox.classList.add('hours-box');
    hours.classList.add('hours');
    locationTitleBox.classList.add('home-title');
    locationTitle.classList.add('location-title');
    
    intro.textContent = "This is Cutiepie Cafe. We are an adorable restaurant that serves nothing but the friendliest food on earth. Open from morning to night, we also serve breakfast, snacks, smoothies, and coffee. Wifi is free, and you can always feel free to plug into one of our many outlets!";

    // Hours
    hoursTitleBox.appendChild(hoursTitle);
    hoursTitle.textContent = "Hours";
    hoursBox.appendChild(hours);
    hours.appendChild(
        hourPart(
            'SUN',
            '10am-9pm'
        )
    )
    hours.appendChild(
        hourPart(
            'MON',
            '9am-9pm'
        )
    )
    hours.appendChild(
        hourPart(
            'TUE',
            '9am-9pm'
        )
    )
    hours.appendChild(
        hourPart(
            'WED',
            '9am-9pm'
        )
    )
    hours.appendChild(
        hourPart(
            'THU',
            '9am-9pm'
        )
    )
    hours.appendChild(
        hourPart(
            'FRI',
            '9am-9pm'
        )
    )
    hours.appendChild(
        hourPart(
            'SAT',
            '9am-10pm'
        )
    )

    locationTitleBox.appendChild(locationTitle);
    locationTitle.textContent = 'Location';
    location.textContent = "Come visit us at 138 Cutepie Drive, Sacramento, CA";

    homeDiv.classList.add('home-box', 'main-box');

    homeDiv.appendChild(intro);
    homeDiv.appendChild(hoursTitleBox);
    homeDiv.appendChild(hours);
    homeDiv.appendChild(locationTitleBox);
    homeDiv.appendChild(location);

    return homeDiv;
}

function hourPart(day, hours) {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${day}</strong>: ${hours}`;
    return li;
}

export default home;