console.log("test");


//WHEN I click the start button

//THEN a timer starts and I am presented with a question

//WHEN I answer a question
//var quiz = [
   // {
    //    question: "this is question 1",
     //   choices: ["choice 1", "2", "3", "4"],
      //  answer: "1"
   // }
    
  //  ];

//function showQuestion(){
  //  $("#question").html(quiz[0].question);
  //  $("#bt0").html(quiz[0].choices);
  //  $("#bt1").html(quiz[0].choices);
  //  $("#bt2").html(quiz[0].choices);
  //  $("#bt3").text(quiz[0].choices);
//}

//showQuestion()

//THEN I am presented with another question

//WHEN I answer a question incorrectly

//THEN time is subtracted from the clock

//WHEN all questions are answered or the timer reaches 0

//THEN the game is over

//WHEN the game is over

//THEN I can save my initials and score


function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}

function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What is my wife's name?", ["Becky", "Jessica","Masuma", "Karen"], "Masuma"),

    new Question("When did I move to Baltimore?", ["A day ago", "2012","2016", "2019"], "2019"),
    

    new Question("How many brothers to I have?", ["1", "2","3", " 4"], "2"),
    

    new Question("When will the NBA return?", ["Soon", "Never","July", "2021"], "July"),
        

];


var quiz = new Quiz(questions);


populate();
