/*
==========================================================
HSSWorks

Common Framework
File : accordion.js

Author : OpenAI + Daine Davies
==========================================================
*/

"use strict";

/*==========================================================
INITIALIZE
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeAccordions();

});


/*==========================================================
INITIALIZE ACCORDIONS
==========================================================*/

function initializeAccordions(){

    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(accordion=>{

        const multiple = accordion.dataset.multiple === "true";

        const items = accordion.querySelectorAll(".accordion-item");

        items.forEach(item=>{

            const header = item.querySelector(".accordion-header");

            if(!header) return;

            header.addEventListener("click",()=>{

                if(!multiple){

                    items.forEach(other=>{

                        if(other!==item){

                            closeAccordionItem(other);

                        }

                    });

                }

                toggleAccordionItem(item);

            });

        });

    });

}


/*==========================================================
TOGGLE ITEM
==========================================================*/

function toggleAccordionItem(item){

    if(item.classList.contains("open")){

        closeAccordionItem(item);

    }
    else{

        openAccordionItem(item);

    }

}


/*==========================================================
OPEN ITEM
==========================================================*/

function openAccordionItem(item){

    const body = item.querySelector(".accordion-body");

    if(!body) return;

    item.classList.add("open");

    body.style.maxHeight = body.scrollHeight + "px";

}


/*==========================================================
CLOSE ITEM
==========================================================*/

function closeAccordionItem(item){

    const body = item.querySelector(".accordion-body");

    if(!body) return;

    item.classList.remove("open");

    body.style.maxHeight = "0px";

}


/*==========================================================
OPEN ALL
==========================================================*/

function openAllAccordions(selector=".accordion"){

    document.querySelectorAll(selector).forEach(accordion=>{

        accordion
            .querySelectorAll(".accordion-item")
            .forEach(openAccordionItem);

    });

}


/*==========================================================
CLOSE ALL
==========================================================*/

function closeAllAccordions(selector=".accordion"){

    document.querySelectorAll(selector).forEach(accordion=>{

        accordion
            .querySelectorAll(".accordion-item")
            .forEach(closeAccordionItem);

    });

}


/*==========================================================
EXPAND ITEM BY INDEX
==========================================================*/

function openAccordionIndex(selector,index){

    const accordion = document.querySelector(selector);

    if(!accordion) return;

    const items = accordion.querySelectorAll(".accordion-item");

    if(index<0 || index>=items.length) return;

    openAccordionItem(items[index]);

}
