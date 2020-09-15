var position = "0";
var RSP = {
  // 딕셔너리 자료구조
  rock: "0",
  scissor: "-142px",
  papper: "-284px",
};

function comRSP(position) {
  return Object.entries(RSP).find(function (v) {
    return v[1] === position;
  })[0];
}

var interval;
function intervalmaker() {
  interval = setInterval(function () {
    if (position === RSP.rock) {
      position = RSP.scissor;
    } else if (position === RSP.scissor) {
      position = RSP.papper;
    } else {
      position = RSP.rock;
    }
    document.querySelector("#computer").style.background =
      "url(https://en.pimg.jp/023/182/267/1/23182267.jpg) " + position + " 0";
  }, 100);
}

intervalmaker();

var score = {
  scissor: 1,
  rock: 0,
  papper: -1,
};

var result = document.querySelector("#result");

document.querySelectorAll(".btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    clearInterval(interval); // setInterval 중지
    setTimeout(function () {
      intervalmaker();
    }, 1000);
    var myRSP = this.textContent;
    var myScore = score[myRSP];
    var comScore = score[comRSP(position)];
    var gap = myScore - comScore;
    if (gap === 0) {
      result.textContent = "you draw, wait a minute";
    } else if ([-1, 2].includes(gap)) {
      result.textContent = "you win!!!, wait a minute";
    } else {
      result.textContent = "loser~~,wait a minute";
    }
  });
});

// 가위: 1, 바위: 0, 보: -1
// 나\컴퓨터    가위   바위    보
//        가위   1 1    1 0   1 -1
//        바위   0 1    0 0   0 -1
//          보  -1 1   -1 0  -1 -1

var startNum = 3;
var interval2 = setInterval(function () {
  if (startNum === 0) {
    console.log("종료!!!");
    return clearInterval(interva2);
  }
  console.log(startNum);
  startNum -= 1;
}, 1000);
