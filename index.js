import blogs from './data.js';
const nav_aboutMe = document.getElementById("nav-about-me");
const nav_home = document.getElementById("nav-home");
const insert_heroPost = document.getElementById("insert-hero-post");
const select_heroPost = document.getElementById("select-hero-post");
const heroPost = document.getElementById("hero-post");
const aboutMe = document.getElementById("about-me");

nav_aboutMe.addEventListener("click",(e)=>{
    aboutMe.style.display = "flex";
    heroPost.style.display = "none";
    insert_heroPost.innerHTML = select_heroPost.innerHTML;
});

nav_home.addEventListener("click",(e)=>{
    const blogs = document.getElementsByClassName("blogs");
    const screenWidth = screen.width
    aboutMe.style.display = "none";
    heroPost.style.display = "flex";
    // @media min width
    if(screenWidth < 1000){   
        for(let i=3;i<blogs.length;i++){
            blogs[i].style.display = "none";
        }
        viewMore.style.display = "inherit";
    }
});

let htmlText = ``;
for(let el of blogs){
    const {image,description,date,title} = el;
    htmlText += `
    <div class="blogs">
    <img class="blog-img" src="./images/${image}" alt="modern office space with a computer open to lines of code"></img>
    <p class="blog-date">${date}</p>
    <h2 class="blog-title">${title}</h2>
    <p class="blog-description">${description}</p>
    </div>
    `;
}

const render = (param1)=>{
    document.getElementById("blog-container").innerHTML = param1;
}

render(htmlText + `<h4 id="view-more">View More</h4>`);

const viewMore = document.getElementById("view-more");

viewMore.addEventListener('click', (e)=>{
    const blogs = document.getElementsByClassName("blogs");
    for(let el of blogs){
        el.style.display = "flex";
    }
    viewMore.style.display = "none";
});