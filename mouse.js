let pressDuration = 0; // 记录鼠标按的时长的变量 Variable to track how long the mouse has been pressed

// setup里的内容，在网页运转后一次性建立；content in setup gets created once the page is loaded, will load once.
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 255); // background只有放在setup才能显示鼠标留痕 show mouse trace if putting background in "setup" only
}

// draw里的内容，如，从第12行跑到第33行后反复，是一个循环（虽然肉眼看不见）
// content in draw, eg. will run from line 12 to 33 and run 12 to 33 in a loop.. (tho eyes cant tell)
function draw() {
  //cursor
  cursor(HAND); // curosr 改为小手 cursor changed to little hand

  stroke(255); // point是白色 point is white
  strokeWeight(2); // point的大小 size of the point
  point(mouseX, mouseY); //可尝试point以外的图形 can try other shapes for the point tracing

  //mouse press
  if (mouseIsPressed === true) { // 如果鼠标被按下 if mouse is pressed
    pressDuration += 1; // 增加按鼠标的时长 Increase press duration
    let pointSize = map(pressDuration, 0, 60, 2, 80); // 使鼠标point大小从小到大 Map pressDuration to a size between 2 and 80
    pointSize = constrain(pointSize, 2, 80); // 使point大小控制在2到80之间 Constrain size to be between 2 and 80

    stroke(255); // point是白色 point is white
    strokeWeight(pointSize); // point的大小由以上的pressDuration决定 the size of the point is decided by pressDuration
    point(mouseX, mouseY); // point的位置 position of the point
    
  } else { // 如果鼠标松开 if the mouse is released
    point(mouseX, mouseY); 
    pressDuration = 0;
  }
}