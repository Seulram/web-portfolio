const column = document.querySelectorAll(".stack__column");
const stack = [
  ["front-end", "HTML", "CSS", "JavaScript", "React"],
  [
    "back-end",
    "Node.js",
    "Express",
    "Python",
    "Java",
    "Spring",
    "OracleDB",
    "MongoDB",
  ],
  ["other", "Git", "AWS", "Heroku"],
];

function init() {
  for (let i = 0; i < column.length; i++) {
    for (let j = 0; j < stack[i].length; j++) {
      const newDiv = document.createElement("div");
      newDiv.className = "stack";
      newDiv.innerText = stack[i][j];
      column[i].appendChild(newDiv);
    }
  }
}

init();
