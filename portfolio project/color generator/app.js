let btn = document.querySelector("button");
let div = document.querySelector("div");
let h2 = document.querySelector("h2");

btn.addEventListener("click" , () =>{
    let randomColor = getRandomColor() ;

    h2.textContent = randomColor;
    div.style.backgroundColor = randomColor;

})

function getRandomColor(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let color = `rgb(${r},${g},${b})`;
    return color ;
}

