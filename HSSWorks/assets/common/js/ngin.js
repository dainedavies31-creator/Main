
document.addEventListener('DOMContentLoaded', init);

function init(){
    const Engine = new ContentEngineI
}
;
class ContentEngineI {
    constructor(){
        let elm = document.createElement('div');
        elm = this.titlesec('1', 'title', 'description');
        elm = this.hoverLiftCard('title', 'contents');
        elm = this.overviewsec('overview', 'objective', 'importance');
        elm = this.featureCard('💡📜', 'title', 'concept');
        elm = this.infobox('head', 'body');
        elm = this.successbox('head', 'body');
        elm = this.warningbox('head', 'body');
        elm = this.dangerbox('head', 'body');
        elm = this.figure('./assets/common/images/animejs-v4-logo-animation.gif', 'example image', 'just testing the library');
        
    }
    lnbrk = document.createElement('br');
    titlesec(chapternumber, chaptertitle, chapterdescription) {
        //main box
        const herobx = document.createElement('section');
        herobx.id='hero';
        herobx.classList.add('hero', 'reveal');
        //title badge
        const badge = document.createElement('span');
        badge.classList.add('badge');
        badge.innerHTML=chapternumber;
        //chapter title
        const chttllbl = document.createElement('h1');
        chttllbl.innerHTML=chaptertitle;
        //chapter description
        const descbx = document.createElement('p');
        descbx.innerHTML=chapterdescription;
        //a simple continue button
        const nxtbtn = document.createElement('a');
        nxtbtn.href = '#overview';
        nxtbtn.classList.add('button');
        //adding em all together
        herobx.appendChild(badge);
        herobx.appendChild(chttllbl);
        herobx.appendChild(descbx);
        herobx.appendChild(this.lnbrk);
        herobx.appendChild(nxtbtn);
        //submit
        return herobx;
    }
    hoverLiftCard(title, contents) {
        //main box
        const crd = document.createElement('div');
        crd.classList.add('card', 'hover-lift', 'reveal');
        //card's title
        const ttl = document.createElement('h3');
        ttl.innerHTML = title;
        //text inside the card
        const txt = document.createElement('p');
        txt.innerHTML = contents;
        crd.appendChild(ttl);
        crd.appendChild(txt);
        //submit
        return crd;
    }
    overviewsec(overview, objective, importance) {
        //main box
        const ovrvwbx = document.createElement('section');
        ovrvwbx.id='overview';
        ovrvwbx.classList.add('reveal');
        //section title
        const ovrvwttl = document.createElement('h2');
        ovrvwttl.classList.add('section-title');
        ovrvwttl.innerHTML = 'Overview';
        //overview text
        const ovrvwtxt = document.createElement('p');
        ovrvwtxt.classList.add('section-subtitle');
        ovrvwtxt.innerHTML = overview;
        //grid box for the cards
        const gridbx = document.createElement('div');
        gridbx.classList.add('grid');
        gridbx.classList.add('grid-2');
        //objective and importance cards
        const objvcrd = this.hoverLiftCard('Objective', objective);
        const impcrd = this.hoverLiftCard('Importance', importance);
        //add the cards to the grid box
        gridbx.appendChild(objvcrd);
        gridbx.appendChild(impcrd);
        //add em all together
        ovrvwbx.appendChild(ovrvwttl);
        ovrvwbx.appendChild(ovrvwtxt);
        ovrvwbx.appendChild(gridbx);
        //submit
        return ovrvwbx;
    }
    featureCard(icon, title, concept) {
        //main box
        const mnbx = document.createElement('div');
        mnbx.classList.add('feature');
        //icon box
        const icnbx = document.createElement('div');
        icnbx.classList.add('feature-icon');
        icnbx.innerHTML = icon;
        //content box
        const cntbx = document.createElement('div');
        cntbx.classList.add('feature-content');
        //title
        const ttl = document.createElement('h3');
        ttl.innerHTML = title;
        //concept text
        const txt = document.createElement('p');
        txt.innerHTML = concept;
        //add title and concept to the contents box
        cntbx.appendChild(ttl);
        cntbx.appendChild(txt);
        //add icon box and content box into main box
        mnbx.appendChild(icnbx);
        mnbx.appendChild(cntbx);
        //submit
        return mnbx;
    }
    infobox(head, body) {
        //main box
        const mnbx = document.createElement('div');
        mnbx.classList.add('info-box', 'reveal')
        //head
        const ttl = document.createElement('h4');
        ttl.innerHTML = head;
        //body
        const txt = document.createElement('p');
        txt.innerHTML = body;
        //add em all together
        mnbx.appendChild(ttl, txt)
        //submit
        return mnbx;
    }
    succesbox(head, body) {
        //main box
        const mnbx = document.createElement('div');
        mnbx.classList.add('success-box', 'reveal')
        //head
        const ttl = document.createElement('h4');
        ttl.innerHTML = head;
        //body
        const txt = document.createElement('p');
        txt.innerHTML = body;
        //add em all together
        mnbx.appendChild(ttl, txt)
        //submit
        return mnbx;
    }
    warningbox(head, body) {
        //main box
        const mnbx = document.createElement('div');
        mnbx.classList.add('warning-box', 'reveal')
        //head
        const ttl = document.createElement('h4');
        ttl.innerHTML = head;
        //body
        const txt = document.createElement('p');
        txt.innerHTML = body;
        //add em all together
        mnbx.appendChild(ttl, txt)
        //submit
        return mnbx;
    }
    dangerbox(head, body) {
        //main box
        const mnbx = document.createElement('div');
        mnbx.classList.add('danger-box', 'reveal')
        //head
        const ttl = document.createElement('h4');
        ttl.innerHTML = head;
        //body
        const txt = document.createElement('p');
        txt.innerHTML = body;
        //add em all together
        mnbx.appendChild(ttl, txt)
        //submit
        return mnbx;
    }
    figure(source, alternatetext, caption) {
        //main box
        const mnbx = document.createElement('figure');
        mnbx.classList.add('image-card');
        //image
        const img = document.createElement('img');
        img.src = source;
        img.alt = alternatetext;
        //caption
        const cptn = document.createElement('figcaption');
        cptn.innerHTML = caption;
        //add em all together
        mnbx.appendChild(img, cptn);
        //submit
        return mnbx;
    }
    codeblock(code, output) {
        //main box
        const mnbx = document.createElement('div');
        //code block
        const codbx = document.createElement('pre');
        codbx.innerText = code 
        //output block
        const outbx = document.createElement('div');
        outbx.innerHTML = output;
        //add em all together
        mnbx.appendChild(codbx, lnbrk, outbx);
        //submit
        return mnbx;
    }
}
