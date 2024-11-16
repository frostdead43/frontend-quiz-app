const subjectLinks = document.querySelectorAll('.router');
const container = document.querySelector('.container');
const toggleContainer = document.querySelector('.toggle-container');
const containerLeftSide = document.querySelector('.container-leftside');
const containerRightSide = document.querySelector('.container-rightside');

let currentQuestion = 1;
let score = 0;
let randomQuestionsArray = [];
let subjectName;
let subjectImg;
let saveBtnClicked = false;
let subject;

for (const link of subjectLinks) {
    link.addEventListener('click',getSubject);
}


function getSubject(e){
    e.preventDefault()
    subject = this.id;
    subjectName = document.querySelector(`#${this.id} span`).textContent;
    subjectImg = document.querySelector(`#${this.id} img`).src;
    return getQuestions(subject);
}

function getQuestions(subject){
    document.querySelector('.subject-heading').innerHTML =
    `
    <img src="${subjectImg}"/> 
    <h2>${subjectName}</h2>
    `;
    if(subject === "html"){
        return getJSONFilePath(subject);
    }else if(subject === "css"){
        return getJSONFilePath(subject);
    }else if(subject === "js"){
        return getJSONFilePath(subject);
    }else if(subject === "accessibility"){
        return getJSONFilePath(subject);
    }
}

function getJSONFilePath(subject){
    const jsonFilePath = `assets/json/${subject}.json`
    return createQuestions(jsonFilePath)
}


async function createQuestions(jsonFilePath){
    const response = await fetch(`${jsonFilePath}`);
    const data = await response.json();
    return createRandomQuestions(data);
}

async function createRandomQuestions(data){
    const randomQuestions = getRandomQuestions(data,10);
    randomQuestionsArray.push(randomQuestions);
    return renderQuestions();
}


function getRandomQuestions(allQuestions, numberOfQuestions) {
    const shuffledQuestions = allQuestions.sort(() => Math.random() - 0.5);
    return shuffledQuestions.slice(0, numberOfQuestions);
}

async function renderQuestions(){

    
    for (const question of randomQuestionsArray[0].slice(currentQuestion - 1, currentQuestion)) {
        document.querySelector('.container-leftside').style.flexDirection = "row";
        containerRightSide.innerHTML = "";
        containerLeftSide.innerHTML = "";
        containerLeftSide.innerHTML += 
        `
        <div class="question-container">
            <div class="question-top">
                <span class="small-text">${currentQuestion}.Soru /10 Soru</span>
                <h3 class="question-text">${question.question}</h3>
            </div>
            <div class="progress-bar" style="margin-bottom:92px;">
                <div class="progress-inline" style="width:${(currentQuestion*10)}%"></div>
            </div>
        </div>
        `;
        containerRightSide.innerHTML +=
        `
        <ul class="subject-list">
            <li class="subject-element">
                <a href="#" class="subject-link option-btn" id="a">
                    <span class="option">A</span>
                    <span class="option-text">${question.answers.a}</span>
                </a>
            </li>
            <li class="subject-element">
                <a href="#" class="subject-link option-btn" id="b">
                    <span class="option">B</span>
                    <span class="option-text">${question.answers.b}</span>
                </a>
            </li>
            <li class="subject-element">
                <a href="#" class="subject-link option-btn" id="c">
                    <span class="option">C</span>
                    <span class="option-text">${question.answers.c}</span>
                </a>
            </li>
            <li class="subject-element">
                <a href="#" class="subject-link option-btn" id="d">
                    <span class="option">D</span>
                    <span class="option-text">${question.answers.d}</span>
                </a>
            </li>
        </ul>
        <button class="submit-btn save-btn">Cevabı Kaydet</button>
        <div class="no-option-selected" style="display:none;">
            <img src="assets/img/false-icon.svg">
            <span>Lütfen bir cevap seçiniz.<span>
        </div>
        `;
        checkAnswer(question);
    }
}

function checkAnswer(question){
    const saveBtn = document.querySelector('.save-btn');
    const optionBtns = document.querySelectorAll('.option-btn');
    for (const option of optionBtns) {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            for (const option of optionBtns) {
                option.classList.remove('selected');
            }
            this.classList.add('selected');
        })
    }
    saveBtn.addEventListener('click', function(){
        if (!saveBtnClicked){
            for(const option of optionBtns){
                if(option.classList.contains('selected')){
                    for (const option of optionBtns) {
                        option.style.pointerEvents = "none";
                    }
                    if(option.id == question.correctAnswer){
                        option.innerHTML += `<img class="result-icon" src="assets/img/true-icon.svg" alt="">`
                        option.style.borderColor = "var(--green)";
                        option.firstElementChild.style.background = "var(--green)";
                        score++;
                    }else{
                        option.innerHTML += `<img class="result-icon" src="assets/img/false-icon.svg" alt="">`
                        option.style.borderColor = "var(--red)";
                        option.firstElementChild.style.background = "var(--red)";
                        for (const option of optionBtns){
                            if (option.id == question.correctAnswer){
                                option.innerHTML += `<img class="result-icon" src="assets/img/true-icon.svg" alt="">`
                            }
                        }
                    }
                }else{
                    if (document.querySelectorAll('.option-btn.selected').length == 0){
                        document.querySelector('.no-option-selected').style.display = "flex";
                        return;
                    }
                }
            }
            if(currentQuestion == 10){
                this.textContent = "Quizi Bitir";
            }else{
                this.textContent = "Sonraki Soru";
            }
            this.classList.add('next');
            this.classList.remove('save-btn');
            saveBtnClicked = true;
            return goNextQuestion();
        }
    });
}

function goNextQuestion(){
    const nextQuestionBtn = document.querySelector('.next');
    nextQuestionBtn.addEventListener('click',function(){
        if(currentQuestion == 10){
            return finishQuiz();
        }else{
            currentQuestion++;
            saveBtnClicked = false;
            return renderQuestions();
        }
    })
}

function finishQuiz(){
    containerLeftSide.innerHTML = 
    `
    <div class="quiz-result-left-container">
        <span class="quiz-result-text">Quizi tamamladınız</span>
        <span class="quiz-result-text bold-text">Sonucunuz...</span>
    </div>
    `;
    containerRightSide.innerHTML = 
    `
    <div class="result-box">
        <div class="subject-heading">
            <img src="${subjectImg}"/> 
            <h2>${subjectName}</h2>
        </div>
        <span class="score-result">${score}</span>
        <span class="small-text">${currentQuestion} üzerinden</span>
    </div>
    <button id="replay" class="submit-btn">Yeniden Deneyin</div>
    `
    const replay = document.querySelector('#replay');
    replay.addEventListener('click',restartQuiz);
}

function restartQuiz(){
    currentQuestion = 1;
    score = 0;
    randomQuestionsArray = [];
    saveBtnClicked = false;
    return restartQuizSubject();
}

function restartQuizSubject(){
    containerLeftSide.innerHTML = 
    `
    <dialog id="restartModal" class="modal">
        <div class="modal-content">
            <ul class="subject-list">
                <li class="subject-element">
                    <a href="#" class="subject-link router" id="html">
                        <img src="assets/img/html.svg" alt="">
                        <span>HTML</span>
                    </a>
                </li>
                <li class="subject-element">
                    <a href="#" class="subject-link router" id="css">
                        <img src="assets/img/css.svg" alt="">
                        <span>
                            CSS
                        </span>
                    </a>
                </li>
                <li class="subject-element">
                    <a href="#" class="subject-link router" id="js">
                        <img src="assets/img/js.svg" alt="">
                        <span>
                            Javascript
                        </span>
                    </a>
                </li>
                <li class="subject-element">
                    <a href="#" class="subject-link router" id="accessibility">
                        <img src="assets/img/accessibility.svg" alt="">
                        <span>Erişilebilirlik</span>
                    </a>
                </li>
            </ul>
        </div>
    </dialog>
    `
    document.querySelector('#restartModal').showModal();
    const subjects = document.querySelectorAll('.router');
    for (const subjectLink of subjects) {
        subjectLink.addEventListener('click',function(){
            subject = this.id;
            subjectName = document.querySelector(`#${this.id} span`).textContent;
            subjectImg = document.querySelector(`#${this.id} img`).src;
            document.querySelector('#restartModal').close();
            return getQuestions(subject)
        })
    }
}