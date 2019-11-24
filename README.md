# TriviaGame

<h2>Project Name</h2>

Greys's Anatomy Trivia

<h2>Concept</h2>

A web application that ultiizies Javascript to display a series of timed questions with answeres

<h2>Project Overview</h2>

A computer and mobile-friendly web application utilizes JavaScript to display a series of timed questions (along with the answers). When the user makes a selection, a GIF, which is stored locally, will display, either alerting the user if they were incorrect or correct in their selection. In the background, there is code to keep track of number of incorrect, correct or unanswered responses. Once the trivia is finished, the results will be displayed.

<h2>Process</h2>

i started by creating my questions and answers. I opted to create another key/value pair to hold the index of the correct answer. 

i created the for loop that iterated through the questions. 

i tied elements on my html to javascript through jquery. 

i created a function to checking the users guess against the correct answer. and then functions that would let the user know if they were right or if they were wrong. it also increase the respective variables. 

the timer passes in the time (20 seconds). if it reaches zero then it shows a transition screen and increases unanswered questions by one.

then at the end, i created a sort of restart function that displays results as well as the button to play again (with different text on it.)
