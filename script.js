var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Inside which HTML element do we put the JavaScript?",
      choices: ["<js>", "<scripting>", "<javascript>", "<script>"],
      answer: "<script>"
    },
    {
      title: "Where is the correct place to insert a JavaScript?",
      choices: ["<head>", "<body>", "<div>", "<section>"],
      answer: "<body>"
    },
    {
      title: "What is the correct syntax for referring to an external script called 'xxx.js'?",
      choices: ["<script src='xxx.js'>", "<script href='xxx.js'>", "<script name='xxx.js'>", "<script style='xxx.js'>"],
      answer: "<script src='xxx.js'>"
    },
  ];
  
var start = document.getElementById("starbutton");
var introduction = document.querySelector("#intro");
var next = document.querySelector(".choice");
var question = document.getElementById("question");
var answer1 = document.getElementById("A");
var answer2 = document.getElementById("B");
var answer3 = document.getElementById("C");
var answer4 = document.getElementById("D");
var questioncount = 0;
var lastQuestion = questions.length - 1;
  
function renderQuestion(){
    var q =  questions[questioncount];
  
    question.innerHTML = q.title;
    answer1.innerHTML = q.choices[0];
    answer2.innerHTML = q.choices[1];
    answer3.innerHTML = q.choices[2];
    answer4.innerHTML = q.choices[3];
};
// renderQuestion();
  
window.addEventListener("load", startup);

function startup (){
    start.addEventListener("click", startquiz);
};

function startquiz (){
    start.style.display = "none";
    introduction.style.display = "none";
    renderQuestion();
  };
  