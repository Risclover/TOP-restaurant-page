import './style.css';

function contact() {
    const header = document.querySelector('.title');
    const bodyDiv = document.querySelector('.bodydiv');

    header.textContent = 'Contact';
    bodyDiv.innerHTML = "Contact!";

}

export default contact;