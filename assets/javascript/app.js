$(document).ready(function() {

  hideText()

  let theQuestion = 0;
  let correctAnswers = 0;
  let incorrectAnswers = 0;
  let unansweredQuestions = 0;
  let gameStart = false;


  $("#button").show();
 
  $(".answer").on("click", questionHandler);

  $("#button").on("click", function() {
    // console.log("you clicked the start button");
    gameStart = true;
    questionGenerator();
    $("#jumbo").hide()
    $("#intro").hide()
    $(".stats").hide()
    correctAnswers = 0;
    incorrectAnswers = 0;
    unansweredQuestions = 0;
  });

  // this function generates the question
  function questionGenerator() {
    questionChecker();

    if (gameStart) {
        showText();        
        theTimer(20);
        $("#image").html(" ")
        $("#button").hide()
        $("#theResult").hide()
        $("#question").html(triviaQuestions[theQuestion].question);
        $("#answerOne").html(triviaQuestions[theQuestion].answers[0]);
        $("#answerTwo").html(triviaQuestions[theQuestion].answers[1]);
        $("#answerThree").html(triviaQuestions[theQuestion].answers[2]);
        $("#answerFour").html(triviaQuestions[theQuestion].answers[3]);
    }
  }

  // this function handles your guess and compares it to the question/answered displayed
  function questionHandler() {
    clearInterval(interval);
    questionChecker();
    console.log(unansweredQuestions)
    console.log(correctAnswers)
    console.log(incorrectAnswers)

    if (gameStart === false) {
      return false;
    }

    let answerIndex = parseInt($(this).attr("value"));


    if (answerIndex === triviaQuestions[theQuestion].theAnswer) {

      correctAnswers++;
      cutePopUp();

    } else {

      incorrectAnswers++;      
      uglyPopUp();

    }
  }

  //this pop up displays when the correct answer is chosen
  function cutePopUp() {
    hideText();
    $("#image").show().html(triviaQuestions[theQuestion].correctAnswer)
    theDelay();
  }

  //this pop up displays when the incorrect answer is chosen
  function uglyPopUp() {
    let answerNumber = triviaQuestions[theQuestion].theAnswer

    hideText();
    $("#image").show().html(triviaQuestions[theQuestion].incorrectAnswer)
    $("#theResult").show().html(`The Correct Answer was ${triviaQuestions[theQuestion].answers[answerNumber]}`)
    theDelay();
  }

  //the delay function - goes for 3 seconds
  function theDelay() {
    theQuestion++;
    questionChecker();
    setTimeout(questionGenerator, 3000);
  }

  // this function handles the timer for how long the question is displayed
  function theTimer(seconds) {
    let timer = $("#seconds");
    timer.html(seconds);
    // every second

    interval = setInterval(function() {
      // grab that number
      let currentNumber = Number(timer.html());
      // decrease it by 1
      currentNumber--;
      // display the new number on the screen
      timer.html(currentNumber);

      // if timer  = 0

      if (
        $(".answer").on("click", function() {
          clearInterval(interval);
        })
      )
        if (currentNumber === 0) {
          // stop timer
          unansweredQuestions++;


          theQuestion++;
          clearInterval(interval);
          setTimeout(questionGenerator, 3000);
          hideText();
          $("#question").show().html("C'mon - that was an easy one!");
          $("#image").show().html("<img src='assets/images/seriously.gif' />")
          $("#theResult").show().html(`The Correct Answer was ${triviaQuestions[theQuestion].answers[answerNumber]}`)
        }
    }, 1000);
  }


  // hides text function
  function hideText() {
    $("#question").hide();
    $("#timer").hide();
    $(".answer").hide();
    $("#theResult").hide();
    $(".options").hide();
    $(".stats").hide()

  }

  // show text function
  function showText() {
    $("#question").show();
    $("#timer").show();
    $(".answer").show();
    $(".options").show();
  }

  // this function monitors the which question the player is on - if it reaches the end, it restarts and resets the game
  function questionChecker() {
    if (theQuestion == triviaQuestions.length) {
      
      $("#question").text(`Your Results!`);
      $("#image").hide()      
      hideText();
      
      clearInterval(interval);

      gameStart = false;
      theQuestion = 0;      


      $("#intro").show().text(`You can play again by clicking the button below`)
      $("#button").show().text(`Play again? Click here!`)
      $(".stats").show()
      $("#correct").show().text(`${correctAnswers}`)
      $("#incorrect").show().text(`${incorrectAnswers}`)
      $("#unanswered").show().text(`${unansweredQuestions}`)
    }
  }

}); // document ready end bracket
