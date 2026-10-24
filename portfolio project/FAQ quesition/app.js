let questions = document.querySelectorAll(".question");

questions.forEach((que) => {
    que.addEventListener("click", () => {
        let dis = que.nextElementSibling;

        let all = document.querySelectorAll(".hide");
        all.forEach((answer) =>{
            if(answer !== dis){
                answer.style.display = "none";
            }
        })
        if (dis.style.display === "block") {
            dis.style.display = "none";
        } else {
            dis.style.display = "block";
        }
    });
});