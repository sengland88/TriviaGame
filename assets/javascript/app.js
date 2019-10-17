$(document).ready(function () {

let theQuestion = 0
let correctAnswers = 0
let incorrectAnswers = 0
let unansweredQuestions = 0
// let questionSeconds = 20
// var questionCounter
let gameStart = false

$(".answer").on("click", questionHandler)

$(".button").on("click" , function() {
    console.log("you clicked the start button")   
    gameStart = true 
    questionGenerator()
})

function questionGenerator() {    

    if (gameStart) {

        showText()
        theTimer(20)

        $(".question").html(triviaQuestions[theQuestion].question)
        console.log(triviaQuestions[theQuestion].question)
    
        $(".answerOne").html(triviaQuestions[theQuestion].answers[0])
        $(".answerTwo").html(triviaQuestions[theQuestion].answers[1])
        $(".answerThree").html(triviaQuestions[theQuestion].answers[2])
        $(".answerFour").html(triviaQuestions[theQuestion].answers[3])   
    }    
}

function questionHandler() {

    if (gameStart === false) {
        return
    }

    let answerIndex = parseInt($(this).attr("value")) 
    console.log(`${answerIndex} is answer index`)
    // return false
       
    if (answerIndex === triviaQuestions[theQuestion].theAnswer) {
        console.log("correct!")
        correctAnswers++
        cutePopUp()
        console.log(`you have ${correctAnswers} correct answers in the game`)      
    } else {
        console.log("incorrect!")
        incorrectAnswers++        
        uglyPopUp()
        console.log(`you have ${incorrectAnswers} incorrect answers in the game`)
    }    
        
}

function cutePopUp() {
    hideText()
    alert("you got the answer right!")
    theDelay()
}

function uglyPopUp() {
    hideText()
    console.log("you got it wrong") 
    theDelay()  
}

function theDelay() {    
    theQuestion++;
    questionChecker()
    setTimeout(questionGenerator, 3000);
    cle
    //resetTimer
}

function questionChecker() { 
    
    if (theQuestion == triviaQuestions.length){
        console.log("you've reached the ends")
        alert("You're done!")
        gameStart = false
    } 
}

// function theTimes() {
//     clearInterval(questionCounter);
//     console.log(`${questionCounter} is the question counter`)
//     debugger
//     questionCounter = setInterval(theTimer, 1000)
// }

// function theTimer() {
        
//     questionSeconds--
//     $(".seconds").html(questionSeconds)
//     if (questionSeconds === 0) {
//         questionSeconds = 20
//         theQuestion++
//         setTimeout(questionGenerator, 3000);
//         hideText()    
//     }
// }

function theTimer(seconds) {

    let timer = document.querySelector('.seconds');
    timer.innerHTML = seconds;
    // every second
    
    interval = setInterval(function(){
        // grab that number
        let currentNumber = Number(timer.innerHTML);
        // decrease it by 1
        currentNumber--;
        // display the new number on the screen
        timer.innerHTML = currentNumber;
        // if timer  = 0
        if (currentNumber === 0) {
            // stop timer
            unansweredQuestions++
            theQuestion++
            clearInterval(interval);
            setTimeout(questionGenerator, 3000);
            hideText()            
        }
    }, 1000);
}

function hideText() {
    $(".question").hide()
    $(".timer").hide()
    $(".answer").hide()
    $(".theResult").hide()
    $(".button").hide()
}

function showText() {
    $(".question").show()
    $(".timer").show()
    $(".answer").show()
    $(".theResult").show()
    $(".button").show()
}

}) // document ready end bracket