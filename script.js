const aboutMe= document.querySelector(".aboutMe");
const learnMore= document.querySelector(".btn")

displayAboutMe=()=>{
aboutMe.classList.remove("d-none");
}

learnMore.addEventListener("click", displayAboutMe);

// function startQuiz(){
//     //remove display none from info card
//     infoCard.classList.remove("d-none");
//     }
//     //when start button is clicked, display info card
//     startButton.addEventListener("click",startQuiz);
    