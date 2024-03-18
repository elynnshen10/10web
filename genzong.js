
let t = 0; // 时间变量
let words = ["trend", "prediction", "notification", "activism", "knowledge", "hacking", "privacy", "cybersecurity", "phishing", "breach", "surveillance", "news"]; // 随机单词列表
let yOffset = 10; // 竖向移动的偏移量
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Press 'd' to dive in the data", width / 2, height / 2);
}

function keyPressed() {
  if (key === 'd' || key === 'D') {
    window.location.href = 'genzong.js';
  }
}
function setup() {
  createCanvas(3000, 2000);
  noStroke();
  fill(300, 200, 500);
}

function draw() {
  background(100, 10); // 半透明背景（创建足迹）

  // 创建 x 和 y 网格上的椭圆 
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // 每个圆的初始位置取决于鼠标位置
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // 也根据粒子的位置变化 
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // 每个粒子绕圈运动 
      const myX = x;
      const myY = y + 20 * cos(0.2 * PI * t + angle) + yOffset; // 竖向移动

      let randomIndex = floor(random(words.length)); // 随机选择一个单词
      let word = words[randomIndex]; // 获取随机单词

      textSize(15);
      textAlign(CENTER, CENTER);
      let distance = dist(mouseX, mouseY, myX, myY); // 计算鼠标位置与当前位置的距离
      let transparency = map(distance, 0, 50, 355, 0); // 根据距离设置透明度
      fill(30, 100, 500, transparency); // 设置填充颜色和透明度
      text(word, myX, myY); // 绘制单词
    }
  }

  t = t + 0.0001; // 更新时间，减慢字母更替速度
  yOffset += 0.9; // 增加竖向偏移量，使其竖向移动
}