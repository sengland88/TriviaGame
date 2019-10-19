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
  });

  function questionGenerator() {
    questionChecker();

    if (gameStart) {
        showText();        
        theTimer(5);
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

  function questionHandler() {
    clearInterval(interval);
    questionChecker();

    if (gameStart === false) {
      return false;
    }

    let answerIndex = parseInt($(this).attr("value"));
    // console.log(`${answerIndex} is answer index`);
    // return false

    if (answerIndex === triviaQuestions[theQuestion].theAnswer) {
    //   console.log("correct!");
      correctAnswers++;
      cutePopUp();
    //   console.log(`you have ${correctAnswers} correct answers in the game`);
    } else {
    //   console.log("incorrect!");
      incorrectAnswers++;      
      uglyPopUp();
    //   console.log(`you have ${incorrectAnswers} incorrect answers in the game`);
    }
  }

  function cutePopUp() {
    hideText();
    // console.log("you got the answer right!");
    $("#image").show().html(triviaQuestions[theQuestion].correctAnswer)
    theDelay();
  }

  function uglyPopUp() {
    let answerNumber = triviaQuestions[theQuestion].theAnswer
    // console.log(answerNumber)
    hideText();
    // console.log("you got it wrong");
    $("#image").show().html(triviaQuestions[theQuestion].incorrectAnswer)


    $("#theResult").show().html(`The Correct Answer was ${triviaQuestions[theQuestion].answers[answerNumber]}`)
    theDelay();
  }

  function theDelay() {
    theQuestion++;
    questionChecker();
    setTimeout(questionGenerator, 3000);
    //resetTimer
  }

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
    //   console.log(currentNumber);
      // if timer  = 0

      if (
        $(".answer").on("click", function() {
          clearInterval(interval);
        })
      )
        if (currentNumber === 0) {
          // stop timer
          unansweredQuestions++;

        //   console.log(`you have ${unansweredQuestions} unanswered questions`);
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

  function hideText() {
    $("#question").hide();
    $("#timer").hide();
    $(".answer").hide();
    $("#theResult").hide();
    $(".options").hide();
    $(".stats").hide()

  }

  function showText() {
    $("#question").show();
    $("#timer").show();
    $(".answer").show();
    $(".options").show();
  }

  function questionChecker() {
    if (theQuestion == triviaQuestions.length) {
      
      $("#question").text(`Your Results!`);
      $("#image").hide()      
      hideText();
      
      clearInterval(interval);
      console.log("you've reached the end");
      alert("You're done!");

      theQuestion = 0;
      gameStart = false;  

      $("#intro").show().text(`You can play again by clicking the button below`)
      $("#button").show().text(`Play again? Click here!`)
      $(".stats").show()
      $("#correct").show().text(`${correctAnswers}`)
      $("#incorrect").show().text(`${incorrectAnswers}`)
      $("#unanswered").show().text(`${unansweredQuestions}`)
    }
  }
}); // document ready end bracket
