var lang_ch = localStorage.getItem('lang') == 'en' || null
console.log(lang_ch)
const courses = [
    {
        id: 'web_dev',
        course_title: lang_ch ? 'Web Development' : 'ওয়েব ডেভেলপমেন্ট',
        image: 'https://i.ibb.co/0CW30Gw/course-we-dev.png/',
        rating: 5,
        review: 1234,
        students: 120,
        price: 8000,
        period: lang_ch ? '3/6 Month' : '৩/৬ মাস',
        lecture: lang_ch ? '36' : '৩৬ টি',
        link: './courses/web_dev.html',
        details: 'Web development উচ্চ আয়ের পেশার মধ্যে অন্যতম। বাংলাদেশে একজন web developer গড়ে প্রায় ২-৩ লাখ টাকা বা তারও বেশি আয় করে থাকেন। দেশের বাইরে বা ফ্রিল্যান্সিং এর জন্যও এই সেক্টর অত্যন্ত চাহিদাসম্পন্ন। যদি আপনার প্রোগ্রামিং-এর নেশা থাকে, তাহলে web development course করে দারুণ একটি ক্যারিয়ার গড়তে পারেন।',
    },
    {
        id: 'web_des',
        course_title: lang_ch ? 'Web Designing' : 'ওয়েব ডিজাইনিং',
        image: 'https://i.ibb.co/tbZCtjG/course-we-de.png/',
        rating: 5,
        review: 1234,
        students: 120,
        price: 8000,
        period: lang_ch ? '3/6 Month' : '৩/৬ মাস',
        lecture: lang_ch ? '36' : '৩৬ টি',
        link: './courses/web_des.html',
        details: 'বিশ্বব্যাপী প্রতি মুহূর্তে তৈরি হচ্ছে হাজার হাজার ওয়েবসাইট। শখের কাজ কিংবা পরিপূর্ণ ব্যবসা সব ধরণের কাজের পরিচয় বহন করে ওয়েবসাইট। এজন্যই ডিজিটাল প্ল্যাটফর্মে ক্যারিয়ার হিসেবে ওয়েব ডিজাইনারের বেশ চাহিদা রয়েছে। তাই আপনি যদি ওয়েব ডিজাইনার হিসেবে ক্যারিয়ার গড়তে চান, তাহলে আপনার জন্যই আমাদের ওয়েব ডিজাইন কোর্স ।',
    },
    {
        id: 'bas_com',
        course_title: lang_ch ? 'Basic Computer' : 'বেসিক কম্পিউটার',
        image: 'https://i.ibb.co/rdZX0wM/course-ba-co.png/',
        rating: 5,
        review: 1234,
        students: 120,
        price: 4000,
        period: lang_ch ? '3/6 Month' : '৩/৬ মাস',
        lecture: lang_ch ? '36' : '৩৬ টি',
        link: './courses/basic_com.html',
        details: 'বিশ্বব্যাপী প্রতি মুহূর্তে তৈরি হচ্ছে হাজার হাজার ওয়েবসাইট। শখের কাজ কিংবা পরিপূর্ণ ব্যবসা সব ধরণের কাজের পরিচয় বহন করে ওয়েবসাইট। এজন্যই ডিজিটাল প্ল্যাটফর্মে ক্যারিয়ার হিসেবে ওয়েব ডিজাইনারের বেশ চাহিদা রয়েছে। তাই আপনি যদি ওয়েব ডিজাইনার হিসেবে ক্যারিয়ার গড়তে চান, তাহলে আপনার জন্যই আমাদের ওয়েব ডিজাইন কোর্স ।',
    },
    {
        id: 'pro_gra',
        course_title: lang_ch ? 'Professional Graphic Design' : 'প্রফেশনাল গ্রাফিক্স ডিজাইন',
        image: 'https://i.ibb.co/rsg8bH3/course-gr-de.png/',
        rating: 5,
        review: 1234,
        students: 120,
        price: 7000,
        period: lang_ch ? '3/6 Month' : '৩/৬ মাস',
        lecture: lang_ch ? '36' : '৩৬ টি',
        link: './courses/graphic.html',
        details: 'ভিজ্যুয়াল কনটেন্টের চাহিদা বেড়ে যাওয়ায় এখন মার্কেটাররা গ্রাফিক্যাল কনটেন্টের দিকে ঝুঁকেছেন। তাই বিশ্বজুড়ে গ্রাফিক ডিজাইনারদের চাহিদা এখন আকাশচুম্বী। এক জরিপে দেখা যায়, ভালো একটা লোগোর জন্য একটি ছোট প্রতিষ্ঠানও ৫০০ ডলার পর্যন্ত খরচ করে। আপনি কি ডিজাইনের কাজ করতে ভালোবাসেন? তাহলে আপডেটেড মডিউলে দক্ষ প্রশিক্ষকের সাথে আমাদের গ্রাফিক ডিজাইন কোর্সটি আপনার জন্যই।',
    },
    {
        id: 'dig_mar',
        course_title: lang_ch ? 'Digital Marketing' : 'ডিজিটাল মার্কেটিং',
        image: 'https://i.ibb.co/LdrnbFq/course-di-ma.png/',
        rating: 5,
        review: 1234,
        students: 120,
        price: 8000,
        period: lang_ch ? '3/6 Month' : '৩/৬ মাস',
        lecture: lang_ch ? '36' : '৩৬ টি',
        link: './courses/digital_marketing.html',
        details: 'একজন দক্ষ ডিজিটাল মার্কেটার হতে হলে আপনাকে ডিজিটাল প্ল্যাটফর্মে পারদর্শী হতে হবে। আর এজন্য যা কিছু জানা প্রয়োজন, তার সবই থাকছে আমাদের কোর্সে। বেসিক কিওয়ার্ড রিসার্চ (Keywords Research) আর কম্পিটিটর অ্যানালাইসিস (Competitor Analysis) থেকে শুরু করে এস ই ও (SEO), সোশ্যাল মিডিয়া মার্কেটিং (Social Media Marketing), অ্যাফিলিয়েট মার্কেটিং (Affiliate Marketing) এর বিস্তারিত সবই থাকছে আমাদের ডিজিটাল মার্কেটিং কোর্সে। বর্তমানে অসংখ্য ই-কমার্স সাইট রয়েছে ইন্টারনেটে। বিভিন্ন সার্ভিস পেইজের মতো সার্চ ইঞ্জিন র‍্যাংকিং- এ আনতে সঠিক টেকনিক জানা প্রয়োজন।'
    },
    {
        id: 'int_ext',
        course_title: lang_ch ? 'Interior / Exterior Design' : 'ইন্টেরিওর / এক্সটেরিওর ডিজাইন',
        image: 'https://i.ibb.co/ssYMqDr/course-in-ex-de.png/',
        rating: 5,
        review: 1234,
        students: 120,
        price: 7000,
        period: lang_ch ? '3/6 Month' : '৩/৬ মাস',
        lecture: lang_ch ? '36' : '৩৬ টি',
        link: './courses/int_ext_design.html',
        details: 'ঘর থেকে অফিস, ক্লাসরুম, রেস্টুরেন্ট কিংবা হোটেল সবখানেই মানুষ এখন চায় আধুনিকতার ছোঁয়া। এ কারণেই বর্তমানে অনলাইন মার্কেটপ্লেসেও ইন্টেরিয়র ও এক্সটেরিয়র ডিজাইনারের চাহিদা বেড়েছে বহুগুণে। তাই এই চাহিদাসম্পন্ন পেশায় নিজের ক্যারিয়ার গড়তে আজই ভর্তি হন Interior & Exterior Design course এ।',
    },
    {
        id: 'ui_ux',
        course_title: lang_ch ? 'UI / UX Design' : 'ইউআই / ইউএক্স ডিজাইন',
        image: 'https://i.ibb.co/4sM924M/course-ui-ux.png/',
        rating: 5,
        review: 1234,
        students: 120,
        price: 7000,
        period: lang_ch ? '3/6 Month' : '৩/৬ মাস',
        lecture: lang_ch ? '36' : '৩৬ টি',
        link: './courses/ui_ux_design.html',
        details: 'এক জরিপে দেখা গেছে, প্রায় ৭৭ শতাংশ অনলাইন বিজনেস বন্ধ হয়ে যাওয়ার কারণ হল তাদের ওয়েবসাইট ইউজার ফ্রেন্ডলি না হওয়া। কোনো ওয়েব সাইট বা অ্যাপ ইউজার ফ্রেন্ডলি করার ম্যাজিশিয়ান হলেন একজন UX/UI ডিজাইনার। আপনার যদি ভাল ডিজাইন সেন্স থাকে আর graphical element নিয়ে কাজ করতে স্বাচ্ছন্দ্যবোধ করেন তাহলে এই কোর্সটি আপনার জন্যই।',
    },
]


var show_all_courses = document.querySelectorAll('.show_all_courses');
console.log(show_all_courses);

var classes_min_card = [
    'violet',
    'pink',
    'sky'
]
var cml = classes_min_card.length

var c_length = courses.length;


show_all_courses.forEach(course =>{
    for(var i=0; i<c_length; i++){
        var content = `
                <div class="course-card ${ classes_min_card[ i<cml ? i: i%cml] } fade_in slider_item">
                <img src="${ courses[i].image }" alt="">
                <div class="card-body">
                    <div class="course-name">
                        ${ courses[i].course_title }
                    </div>
                    <div class="min-card">
                        <div class="rating">
                            <img src="./assets/stars.svg" alt="">
                        </div>
                        <div class="reviews">
                            ${ courses[i].review } Reviews
                        </div>
                        <div class="students">
                            ${ courses[i].students } Students
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="price">
                            ${ courses[i].price } Bdt
                        </div>
                        <a class="btn cc" href='${ courses[i].link }'>
                            View Details
                            <span class="icon">
                                <img src="./assets/arrow_right.svg" alt="">
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        `;
        course.innerHTML += content
        
    }
    
})

var l_text = document.querySelector('.landing_text');
if(l_text){
    var l_text_content = l_text.textContent;
    var split_text = l_text_content.split("");
    l_text.textContent = ''
}
var char = 0;
var counter = 0
var timer;
function landing_animator(){
    
    
    for (let i = 0; i < l_text_content.length; i++) {
        const element = l_text_content[i];
        var content = `<span class='span'>${element}</span>`;
        if(element != ' '){
            l_text.innerHTML += content;
            counter++
        }
        
    }
    timer = setInterval(onTick, 50);
    
    
}

    
function onTick() {

    const span = document.querySelectorAll('span.span')[char];
    span.classList.add('fa');
    char++;
    if(char === counter){
        completed();
        return
    }
    
}
function completed() {
    clearInterval(timer);
}

console.log(split_text);



var loader = document.querySelector('.loader');
    
var images = document.querySelectorAll('.course-card img')
var imgLoaded = 0;
images.forEach(img=>{
    img.addEventListener('load', ()=>{
        imgLoaded++;
        removeLoader(imgLoaded);
    })
})

function removeLoader(i){
    if(i == images.length){
        loader.style.display = 'none';
        if(l_text){
            landing_animator();
        }
        
    }
}



var menu_course_btn = document.querySelector('.course_btn.menu_course_btn');

if(menu_course_btn){
    for(var i=0; i<c_length; i++){
        var content = `
        <a href="${ courses[i].link }" class="course" style="background:linear-gradient(45deg, rgba(255,255,255,0.8), rgba(255,255,255,0.9)), url('${ courses[i].image }');background-size: cover;background-position: 50% 50%;">
            <div class="course_name">
                ${ courses[i].course_title }
            </div>
            <div class="students">
                ${ courses[i].students } Students
            </div>
        </a>
        `
        menu_course_btn.innerHTML += content
    }
}


var course_details = document.querySelectorAll('.course_details');
course_details.forEach(course =>{

    var z;
    for (let i = 0; i < c_length; i++) {
        if (course.classList[1] == courses[i].id) {
            z=i
            break
        }
    }
    var content = `
        <div class="left_part">
            <h1 class="course_title">
                ${ courses[z].course_title }
            </h1>
            <div class="box">
                <div class="min_box">
                    <div class="up">
                        কোর্সের মেয়াদ
                    </div>
                    <div class="down">
                    ${ courses[z].period }
                    </div>
                </div>
                <div class="min_box">
                    <div class="up">
                        লেকচার
                    </div>
                    <div class="down">
                    ${ courses[z].lecture }
                    </div>
                </div>
            </div>
            <div class="details_text">
            ${ courses[z].details }
            </div>
            <a href="./../contact_us.html" class="btn btn_primary">
                ভর্তি
            </a>
        </div>
        <div class="right_part" style="background: url(${ courses[z].image });">
        </div>
    `
    course.innerHTML = content

})