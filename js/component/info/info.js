
const template = document.createElement('template');

template.innerHTML = `
    
    <link rel="stylesheet" href='./../../../css/stylesAns.css'>
    <div class="contact_container">
        <div class="part violet">
            <div class="one">
                <div class="mat_icon">
                    <i class="material-icons">call</i>
                </div>
            </div>
            <div class="two">
                <a href="#" class="phone">+880 1880 098654</a>
                <a href="#" class="phone">+880 1880 098653</a>
            </div>
        </div>
        <div class="part sky">
            <div class="one">
                <div class="mat_icon">
                    <i class="material-icons">email</i>
                </div>
            </div>
            <div class="two">
                <a href="#" class="email">ansolution9@gmail.com</a>
                <a href="#" class="email">info@ansolutions.com.bd</a>
            </div>
        </div>
        <div class="part pink">
            <div class="one">
                <div class="mat_icon">
                    <i class="material-icons">location_on</i>
                </div>
            </div>
            <div class="two">
                sheikh hasina software & technology park <br>
                10/B (10th Floor), Jashore
            </div>
        </div>
    </div>
`;

class InFoo extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

export default InFoo;