// random number
const num1 = Math.ceil(Math.random()*50)
const num2 = Math.ceil(Math.random()*50)


const questionEl = document.getElementById("question")
const inputEl = document.getElementById("input")
const formEl = document.getElementById("form")
const scoreEl = document.getElementById("score")

const currectAns = num1*num2

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0
}

scoreEl.innerText = `score: ${score}`



questionEl.innerText = `What is ${num1} Multiply by ${num2} ?`


function updateLocalStoreg(){
    localStorage.setItem("score", JSON.stringify(score))
}

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value;
    if(userAns === currectAns){
        scoreEl++
        addEventListener()
    }else{
        scoreEl--
        addEventListener()
    }
})