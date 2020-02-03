import "./styles.css";

// 과제
// 오브젝트 함수를 만들고 배열에 넣고 매핑 후 HTML에 삽입
// 1. 오브제트 생성하는 함수 만들기
// 2. 함수를 사용해서 오브젝트 생성 후 배열에 넣기
// 3. 오브젝트 생성된 배열을 map을 사용해서 tag로 만들기
// 4. tag를 innerHTML에 넣기

/*<div class="bar bar-밸류값 색깔값">
    <div class="face side-0">
      <div class="growing-bar"></div>
    </div>
    <div class="face side-1">
      <div class="growing-bar"></div>
    </div>
    <div class="face top"></div>
    <div class="face floor"></div>
  </div>
*/

// 사용가능한 색 종류
// red
// cyan
// navy
// lightGray
// yellow
// lime
// gray

const createChart = (color, value) => ({ color, value });

const charArr = [];
charArr.push(createChart("cyan", 75));
charArr.push(createChart("yellow", 60));
charArr.push(createChart("red", 89));
charArr.push(createChart("lime", 42));
charArr.push(createChart("gray", 27));

const tagArr = charArr.map(
  item => `
   <div class="bar bar-${item.value} ${item.color}">
    <div class="face side-0">
      <div class="growing-bar"></div>
    </div>
    <div class="face side-1">
      <div class="growing-bar"></div>
    </div>
    <div class="face top"></div>
    <div class="face floor"></div>
  </div>
  `
);

document.getElementById("chart").innerHTML = tagArr.join("");
