import './style.css';

function home() {
    const header = document.querySelector('.title');
    const bodyDiv = document.querySelector('.bodydiv');

    header.textContent = "Cutiepie Cafe";

    bodyDiv.innerHTML = "Home!";
}

export default home;