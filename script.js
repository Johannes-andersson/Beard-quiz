// Shuffle function
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle
    while (0 !== currentIndex) {
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  // Array of questions and answers
  let quizQuestions = [
    {
        question: "Which vitamin promotes beard growth?",
        choices: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        answer: "Vitamin D"
      },
      {
        question: "What is the name of the style where the mustache is grown long and curled at the ends?",
        choices: ["Goatee", "Fu Manchu", "Handlebar", "Soul Patch"],
        answer: "Handlebar"
      }, 
      {
        question: "What is the term for the fear of beards?",
        choices: ["Pogonophobia", "Geniophobia", "Chaetophobia", "Trichophobia"],
        answer: "Pogonophobia"
      },
      {
        question: "How long does it typically take for a beard to grow to its full potential?",
        choices: ["2-4 months", "4-6 months", "6-12 months", "1-2 years"],
        answer: "6-12 months"
      },
      {
        question: "During which month do men commonly grow beards for charity?",
        choices: ["January", "November", "April", "July"],
        answer: "November"
      },
      {
        question: "Which famous artist was known for his iconic beard and cut-off ear?",
        choices: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Claude Monet"],
        answer: "Vincent van Gogh"
      },
      {
        question: "The longest beard ever recorded belonged to a man from which country",
        choices: ["Norway", "Canada", " India", "United States" ],
        answer: "Norway"
      },
      {
        question: "What is the purpose of beard balm",
        choices: ["Cleaning the beard", "Shaping and styling", "Shaving the beard", "Lengthening the beard" ],
        answer: "Shaping and styling"
      },
      {
        question: "Which hormone is primarily responsible for beard growth",
        choices: ["Insulin", "Oxytocin", "Testosterone", "Adrenaline"],
        answer: "Testosterone"
      },
      {
        question: "In which country is the annual World Beard and Moustache Championships ",
        choices: ["Germany", "United States", "Australia", "Norway"],
        answer: "Germany"
      },
  ];
  
  // Shuffle the questions before starting the quiz
  quizQuestions = shuffle(quizQuestions);
  
  let currentQuestionIndex = 0;
  let score = 0;
  let hasAnswered = false;
  
  // Reference HTML elements
  const questionContainer = document.querySelector('.question-container');
  const questionTitle = document.getElementById('question-title');
  const choicesContainer = document.querySelector('.choices-container');
  const nextQuestionBtn = document.getElementById('next-question-btn');
  const scoreDisplay = document.getElementById('score');
  const restartBtn = document.getElementById('restart-btn');
  
  function disableAllChoices() {
    const choiceButtons = document.querySelectorAll('.choice');
    choiceButtons.forEach(button => {
      button.disabled = true;
    });
  }
  
  function displayQuestion() {
    hasAnswered = false;
    if (currentQuestionIndex < quizQuestions.length) {
      const currentQuestion = quizQuestions[currentQuestionIndex];
      questionTitle.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
      choicesContainer.innerHTML = '';
  
      currentQuestion.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.classList.add('choice');
        button.addEventListener('click', () => selectAnswer(choice, currentQuestion.answer));
        choicesContainer.appendChild(button);
      });
  
      nextQuestionBtn.disabled = true;
    } else {
      showResults();
    }
  }
  
  function selectAnswer(choice, correctAnswer) {
    if (!hasAnswered) {
      hasAnswered = true;
      disableAllChoices();
      if (choice === correctAnswer) {
        score++;
      }
      scoreDisplay.textContent = `Score: ${score}`;
      nextQuestionBtn.disabled = false;
    }
  }
  
  function showResults() {
    disableAllChoices();
    questionContainer.style.display = 'none';
    nextQuestionBtn.style.display = 'none';
    restartBtn.style.display = 'inline-block';
    scoreDisplay.textContent = `Final Score: ${score}`;
  }
  
  function restartQuiz() {
    quizQuestions = shuffle(quizQuestions); // Shuffle the questions on restart
    currentQuestionIndex = 0;
    score = 0;
    hasAnswered = false;
    questionContainer.style.display = 'block';
    nextQuestionBtn.style.display = 'inline-block';
    restartBtn.style.display = 'none';
    displayQuestion();
  }
  
  nextQuestionBtn.addEventListener('click', () => {
    if (hasAnswered) {
      currentQuestionIndex++;
      displayQuestion();
    }
  });
  
  restartBtn.addEventListener('click', restartQuiz);
  
  // Initialize the quiz
  restartQuiz(); // We call restartQuiz to shuffle and display the first question
  
  
  
  
  
  