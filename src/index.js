import pageLoad from './page-load';
import createMenu from './menu';
import home from './home';
import contact from './contact';
import './style.css'

const menuTab = document.getElementById('menu');
const homeTab = document.getElementById('home');
const contactTab = document.getElementById('contact');

menuTab.addEventListener('click', function() {
    createMenu();
})

homeTab.addEventListener('click', function() {
    home();
})

contactTab.addEventListener('click', function() {
    contact();
})

pageLoad();
home();
