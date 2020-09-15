var body = document.body;

//문제 변수생성.
var numArr;
var questionNum;
var coin;

//문제 생성 함수
function createQuestion() {
  numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  questionNum = [];
  for (var i = 0; i < 4; i++) {
    var tmp = numArr.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    questionNum.push(tmp);
  }
  coin = 5;
  console.log(questionNum);
}

//문제 생성
createQuestion();

//html 생성
var result = document.createElement("h1");
result.textContent = "4자리 숫자야구 게임, 5coin";
body.append(result);

var form = document.createElement("form");
body.append(form);

var input = document.createElement("input");
input.maxLength = "4";
input.minLength = "4";
form.append(input);

var button = document.createElement("button");
button.textContent = "입력";
form.append(button);
//html 생성

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var answer = input.value;
  if (answer === questionNum.join("")) {
    result.textContent = "HOME RUN!!";
    input.value = ""; // 답을 맞추면 빈칸만들기
    input.focus(); // 정답시 뉴 포커스

    // 새로운 문제 생성
    createQuestion();
  } else {
    coin--;
    if (coin < 1) {
      result.textContent =
        "OUT!!!" + "정답:" + questionNum.join("") + ", NewGame Start!";
      input.value = ""; //  빈칸만들기
      input.focus(); //  포커스
      // 새로운 문제 생성
      createQuestion();
    } else {
      var questionArr = answer.split("");
      var strike = 0;
      var ball = 0;
      for (var i = 0; i < 3; i++) {
        if (Number(questionArr[i]) === questionNum[i]) {
          strike++;
        } else if (questionNum.indexOf(Number(questionArr[i])) > -1) {
          ball++;
        }
      }
      result.textContent =
        strike + " strike~!!, " + ball + " ball~ and coin:" + coin;
      input.value = ""; //  빈칸만들기
      input.focus(); //  포커스
    }
  }
});
