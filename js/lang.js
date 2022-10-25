

/* ALL DATAS OF LANGUAGE */

 const lang = {
    navigations: [
        {
            en: 'Home',
            bn: 'হোম',
        },
        {
            en: 'About Us',
            bn: 'আমাদের সম্পর্কে',
        },
        {
            en: 'Success Story',
            bn: 'সফলতার গল্প',
        },
        {
            en: 'Contact Us',
            bn: 'যোগাযোগ',
        },
    ],
    browse_courses: {
        en: 'Browse Courses',
        bn: 'ব্রাউজ কোর্স',
    }

}

var lang_btn = document.querySelector('.lang_btn');

lang_btn.addEventListener('click', ()=>{
    checkLangMode();
    location.reload();
})








/* ALL VARIABLES */


var n_bar = document.querySelectorAll('.links a.link');
var stroke_btn = document.querySelector('.bb_btn');




function toggleEnglish() {

    localStorage.setItem('lang', 'en')
    lang_btn.classList.remove('active');

    n_bar.forEach((nav, i)=>{
        nav.textContent = lang.navigations[i].en;
    })

    stroke_btn ? stroke_btn.textContent = lang.browse_courses.en : ''
    

}

function toggleBangla() {

    localStorage.setItem('lang', 'bn')
    lang_btn.classList.add('active');

    n_bar.forEach((nav, i)=>{
        nav.textContent = lang.navigations[i].bn;
    })

    stroke_btn ? stroke_btn.textContent = lang.browse_courses.bn : ''

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