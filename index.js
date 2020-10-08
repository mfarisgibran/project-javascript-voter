let votes = {
  option1: 0,
  option2: 0,
};

if (localStorage.getItem("votes")) {
  votes = JSON.parse(localStorage.getItem("votes"));
}

const option1ButtonElement = document.getElementById("option-1");
const option2ButtonElement = document.getElementById("option-2");

const result1Element = document.getElementById("result-1");
const result2Element = document.getElementById("result-2");

function calculateBothOptions() {
  let result1InPercentage =
    (votes.option1 / (votes.option1 + votes.option2)) * 100;

  let result1RoundedPercentage = result1InPercentage.toFixed(2);

  let result2InPercentage =
    (votes.option2 / (votes.option1 + votes.option2)) * 100;

  let result2RoundedPercentage = result2InPercentage.toFixed(2);

  result1Element.innerText = result1RoundedPercentage + "%";
  result2Element.innerText = result2RoundedPercentage + "%";

  localStorage.setItem("votes", JSON.stringify(votes));
}

function voteOption1() {
  votes.option1 += 1;

  calculateBothOptions();
}

function voteOption2() {
  votes.option2 += 1;

  calculateBothOptions();
}

option1ButtonElement.addEventListener("click", voteOption1);
option2ButtonElement.addEventListener("click", voteOption2);
