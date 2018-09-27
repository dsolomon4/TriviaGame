
// variables for game start
var correctAnswer = 0;
var incorrectAnswer= 0;
var answerTime = 45; // countdown to answer quiz

//hide questions when page loads
 $(".question-holder").hide()

 //score
 $(".score").hide()


// variable for start button
var startQuiz = $("<button>");
startQuiz.addClass("start-button btn btn-outline-secondary btn-display");
startQuiz.html("Start Quiz")
$("#start").append(startQuiz)

// on click start button to start quiz
startQuiz.on("click", function(){
    
    start()
    // reveal question and choices
    $(".question-holder").show()
    // hide start button
    $("#start").hide()
    
})

// fucntion for game start
 function start(){
    answerTime = 45;
    timer()
    runTimer()
 }

 // funtion for pace 
function runTimer() {
    answerCountdown = setInterval(timer, 1000);
}

function timer() {
    //the countdown clock going down
    answerTime--;

    // make a countdown clock visible
    $("#timer").html("You have " + answerTime + " seconds remaining!");

    

    if (answerTime === 0) {
        //  show times up, and show score
       $("#game-over").text("Time's up!")
        clearInterval(answerCountdown)
        $("#timer").hide()
        $(".question-holder").hide()
        endGame()
        $("#score").text(" You got " + correctAnswer + " out of 6!").show()
    }
}


//submit btn to enter quiz
$(".submit-button").on("click", function(){
    alert("hello")
    
})

function displayQuiz(){
// display buttons

}

$(".answer").on("click", function(){
    
    var answer = $(".answer").attr("value");
    console.log(answer)
 //if ($(".answer").attr("value") === "correct"){ 
    correctAnswer ++;
    console.log(correctAnswer)
//}
})


function endGame(){
    
    
    
//     console.log("hi")
   
// )}
// ).attr("value")
// 

// 

// when time runs out, game over screen
// 	show how much time was left

// 	scores for correct, incorrect, and unanswered
// 	a start over button

}




function resetGame(){
 //  reset button will completely reset the game
// 	reset the timer
// 	reset correct/incorrect
// 	reset questions
}