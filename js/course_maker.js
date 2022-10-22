const courses = [
    {
        course_title: 'Web Development',
        image: 'https://i.ibb.co/0CW30Gw/course-we-dev.png/',
        rating: 5,
        review: 1234,
        students: 120,
        price: 12000,
        link: '/courses/web_dev.html'
    },
    {
        course_title: 'Web Designing',
        image: 'https://i.ibb.co/tbZCtjG/course-we-de.png/',
        rating: 5,
        review: 1234,
        students: 120,
        price: 12000,
        link: '/courses/web_des.html'
    },
    {
        course_title: 'Basic Computer',
        image: 'https://i.ibb.co/rdZX0wM/course-ba-co.png/',
        rating: 5,
        review: 1234,
        students: 120,
        price: 12000,
        link: './courses/web_des.html'
    },
    {
        course_title: 'Professional Graphic Design',
        image: 'https://i.ibb.co/rsg8bH3/course-gr-de.png/',
        rating: 5,
        review: 1234,
        students: 120,
        price: 12000,
        link: './courses/web_des.html'
    },
    {
        course_title: 'Digital Marketing',
        image: 'https://i.ibb.co/LdrnbFq/course-di-ma.png/',
        rating: 5,
        review: 1234,
        students: 120,
        price: 12000,
        link: './courses/web_des.html'
    },
    {
        course_title: 'Interior/Exterior Design',
        image: 'https://i.ibb.co/ssYMqDr/course-in-ex-de.png/',
        rating: 5,
        review: 1234,
        students: 120,
        price: 12000,
        link: './courses/web_des.html'
    },
    {
        course_title: 'UI / UX Design',
        image: 'https://i.ibb.co/4sM924M/course-ui-ux.png/',
        rating: 5,
        review: 1234,
        students: 120,
        price: 12000,
        link: './courses/web_des.html'
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