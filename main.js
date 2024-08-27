function QuestionSetGenerator(op, max_int, num_questions) {

    class Question {
        constructor(string, answer) {
            this.string = string;
            this.answer = answer;
            this.attempts = 0;
        }
    }

    let question_array = [];

    switch (op) {
        case "add": // Fixed the case from "op" to "add"
            let q_str_list = [];
            let i = 0;
            while (i < num_questions) {
                let num1 = Math.floor(Math.random() * max_int);
                let num2 = Math.floor(Math.random() * max_int);

                let q_str = `${num1} + ${num2}`;

                if (!q_str_list.includes(q_str)) {
                    q_str_list.push(q_str);

                    question_array.push(new Question(q_str, String(num1 + num2))); // Added 'new' to create an instance of Question
                    i += 1;
                } else {
                    continue;
                }
            }
            break; // Added break to avoid falling through the switch cases
    }

    return question_array;
}

function AskQuestions(list, practice = false) {
    let correct = 0;
    let incorrect = [];

    if (practice == false) {
        for (let i = 0; i < list.length; i++) { // Fixed `length(list)` to `list.length`
            let current_question = list[i];

            let user_answer = prompt(`What is ${current_question.string}?`, 0);

            if (user_answer == current_question.answer) {
                correct += 1;
            } else {
                incorrect.push(list[i]);
            }
        }
    } else {
        while (list.length != 0) { // Fixed `length(list)` to `list.length`

            let random_number = Math.floor(Math.random() * list.length);
            let current_question = list[random_number]; // Moved this line before `prompt`

            let user_answer = prompt(`What is ${current_question.string}?`, 0);

            if (user_answer == current_question.answer) {

                alert("Correct!");

                list.splice(list.indexOf(current_question), 1); // Added 1 to splice correctly

            } else {
                alert(`Incorrect. The correct answer is ${current_question.answer}.`);

                current_question.attempts += 1;

                if (current_question.attempts == 3) {
                    alert("You got this wrong too many times.");

                    list.splice(list.indexOf(current_question), 1); // Added 1 to splice correctly
                }
            }
        }
    }
    return [incorrect, correct]; // Changed return format to array
}

let add_questions = QuestionSetGenerator("add", 5, 10);
let question_list = JSON.parse(JSON.stringify(add_questions));

let [incorrectly_answered, num_correct] = AskQuestions(question_list);

if (incorrectly_answered.length != 0) { // Fixed `length(incorrectly_answered != 0)` to `incorrectly_answered.length != 0`

    let ask_practice = prompt("Would you like to practice the questions you got incorrect? [y/n]", "n").toLowerCase();

    if (ask_practice == "y") {
        AskQuestions(incorrectly_answered, practice = true);
    }
}
