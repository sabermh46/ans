console.log(
    "Script Working!"
)
var nav_bar = document.querySelector('.navigation_bar');


var logo = document.querySelector('.navigation_bar .brand img');



/* CARD SLIDER START */

function card_slider(){


    // #slider_container
    var slider_container = document.querySelectorAll('.slider_container');

    slider_container.forEach(sliderCon =>{

        var padding = 30;

        // #BUTTON CONTROLLER
        var left_btn = sliderCon.querySelector('.left_btn');
        var right_btn = sliderCon.querySelector('.right_btn');

        // # SLIDER FRAME & SLIDER
        var slider_frame = sliderCon.querySelector('.frame');
        var slider = slider_frame.querySelector('.slider');

        // # SLIDER ITEMS
        var sliding_items = slider.querySelectorAll('.slider_item');

        // #SLIDER WIDTH
        var slider_width = slider.getBoundingClientRect().width;

        // #EACH ITEMS WIDTH
        var sliding_items_width = sliding_items[0].getBoundingClientRect().width;

        // #SLIDER INITIAL POSITION & SCREEN WIDTH
        var slider_current_pos = 0;
        var screen_width = window.innerWidth;

        // #SCREEN RATIOS & MEDIA-QUERY
        var effective_width, gap=20;

        if(screen_width > 1200){
            effective_width = 1200
        } else if(screen_width < 1200 && screen_width > 550){
            effective_width = screen_width - 100
        } else if(screen_width < 550){
            effective_width = 350
        }

        var sliderUnitMove = sliding_items_width + gap;

        // #ELEMENT PREVIEWED IN FRAME
        var in_frame_element_count = parseInt(effective_width / sliderUnitMove);

        // #SETTING SLIDER ELEMENTS GAP
        slider.style.gap = `${gap}px`;

        // #SETTING FRAME WIDTH
        var frame_current_width = in_frame_element_count * sliding_items_width + (in_frame_element_count - 1) * gap;
        slider_frame.style.width = `${frame_current_width}px`;

        // #SETTING CONTAINER WIDTH
        sliderCon.style.width = `${frame_current_width + (padding*2)}px`;

        // #FUNCTIONALITY OF RIGHT BUTTON
        right_btn.addEventListener('click', ()=>{

            if((slider_width - (slider_current_pos + frame_current_width)) > 0) {
                slider_current_pos += sliderUnitMove;
            }

            slider.style.transform = `translateX(-${slider_current_pos}px)`;
            console.log(slider_width - (slider_current_pos + frame_current_width));

        })

        // #FUNCTIONALITY OF LEFT BUTTON
        left_btn.addEventListener('click', ()=>{
            if(slider_current_pos != 0){
                slider_current_pos -= sliderUnitMove;
            }
            slider.style.transform = `translateX(-${slider_current_pos}px)`;
        })



    })

}

card_slider();

/* SHORT CARD CONTAINER END */

var classes_min_card = [
    'violet',
    'pink',
    'sky'
]
var min_cards = document.querySelectorAll('.min_card');
var cml = classes_min_card.length
min_cards.forEach((card, i) => {
    card.classList.add(`${ classes_min_card[ i<cml ? i: i%cml] }`);
})






var course_btn_container = document.getElementById("browse_course");
var course_btn_button = course_btn_container.querySelector(".stroke_btn");

course_btn_button.addEventListener('click', ()=>{
    course_btn_container.classList.toggle('active');
})

var course_items = course_btn_container.querySelectorAll('.course_btn .course');
course_items.forEach((item, i)=>{
    item.addEventListener('click', ()=>{
        course_btn_container.classList.remove('active');
    })
})

var nav_toggle_button = document.querySelector('.toggle_button');
var nav_links = document.querySelector('.navigation_bar .links');
nav_toggle_button.addEventListener('click', ()=>{
    nav_links.classList.toggle('active');
})
var n_bar = document.querySelectorAll('.links a.link');
n_bar.forEach(link=>{
    link.addEventListener('click', ()=> {
        nav_links.classList.remove('active');
    })
})

console.log(
    course_btn_container,
    course_btn_button
)



window.onscroll = (e)=> {

    var y = window.scrollY;
    var sW = window.innerWidth;

    if (y < 250){
        nav_bar.style.height = `${ 200-y*0.5 }px`;
        nav_bar.style.padding = `0px ${ sW > 700 ? (120-y*0.3) : (20-y*0.04) }px`;
        nav_bar.style.background = 'transparent';
        nav_bar.style.boxShadow = '0px 1px 8px rgba(0, 0, 0, 0.0)';
        logo.style.width = sW > 450 ? `${ 200-y*0.5 }px` : `${ 120-y*0.1 }px`
    } 
    if (y > 250){
        nav_bar.style.height = '75px';
        nav_bar.style.padding = `0px ${ sW > 700 ? 20 : 3 }px`;
        nav_bar.style.background = '#E9F4FF';
        nav_bar.style.boxShadow = '0px 1px 8px rgba(0, 0, 0, 0.25)';
        logo.style.width = `100px`
    }

    var landing_container = document.querySelector('.landing_container');
    var landing_image = landing_container.querySelector('.img_laptop');
    var landing_text = landing_container.querySelector('.landing_text');


    landing_image.style.translate = `${-y * 0.5}px ${y * 0.2}px`;
    landing_text.style.translate = `${y * 0.4}px ${y*0.2}px`;




}