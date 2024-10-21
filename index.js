import blogs from './data.js'

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

render(htmlText);