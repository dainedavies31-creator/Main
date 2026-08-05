/*
==========================================================
HSSWorks

Common Framework
File : flashcard.js

Author : OpenAI + Daine Davies
==========================================================
*/

"use strict";

/*==========================================================
INITIALIZE
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeFlashcards();

});


/*==========================================================
INITIALIZE FLASHCARDS
==========================================================*/

function initializeFlashcards(){

    const flashcards = document.querySelectorAll(".flashcard");

    flashcards.forEach(card=>{

        card.addEventListener("click",()=>{

            flipFlashcard(card);

        });

        card.setAttribute("tabindex","0");

        card.addEventListener("keydown",event=>{

            if(event.key==="Enter" || event.key===" "){

                event.preventDefault();

                flipFlashcard(card);

            }

        });

    });

}


/*==========================================================
FLIP
==========================================================*/

function flipFlashcard(card){

    card.classList.toggle("flipped");

}


/*==========================================================
OPEN
==========================================================*/

function showFlashcardAnswer(card){

    card.classList.add("flipped");

}


/*==========================================================
CLOSE
==========================================================*/

function hideFlashcardAnswer(card){

    card.classList.remove("flipped");

}


/*==========================================================
TOGGLE ALL
==========================================================*/

function flipAllFlashcards(){

    document.querySelectorAll(".flashcard").forEach(card=>{

        card.classList.toggle("flipped");

    });

}


/*==========================================================
SHOW ALL
==========================================================*/

function showAllFlashcards(){

    document.querySelectorAll(".flashcard").forEach(card=>{

        card.classList.add("flipped");

    });

}


/*==========================================================
HIDE ALL
==========================================================*/

function hideAllFlashcards(){

    document.querySelectorAll(".flashcard").forEach(card=>{

        card.classList.remove("flipped");

    });

}


/*==========================================================
COUNT
==========================================================*/

function flashcardCount(){

    return document.querySelectorAll(".flashcard").length;

}


/*==========================================================
COUNT OPEN
==========================================================*/

function openedFlashcards(){

    return document.querySelectorAll(".flashcard.flipped").length;

}


/*==========================================================
RESET
==========================================================*/

function resetFlashcards(){

    hideAllFlashcards();

}
