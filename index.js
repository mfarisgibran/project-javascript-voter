const votes = {
  option1: 0,
  option2: 0,
};

const option1ButtonElement = document.getElementById("option-1");
const option2ButtonElement = document.getElementById("option-2");

const result1Element = document.getElementById("result-1");
const result2Element = document.getElementById("result-2");

function voteOption1() {
  votes.option1 += 1;

  result1Element.innerText = votes.option1;
}

function voteOption2() {
  votes.option2 += 1;

  result2Element.innerText = votes.option2;
}

option1ButtonElement.addEventListener("click", voteOption1);
option2ButtonElement.addEventListener("click", voteOption2);
