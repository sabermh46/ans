
const template = document.createElement('template');

template.innerHTML = `
    <link rel="stylesheet" href='../../../css/stylesAns.css'>
    <div style="height: 20px;"></div>
    <div class="footer">
        <div class="brnd">
            <img src="../../../assets/logo.png" alt="LOGO">
        </div>
        <div class="txt">
            Copyright © 2022 ANSolution. All right reserved
        </div>
        <div class="icons">
            <a class="ic" href="https://www.facebook.com/ansolutions.bd">
                <img src="../../../assets/fb_icon.svg" alt="">
            </a>
            <a class="ic" href="#">
                <img src="../../../assets/yt_icon.svg" alt="">
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