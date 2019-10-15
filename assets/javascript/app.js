$(document).ready(function () {

let theQuestion = 0
let correctAnswers = 0
let incorrectAnswers = 0
let unansweredQuestions
let questionTimer = 20
let resultTimer = 6

let triviaQuestions = [

    {question: "Where did Meredith Grey go to College?", 
        answers: ["Darmouth College", "Princeton University" , "Prescott College" , "Stanford University"],
        theAnswer: 0,
    },
    
    {question: "What does Cristina Yang call Alex Karev?",
        answers: ["Her Person" , "Evil Spawn" , "Four" , "Trash Can"], 
        theAnswer: 1,
    },

    {question: "Which intern was pregnant at age 16?",
        answers: ["Meredith Grey" , "Lexie Grey" , "Isabell Stevens" , "Miranda Bailey"], 
        theAnswer: 2,
    },

    {question: "What was the name of the first episode?",
        answers: ["'Band-aid Covers the Bullet Hole'", "'A Hard Day's Night'" , "The First Cut is the Deepest" ,                "Raindrop Keeps Falling on My Head"], 
        theAnswer: 1,
    },

    {question: "What is the name of the hospital Meredith works?",
        answers: ["Mercy West", "Seattle West", "Mercy Grace", "Seattle Grace"], 
        theAnswer: 3,
    },

    {question: "What is the name of the bar the doctors hang out in?",
        answers: [ "Emerald City Bar", "Southern Nights", "Ember", "The Lodge"], 
        theAnswer: 0,
    },

    {question: "Who left Cristina Yang at the alter?",
        answers: [ "Derek Shepherd", "Preston Burke", "George O'Malley", "Alex Karev"],
        theAnswer: 1,
    },

    {question: "What is the name that Alex Karev gives the woman he saved from the ferry accident?",
        answers: [ "Reed", "Rebecca", "Miranda", "Ava"], 
        theAnswer: 3,
    },

    {question: "Finish this phrase: You will always be my _______.",
        answers: ["Lover", "Friend", "Person", "Wife"], 
        theAnswer: 2,
    },

    {question: "What is the name that Alex Karev gives the woman he saved from the ferry accident?",
        answers: ["'It’s a beautiful day to save lives.'", "'You will always be my person.'", "'Pick me. Choose me.             Love me.'", "'You were like coming up for fresh air.'"],
        theAnswer: 0,
    },

    {question: "What nickname do the interns give Derek Shephard?",
        answers: ["McDreamy", "McSteamy", "McHottie", "McBitchy"], 
        theAnswer: 0,
    },

    {question: "What is Meredith Grey’s sister’s name? ",
        answers: ["Ellis Grey", "Courtney Grey", "Lexie Grey",  "Rebecca Grey"],
        theAnswer: 2,
    }

] // triviaQuestions end bracket

for (let i = 0 ; i < triviaQuestions.length ; i++ ) {
    console.log(triviaQuestions[i].question)

}

console.log("BREAK!")

$(".button").on("click" , function() {
    console.log("you clicked the start button")
    questionGenerator()

})

function questionGenerator() {
    //resetTimer
    showText()

    $(".question").html(triviaQuestions[theQuestion].question)
    console.log(triviaQuestions[theQuestion].question)

    $(".answerOne").html(triviaQuestions[theQuestion].answers[0])
    $(".answerTwo").html(triviaQuestions[theQuestion].answers[1])
    $(".answerThree").html(triviaQuestions[theQuestion].answers[2])
    $(".answerFour").html(triviaQuestions[theQuestion].answers[3])
    
    $(".answerOne").on("click", {answer: 0} , questionHandler)
    $(".answerTwo").on("click", {answer: 1} , questionHandler)
    $(".answerThree").on("click", {answer: 2} , questionHandler)
    $(".answerFour").on("click", {answer: 3} , questionHandler)
    
}

function questionHandler(click) {
    let answerIndex = click.data.answer
    
    if (answerIndex == triviaQuestions[theQuestion].theAnswer) {
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
    alert("you got it wrong") 
    theDelay()  
}

function theDelay() {
    theQuestion++;
    questionChecker()    
    setTimeout(questionGenerator, 3000);
    //resetTimer
}

function questionChecker() {
    if (theQuestion == triviaQuestions.length){
        console.log("you've reached the ends")
        alert("You're done!")
    }
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