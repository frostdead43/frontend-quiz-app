const questionArray = {
  "quizzes": [
      {
          "title": "HTML",
          "icon": "/images/icon-html.svg",
          "questions": [
              {
                  "question": "What does HTML stand for?",
                  "options": [
                      "Hyper Trainer Marking Language",
                      "Hyper Text Marketing Language",
                      "Hyper Text Markup Language",
                      "Hyper Text Markup Leveler"
                  ],
                  "answer": "Hyper Text Markup Language"
              },
              {
                  "question": "Which of the following is the correct structure for an HTML document?",
                  "options": [
                      '&lt;html&gt; &lthead&gt &lt/head&gt &ltbody&gt &lt/body&gt &lt/html&gt',
                      '&lthead&gt &lthtml&gt &lt/html&gt &ltbody&gt &lt/body&gt &lt/head&gt',
                      '&ltbody&gt &lthead&gt &lt/head&gt &lthtml&gt &lt/html&gt &lt/body&gt',
                      '&lthtml&gt &ltbody&gt &lt/body&gt &lthead&gt &lt/head&gt &lt/html&gt'
                  ],
                  "answer": 'html head /head body /body /html'
              },
              {
                  "question": "Which HTML element is used to define the title of a document?",
                  "options": ["&lthead&gt", "&lttitle&gt", "&ltheader&gt", "&lttop&gt"],
                  "answer": "&lttitle&gt"
              },
              {
                  "question": "What is the purpose of the <body> tag in HTML?",
                  "options": [
                      "It defines the document's head section.",
                      "It contains all the content such as text, images, and links.",
                      "It is used to define the main content of an HTML document.",
                      "It specifies the body of the email content in HTML."
                  ],
                  "answer": "It contains all the content such as text, images, and links."
              },
              {
                  "question": "Which tag is used to display images in HTML?",
                  "options": ["&ltimg&gt", "&ltimage&gt", "&ltsrc&gt", "&ltpic&gt"],
                  "answer": "&ltimg&gt"
              },
              {
                  "question": "What attribute is used to provide the path of an image in the &ltimg&gt tag?",
                  "options": ["link", "src", "href", "url"],
                  "answer": "src"
              },
              {
                  "question": "Which HTML tag is used to create an unordered list?",
                  "options": ["&ltul&gt", "&ltol&gt", "&ltlist&gt", "&ltli&gt"],
                  "answer": "&ltul&gt"
              },
              {
                  "question": "What does the <br> tag do?",
                  "options": [
                      "It breaks the text into two sections.",
                      "It creates a bold text.",
                      "It inserts a line break.",
                      "It adds a new row in a table."
                  ],
                  "answer": "It inserts a line break."
              },
              {
                  "question": "In HTML, what does the `fieldset` tag do?",
                  "options": [
                      "It is used to group related data in a form.",
                      "It sets the field to a fixed size.",
                      "It automatically validates the fields within a form.",
                      "It hides the fields in a form."
                  ],
                  "answer": "It is used to group related data in a form."
              },
              {
                  "question": "In HTML, what does the `fieldset` tag do?",
                  "options": [
                      "It is used to group related data in a form.",
                      "It sets the field to a fixed size.",
                      "It automatically validates the fields within a form.",
                      "It hides the fields in a form."
                  ],
                  "answer": "It is used to group related data in a form."
              }
          ]
      },
      {
          "title": "CSS",
          "icon": "/images/icon-css.svg",
          "questions": [
              {
                  "question": "What does CSS stand for?",
                  "options": [
                      "Colorful Style Sheets",
                      "Computer Style Sheets",
                      "Cascading Style Sheets",
                      "Creative Style Sheets"
                  ],
                  "answer": "Cascading Style Sheets"
              },
              {
                  "question": "Which HTML attribute is used to define inline styles?",
                  "options": ["styles", "style", "class", "font-style"],
                  "answer": "style"
              },
              {
                  "question": "How do you insert a comment in a CSS file?",
                  "options": [
                      "// this is a comment //",
                      "/* this is a comment */",
                      "-- this is a comment --",
                      "!-- this is a comment --"
                  ],
                  "answer": "/* this is a comment */"
              },
              {
                  "question": "Which property is used to change the background color of an element?",
                  "options": [
                      "color",
                      "bgcolor",
                      "background-color",
                      "background"
                  ],
                  "answer": "background-color"
              },
              {
                  "question": "How do you apply a style to all <p> elements?",
                  "options": ["p { }", ".p { }", "#p { }", "all.p { }"],
                  "answer": "p { }"
              },
              {
                  "question": "Which property is used to change the font of an element?",
                  "options": [
                      "font-style",
                      "text-style",
                      "font-family",
                      "typeface"
                  ],
                  "answer": "font-family"
              },
              {
                  "question": "How do you make each word in a text start with a capital letter?",
                  "options": [
                      "text-transform: capitalize",
                      "text-transform: uppercase",
                      "text-style: capital",
                      "font-transform: capitalize"
                  ],
                  "answer": "text-transform: capitalize"
              },
              {
                  "question": "How do you select an element with the class name 'header'?",
                  "options": [".header", "#header", "header", "*header"],
                  "answer": ".header"
              },
              {
                  "question": "What is the default value of the 'position' property?",
                  "options": ["relative", "fixed", "absolute", "static"],
                  "answer": "static"
              },
              {
                  "question": "What is the purpose of the z-index property in CSS?",
                  "options": [
                      "To count the number of elements",
                      "To set the magnification level of an element",
                      "To specify the stack order of an element",
                      "To create a zoom effect"
                  ],
                  "answer": "To specify the stack order of an element"
              },
          ]
      },
      {
          "title": "JavaScript",
          "icon": "/images/icon-js.svg",
          "questions": [
              {
                  "question": "Which syntax is correct to output 'Hello World' in an alert box?",
                  "options": [
                      "alertBox('Hello World');",
                      "msg('Hello World');",
                      "alert('Hello World');",
                      "msgBox('Hello World');"
                  ],
                  "answer": "alert('Hello World');"
              },
              {
                  "question": "How do you call a function named 'myFunction'?",
                  "options": [
                      "call function myFunction()",
                      "call myFunction()",
                      "myFunction()",
                      "execute myFunction()"
                  ],
                  "answer": "myFunction()"
              },
              {
                  "question": "How to write an IF statement in JavaScript?",
                  "options": [
                      "if i = 5 then",
                      "if (i == 5)",
                      "if i == 5",
                      "if i = 5"
                  ],
                  "answer": "if (i == 5)"
              },
              {
                  "question": "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
                  "options": [
                      "if (i <> 5)",
                      "if i =! 5 then",
                      "if (i != 5)",
                      "if i not = 5"
                  ],
                  "answer": "if (i != 5)"
              },
              {
                  "question": "How does a FOR loop start?",
                  "options": [
                      "for (i = 0; i <= 5)",
                      "for i = 1 to 5",
                      "for (i <= 5; i++)",
                      "for (i = 0; i <= 5; i++)"
                  ],
                  "answer": "for (i = 0; i <= 5; i++)"
              },
              {
                  "question": "How can you add a single-line comment in JavaScript?",
                  "options": [
                      "'This is a single-line comment",
                      "//This is a single-line comment",
                      "!This is a single-line comment",
                      "/* This is a single-line comment */"
                  ],
                  "answer": "//This is a single-line comment"
              },
              {
                  "question": "What is the correct way to write a JavaScript array?",
                  "options": [
                      "var colors = (1:'red', 2:'green', 3:'blue')",
                      "var colors = ['red', 'green', 'blue']",
                      "var colors = 'red', 'green', 'blue'",
                      "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
                  ],
                  "answer": "var colors = ['red', 'green', 'blue']"
              },
              {
                  "question": "How do you find the number with the highest value of x and y?",
                  "options": [
                      "Math.ceil(x, y)",
                      "top(x, y)",
                      "Math.max(x, y)",
                      "Math.highest(x, y)"
                  ],
                  "answer": "Math.max(x, y)"
              },
              {
                  "question": "Which operator is used to assign a value to a variable?",
                  "options": ["-", "*", "=", "x"],
                  "answer": "="
              },
              {
                  "question": "What is the correct way to write a JavaScript object?",
                  "options": [
                      "var person = {firstName: 'John', lastName: 'Doe'};",
                      "var person = {firstName = 'John', lastName = 'Doe'};",
                      "var person = (firstName: 'John', lastName: 'Doe');",
                      "var person = (firstName = 'John', lastName = 'Doe');"
                  ],
                  "answer": "var person = {firstName: 'John', lastName: 'Doe'};"
              },
          ]
      },
      {
          "title": "Accessibility",
          "icon": "/images/icon-accessibility.svg",
          "questions": [
              {
                  "question": "What does 'WCAG' stand for?",
                  "options": [
                      "Web Content Accessibility Guidelines",
                      "Web Compliance Accessibility Guide",
                      "Web Content Accessibility Goals",
                      "Website Compliance and Accessibility Guidelines"
                  ],
                  "answer": "Web Content Accessibility Guidelines"
              },
              {
                  "question": "What does ARIA stand for in web development?",
                  "options": [
                      "Accessible Rich Internet Applications",
                      "Advanced Responsive Internet Assistance",
                      "Accessible Responsive Internet Applications",
                      "Automated Responsive Internet Actions"
                  ],
                  "answer": "Accessible Rich Internet Applications"
              },
              {
                  "question": "Which of the following is not a principle of the WCAG?",
                  "options": [
                      "Perceivable",
                      "Dependable",
                      "Operable",
                      "Understandable"
                  ],
                  "answer": "Dependable"
              },
              {
                  "question": "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
                  "options": ["3:1", "4.5:1", "7:1", "2:1"],
                  "answer": "4.5:1"
              },
              {
                  "question": "Which of the following elements is inherently focusable, meaning it can receive focus without a 'tabindex' attribute?",
                  "options": ["div", "span", "a href='...'", "p"],
                  "answer": "a href='...'"
              },
              {
                  "question": "What is the purpose of the 'lang' attribute in an HTML page?",
                  "options": [
                      "To specify the scripting language",
                      "To define the character set",
                      "To indicate the language of the page content",
                      "To declare a language pack"
                  ],
                  "answer": "To indicate the language of the page content"
              },
              {
                  "question": "Which guideline ensures that content is accessible by keyboard as well as by mouse?",
                  "options": [
                      "Keyboard Accessible",
                      "Mouse Independence",
                      "Device Independence",
                      "Operable Controls"
                  ],
                  "answer": "Keyboard Accessible"
              },
              {
                  "question": "What is the role of 'skip navigation' links in web accessibility?",
                  "options": [
                      "To skip over primary navigation to the main content",
                      "To provide shortcuts to different sections of the website",
                      "To help users skip unwanted sections like advertisements",
                      "To bypass broken links in the navigation"
                  ],
                  "answer": "To skip over primary navigation to the main content"
              },
              {
                  "question": "Which of these tools can help in checking the accessibility of a website?",
                  "options": [
                      "W3C Validator",
                      "Google Lighthouse",
                      "CSS Validator",
                      "JavaScript Console"
                  ],
                  "answer": "Google Lighthouse"
              },
              {
                  "question": "Which of these tools can help in checking the accessibility of a website?",
                  "options": [
                      "W3C Validator",
                      "Google Lighthouse",
                      "CSS Validator",
                      "JavaScript Console"
                  ],
                  "answer": "Google Lighthouse"
              }
          ]
      }
  ]
}

console.log(questionArray);

let score = 0;
let selectedQuiz = [];
let selectedOption = null;

let theme = document.querySelector(".dark-mode");
const switchBtn = document.querySelector(".switch-area");


let htmlTopic = questionArray.quizzes[0].title;
let cssTopic = questionArray.quizzes[1].title;
let jsTopic = questionArray.quizzes[2].title;
let accesTopic = questionArray.quizzes[3].title;


const htmlq = questionArray.quizzes[0].questions;
const cssq = questionArray.quizzes[1].questions;
const jsq = questionArray.quizzes[2].questions;
const accessq = questionArray.quizzes[3].questions;

const firstBtns = document.querySelectorAll(".main-btns");
const mainArea = document.querySelector(".first-area");
const questionArea = document.querySelector(".question-area");
let makif = null


let questionIndex = 0;
console.log(firstBtns);


function handleBtn(e) {
  e.preventDefault();
  const topic = e.target.innerHTML;
  selectedTopic = topic;

  // if (cssTopic === "CSS") selectedQuiz = cssq;
  // else if (htmlTopic === "HTML") selectedQuiz = htmlq;
  // else if (jsTopic === "Javascript") selectedQuiz = jsq;
  // else if (accesTopic === "Accessibility") selectedQuiz = accessq;
  if (topic === "CSS") selectedQuiz = cssq;
  else if (topic === "HTML") selectedQuiz = htmlq;
  else if (topic === "Javascript") selectedQuiz = jsq;
  else if (topic === "Accessibility") selectedQuiz = accessq;
  questionIndex = 0;
  const titles = document.querySelector('.txt');
  const emptys = document.querySelector('.empty');
  if(topic === 'HTML') {
    titles.innerText = 'HTML';
    titles.style.color = "orange";
  }
  if(topic === 'CSS') {
    titles.innerText = 'CSS';
    titles.style.color = "green";
  }
  if(topic === 'Javascript') {
    titles.innerText = 'Javascript';
    titles.style.color = "blue";
  }
  if(topic === 'Accessibility') {
    titles.innerText = 'Accessibility';
    titles.style.color = "purple";
  }

  getQuestions();
}
function btnmove() {
  firstBtns.forEach((btn) => {
    btn.addEventListener("click", handleBtn);
  });
}
btnmove();




function getQuestions() {
  const currentQuestion = selectedQuiz[questionIndex];
    questionArea.innerHTML = `
    <div class = "question-inner">
    <div>
    <p>Question <span id = "questionNumber">${questionIndex + 1}</span> of 10</p>
        <h3>${currentQuestion.question}</h3>
        <div class="progressBar">
            <div class="progressBarInner"></div>
        </div>
    </div>
    <div>

        <div class="question-selection">
          <span class = "bg">A</span>
          <a href="" class= "asd">${currentQuestion.options[0]}</a>
        </div>

        <div class="question-selection">
          <span class = "bg">B</span>
          <a href="" class= "asd">${currentQuestion.options[1]}</a>
        </div>

        <div class="question-selection">
          <span class = "bg">C</span>
          <a href="" class= "asd">${currentQuestion.options[2]}</a>
        </div>

        <div class="question-selection">
          <span class = "bg">D</span>
          <a href="" class= "asd">${currentQuestion.options[3]}</a>
        </div>

        <button class="submit-btn">Submit Answer</button>

        <span class="error-text">Please select an answer</span>
    </div>
    `

        // const progressBar = document.querySelector('.progressBarInner');
        // let progress = 1;
        // progressBar.style.width = (progress * 10) + '%';
        // progressBar.style.width = '10';
        // progress++;


    mainArea.style.display = "none";
    questionArea.style.display = "block";
    selectedOption = null;
   

    progressBar();
    selectOption();
    setupSubmit();

}



function selectOption() {
  const options = document.querySelectorAll(".asd");
  options.forEach((option) => {
    option.addEventListener("click", function (e) {
      e.preventDefault();
      selectedOption = e.target.innerText;

      const questionSelections = document.querySelectorAll(".question-selection");
      questionSelections.forEach((selection) => {
        selection.classList.remove("border", "correct", "wrong");
      });


      const parentSelection = e.target.closest(".question-selection");
      if (parentSelection) {
        parentSelection.classList.add("border");
      }
    });
  });
}

function setupSubmit() {
  const submitBtn = document.querySelector(".submit-btn");
  const errorText = document.querySelector(".error-text");
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (!selectedOption) {
      errorText.style.display = "block";
      return;
    }

    const correctAnswer = selectedQuiz[questionIndex].answer;

    const options = document.querySelectorAll(".asd");
    options.forEach((option) => {
      const parentSelection = option.closest(".question-selection");

      
      

      if (option.innerText === correctAnswer) {
        parentSelection.classList.add("correct");
      }


      if (selectedOption && option.innerText === selectedOption && selectedOption !== correctAnswer) {
        parentSelection.classList.add("wrong");
      }
      option.style.pointerEvents = "none";
    });

   
    if (selectedOption === correctAnswer) {
      score++;
    }

    questionIndex++;


    if (questionIndex < selectedQuiz.length) {
      setTimeout(() => {
        getQuestions();
      }, 2000);
    } else {
      setTimeout(showResults, 2000); 
    }
  });
}


function showResults() {

    let topicImage;
  if (selectedTopic === "HTML") {
    topicImage = "assets/images/html-icon.svg"; 
  } else if (selectedTopic === "CSS") {
    topicImage = "assets/images/css-icon.svg";
  } else if (selectedTopic === "Javascript") {
    topicImage = "assets/images/js-icon.svg";
  } else if (selectedTopic === "Accessibility") {
    topicImage = "assets/images/accessibility-icon.svg";
  }

  questionArea.innerHTML = `

<div class="result-area">
   <div class = "result-inner">
        <p class="result-p">Quiz completed</p>
        <p class="result-strong"><strong>You scored...</strong></p>
    </div>

    <div class="result-point">
    <div class="result-flex">
         <img src="${topicImage}">
          <p class="end-title">${selectedTopic}</p>
    </div>
    <h1 class="end-score">${score}</h1>
    <span class="end-total">out of 10</span>
    </div>
    <a href="" class="end-btn">Play Again</a>
</div>
  `;

  const restartBtn = document.querySelector(".end-btn");
  restartBtn.addEventListener("click",function() {
    location.reload();
  });
}

let progress = -1;
function progressBar() {
    const progressBar = document.querySelector('.progressBarInner');
    progress += 10;
    progressBar.style.width = progress + '%';
}


function switchTheme() {
  switchBtn.addEventListener("click",function() {
    document.querySelector("body").classList.toggle("dark-mode");
  })
}

switchTheme();