/*
==========================================================
HSSWorks

Common Framework
File : scroll.js

Author : OpenAI + Daine Davies
==========================================================
*/

"use strict";

/*==========================================================
INITIALIZE
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeRevealAnimation();

    initializeBackToTop();

    initializeReadingProgress();

});


/*==========================================================
REVEAL ON SCROLL
==========================================================*/

function initializeRevealAnimation(){

    const elements = document.querySelectorAll(".reveal");

    if(elements.length===0) return;

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    elements.forEach(element=>{

        observer.observe(element);

    });

}


/*==========================================================
BACK TO TOP BUTTON
==========================================================*/

function initializeBackToTop(){

    const button = document.querySelector(".back-to-top");

    if(!button) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            button.classList.add("show");

        }
        else{

            button.classList.remove("show");

        }

    });

    button.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}


/*==========================================================
READING PROGRESS BAR
==========================================================*/

function initializeReadingProgress(){

    const progress = document.querySelector(".reading-progress");

    if(!progress) return;

    window.addEventListener("scroll",()=>{

        const pageHeight =

            document.documentElement.scrollHeight -

            window.innerHeight;

        const percentage =

            (window.scrollY/pageHeight)*100;

        progress.style.width = percentage + "%";

    });

}


/*==========================================================
SCROLL TO ELEMENT
==========================================================*/

function scrollToElement(selector){

    const element = document.querySelector(selector);

    if(!element) return;

    element.scrollIntoView({

        behavior:"smooth",

        block:"start"

    });

}


/*==========================================================
SCROLL TO TOP
==========================================================*/

function scrollTopSmooth(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}


/*==========================================================
SCROLL TO BOTTOM
==========================================================*/

function scrollBottomSmooth(){

    window.scrollTo({

        top:document.body.scrollHeight,

        behavior:"smooth"

    });

}


/*==========================================================
GET SCROLL PERCENTAGE
==========================================================*/

function getScrollPercentage(){

    const pageHeight =

        document.documentElement.scrollHeight -

        window.innerHeight;

    if(pageHeight<=0) return 100;

    return Math.round(

        (window.scrollY/pageHeight)*100

    );

}


/*==========================================================
IS ELEMENT VISIBLE
==========================================================*/

function isVisible(element){

    const rect = element.getBoundingClientRect();

    return(

        rect.top < window.innerHeight &&

        rect.bottom > 0

    );

}