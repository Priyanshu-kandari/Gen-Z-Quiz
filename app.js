const form = document.querySelector("#quizform")
const resultText = document.getElementById("result-text")
const resultTag = document.getElementById("result-Tag")


const correct = {
        q1: "KR$NA & Seedhe Maut",
        q2: "Charisma / flirting skill",
        q3: "Rajkumar Rao",
        q4: "acha ji aisa hai kya",
        q5: "Panchayat"
    };

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let score = 0

    for(let keys in correct){
        const selected = document.querySelector(`input[name = ${keys}]:checked`)
        if(selected && selected.value == correct[keys]){
            score++
        }
    }

    resultText.innerText = `you scored ${score}`

    if(score==5){
        resultTag.innerText = "Certified Gen Z Legend 🏆🔥"
    }else if(score>=3){
        resultTag.innerText = "Pretty updated ngl 😎"
    }else{
        resultTag.innerText = "Bro update your pop culture knowledge 💀"
    }
})