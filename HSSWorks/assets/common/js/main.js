/*
==========================================================
HSSWorks

Common Framework
File : main.js

Author : OpenAI + Daine Davies
==========================================================
*/

"use strict";

/*==========================================================
GLOBAL OBJECT
==========================================================*/

window.HSSWorks = {

    version: "1.0.0",

    initialized: false

};


/*==========================================================
READY
==========================================================*/

document.addEventListener("DOMContentLoaded", init);


/*==========================================================
INITIALIZE
==========================================================*/

function init(){

    if(HSSWorks.initialized) return;

    HSSWorks.initialized = true;

    initializeCurrentYear();

    initializeExternalLinks();

    initializeImageCards();

    initializeButtons();

    initializeLazyLoading();

}


/*==========================================================
CURRENT YEAR
==========================================================*/

function initializeCurrentYear(){

    document
        .querySelectorAll(".current-year")
        .forEach(element=>{

            element.textContent =
                new Date().getFullYear();

        });

}


/*==========================================================
EXTERNAL LINKS
==========================================================*/

function initializeExternalLinks(){

    document
        .querySelectorAll("a[target='_blank']")
        .forEach(link=>{

            link.rel =
                "noopener noreferrer";

        });

}


/*==========================================================
BUTTON RIPPLE
==========================================================*/

function initializeButtons(){

    document
        .querySelectorAll(".button")
        .forEach(button=>{

            button.addEventListener("click",()=>{

                button.classList.add("pop");

                setTimeout(()=>{

                    button.classList.remove("pop");

                },450);

            });

        });

}


/*==========================================================
IMAGE CARDS
==========================================================*/

function initializeImageCards(){

    document
        .querySelectorAll(".image-card img")
        .forEach(image=>{

            image.loading="lazy";

            image.draggable=false;

        });

}


/*==========================================================
LAZY LOADING
==========================================================*/

function initializeLazyLoading(){

    document
        .querySelectorAll("img:not([loading])")
        .forEach(image=>{

            image.loading="lazy";

        });

}


/*==========================================================
HELPER
==========================================================*/

function $(selector){

    return document.querySelector(selector);

}

function $$(selector){

    return document.querySelectorAll(selector);

}


/*==========================================================
SHOW
==========================================================*/

function show(element){

    element.classList.remove("hidden");

}


/*==========================================================
HIDE
==========================================================*/

function hide(element){

    element.classList.add("hidden");

}


/*==========================================================
TOGGLE
==========================================================*/

function toggle(element){

    element.classList.toggle("hidden");

}
