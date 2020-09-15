var Numarr = Array(45)
  .fill()
  .map(function (element, index) {
    return index + 1;
  });

var shuffle = [];
while (Numarr.length > 0) {
  var pNum = Numarr.splice(Math.floor(Math.random() * Numarr.length), 1)[0];
  shuffle.push(pNum);
}
console.log(shuffle);

var bonus = shuffle[shuffle.length - 1];
var lottos = shuffle.slice(0, 6);
console.log(
  bonus,
  lottos.sort(function (p, c) {
    //오름차순 정렬
    return p - c;
  })
);

var result = document.getElementById("result");
var bonusresult = document.getElementById("bonus");

function ballcss(num, result) {
  var ball = document.createElement("div");
  ball.textContent = num;
  ball.style.display = "inline-block";
  ball.style.border = "1px solid black";
  ball.style.borderRadius = "10px";
  ball.style.width = "20px";
  ball.style.height = "20px";
  ball.style.textAlign = "center";
  ball.style.marginRight = "10px";
  ball.style.fontSize = "12px";
  var backcolor;
  if (num <= 10) {
    backcolor = "red";
  } else if (num <= 20) {
    backcolor = "orange";
  } else if (num <= 30) {
    backcolor = "yellow";
  } else if (num <= 40) {
    backcolor = "chocolate";
  } else {
    backcolor = "green";
  }

  ball.style.backgroundColor = backcolor;
  result.append(ball);
}
setTimeout(function () {
  ballcss(lottos[0], result);
}, 1000); //1000밀리초=1초
setTimeout(function () {
  ballcss(lottos[1], result);
}, 2000); //1000밀리초=1초
setTimeout(function () {
  ballcss(lottos[2], result);
}, 3000); //1000밀리초=1초
setTimeout(function () {
  ballcss(lottos[3], result);
}, 4000); //1000밀리초=1초
setTimeout(function () {
  ballcss(lottos[4], result);
}, 5000); //1000밀리초=1초
setTimeout(function () {
  ballcss(lottos[5], result);
}, 6000); //1000밀리초=1초

//보너스공
setTimeout(function () {
  ballcss(bonus, bonusresult);
}, 7000); //1000밀리초=1초
