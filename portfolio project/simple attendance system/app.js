//problem 1

// let inp = document.querySelector("input");
// let btn = document.querySelector("button");
// let p = document.querySelector("p");

// btn.addEventListener("click", () =>{
//     p.innerText = `Wellcome ${inp.value} `
// })

// //problem 2

// let btn = document.querySelector("button");
// let body = document.querySelector("body");
// let mode = 'light';

// btn.addEventListener("click",() =>{
//     if(mode === "light"){
//         mode = "dark"
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }else{
//         mode = "light"
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
// })

// //problem 3
// let textarea = document.querySelector("#text");
// let count = document.querySelector("#count");

// textarea.addEventListener("input", () => {
//     count.innerText = textarea.value.length;
// });

//problem 4


//problem 5

let btnP = document.querySelectorAll(".present");
let btnA = document.querySelectorAll(".absent");
let li = document.querySelectorAll("li");
let pOl = document.querySelector(".presentLi");
let aOl = document.querySelector(".absentLi");
let reset = document.querySelector(".reset");
let total = document.querySelector(".total");
let pre = document.querySelector(".pre");
let abs = document.querySelector(".abs");
let all = document.querySelector(".all");


btnP.forEach((btn) => {
    btn.addEventListener("click", () => {

        let studentName = btn.parentElement.firstChild.textContent.trim();

        let pLi = document.createElement("li");
        pLi.innerText = `${studentName} is present`;

        pOl.append(pLi);
        btn.disabled = true;
        btn.nextElementSibling.disabled = true;

        let totalP = pOl.querySelectorAll("li").length;
        pre.textContent = totalP;


    });
});

btnA.forEach((Abtn) => {
    Abtn.addEventListener("click", (evt) => {

        let studentName = Abtn.parentElement.firstChild.textContent.trim();

        let aLi = document.createElement("li");
        aLi.innerText = `${studentName} is Absent`;

        aOl.append(aLi);
        Abtn.disabled = true;
        Abtn.previousElementSibling.disabled = true;

        let totalA = aOl.querySelectorAll("li").length;
        abs.textContent = totalA;

    });
});

reset.addEventListener("click", () => {
    pOl.innerHTML = "";
    aOl.innerHTML = "";
    pre.textContent = "";
    abs.textContent = "";
});

let allStudent = total.querySelectorAll("li");

all.textContent = allStudent.length;







