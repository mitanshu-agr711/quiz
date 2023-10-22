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
        let currentindex = 0;
        let hello=0;
   printQuestion(currentindex);
   function printQuestion(i)
   {
    console.log(quiz[0]);
    $(".Q1").text(quiz[i].Question);
    $(".option li").eq(0).text(quiz[i].Options[0]);
    $(".option li").eq(1).text(quiz[i].Options[1]);
    $(".option li").eq(2).text(quiz[i].Options[2]);
    $(".option li").eq(3).text(quiz[i].Options[3]);

   }
   function checkAnswer(Options) {
    hello++;
    
   }

   

// const questionElement = document.getElementsById("question");
// const optionsElement = document.getElementsById("options");
// const nextButton = document.getElemenstById("next1");
// let currentindex = 0;
// let score = 0;

// function startQuiz() {
//     currentindex = 0;
//     score = 0;
//     nextButton.innerHTML = 'Next';
//     showQuestion();
// }
// function showQuestion() {
//     resetState();
//     let currentQuestion =quiz[currentindex];
//     let QuestionNo =currentindex+1;
//     questionElement.innerHTML =QuestionNo  + "." + currentQuestion.Question;
  
//     currentQuestion.Options.forEach((Answer,index)=>
//     {
//         const button=document.createElement("button");
//         button.innerHTML =Answer;
//         button.classList.add("btn");
//         button.addEventListener("click", () => checkAnswer(index));
//         OptionsButton.appendChild(button);

//     });
//     nextButton.style.display = "block";
// }
// // function resetstate()
// // {
// //     nextButton.style.display = "none";
// //     while(optionsElement.firstChild)
// //     {
// //         optionsElement.removeChild(optionsElement.firstChild);
// //     }
// // }

// // startQuiz();
// function checkAnswer(selectedOption) {
//     const currentQuestion = quiz[currentindex];
//     if (selectedOption === currentQuestion.Answer - 1) {
//         // Correct answer
//         score++;
//     }

//     currentindex++;
//     if (currentindex < quiz.length) {
//         showQuestion();
//     } else {
//         // Quiz is over
//         alert("Quiz completed! Your score: " + score + "/" + quiz.length);
//         nextButton.style.display = "none"; // Hide the Next button
//     }
// }

// function resetState() {
//     while (optionsElement.firstChild) {
//         optionsElement.removeChild(optionsElement.firstChild);
//     }
// }

// startQuiz();







