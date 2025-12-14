const questions = [];

questions.push({
  grade,
  experience,
  question,
  time: new Date().toLocaleString()
});
const box = document.createElement("div");
box.textContent = question;
document.body.appendChild(box);