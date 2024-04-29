var captureGraphics
var capture_width = 640
var capture_height = 640

function setup() {
  createCanvas(windowWidth,windowHeight);
  capture = createCapture(VIDEO)  //啟動攝影機
  capture.size(320,240);//設定顯示畫面大小
  captureGraphics = captureGraphics(capture_width,capture_height)
  captureGraphics.translate(capture_width)
  captureGraphics.scale(-1,1)
  captureGraphics.hide()
  //---選鈕的介面
  var radioElement = createRadio();
  radioElement.position(width/2-300,20)
  radioElement.option("方塊")
  radioElement.option("圓圈")
  radioElement.style("color","30")
}

function draw() {
  background(0);
  noStroke()
  span = 5+map(mouseX,0,width,0,20)
  push()
    translate(width/2-capture_width/2,height/2-capture_height/2)  //把原點移到
    captureGraphics.image(capture,0,0)  //在(0,0)
    for(var y=0;captureGraphics.width;x=x+20){
      for(var y=0;y<captureGraphics.height;y=y+20){
        var pixel = captureGraphics.get(x,y)
        fill(pixel)
        if(radioElement.value()=="方塊"){
          rect(x,y,span)
          }
          if(radioElement.value()=="圓圈"){}
          ellipse(x,y,span)
      }
    }
  pop()
}
