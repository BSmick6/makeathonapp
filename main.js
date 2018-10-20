let questions = [
    "What's your name?",
    "What's your major?",
    "Where are you from?",
    "What year are you?"
];

$("#question").text(questions[Math.floor(Math.random() * questions.length)]);