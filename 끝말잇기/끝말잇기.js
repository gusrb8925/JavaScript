var body = document.body;
var word = document.createElement("div");
word.textContent = "헬로월드";
body.append(word);

var form = document.createElement("form");
body.append(form);

var input = document.createElement("input");
form.append(input);

var button = document.createElement("button");
button.textContent = "입력";
form.append(button);

var result = document.createElement("div");
result.textContent = "끝말잇기~";
body.append(result);

form.addEventListener("submit", function (e) {
  e.preventDefault(); //새로고침 x
  if (word.textContent[word.textContent.length - 1] === input.value[0]) {
    result.textContent = "딩동댕~";
    word.textContent = input.value;
    input.value = "";
    input.focus();
  } else {
    result.textContent = "떙!";
    input.value = "";
    input.focus();
  }
});
