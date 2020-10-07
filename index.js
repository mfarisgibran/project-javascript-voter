const votes = {
  option1: 0,
  option2: 0,
};

function voteOption1() {
  votes.option1 += 1;
}

function voteOption2() {
  votes.option2 += 1;
}

const option1Button = document.getElementById("option-1");
const option2Button = document.getElementById("option-2");

option1Button.addEventListener("click", voteOption1);
option2Button.addEventListener("click", voteOption2);
