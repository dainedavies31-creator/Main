/*
==========================================================
HSSWorks

Common Framework
File : animations.js

Author : OpenAI + Daine Davies
==========================================================
*/

"use strict";


/*==========================================================
INITIALIZE
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeAnimatedCounters();

    initializeTypingAnimations();

    initializeStaggerAnimations();

    initializeHoverAnimations();

});


/*==========================================================
COUNTER ANIMATION
==========================================================*/

function initializeAnimatedCounters(){

    const counters =
        document.querySelectorAll("[data-counter]");


    counters.forEach(counter=>{

        const target =
            Number(counter.dataset.counter);


        let current = 0;


        const speed = 
            target / 60;


        function update(){

            current += speed;


            if(current < target){

                counter.textContent =
                    Math.floor(current);

                requestAnimationFrame(update);

            }
            else{

                counter.textContent =
                    target;

            }

        }


        update();


    });

}


/*==========================================================
TYPING EFFECT
==========================================================*/

function initializeTypingAnimations(){

    const elements =
        document.querySelectorAll("[data-typing]");


    elements.forEach(element=>{


        const text =
            element.dataset.typing;


        element.textContent="";


        let index=0;


        function type(){

            if(index < text.length){

                element.textContent +=
                    text[index];

                index++;

                setTimeout(
                    type,
                    60
                );

            }

        }


        type();


    });

}


/*==========================================================
STAGGER ANIMATION
==========================================================*/

function initializeStaggerAnimations(){

    const groups =
        document.querySelectorAll(
            "[data-stagger]"
        );


    groups.forEach(group=>{


        const children =
            group.children;


        [...children].forEach(
            (child,index)=>{


                child.style.animationDelay =
                    `${index*0.12}s`;


                child.classList.add(
                    "slide-up"
                );


            }
        );


    });

}


/*==========================================================
HOVER INTERACTION
==========================================================*/

function initializeHoverAnimations(){

    const cards =
        document.querySelectorAll(
            ".card,.feature,.image-card"
        );


    cards.forEach(card=>{


        card.addEventListener(
            "mouseenter",
            ()=>{

                card.classList.add(
                    "hover-lift"
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            ()=>{

                card.classList.remove(
                    "hover-lift"
                );

            }
        );


    });

}


/*==========================================================
SHAKE ELEMENT
==========================================================*/

function shake(element){

    if(!element) return;


    element.classList.add(
        "shake"
    );


    setTimeout(()=>{

        element.classList.remove(
            "shake"
        );

    },500);

}


/*==========================================================
POP ELEMENT
==========================================================*/

function pop(element){

    if(!element) return;


    element.classList.add(
        "pop"
    );


    setTimeout(()=>{

        element.classList.remove(
            "pop"
        );

    },500);

}


/*==========================================================
FADE ELEMENT
==========================================================*/

function fadeOut(element){

    if(!element) return;


    element.style.opacity="0";


    setTimeout(()=>{

        element.style.display="none";

    },400);

}


function fadeIn(element){

    if(!element) return;


    element.style.display="block";


    requestAnimationFrame(()=>{

        element.style.opacity="1";

    });

}


/*==========================================================
CREATE RIPPLE EFFECT
==========================================================*/

function createRipple(event){


    const button =
        event.currentTarget;


    const ripple =
        document.createElement("span");


    ripple.className="ripple";


    const rect =
        button.getBoundingClientRect();


    ripple.style.left =
        (event.clientX-rect.left)+"px";


    ripple.style.top =
        (event.clientY-rect.top)+"px";


    button.appendChild(ripple);


    setTimeout(()=>{

        ripple.remove();

    },600);


}
