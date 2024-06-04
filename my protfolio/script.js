// active menu//////////////////////////////
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// sticky navbar-------------------//

const header= document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",this.window.scrollY > 50)
})


// toggle navbar-------------------//

let menuIcon = document.querySelector("#menu-icon");
let navList = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navList.classList.toggle("open");
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navList.classList.remove("open");
}

// Skill section--------------------------------------//

document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(skillBar => {
        const skillLevel = skillBar.getAttribute('style').match(/--skill-level: (\d+)%/)[1];
        const percentageText = skillBar.querySelector('span');

        let currentPercentage = 0;
        const updatePercentage = () => {
            percentageText.textContent = `${currentPercentage}%`;
            if (currentPercentage < skillLevel) {
                currentPercentage++;
                requestAnimationFrame(updatePercentage);
            }
        };
        updatePercentage();
    });
});
