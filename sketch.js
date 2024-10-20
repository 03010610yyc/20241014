let font;  
let points = [];  // 轉成點狀文字
let xOffset = 0;  // 水平移動偏移量
let speed = 2;    // 移動速度

function preload() {
    font = loadFont("fonts/Pacifico-Regular.ttf"); // 載入字型
}

function setup() {
    createCanvas(windowWidth, windowHeight);  
}

function draw() {
    background("#ffc2d1"); 
    stroke("#03045e"); 
    noFill(); 
    rectMode(CENTER); 

    // 畫一些圖形
    for (var j = 0; j < (height / 50); j++) { 
        for (var i = 0; i < (width / 50); i++) {
            ellipse(25 + (i * 50), 25 + (j * 50), 50 + mouseX);
            stroke(214, 80, 65);
            rect(25 + (i * 50), 25 + (j * 50), 50);
            stroke(0, 245, 212);
            ellipse(50 + (i * 50), 50 + (j * 50), 25 + mouseY);
            stroke("#450920");
        }
    }

    // 轉換文字為點狀
    points = font.textToPoints("TKUET", width / 2 + xOffset - 300, height / 2 + 100, 200, {
        sampleFactor: 0.1
    });

    noStroke();
    fill("#450920");

    // 繪製每一個點
    for (let i = 0; i < points.length; i++) { 
        ellipse(points[i].x, points[i].y, 15);  // 繪製點
    } 

    // 更新偏移量，實現左右移動
    xOffset += speed;  

    // 當文字移出畫布邊界時，反轉移動方向
    if (xOffset > width / 2 - 300 || xOffset < -width / 2 + 300) {
        speed *= -1;  // 反轉方向
    }
  }