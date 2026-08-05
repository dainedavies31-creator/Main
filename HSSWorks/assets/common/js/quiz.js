/*
==========================================================
HSSWorks

Common Framework
File : quiz.js

Author : OpenAI + Daine Davies
==========================================================
*/

"use strict";

/*==========================================================
INITIALIZE
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeQuizzes();

});


/*==========================================================
INITIALIZE QUIZZES
==========================================================*/

function initializeQuizzes(){

    const quizzes = document.querySelectorAll(".quiz");

    quizzes.forEach(quiz=>{

        prepareQuiz(quiz);

    });

}


/*==========================================================
PREPARE QUIZ
==========================================================*/

function prepareQuiz(quiz){

    const submitButton = quiz.querySelector(".quiz-submit");

    const resetButton = quiz.querySelector(".quiz-reset");

    if(submitButton){

        submitButton.addEventListener("click",()=>{

            evaluateQuiz(quiz);

        });

    }

    if(resetButton){

        resetButton.addEventListener("click",()=>{

            resetQuiz(quiz);

        });

    }

}


/*==========================================================
EVALUATE
==========================================================*/

function evaluateQuiz(quiz){

    let score = 0;

    const questions = quiz.querySelectorAll(".question");

    questions.forEach(question=>{

        const answer = question.dataset.answer;

        const selected = question.querySelector("input[type='radio']:checked");

        question.classList.remove("correct","wrong");

        if(!selected) return;

        if(selected.value===answer){

            score++;

            question.classList.add("correct");

        }
        else{

            question.classList.add("wrong");

        }

    });

    displayScore(quiz,score,questions.length);

}


/*==========================================================
DISPLAY SCORE
==========================================================*/

function displayScore(quiz,score,total){

    let result = quiz.querySelector(".quiz-result");

    if(!result){

        result=document.createElement("div");

        result.className="quiz-result";

        quiz.appendChild(result);

    }

    result.innerHTML=
        "<strong>Score : </strong> "+
        score+
        " / "+
        total;

}


/*==========================================================
RESET QUIZ
==========================================================*/

function resetQuiz(quiz){

    quiz
        .querySelectorAll("input[type='radio']")
        .forEach(input=>{

            input.checked=false;

        });

    quiz
        .querySelectorAll(".question")
        .forEach(question=>{

            question.classList.remove("correct","wrong");

        });

    const result=quiz.querySelector(".quiz-result");

    if(result){

        result.remove();

    }

}


/*==========================================================
SHOW ANSWERS
==========================================================*/

function showQuizAnswers(quiz){

    quiz
        .querySelectorAll(".question")
        .forEach(question=>{

            const answer=question.dataset.answer;

            question
                .querySelectorAll("input[type='radio']")
                .forEach(option=>{

                    if(option.value===answer){

                        option.checked=true;

                    }

                });

        });

}


/*==========================================================
DISABLE QUIZ
==========================================================*/

function disableQuiz(quiz){

    quiz
        .querySelectorAll("input")

        .forEach(input=>{

            input.disabled=true;

        });

}


/*==========================================================
ENABLE QUIZ
==========================================================*/

function enableQuiz(quiz){

    quiz
        .querySelectorAll("input")

        .forEach(input=>{

            input.disabled=false;

        });

}


/*==========================================================
GET SCORE
==========================================================*/

function getQuizScore(quiz){

    const questions=quiz.querySelectorAll(".question");

    let score=0;

    questions.forEach(question=>{

        const selected=question.querySelector("input[type='radio']:checked");

        if(!selected) return;

        if(selected.value===question.dataset.answer){

            score++;

        }

    });

    return{

        score:score,

        total:questions.length

    };

}