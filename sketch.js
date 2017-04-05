var triangleOrientation;
var triangleOrientation2;
var triangleOrientation3;
var triangleOrientation4;

var lockTriangleOrientation;
var lockTriangleOrientation2;
var lockTriangleOrientation3;
var lockTriangleOrientation4;

var triangleX;
var triangleY;
var triangleX2;
var triangleY2;
var triangleX3;
var triangleY3;
var triangleX4;
var triangleY4;

var triangleDistance;
var triangleDistance2;
var triangleDistance3;
var triangleDistance4;

var lock;
var lock2;
var lock3; 
var lock4;

var permamentLock1;
var permamentLock2;
var permamentLock3;
var permamentLock4;

var stickLocation1X;
var stickLocation1Y;
var stickLocation2X;
var stickLocation2Y;
var stickLocation3X;
var stickLocation3Y;
var stickLocation4X;
var stickLocation4Y;

//inventory positions 
var ix; 
var iy; 


function setup()
{
  createCanvas(700,600);
  triangleOrientation = 0;
  triangleOrientation2 = 0;
  triangleOrientation3 = 0;
  triangleOrientation4 = 0;
  
  triangleX = 100;
  triangleY = 100;
  triangleX2 = 500;
  triangleY2 = 100;
  triangleX3 = 100;
  triangleY3 = 300; 
  triangleX4 = 500;
  triangleY4 = 300;

  triangleDistance = 1000;
  triangleDistance2 = 1000;
  triangleDistance3 = 1000; 
  triangleDistance4 = 1000; 
  
  lock = false;
  lock2 = false;
  lock3 = false; 
  lock4 = false; 
  
  lockTriangleOrientation = false;
  lockTriangleOrientation2 = false;
  lockTriangleOrientation3 = false;
  lockTriangleOrientation4 = false;
  
  stickLocation1X = 100;
  stickLocation1Y = 100; 
  stickLocation2X = 150;
  stickLocation2Y = 100;
  stickLocation3X = 100;
  stickLocation3Y = 150;
  stickLocation4X = 150;
  stickLocation4Y = 150;
  
  ix = 40;
  iy = 500;
}

function draw()
{
  background(0,0,0);
  
  stroke(255,255,255);
  showHelpText();

  moveTriangle1();
  changeTriangleOrientation1();
  moveTriangle2();
  changeTriangleOrientation2();
  moveTriangle3();
  changeTriangleOrientation3();
  moveTriangle4();
  changeTriangleOrientation4();
  inventory();

    ellipse(stickLocation1X,stickLocation1Y,100,100);
}

function showHelpText()
{
  fill(255,255,255);
  strokeWeight(1);
  text("Click and drag objects to move them around",10,15);
  text("Hold 'r' and left click on object to rotate",10,35);
}

//function is to move the red triangle from one place to another
function moveTriangle1()
{
  stroke(255,255,255);
  strokeWeight(7);

  //the circular distance around the triangle
  triangleDistance = sqrt((triangleX-mouseX)*(triangleX-mouseX)+(triangleY-mouseY)*(triangleY-mouseY))

  //30 indicates the number of the area on the triangle. Turns green when it is less than 30. 
  if (triangleDistance < 100)
  {
    stroke(0,255,0);// green color 
    
    // when clicking it 
    if (mouseIsPressed == true && mouseButton == LEFT && keyIsPressed == false && lock == false && lock2 == false && lock3 == false && lock4 == false)
    {
      lock = true;
    }
  }

  if (lock == true)
  {
    stroke(255,255,0);
    triangleX = mouseX;
    triangleY = mouseY;
    
    stickDistance = sqrt((stickLocation1X-mouseX)*(stickLocation1X-mouseX)+(stickLocation1Y-mouseY)*(stickLocation1Y-mouseY))
    
    if(stickDistance < 50)
    {
      stroke(0,0,255);
      triangleX = stickLocation1X;
      triangleY = stickLocation1Y;
      permanentLock1 = true;
    }
  }

}
// this function is to move the orange triangle by dragging it from one place to another 
function moveTriangle2()
{
  stroke(255);
  strokeWeight(7);

  triangleDistance2 = sqrt((triangleX2-mouseX)*(triangleX2-mouseX)+(triangleY2-mouseY)*(triangleY2-mouseY))

  if (triangleDistance2 < 100)
  {
    fill(0,255,0);
    if (mouseIsPressed == true && mouseButton == LEFT && keyIsPressed == false && lock2 == false && lock == false && lock3 == false && lock4 == false)
    {
      lock2 = true;
    }
  }

  if (lock2 == true)
  {
    stroke(255,255,0);
    triangleX2 = mouseX;
    triangleY2 = mouseY;
    
    stickDistance2 = sqrt((stickLocation2X-mouseX)*(stickLocation2X-mouseX)+(stickLocation2Y-mouseY)*(stickLocation2Y-mouseY))
    
    if(stickDistance2 < 50)
    {
      stroke(0,0,255);
      triangleX2 = stickLocation2X;
      triangleY2 = stickLocation2Y;
      permanentLock2 = true;
    }
  }

}

function moveTriangle3()
{
  stroke(255,255,255);
  strokeWeight(7);
  
  //the circular distance around the triangle
  triangleDistance3 = sqrt((triangleX3-mouseX)*(triangleX3-mouseX)+(triangleY3-mouseY)*(triangleY3-mouseY))

  //100 indicates the number of the area on the triangle. Turns green when it is less than 30. 
  if (triangleDistance3 < 100)
  {
    stroke(0,255,0);// green color 

    // when clicking it 
    if (mouseIsPressed == true && mouseButton == LEFT && keyIsPressed == false && lock3 == false && lock == false && lock2 == false && lock4 == false)
    {
      lock3 = true;
    }
  }

  if (lock3 == true)
  {
    stroke(255,255,0);
    triangleX3 = mouseX;
    triangleY3 = mouseY;
    
    stickDistance3 = sqrt((stickLocation3X-mouseX)*(stickLocation3X-mouseX)+(stickLocation3Y-mouseY)*(stickLocation3Y-mouseY))

    if(stickDistance2 < 50)
    {
      stroke(0,0,255);
      triangleX2 = stickLocation2X;
      triangleY2 = stickLocation2Y;
      permanentLock2 = true;
    }
  }
}

function moveTriangle4()
{
  stroke(255,255,255);
  strokeWeight(7);

  //the circular distance around the triangle
  triangleDistance4 = sqrt((triangleX4-mouseX)*(triangleX4-mouseX)+(triangleY4-mouseY)*(triangleY4-mouseY))

  //100 indicates the number of the area on the triangle. Turns green when it is less than 30. 
  if (triangleDistance4 < 100)
  {
    stroke(0,255,0);// green color 

    // when clicking it 
    if (mouseIsPressed == true && mouseButton == LEFT && keyIsPressed == false && lock4 == false && lock == false && lock2 == false && lock3 == false)
    {
      lock4 = true;
    }
  }

  if (lock4 == true)
  {
    stroke(255,255,0);
    triangleX4 = mouseX;
    triangleY4 = mouseY;
  }
}

function changeTriangleOrientation1()
{
  triangleDistance = sqrt((triangleX-mouseX)*(triangleX-mouseX)+(triangleY-mouseY)*(triangleY-mouseY))

  if (triangleDistance < 30)
  {
  
    if (mouseIsPressed == true && mouseButton == LEFT && keyIsPressed == true && key == 'r' && lockTriangleOrientation == false)
    {
      triangleOrientation = triangleOrientation + 1;
      if (triangleOrientation > 2)
          triangleOrientation = 0;

      lockTriangleOrientation = true;
    }
  }
  
  if (triangleOrientation == 0)
  {
    stroke(0);
    text("1",100,100);
    stroke(255);
    line(triangleX+15,triangleY-50,triangleX-70,triangleY+35);
  }
  
  if (triangleOrientation == 1)
  {
    stroke(0);
    text("2",100,100);
    stroke(255);
    line(triangleX-70,triangleY-50,triangleX+15,triangleY+35);
  }

  if (triangleOrientation == 2)
  {
    stroke(0);
    text("3",100,100);
    stroke(255);
    line(triangleX-70,triangleY,triangleX+15,triangleY);
  }
}

function changeTriangleOrientation2()
{
  triangleDistance2 = sqrt((triangleX2-mouseX)*(triangleX2-mouseX)+(triangleY2-mouseY)*(triangleY2-mouseY))

  if (triangleDistance2 < 30)
  {

    if (mouseIsPressed == true && mouseButton == LEFT && keyIsPressed == true && key == 'r' && lockTriangleOrientation2 == false)
    {
      triangleOrientation2 = triangleOrientation2 + 1;
      if (triangleOrientation2 > 2)
        triangleOrientation2 = 0;

      lockTriangleOrientation2 = true;
    }
  }

  if (triangleOrientation2 == 0)
  {
    stroke(0);
    text("1",600,100);
    stroke(255);
    line(triangleX2+115,triangleY2-50,triangleX2+30,triangleY2+35);
  }

  if (triangleOrientation2 == 1)
  {
    stroke(0);
    text("2",600,100);
    stroke(255);
    line(triangleX2+30,triangleY2-50,triangleX2+115,triangleY2+35);
  }

  if (triangleOrientation2 == 2)
  {
    stroke(0);
    text("3",600,100);
    stroke(255);
    line(triangleX2+30,triangleY2,triangleX2+115,triangleY2);
  }
}

function changeTriangleOrientation3()
{

  triangleDistance3 = sqrt((triangleX3-mouseX)*(triangleX3-mouseX)+(triangleY3-mouseY)*(triangleY3-mouseY))

  if (triangleDistance3 < 30)
  {

    if (mouseIsPressed == true && mouseButton == LEFT && keyIsPressed == true && key == 'r' && lockTriangleOrientation3 == false)
    {
      triangleOrientation3 = triangleOrientation3 + 1;
      if (triangleOrientation3 > 2)
        triangleOrientation3 = 0;

      lockTriangleOrientation3 = true;
    }
  }

  if (triangleOrientation3 == 0)
  {
    stroke(0);
    text("1",100,400);
    stroke(255);
    line(triangleX3+115,triangleY3-50,triangleX3+30,triangleY3+35);
  }

  if (triangleOrientation3 == 1)
  {
    stroke(0);
    text("2",100,400);
    stroke(255);
    line(triangleX3+30,triangleY3-50,triangleX3+115,triangleY3+35);
  }

  if (triangleOrientation3 == 2)
  {
    stroke(0);
    text("3",100,400);
    stroke(255);
    line(triangleX3+30,triangleY3,triangleX3+115,triangleY3);
  }
}

function changeTriangleOrientation4()
{
  triangleDistance4 = sqrt((triangleX4-mouseX)*(triangleX4-mouseX)+(triangleY4-mouseY)*(triangleY4-mouseY))

  if (triangleDistance4 < 30)
  {

    if (mouseIsPressed == true && mouseButton == LEFT && keyIsPressed == true && key == 'r' && lockTriangleOrientation4 == false)
    {
      triangleOrientation4 = triangleOrientation4 + 1;
      if (triangleOrientation4 > 2)
        triangleOrientation4 = 0;

      lockTriangleOrientation4 = true;
    }
  }

  if (triangleOrientation4 == 0)
  {
    stroke(0);
    text("1",500,300);
    stroke(255);
    line(triangleX4+15,triangleY4-50,triangleX4-70,triangleY4+35);
  }

  if (triangleOrientation4 == 1)
  {
    stroke(0);
    text("2",500,300);
    stroke(255);
    line(triangleX4-70,triangleY4-50,triangleX4+15,triangleY4+35);
  }

  if (triangleOrientation4 == 2)
  {
    stroke(0);
    text("3",500,300);
    stroke(255);
    line(triangleX4-70,triangleY4,triangleX4+15,triangleY4);
  }
}

function mouseReleased()
{
    if (lock)
    {
      lock = false;
    }
  
    if (lock2)
    {
       lock2 = false;
    }
  
    if (lock3)
    {
      lock3 = false;
    }

    if (lock4)
    {
      lock4 = false;
    }

    if (lockTriangleOrientation == true)
    {
      lockTriangleOrientation = false;
    }
  
    if (lockTriangleOrientation2 == true)
    {
      lockTriangleOrientation2 = false;
    }

    if (lockTriangleOrientation3 == true)
    {
      lockTriangleOrientation3 = false;
    }

    if (lockTriangleOrientation4 == true)
    {
      lockTriangleOrientation4 = false;
    }
}

function inventory()
{
  strokeWeight(5);

  fill(160);
  rect(ix-5,iy-10,650,100);

  fill(175);
  stroke(0);
  rect(ix,iy,640,75);

  rect(ix,iy,80,75)
  rect(ix+80,iy,80,75);
  rect(ix+160,iy,80,75);
  rect(ix+240,iy,80,75);
  rect(ix+320,iy,80,75);
  rect(ix+400,iy,80,75);
  rect(ix+480,iy,80,75);

  strokeWeight(1);
}
