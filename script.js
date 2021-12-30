const aboutMe= document.querySelector(".aboutMe");
const learnMore= document.querySelector(".btn");
const projectCard= document.querySelector(".projectCard")
const projectButton= document.querySelector(".projectButton");
const contactMe= document.querySelector(".contactMe");


displayAboutMe=()=>{
aboutMe.classList.remove("d-none");

};
learnMore.addEventListener("click",displayAboutMe );


displayProjectCard=()=>{
    projectCard.classList.remove("d-none");
}
projectButton.addEventListener("click",displayProjectCard);

const aboutMeMenu= document.querySelector(".aboutMeMenu");
const projectsMenu= document.querySelector(".projectsMenu");
const contactmeMenu= document.querySelector(".contactMeMenu");

displayAboutMeMenu=()=>{
    aboutMe.classList.remove("d-none");
}
aboutMeMenu.addEventListener("click",displayAboutMeMenu);

displayProjectMenu=()=>{
    projectCard.classList.remove("d-none");
}
projectsMenu.addEventListener("click",displayProjectMenu);   

displayContactMenu=()=>{
    projectCard.classList.remove("d-none");
}
contactmeMenu.addEventListener("click",displayContactMenu);
// function startQuiz(){
//     //remove display none from info card
//     infoCard.classList.remove("d-none");
//     }
//     //when start button is clicked, display info card
//     startButton.addEventListener("click",startQuiz);
    