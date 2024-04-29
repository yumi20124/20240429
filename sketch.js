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
  radioElement.option("亮度")
  radioElement.option("紅底")
  radioElement.option("文字")
  radioElement.style("color","#fff")
  radioElement.style("font-size","30px")
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
        if(radioElement.value()=="方塊" || radioElement.value()==""){
          rect(x,y,span)
        }
        if(radioElement.value()=="圓圈"){
          ellipse(x,y,span)
        }
        if(radioElement.value()=="亮度"){
          bk = (pixel[0]+pixel[1]+pixel[2])/3
          fill(bk)
          ellipse(x,y,span) //span代表圓圈直徑
        }
        if(radioElement.value()=="紅底"){
          colorMode(HSB)
          fill(pixel[0],80,80)
          push()
            // rotate(pixel[0]/100)
            rectMode(CENTER)
            rect(x,y,span*0.8)
            fill(0)
            ellipse(x,y,10) //span代表圓圈直徑
            pop()
        }
        if(radioElement.value()=="文字"){
          colorMode(HSB)
          fill(pixel[0],80,80)
          push()
            // rotate(pixel[0]/100)
            rectMode(CENTER)
            rect(x,y,span*0.8)
            fill(0)
            ellipse(0,0,10) //span代表圓圈直徑
            pop()
            
        }
        if(radioElement.value()=="文字"){
        const density="1522"
        let txt ="一二三四我"
        bk=(pixel[0]+pixel[1]+pixel[2])/3.
        let bkld=int(map(bk,0,255,9,0))
        text(txt[bkld],x,y)
        textSize(span)
        }
      }
    }
  pop()
  }

