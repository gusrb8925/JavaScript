var body = document.body;
var table = document.createElement("table");
var trArr = [];
var tdArr = [];
var result = "X";

var func = function (e) {
  console.log(e.target); // 칸
  console.log(e.target.parentNode); //줄
  console.log(e.target.parentNode.parentNode); // 테이블

  var Addtr = trArr.indexOf(e.target.parentNode);
  console.log("Addtr", Addtr);
  var Addtd = tdArr[Addtr].indexOf(e.target);
  console.log("Addtd", Addtd);

  if (tdArr[Addtr][Addtd].textContent !== "") {
    // 칸이 채워져 있는가?
    console.log("빈칸아닙니다.");
  } else {
    console.log("빈칸입니다.");
    tdArr[Addtr][Addtd].textContent = result;

    //빙고 찾기
    var full = false;
    //가로
    if (
      tdArr[Addtr][0].textContent === result &&
      tdArr[Addtr][1].textContent === result &&
      tdArr[Addtr][2].textContent === result
    ) {
      full = true;
    }

    //세로
    if (
      tdArr[0][Addtd].textContent === result &&
      tdArr[1][Addtd].textContent === result &&
      tdArr[2][Addtd].textContent === result
    ) {
      full = true;
    }

    //대각\
    if (Addtr - Addtd === 0) {
      if (
        tdArr[0][0].textContent === result &&
        tdArr[1][1].textContent === result &&
        tdArr[2][2].textContent === result
      ) {
        full = true;
      }
    }
    //대각/
    if (Math.abs(Addtr - Addtd) == 2) {
      if (
        tdArr[0][2].textContent === result &&
        tdArr[1][1].textContent === result &&
        tdArr[2][0].textContent === result
      ) {
        full = true;
      }
    }

    if (full) {
      alert(result + "님이 승리!");
      //빙고시 초기화
      result = "X";
      tdArr.forEach(function (tr) {
        tr.forEach(function (td) {
          td.textContent = "";
        });
      });
    } else {
      //낫 빙고
      if (result === "X") {
        result = "O";
      } else {
        result = "X";
      }
    }
  }
};

for (var i = 0; i < 3; i++) {
  var tr = document.createElement("tr");
  trArr.push(tr);
  tdArr.push([]);
  for (var j = 0; j < 3; j++) {
    var td = document.createElement("td");
    td.addEventListener("click", func);
    tdArr[i].push(td);
    tr.append(td);
  }
  table.append(tr);
}
body.append(table);
console.log(trArr, tdArr);
