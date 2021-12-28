const aboutMe= document.querySelector(".aboutMe");
const learnMore= document.querySelector(".btn");
const projectCard= document.querySelector(".projectCard")
const projectButton= document.querySelector(".projectButton");


displayAboutMe=()=>{
aboutMe.classList.remove("d-none");

};
learnMore.addEventListener("click",displayAboutMe );


displayProjectCard=()=>{
    projectCard.classList.remove("d-none");
}
projectButton.addEventListener("click",displayProjectCard);



// function startQuiz(){
//     //remove display none from info card
//     infoCard.classList.remove("d-none");
//     }
//     //when start button is clicked, display info card
//     startButton.addEventListener("click",startQuiz);
    