console.log(
    "Script Working!"
)
var nav_bar = document.querySelector('.navigation_bar');

/* Fade ANIMATIONS start */

/* Fade ANIMATIONS end */

/* SHORT CARD CONTAINER START */

function short_card_slide(){

    var short_card_container = document.querySelector('.short_card_container');
    var short_card_frame = document.querySelector('.short_card_container .frame');

    var short_card_slider = document.querySelector('.short_card_container .frame .slider');
    var short_card_slider_left_btn = document.querySelector('.short_card_container .left_btn');
    var short_card_slider_right_btn = document.querySelector('.short_card_container .right_btn');


    
    var slider_width = short_card_slider.getBoundingClientRect().width;

    var slider_content = short_card_slider.querySelectorAll('.short_card');
    var content_width;
    slider_content.forEach(cont =>{
        content_width = cont.getBoundingClientRect().width;
    })
    

    
    var slider_current_pos = 0;


    var screen_width = window.innerWidth;

    var effective_width, gap;
    if(screen_width > 1200){
        effective_width = 1200
        gap = 20
    } else if(screen_width < 1200 && screen_width > 760){
        effective_width = screen_width - 200
        gap = 20
    } else if(screen_width < 760){
        effective_width = 350
        gap = 0
    }

    var sliderUnitMove = content_width+gap;

    var showing_element = parseInt(effective_width / (content_width+gap))
    console.log(showing_element)

    short_card_slider.style.gap = `${gap}px`

    short_card_frame.style.width = `${ showing_element*content_width + (showing_element-1)*gap }px`;
    short_card_container.style.width = `${ showing_element*content_width + (showing_element-1)*gap + 100 }px`;

    var short_frame_width = short_card_frame.getBoundingClientRect().width;

    short_card_slider_right_btn.addEventListener('click', ()=>{

        console.log('Top of left working',
            'left Cond: '+(slider_current_pos + short_frame_width + sliderUnitMove),
            'right cond: '+ slider_width
        );
        
        if(slider_current_pos + short_frame_width + sliderUnitMove < slider_width) {
            slider_current_pos += sliderUnitMove;
            console.log('Conditional working');
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
        'slider_width: '+slider_width,
    )
}


short_card_slide();


/* SHORT CARD CONTAINER END */


/* COURSE CARD CONTAINER START */

function course_card_slide(){
    
    var course_card_container = document.querySelector('.course_card_container');
    var course_card_frame = document.querySelector('.course_card_container .frame');

    var course_card_slider = document.querySelector('.course_card_container .frame .slider');
    var course_card_slider_left_btn = document.querySelector('.course_card_container .left_btn');
    var course_card_slider_right_btn = document.querySelector('.course_card_container .right_btn');


    
    var slider_width = course_card_slider.getBoundingClientRect().width;

    var slider_content = course_card_slider.querySelectorAll('.course-card');
    var content_width;
    slider_content.forEach(cont =>{
        content_width = cont.getBoundingClientRect().width;
    })
    

    
    var slider_current_pos = 0;


    var screen_width = window.innerWidth;

    var effective_width, gap;
    if(screen_width > 1200){
        effective_width = 1200
        gap = 40
    } else if(screen_width < 1200 && screen_width > 760){
        effective_width = screen_width - 200
        gap = 30
    } else if(screen_width < 760){
        effective_width = 390
        gap = 0
    }

    var sliderUnitMove = content_width+gap;

    var showing_element = parseInt(effective_width / (content_width+gap))
    console.log(showing_element)

    course_card_slider.style.gap = `${gap}px`

    course_card_frame.style.width = `${ showing_element*content_width + (showing_element-1)*gap }px`;
    course_card_container.style.width = `${ showing_element*content_width + (showing_element-1)*gap + 100 }px`;

    var course_frame_width = course_card_frame.getBoundingClientRect().width;

    course_card_slider_right_btn.addEventListener('click', ()=>{

        console.log('Top of left working',
            'left Cond: '+(slider_current_pos + course_frame_width + sliderUnitMove),
            'right cond: '+ slider_width
        );
        
        if(slider_current_pos + course_frame_width + sliderUnitMove < slider_width) {
            slider_current_pos += sliderUnitMove;
            console.log('Conditional working');
        }

        course_card_slider.style.transform = `translateX(-${slider_current_pos}px)`;

    })

    course_card_slider_left_btn.addEventListener('click', ()=>{
        
        if(slider_current_pos >= sliderUnitMove) {
            slider_current_pos -= sliderUnitMove;
        } else {
            slider_current_pos = 0
        }

        course_card_slider.style.transform = `translateX(-${slider_current_pos}px)`;

    })



}

course_card_slide();

/* COURSE CARD CONTAINER END */


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