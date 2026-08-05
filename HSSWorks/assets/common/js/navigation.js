/*
==========================================================
HSSWorks

Common Framework
File : navigation.js

Author : OpenAI + Daine Davies
==========================================================
*/

"use strict";

/*==========================================================
INITIALIZE
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeNavigation();

    initializeScrollSpy();

    initializeMobileNavigation();

});


/*==========================================================
NAVIGATION LINKS
==========================================================*/

function initializeNavigation(){

    const links = document.querySelectorAll("a[href^='#']");

    links.forEach(link=>{

        link.addEventListener("click",event=>{

            const id = link.getAttribute("href");

            if(id.length<=1) return;

            const target = document.querySelector(id);

            if(!target) return;

            event.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        });

    });

}


/*==========================================================
SCROLL SPY
==========================================================*/

function initializeScrollSpy(){

    const sections = document.querySelectorAll("section[id]");

    const navLinks = document.querySelectorAll("a[href^='#']");

    if(sections.length===0) return;

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            const id = entry.target.id;

            navLinks.forEach(link=>{

                link.classList.toggle(

                    "active",

                    link.getAttribute("href")==="#"+id

                );

            });

        });

    },{

        threshold:0.4

    });

    sections.forEach(section=>observer.observe(section));

}


/*==========================================================
MOBILE MENU
==========================================================*/

function initializeMobileNavigation(){

    const button = document.querySelector("[data-nav-toggle]");

    const menu = document.querySelector("[data-navigation]");

    if(!button || !menu) return;

    button.addEventListener("click",()=>{

        menu.classList.toggle("open");

        button.classList.toggle("active");

    });

}


/*==========================================================
OPEN
==========================================================*/

function openNavigation(){

    const menu = document.querySelector("[data-navigation]");

    if(menu){

        menu.classList.add("open");

    }

}


/*==========================================================
CLOSE
==========================================================*/

function closeNavigation(){

    const menu = document.querySelector("[data-navigation]");

    if(menu){

        menu.classList.remove("open");

    }

}


/*==========================================================
TOGGLE
==========================================================*/

function toggleNavigation(){

    const menu = document.querySelector("[data-navigation]");

    if(menu){

        menu.classList.toggle("open");

    }

}


/*==========================================================
PREVIOUS BUTTON
==========================================================*/

function previousPage(){

    history.back();

}


/*==========================================================
NEXT PAGE
==========================================================*/

function nextPage(url){

    if(!url) return;

    window.location.href = url;

}


/*==========================================================
GO TO TOP
==========================================================*/

function goToTop(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}
