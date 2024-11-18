function QuestionSetGenerator(op, max_int, num_questions) {

    class Question {
        constructor(string, answer) {
            this.string = string;
            this.answer = answer;
        }
    }

    let question_array = [];

    switch (op) {
        case "add":
            let q_str_list = [];
            let i = 0;
            while (i < num_questions) {
                let num1 = Math.floor(Math.random() * max_int);
                let num2 = Math.floor(Math.random() * max_int);

                let q_str = `${num1} + ${num2}`;

                if (!q_str_list.includes(q_str)) {
                    q_str_list.push(q_str);

                    question_array.push(new Question(q_str, String(num1 + num2)));
                    i += 1;
                }
            }
            break;
    }
    return question_array;
}

// Sets the number of questions
let num_of_questions = 5;

// The max int is the largest number you will see in the problems
let max_int = 10;

// Generate a starter list
let question_list = QuestionSetGenerator("add", max_int, num_of_questions);

// Sets it to show first question
let question_num = 0;

// Sets vars to each HTML element
let question = document.getElementById("question")
let question_count = document.getElementById("question_num")
let submit = document.getElementById("submit_button")
let input = document.getElementById("input_box")

// Sets the status of the button to submit to start
let button_status = "submit"

let user_answer = 0
let correct = 0
let incorrect = 0


// Stores current question in a var
let current_question = question_list[question_num];

// Sets the text for the first question in the question, the count, and the button
function UpdateQuestion() {
    current_question = question_list[question_num];

    question.innerHTML = current_question.string;
    // question_count.innerHTML = `Question ${question_num + 1} of ${question_list.length}`;
    question_count.innerHTML = `Question ${question_num + 1} out of ${question_list.length}`
    button_status = "submit"
    submit.innerHTML = "Submit"
}


function ToggleAllChildElements(parent, toggle) {
    // Shows or hides all child elements based on the toggle value

    // Gets an array of all the child elements in the parent
    parent = document.getElementById("question_elements")

    // For each child in the parent element
    for (let i=0; i < parent.children.length; i++) {

        // Gets the child
        let child = parent.children[i]

        // If toggle is 0, hide everything
        if (toggle === 0) {
            child.style.display = "none"
        }

        // If toggle is 1, show everything
        if (toggle === 1) {
            child.style.display = "block"
        }

    }
}





// Sets up the first question
UpdateQuestion()

function submitAnswer() {

    /*
        The button is set to the initial status, which is the submit stage
        It shows the first question on the screen.

        When the button is pressed, if it's the last question,
        displays the percentage of the ones correctly answered

        When the button is pressed during the submit stage,
        it takes the current text in the input box, and compares
        it to the correct answer, and shows the score on the screen
        replacing the question

        The button is now in the continue mode, and when the button is pressed
        change the question num by one, and update the whole question
        with the new one


    */

    // If it's the last question
    if (question_num === (question_list.length - 1)){

        // Clears everything off the screen
        parent = document.getElementById("question_elements")
        ToggleAllChildElements(parent, 0)

        correct += 1

        // Shows the question element
        question.style.display = "block"

        // Gets the percentage
        let percentage = Math.round((100 / question_list.length) * correct)

        // Displays the percentage
        question.innerHTML = `You got ${percentage}%.`

        // If it's not the last question
    } else {

        // When the button is pressed in submit mode
        if (button_status === "submit") {

            // Gets the user answer
            user_answer = input.value;

            // If the user answer equals the answer to the current question
            if (user_answer === current_question.answer) {

                // Adds one to the correct var
                correct += 1

                // Tells user that they are correct
                question.innerHTML = "Correct"

                // Update the question num
                question_num += 1

                // Update the question elements
                UpdateQuestion()

                // If the user answer does not equal the correct answer
            } else {

                // Adds one to the incorrect var
                incorrect += 1

                // Tells user they are wrong, and tells them correct answer
                question.innerHTML = `Incorrect. The correct answer is ${current_question.answer}.`

                // Sets the button text to "Continue"
                submit.innerHTML = "Continue"

                // Sets the button status to continue
                button_status = "continue"
            }


            // If the button is in the continue status
        } else {

            // Updates the question num
            question_num += 1

            // Updates the question elements
            UpdateQuestion()

        }

    }

// Clears the input value
    input.value = ""
}