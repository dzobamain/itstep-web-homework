document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // test answers
  const answers = {
    q1: "b",
    q2: "a",
    q3: "a"
  };

  let score = 0;

  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  document.getElementById("result").textContent = `Correct: ${score}/${Object.keys(answers).length}`;
});
