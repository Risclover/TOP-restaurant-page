import './style.css';

const pageLoad = () => {
    const content = document.getElementById('content');
    const header = document.createElement('div');
    const body = document.createElement('div');

    body.classList.add('bodydiv');
    header.classList.add('title');
    
    content.appendChild(header);
    content.appendChild(body);
}


export default pageLoad;