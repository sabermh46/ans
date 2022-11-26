
const template = document.createElement('template');
var path = window.location.pathname;
var subPath = path.split('/')

var hasCourses=false
for (let i = 0; i < subPath.length; i++) {
    if(subPath[i] == 'courses') {
        hasCourses = true;
        break;
    }
}
var cssPath = hasCourses ? './../css/stylesAns.css' : './css/stylesAns.css';

template.innerHTML = `
    <link rel="stylesheet" href='${cssPath}'>
    <div class="contact_container">
        <div class="part violet">
            <div class="one">
                <div class="mat_icon">
                    <i class="material-icons">call</i>
                </div>
            </div>
            <div class="two">
                <a href="tel:+8801308028661" class="phone">+880 1308 028661</a>
                <a href="tel:+8801926684901" class="phone">+880 1926 684901</a>
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