console.log(
    "Script Working!"
)
var nav_bar = document.querySelector('.navigation_bar');

/* Fade ANIMATIONS start */

/* Fade ANIMATIONS end */

/* SHORT CARD CONTAINER START */

var short_card_slider = document.querySelector('.frame .slider');
var short_card_slider_left_btn = document.querySelector('.short_card_container .left_btn');
var short_card_slider_right_btn = document.querySelector('.short_card_container .right_btn');


var short_frame_width = document.querySelector('.short_card_container .frame').getBoundingClientRect().width;

var slider_info = short_card_slider.getBoundingClientRect();
var slider_width = slider_info.width;
var slider_content_count = short_card_slider.querySelectorAll('.short_card').length;

var sliderUnitMove = slider_width / slider_content_count;
var slider_current_pos = 0;
var slider_rem_pos;


short_card_slider_right_btn.addEventListener('click', ()=>{
    
    if(slider_current_pos + short_frame_width + sliderUnitMove < slider_width) {
        slider_current_pos += sliderUnitMove;
    }
    else {
        slider_rem_pos = (slider_width - (slider_current_pos + short_frame_width))
        slider_current_pos += slider_rem_pos
    }

    short_card_slider.style.transform = `translateX(-${slider_current_pos}px)`;

})

short_card_slider_left_btn.addEventListener('click', ()=>{
    
    if(slider_current_pos >= sliderUnitMove) {
        slider_current_pos -= sliderUnitMove;
    } else {
        slider_current_pos = 0
    }

    short_card_slider.style.transform = `translateX(-${slider_current_pos}px)`;

})



console.log(
    slider_width,
    short_card_slider,
    short_card_slider_left_btn,
    short_card_slider_right_btn,
    slider_content_count
)

/* SHORT CARD CONTAINER END */




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