import './style.css';

function contact() {
    const bodyDiv = document.querySelector('.bodydiv');

    bodyDiv.innerHTML = "";
    bodyDiv.appendChild(contactBox());    
}

function contactBox() {
    const detailsBox = document.createElement('div');
    const details = document.createElement('ul');
    const address = document.createElement('li');
    const phone = document.createElement('li');
    const email = document.createElement('li');

    detailsBox.classList.add('contact-box');
    detailsBox.classList.add('main-box');

    address.textContent = "138 Cutie Pie Drive, Sacramento, CA";
    phone.textContent = "1 (999) 885-2542";
    email.textContent = "cutie.pie@cafe.com";

    details.appendChild(phone);
    details.appendChild(address);
    details.appendChild(email);
    detailsBox.appendChild(details);
    detailsBox.appendChild(contactForm());
    return detailsBox;
}


function contactForm() {
    const form = document.createElement('form');
    const textArea = document.createElement('textarea');
    

    form.appendChild(
        formLabel(
            'Name:',
            'fullname'
        )
    )
    form.appendChild(
        formInput(
            'text',
            'John Doe',
            'fullname'
        )
    )
    form.appendChild(
        formLabel(
            'Email:',
            'email',
        )
    )
    form.appendChild(
        formInput(
            'email',
            'name@place.com',
            'email'
        )
    )
    form.appendChild(
        formLabel(
            'Subject:',
            'subject'
        )
    )
    form.appendChild(
        formInput(
            'text',
            'Review',
            'subject'
        )
    )
    form.appendChild(
        formLabel(
            'Message:',
            'message'
        )
    )
    form.appendChild(textArea);
    form.appendChild(
        formInput(
            'submit',
            'Submit',
            'submit'
        )
    )
    return form;
        
}

function formLabel(labelText, labelFor) {
    const label = document.createElement('label');
    label.textContent = labelText;
    label.setAttribute('for', labelFor);
    return label;
}

function formInput(type, placeholder, name) {
    const newInput = document.createElement('input');
    newInput.setAttribute('type', type);
    newInput.setAttribute('name', name)
    if(type === "submit") {
        newInput.setAttribute('value', placeholder);
    } else {
        newInput.setAttribute('placeholder', placeholder);
    }
    return newInput;
}

export default contact;