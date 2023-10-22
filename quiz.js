let quiz =
    [
        {
            Question: "What is the capital city of Australia?",
            Options: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
            Answer: 1,
        },

        {
            Question: `Who wrote the famous play "Romeo and Juliet"?`,
            Options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"],
            Answer: 2
        },

        {
            Question: `Which planet is known as the "Red Planet"?`,
            Options: ["Venus", "Jupiter", "Mars", "Saturn"],
            Answer: 3,
        },

        {
            Question: "In which year did the Titanic sink after hitting an iceberg?",
            Options: ["1914", "1907", "1912", "1920"],
            Answer: 3,
        },

        {
            Question: "What is the largest mammal in the world?",
            Options: ["Blue Whale", "African Elephant", "Giraffe", "Polar Bear"],
            Answer: 1,
        },

        {
            Question: `Who is the author of "To Kill a Mockingbird," a classic novel dealing with issues of racial injustice?`,
            Options: ["J.K. Rowling", " George Orwell", "Mark Twain", "Harper Lee"],
            Answer: 4,
        }];
let times = 10;
let currentindex = 0;
let Attemps = 0;
let correct = 0;
let wrong = 0;
let timeupshogaya = true;
printQuestion(currentindex);

function printQuestion(i) {

    // console.log(quiz[0]);
    document.querySelector(".Q1").textContent = quiz[i].Question;
    document.querySelectorAll(".option li")[0].textContent = quiz[i].Options[0];
    document.querySelectorAll(".option li")[1].textContent = quiz[i].Options[1];
    document.querySelectorAll(".option li")[2].textContent = quiz[i].Options[2];
    document.querySelectorAll(".option li")[3].textContent = quiz[i].Options[3];
    let timerElement = document.querySelector("#time");
    let remainingTime = times;
    function uptime() {
        min = Math.floor(remainingTime / 60);
        sec = remainingTime % 60;
        timerElement.textContent = min + ":" + sec;
        if (remainingTime == 0) {
            timeupshogaya = false;
            alert("Time's up for this question!");
        }
        else {
            remainingTime--;
            setTimeout(uptime, 1000)
        }
    }
    uptime();
}

let optionClicked = 0
if (timeupshogaya) {
    function checkAnswer(Options) {

        // let optionClicked=document.querySelector(".option li").isDefaultNamespace("opt");
        // console.log(optionClicked);
        optionClicked = Options.getAttribute("data-opt");
        // console.log(optionClicked);
        console.log(optionClicked);
        if (optionClicked == quiz[currentindex].Answer) {
            correct++;

        }
        else { wrong++; }

    }
}
let result;
function nextQuestion() {
    if (optionClicked > 0) {
        Attemps++;
        // clearTimeout("#time");
        if (currentindex < quiz.length - 1) {
            currentindex++;
            printQuestion(currentindex);
        } else {
            alert("Quiz completed!");
            result = confirm('If you want to see the scroe, please enter ok otherwise enter cancle');
            if (result) {
                showResult();
            }
        }
    }
    optionClicked = 0;
}
function SkipQuestion() {
    if (currentindex < quiz.length - 1) {
        currentindex++;
        clearTimeout("#time");
        printQuestion(currentindex);
    } else {
        alert("Quiz completed!");
        result = confirm('If you want to see the scroe, please enter ok otherwise enter cancle');
        if (result) {
            showResult();
        }
    }
}
let score = correct * 5 - wrong * 1;
let attemps;
let corrects;
let wrongs;
let score_correct;
let form = document.querySelector("form");
var results_correct = JSON.parse(localStorage.getItem("results_correct")) ?? [];
function Showresult() {
    const results =
    {
        attempts: Attemps,
        corrects: correct,
        wrongs: wrong,
        score_correct: score,
    };

    results_correct.push(results);
    localStorage.setItem("results_correct", JSON.stringify(results_correct));

}

function hidden() {
    document.getElementById("quizz").style.display = "none";
}
setTimeout("hidden()", 60000);
function show() {
    document.getElementById("result").style.display = "block"
}
setTimeout("show()", 60001);
// localStorage.setItem('quizresult',JSON.stringify(Showresult));
// document.querySelector('.quiz').style.display = 'none';
// document.querySelector('.result-show').removeAttribute('hidden');
// document.querySelector('#attem').textContent = results.attempts;
// document.querySelector('#cort').textContent = results.corrects;
// document.querySelector('#worg').textContent = results.wrongs;
// document.querySelector('#scor').textContent = results.score_correct;
// }
// let form = document.querySelector('form');
// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     if (result) {
//         Showresult();
//     }
// });

// console.log(quiz[0]);
function showResult() {
    document.querySelector("#attem").textContent = Attemps;
    document.querySelector("#cort").textContent = correct;
    document.querySelector("#wrog").textContent = wrong;
    document.querySelector("#scor").textContent = score;
}
