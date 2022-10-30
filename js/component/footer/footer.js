
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
var logoPath = hasCourses ? './../assets/logo.png' : './assets/logo.png';
var fbPath = hasCourses ? './../assets/fb_icon.svg' : './assets/fb_icon.svg';
var ytPath = hasCourses ? './../assets/yt_icon.svg' : './assets/yt_icon.svg';


template.innerHTML = `
    <link rel="stylesheet" href='${ cssPath }'>
    <div style="height: 20px;"></div>
    <div class="footer">
        <div class="brnd">
            <img src="${ logoPath }" alt="LOGO">
        </div>
        <div class="txt">
            Copyright © 2022 ANSolution. All right reserved
        </div>
        <div class="icons">
            <a class="ic" href="https://www.facebook.com/ansolutions.bd">
                <img src="${ fbPath }" alt="">
            </a>
            <a class="ic" href="#">
                <img src="${ ytPath }" alt="">
            </a>
        </div>
    </div>
`;

class FooTer extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

export default FooTer;