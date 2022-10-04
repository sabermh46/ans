console.log(
    "Script Working!"
)
var nav_bar = document.querySelector('.navigation_bar');



window.onscroll = (e)=> {

    var y = window.scrollY;

    if (y < 250){
        nav_bar.style.height = `${ 200-y*0.5 }px`;
        nav_bar.style.padding = `0px ${120-y*0.3 }px`;
        nav_bar.style.background = 'transparent';
        nav_bar.style.boxShadow = '0px 1px 8px rgba(0, 0, 0, 0.0)';
    } 
    if (y > 250){
        nav_bar.style.height = '75px';
        nav_bar.style.padding = `0px ${ 20 }px`;
        nav_bar.style.background = '#E9F4FF';
        nav_bar.style.boxShadow = '0px 1px 8px rgba(0, 0, 0, 0.25)';
    }

}