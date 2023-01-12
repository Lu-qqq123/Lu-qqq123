let title = document.getElementById("title");
let content = document.getElementById("content");
let btn = document.getElementById("btn");
let list = document.getElementById("list");
btn.addEventListener("click", news);
function news() {
  list.innerHTML =
    list.innerHTML +
    `
  <div  class="news">
    <h2>${title.value}</h2>
    <p>${content.value}</p><hr>
  </div>
  `;
}

let i = 0,
  imgArr = new Array();
imgArr[0] = "https://www.ncyu.edu.tw/files/site_content/ncyu/emblem.jpg";
imgArr[1] = "https://www.ncyu.edu.tw/newsite/images/opening.jpg";
imgArr[2] = "https://www.ncyu.edu.tw/files/site_content/ncyu/ncyulogo2.bmp";

function showImg() {
  document.getElementById("ico").src = imgArr[i];
  i = (i + 1) % 3;
}
function show() {
  setInterval(showImg, 2000);
}