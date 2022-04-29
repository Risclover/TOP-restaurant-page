import './style.css';

const pageLoad = () => {
    const content = document.getElementById('content');
    const body = document.createElement('div');

    body.classList.add('bodydiv');
    
    content.appendChild(body);
}


export default pageLoad;