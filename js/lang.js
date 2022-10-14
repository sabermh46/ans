

/* ALL DATAS OF LANGUAGE */

 const lang = {
    navigations: [
        {
            en: 'Home',
            bn: 'হোম',
        },
        {
            en: 'Gallery',
            bn: 'গ্যালারী',
        },
        {
            en: 'About',
            bn: 'আমাদের সম্পর্কে',
        },
        {
            en: 'Services',
            bn: 'সেবা সমূহ',
        },
        {
            en: 'Contact Us',
            bn: 'যোগাযোগ',
        },
    ],

}

var lang_btn = document.querySelector('.lang_btn');

lang_btn.addEventListener('click', ()=>{
    checkLangMode();
})








/* ALL VARIABLES */


var n_bar = document.querySelectorAll('.links a.link');
console.log(n_bar)




function toggleEnglish() {

    localStorage.setItem('lang', 'en')
    lang_btn.classList.remove('active');

    n_bar.forEach((nav, i)=>{
        nav.textContent = lang.navigations[i].en;
    })
    

}

function toggleBangla() {

    localStorage.setItem('lang', 'bn')
    lang_btn.classList.add('active');

    n_bar.forEach((nav, i)=>{
        nav.textContent = lang.navigations[i].bn;
    })

}














if(localStorage.getItem('lang') === null || localStorage.getItem('lang') == 'en') {
    toggleEnglish();
} else {
    toggleBangla();
}

function checkLangMode() {
    if(localStorage.getItem('lang') == 'en'){
        toggleBangla();
    } else if(localStorage.getItem('lang') == 'bn') {
        toggleEnglish();
    }
}