(function(){
  // Functions
    //function build quiz enables the quiz to run immediatly
  function buildQuiz(){
   //this variable stores HTML output:
  //includes question and answer choices
    // variable to store the HTML output
    const output = [];
//FOR EACH LOOPS THROUGH EACH QUESTION USING AN ARROW FUNCTION
//gets the current valu,the index(position in aray),and array itself as parameters
//only nee current value and the index - in this case 'currentQuestion' and 'questionNumber' respectively
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        //understand concept/general idea here but still unsure about the naming etc(letter)
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button - using class/id radio to call it
        //radio button is enclosed in <label>element
        //this is so users will be able to click anywhere on the answer text to select that answer
        //if the label was omitted then would have to click on radio button (circle) itself/less accessible
        //once there is list of answer buttons, push the question and answer HTML onto overall list of outputs
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
//Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, for string interpolation with embedded expressions, and for special constructs called tagged templates.
    //Template literals are like strings but more powerful:
    //multi-line capabilities
    //don't need to use escape quotes and can embed JS expression right into strings ( ${code_goes_here})     
// add this question and its answers to the output
        output.push(
            //div element with class slide holds the question and answer containers (HTML)
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }
//showResults loops over the answers,checks them, then shows results
  function showResults(){

    // gather answer containers from quiz
    //selects all the answer containers in quiz HTML. 
    const answerContainers = quizContainer.querySelectorAll('.answers');



    // keep track of user's answers - declares the correct answer
    let numCorrect = 0;

//LOOP THROUGH EACH QUESTION AND CHECK ANSWERS:
//find the selected answer in the HTML
//handle what happens if the answer is correct
//handle what happens if the answer is wrong.


    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      //CONST SELECTOR: defining a CSS selector that will let us find which radio button is checked.
      const selector = `input[name=question${questionNumber}]:checked`;
      //JavaScript’s querySelector to search for our CSS selector in the previously defined answerContainer
      //FINDS WHICH ANSWERS RADIO BUTTON IS CHECKED:
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;//.VALUE is the value of the answer/ouput of answer
//if user left answer blank there would be an error usually but || as above means "or" and {} is an empty object
  //"Get a reference to our selected answer element OR, if that doesn’t exist, use an empty object."   
  //Get the value of whatever was in the first statement.
//As a result, the value will either be the user’s answer or undefined, which means a user can skip a question without crashing the quiz.



//ANSWER CHECKING LOOP:
// if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }


  //FUNCTION SHOW SLIDE WILL DO:
   //Hide the current slide by removing the active-slide class.
  //Show the new slide by adding the active-slide class.
  //Update the current slide number.
  function showSlide(n){
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;

    //IF: 
    //If on the first slide, hide the Previous Slide button. Otherwise, show the button.
    //If on the last slide, hide the Next Slide button and show the Submit button.
    //Otherwise, show the Next Slide button and hide the Submit button.
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  //object literals are used below to represent the individual questions
  //I have an array of questions/the array hols the questions making up the quiz
  const myQuestions = [
    {
      question: "Favourite thing to do?",
      answers: {
        a: "Shopping",
        b: "Beach Day",
        c: "Camping"
      },
      correctAnswer: "c"
    },
    {
      question: "Favourite Childhood Superhero?",
      answers: {
        a: "Batman",
        b: "Captain Planet",
        c: "Goku"
      },
      correctAnswer: "a"
    },
    {
      question: "Favourite Travel Destination:",
      answers: {
        a: "Zimbabwe",
        b: "Japan",
        c: "Thailand",
        d: "Cambodia"
      },
      correctAnswer: "d"
    }
  ];

  // Kick things off - this actions the quiz to run immediatly
  buildQuiz();


//PAGINATION: add JS to make css work
  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  //hook the navigation buttons up to these functions. 
  //This comes at the end of the code:
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
