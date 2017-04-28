var arrow;
var door; 
var keyLock; 
var tiles;
var button;
var bars; 
var key;

var comboLocation; 

var keyStartX; 
var keyStartY; 
var keyEndX; 
var keyEndY; 
var keyLocation; 


var doorStartX;
var doorStartY; 
var doorLocation;

var windowStartX;
var windowStartY; 
var windowLocation; 

// function lock
var canvas;

// lock variables for canvas 2 lock combination
var lock3; 
var lock2;
var lock1;

// lock  for canvas change 
var lock; 

// variables for the combination changing in canvas 2 (moving the numbers from 1 to 9)
var lockcombo;
var lockcombo2; 
var lockcombo3;

//lock varibables for sizes 
var px1 = 450; 
var px2 = 450; 
var px3 = 450; 

var py = 365;
var py2 = 395;
var py3 = 425; 



function preload() 
{
  arrow = loadImage('https://dl.dropboxusercontent.com/s/xg8x718lw239jae/right-arrow-icon-114837-11.png');
  
  door = loadImage('https://dl.dropboxusercontent.com/s/u205rsxeah4ky8b/door-clipart-rectangle-doors-clipart.jpg');
  
  keyLock = loadImage('https://dl.dropboxusercontent.com/s/ojyn4r1elha97r3/clipart-best-clipart-best-IexDVP-clipart.png?');
  
  tiles = loadImage('https://dl.dropboxusercontent.com/s/vlplvqx278fycwo/j21sjfswknnpvl4jaboilbvr43lml7u3it1djnfj9ddybtewrwxins1klqf3yjkc-o.jpg');
  
  button = loadImage('https://dl.dropboxusercontent.com/s/zs28t9145ytdm86/Hopstarter-Soft-Scraps-Button-Blank-Red.ico');
  
  bars = loadImage('https://dl.dropboxusercontent.com/s/k3358oh8q2hr8mx/421888962_712ac07e5f_b.jpg');

  key = loadImage('https://dl.dropboxusercontent.com/s/sgygjmn6xzjaw8j/Paomedia-Small-N-Flat-Key.ico');

}


function setup()
{
  createCanvas(900,600);
  
  doorLocation = 1; 
  doorStartX = 0; 
  doorStartY = 300;
  
  windowStartX = 0;
  windowStartY = 100;
  windowLocation = 1; 
  
  canvas = 1; 
  
  lock = false; 
  lock1 = false;
  lock2 = false; 
  lock3 = false;

  lockcombo = 1;
  lockcombo2 = 1; 
  lockcombo3 = 1; 
  
  keyStartX = 405;
  keyStartY = 425;
  keyEndX = 20;
  keyEndY = 530; 
  keyLocation = 0; 
  
  
}



function draw()
{
  background(255,0,0);
  image(tiles,0,0);
  inventory();

  
  stroke(255);
  strokeWeight(1);
  text(mouseX,100,100);
  text(mouseY,220,100);
  // bed picture 
  fill(255,248,220);
  rect(300,0,300,150);
  
  //toilet picture 
  fill(255,215,0);
  rect(700,0,200,180);
  x();
  
  if (doorLocation == 1)
  {
    fill(255,255,0);
    rect(doorStartX,doorStartY,10,150);
    fill(0);
  }
  else if (doorLocation == 2) 
  {
    stroke(0);
    doorFull();
  }
  
  //clicking on yellow rectangle to get a bigger door image
  if (mouseX > doorStartX && mouseX < doorStartX+10 && mouseY > doorStartY && mouseY < doorStartY+150)
  {
    cursor(HAND);
    if (mouseIsPressed == true && doorLocation == 1)
    {
      doorLocation = 2;
    }
  }
  else
  {
    cursor(ARROW);
  }
  
  // going back button (arrow) 
  fill(255);
  rect(5,15,54,20);
  image(arrow,0,0,512/10,512/10);

  // if door is present then click arrow to go back
  if(doorLocation == 2 && mouseX > 0 && mouseX < 52 && mouseY > 0 && mouseY < 52 && mouseIsPressed== true )
  {
    cursor(HAND);
    doorLocation = 1; 
  }  
  
  // if window is present then click arrow to go back 
  if(windowLocation == 2 && mouseX > 0 && mouseX < 52 && mouseY > 0 && mouseY < 52 && mouseIsPressed == true)
  {
    cursor(HAND); 
    if(keyLocation == 1)
    {
      keyLocation = 0; 
    }
    windowLocation = 1; 
  }
  
  if(windowLocation == 1) 
  {
    //window original location
    fill(139,69,19);
    rect(windowStartX,windowStartY,10,150);
  }
  else if(windowLocation == 2)
  {
    fill(139,69,19);
    rect(windowStartX,windowStartY,10,150);
    windowFull();
  }


  if(mouseX > windowStartX && mouseX < windowStartX + 10 && mouseY > windowStartY && mouseY < windowStartY +150)
  {
    cursor(HAND);
    if(mouseIsPressed == true && windowLocation == 1)
    {
      windowLocation = 2; 
    }
    else 
    {
      cursor(ARROW);
    }
  }
  
  key1();
}

function doorFull()
{
  image(door,210,115,275,446);  
  passCode1();
  image(button,445,460,256/11,256/11); 
  
  if(comboLocation == 1) 
  {
    fill(255);
    image(keyLock,430,270,512/10,512/10);
  }
  
  if(lockcombo == 7 && lockcombo2 == 1 && lockcombo3 == 6 && mouseX > 445 && mouseX < 445+(256/11) && mouseY > 460 && mouseY < 460+(265/11) && mouseIsPressed == true)
  {
    comboLocation = 1; 
  }
}

function windowFull()
{
  if (keyLocation == 0)
  {
     keyLocation = 1; 
  }
  fill(255);
  image(bars,255,100,1024/2,768/2);
  if(mouseX > keyStartX && mouseX < keyStartX+(256/10) && mouseY > keyStartY && mouseY < keyStartY+(256/10)) 
  {
    if(mouseIsPressed == true && keyLocation == 1)
    {
      cursor(HAND);
      keyLocation = 2; 
    }
  }
}

function key1()
{
  if(keyLocation == 1)
  {
    image(key,keyStartX,keyStartY,256/10,256/10);
  }
  else if(keyLocation == 2)
  {
    image(key,keyStartX,keyStartY,256/10,256/10);

    if(keyStartX > keyEndX)
    {
      keyStartX = keyStartX - 5; 
    }
    if(keyStartY < keyEndY)
    {
      keyStartY = keyStartY + 2;
    }
    if (!(keyStartX > keyEndX && keyStartY < keyEndY))
    {
      keyLocation = 3;
    }

  }
  else if(keyLocation == 3)
  {
    image(key,keyEndX,keyEndY,256/6,256/6);
  }
}

function keyMove()
{
  
}

function passCode1()
{
  pass1Button();
  pass2Button();
  pass3Button();

  // white outer layer of the locks 
  fill(255);
  rect(px1-3,py+5,20,20);
  rect(px2-3,py2+5,20,20);
  rect(px3-3,py3+5,20,20);

  //grey button which is the combination options for the key lock. 
  fill(155);
  rect(px1,py,15,6);
  rect(px2,py2,15,6);
  rect(px3,py3,15,6);

  fill(0);
  strokeWeight(0);

  if(lockcombo == 1)
  {
    text("1",px1+5,py+20);
  }
  else if(lockcombo == 2)
  {
    text ("2",px1+5,py+20);
  }
  else if(lockcombo == 3)
  {
    text("3",px1+5,py+20);
  }
  else if(lockcombo == 4)
  {
    text("4",px1+5,py+20);
  }
  else if(lockcombo == 5)
  {
    text("5",px1+5,py+20);
  }
  else if(lockcombo ==6)
  {
    text("6",px1+5,py+20);
  }
  else if(lockcombo == 7)
  {
    text("7",px1+5,py+20);
  }
  else if(lockcombo ==8)
  {
    text("8",px1+5,py+20);
  }
  else if(lockcombo == 9)
  {
    text("9",px1+5,py+20);
  }
  else if(lockcombo == 10)
  {
    text("0",px1+5,py+20);
  }

  if(lockcombo2 == 1)
  {
    text("1",px2+5,py2+20);
  }
  else if(lockcombo2 == 2)
  {
    text ("2",px2+5,py2+20);
  }
  else if(lockcombo2== 3)
  {
    text("3",px2+5,py2+20);
  }
  else if(lockcombo2 == 4)
  {
    text("4",px2+5,py2+20);
  }
  else if(lockcombo2 == 5)
  {
    text("5",px2+5,py2+20);
  }
  else if(lockcombo2 ==6)
  {
    text("6",px2+5,py2+20);
  }
  else if(lockcombo2 == 7)
  {
    text("7",px2+5,py2+20);
  }
  else if(lockcombo2 == 8)
  {
    text("8",px2+5,py2+20);
  }
  else if(lockcombo2 == 9)
  {
    text("9",px2+5,py2+20);
  }
  else if(lockcombo2 == 10)
  {
    text("0",px2+5,py2+20);
  }

  if(lockcombo3 == 1)
  {
    text("1",px3+5,py3+20);
  }
  else if(lockcombo3 == 2)
  {
    text ("2",px3+5,py3+20);
  }
  else if(lockcombo3 ==3)
  {
    text("3",px3+5,py3+20);
  }
  else if(lockcombo3 == 4)
  {
    text("4",px3+5,py3+20);
  }
  else if(lockcombo3 == 5)
  {
    text("5",px3+5,py3+20);
  }
  else if(lockcombo3 ==6)
  {
    text("6",px3+5,py3+20);
  }
  else if(lockcombo3 == 7)
  {
    text("7",px3+5,py3+20);
  }
  else if(lockcombo3 ==8)
  {
    text("8",px3+5,py3+20);
  }
  else if(lockcombo3 == 9)
  {
    text("9",px3+5,py3+20);
  }
  else if(lockcombo3 == 10)
  {
    text("0",px3+5,py3+20);
  }
}

function pass1Button()
{
  if (lock1 == false && mouseX > px1 && mouseX < px1+15 && mouseY > py && mouseY < py+6 && mouseIsPressed == true)
  {
    if(lockcombo == 1)
    {
      lockcombo = 2;
      lock1 = true; 
    }
    else if(lockcombo == 2)
    {
      lockcombo = 3;
      lock1 = true;
    }
    else if(lockcombo == 3) 
    {
      lockcombo = 4;
      lock1 = true;
    }
    else if(lockcombo == 4)
    {
      lockcombo = 5;
      lock1 = true;
    }
    else if(lockcombo == 5) 
    {
      lockcombo = 6;
      lock1 = true;
    }
    else if(lockcombo == 6)
    {
      lockcombo = 7;
      lock1 = true;
    }
    else if(lockcombo == 7) 
    {
      lockcombo = 8;
      lock1 = true;
    }
    else if(lockcombo == 8)
    {
      lockcombo = 9;
      lock1 = true;
    }
    else if(lockcombo == 9) 
    {
      lockcombo = 10; 
      lock1 = true; 
    }
    else if(lockcombo == 10)
    {
      lockcombo = 1;
      lock1 = true; 
    }
  }
}

function pass2Button()
{
  if (lock2 == false && mouseX > px2 && mouseX < px2+15 && mouseY > py2 && mouseY < py2+6 && mouseIsPressed == true)
  {
    if(lockcombo2 == 1)
    {
      lockcombo2 = 2;
      lock2 = true; 
    }
    else if(lockcombo2 == 2)
    {
      lockcombo2 = 3;
      lock2 = true;
    }
    else if(lockcombo2 == 3) 
    {
      lockcombo2 = 4; 
      lock2 = true; 
    }
    else if(lockcombo2 == 4)
    {
      lockcombo2 = 5;
      lock2 = true; 
    }
    else if(lockcombo2 == 5) 
    {
      lockcombo2 = 6; 
      lock2 = true; 
    }
    else if(lockcombo2 == 6)
    {
      lockcombo2 = 7;
      lock2 = true; 
    }
    else if(lockcombo2 == 7) 
    {
      lockcombo2 = 8; 
      lock2 = true; 
    }
    else if(lockcombo2 == 8)
    {
      lockcombo2 = 9;
      lock2 = true; 
    }
    else if(lockcombo2 == 9) 
    {
      lockcombo2 = 10; 
      lock2 = true; 
    }
    else if(lockcombo2 == 10)
    {
      lockcombo2 = 1;
      lock2 = true; 
    }
  }
}

function pass3Button()
{
  if (lock3 == false && mouseX > px3 && mouseX < px3+15 && mouseY > py3 && mouseY < py3+6 && mouseIsPressed == true)
  {
    if(lockcombo3 == 1)
    {
      lockcombo3 = 2;
      lock3 = true; 
    }
    else if(lockcombo3 == 2)
    {
      lockcombo3 = 3;
      lock3 = true;
    }
    else if(lockcombo3 == 3) 
    {
      lockcombo3 = 4; 
      lock3 = true; 
    }
    else if(lockcombo3 == 4)
    {
      lockcombo3 = 5;
      lock3 = true; 
    }
    else if(lockcombo3 == 5) 
    {
      lockcombo3 = 6; 
      lock3 = true; 
    }
    else if(lockcombo3 == 6)
    {
      lockcombo3 = 7;
      lock3 = true; 
    }
    else if(lockcombo3 == 7) 
    {
      lockcombo3 = 8; 
      lock3 = true; 
    }
    else if(lockcombo3 == 8)
    {
      lockcombo3 = 9;
      lock3 = true; 
    }
    else if(lockcombo3 == 9) 
    {
      lockcombo3 = 10; 
      lock3 = true; 
    }
    else if(lockcombo3 == 10)
    {
      lockcombo3 = 1;
      lock3 = true; 
    }
  } 
}

function x()
{
  stroke(255,51,153);
  strokeWeight(3);
  line(225,375,250,350);
  line(250,375,225,350);
  stroke(0);
}

function inventory()
{
  strokeWeight(5);

  fill(160);
  rect(0,500,650,100);

  fill(175);
  stroke(0);
  rect(5,510,640,75);

  rect(5,510,80,75)
  rect(75,510,80,75);
  rect(150,510,80,75);
  rect(225,510,80,75);
  rect(300,510,80,75);
  rect(375,510,80,75);
  rect(450,510,80,75);

  strokeWeight(1);
}

function mouseReleased()
{
  if(lock1)
  {
    lock1 = false; 
  }

  if(lock2)
  {
    lock2 = false; 
  }

  if(lock3)
  {
    lock3 = false; 
  }
}
