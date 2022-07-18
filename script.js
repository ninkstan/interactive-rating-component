const submitButton = document.querySelector(".submit");
    
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");

const ratingButton = document.querySelectorAll(".rating");

const score = document.querySelector(".score");

let starScore = 3

submitButton.addEventListener("click", onSubmit);
    
function onSubmit () {
    card1.classList.add("hide");
    score.textContent = starScore;
    card2.classList.remove("hide");
}

ratingButton.forEach ( rating => {
rating.addEventListener("click", ratingButtonClick);
})

function ratingButtonClick(event) {

    ratingButton.forEach ( rating => {
        rating.classList.remove("active");
    })

    if (event.target.classList.contains("rating")) {
        event.target.classList.add("active");
    }

    else {
        event.target.parentElement.classList.add("active");
    }

    starScore = event.target.textContent;

}
