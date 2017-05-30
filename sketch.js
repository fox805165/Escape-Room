var leftarrow; 
var rightarrow;
var bedView; 
var optionView; 

var toilet; 
var sink; 
var bathroom; 

var button;
var door; 
var keyLock;

var keyRotate;
var middoor;
var bars;
var airvent; 

var cabinet;
var open1; 

var canvasLocation;

var books;
var bookStartX;
var bookStartY;
var bookEndX;
var bookEndY;
var bookLocation;
var bookMovement;

var key;
var keyStartX; 
var keyStartY; 
var keyEndX; 
var keyEndY; 
var keyLocation; 
var keyMovement;


var nextviewcount;
var closeviewcount;
var lock;

var tissue; 
var tissueLocation;
var tissueStartX;
var tissueStartY;
var tissueEndX; 
var tissueEndY;

var cabinetLocation; 


var inventoryitem;
var showinventory;

var lock1; 
var lock3; 
var lock4;
var lock2;


var r1;
var r2;
var r3;
var r4;

var circleD;
var circle2D;

// variables for the combination changing in canvas 2 (moving the numbers from 1 to 9)
var lockcombo;
var lockcombo2; 
var lockcombo3;
var comboLocation;

//lock varibables for sizes 
var px1 = 750; 
var px2 = 750; 
var px3 = 750; 

var py =  365;
var py2 = 395;
var py3 = 425; 

var begin;
var shelf; 
var empty; 
var doorView; 
var doorView2;
var hiddenDoor;
var shelfLocation;

var nextviewcount5;

function preload()
{
  rightarrow = loadImage('https://dl.dropboxusercontent.com/s/0cewepqb8rqmdrf/006739-3d-transparent-glass-icon-arrows-arrow-thick-right.png');

  leftarrow = loadImage('https://dl.dropboxusercontent.com/s/axy9jfr3tfcgq4w/006738-3d-transparent-glass-icon-arrows-arrow-thick-left.png?dl=0');

  bedView = loadImage('https://dl.dropboxusercontent.com/s/fid417s64wdealb/Bed.png');

  optionView = loadImage('https://dl.dropboxusercontent.com/s/lu1qs0jj1vhtdf6/Option%20view.png');

  bathroom = loadImage('https://dl.dropboxusercontent.com/s/tmkn099kh7e7x0j/Bathroom.png');

  sink = loadImage('https://dl.dropboxusercontent.com/s/pv9v0obeqsom5ji/Sink.png');

  toilet = loadImage('https://dl.dropboxusercontent.com/s/hheqqkt2dq0c1sl/toilet%20tissue.png');

  door = loadImage('https://dl.dropboxusercontent.com/s/40uw7kiyyqrj1xx/Door.png');

  cabinet = loadImage('https://dl.dropboxusercontent.com/s/x9p92f30eo2tzsh/Cabinet.png')

  bars = loadImage('https://dl.dropboxusercontent.com/s/selcj8yvawwf97a/window2.png');

  airvent = loadImage('https://dl.dropboxusercontent.com/s/nntyvma8yluz11n/Screen%20Shot%202017-05-18%20at%208.49.26%20AM.png');

  open1 = loadImage('https://dl.dropboxusercontent.com/s/3v2t7f4wdzijwxi/Screen%20Shot%202017-05-18%20at%208.20.18%20AM.png');

  doorOpen = loadImage('https://dl.dropboxusercontent.com/s/s2fy1lbldcg931p/door%20outside%20.png');

  button = loadImage('https://dl.dropboxusercontent.com/s/zs28t9145ytdm86/Hopstarter-Soft-Scraps-Button-Blank-Red.ico');

  keyLock = loadImage('https://dl.dropboxusercontent.com/s/ojyn4r1elha97r3/clipart-best-clipart-best-IexDVP-clipart.png');

  key = loadImage('https://dl.dropboxusercontent.com/s/sgygjmn6xzjaw8j/Paomedia-Small-N-Flat-Key.ico');

  tissue = loadImage('https://dl.dropboxusercontent.com/s/6e7oc52n9h0p8rj/toilet%20tissue%20%281%29.png');

  books = loadImage('https://dl.dropboxusercontent.com/s/edw2977mc7psg63/books.png')

  r1 = loadImage('https://dl.dropboxusercontent.com/s/h2e565qz2mf2o47/R1.png');

  r2 = loadImage('https://dl.dropboxusercontent.com/s/w2591qeydpgu842/R2.png');

  r3 = loadImage('https://dl.dropboxusercontent.com/s/kxjp263ahsjks2j/R3.png');

  r4 = loadImage('https://dl.dropboxusercontent.com/s/7m1r31t4algzv8c/R4.png');

  begin = loadImage('https://dl.dropboxusercontent.com/s/yxj7i4wf32y25hw/Screen%20Shot%202017-05-16%20at%2011.18.58%20AM.png');

  shelf = loadImage('https://dl.dropboxusercontent.com/s/py44i28wdbf3qho/Screen%20Shot%202017-05-16%20at%2011.44.47%20AM.png');

  empty = loadImage('https://dl.dropboxusercontent.com/s/51t52a49zvowjs5/Screen%20Shot%202017-05-16%20at%2011.46.41%20AM.png');

  doorView = loadImage('https://dl.dropboxusercontent.com/s/29xec9mzy9tg1rj/Screen%20Shot%202017-05-22%20at%206.29.41%20PM%20%281%29.png');

  doorView2 = loadImage('https://dl.dropboxusercontent.com/s/ty1x39p3dxz5s7f/bookshelf%20missing%20books.png');

  hiddenDoor = loadImage('https://dl.dropboxusercontent.com/s/6iu9ldhn5ld4tkd/Screen%20Shot%202017-05-19%20at%2011.30.16%20AM.png');
}


function setup()
{
  createCanvas(800,600); 
  nextviewcount = 0;
  closeviewcount = 0;
  lock = false;
  lock2 = false; 

  inventoryitem = 0;
  showinventory = true;

  item1inventoryposition = 0;
  item2inventoryposition = 0;
  item3inventoryposition = 0;

  item1X = 50;
  item1Y = 50;
  item2X = 680;
  item2Y = 125;
  tissueStartX = 350;
  tissueStartY = 400;

  item1Xsize = 50;
  item1Ysize = 50;
  item2Xsize = 181;
  item2Ysize = 30;
  item3Xsize = 55;
  item3Ysize = 65;


  lock1 = false;
  lock4 = false; 
  lock3 = false;

  lockcombo = 1;
  lockcombo2 = 1; 
  lockcombo3 = 1;

  keyStartX = 405;
  keyStartY = 225;
  keyMovement = 0;

  keyLocation = 0; 
  keyRotate = 0;
  tissueLocation = 0;
  cabinetLocation = 0;

  bookLocation = 0; 
  bookStartX = 150;
  bookStartY = 233;
  shelfLocation = 0;


  canvasLocation = 0;

  nextviewcount5 = 0;


}

function draw()
{
  background(255);
  if(canvasLocation == 0)
  {
    room1Draw();
  }
  else if(canvasLocation == 1)
  {
    room2Draw();
  }
  else if(canvasLocation == 2)
  {
    room3Draw();
  }
}
function room1Draw()
{
  noFill();
  stroke(0);
  rect(0,0,799,599);
  nextview();

  if (mouseX > 0 && mouseX < 100 && mouseY > 500 && mouseY < 600 && mouseIsPressed == true && lock == false)
  {
    nextviewcount = nextviewcount - 1;
    lock = true;
  }

  if (mouseX > 700 && mouseX < 800 && mouseY > 500 && mouseY < 600 && mouseIsPressed == true && lock == false)
  {
    nextviewcount = nextviewcount + 1;
    lock = true;
  }

  if (nextviewcount > 8)
  {
    nextviewcount = 0; 
  }

  if (nextviewcount < 0)
  {
    nextviewcount = 8;
  }

  image(rightarrow,700,500,100,100);
  image(leftarrow,0,500,100,100);
  fill(255,0,0);
  if(nextviewcount == 1)
  {
    ellipse(230,425,10,10);
    if(mouseX > 225 && mouseX < 240 && mouseY > 420 && mouseY < 435 && mouseIsPressed == true)
    {
      nextviewcount = 2; 
    }
    ellipse(400,50,10,10);
    if(mouseX > 395 && mouseX < 405 && mouseY > 45 && mouseY < 55 && mouseIsPressed == true)
    {
      nextviewcount = 3; 
    }
  }
  if(nextviewcount == 2)
  {
    ellipse(350,500,10,10);
    if(mouseX > 345 && mouseX < 365 && mouseY > 500 && mouseY < 515 && mouseIsPressed == true)
    {
      nextviewcount = 4;
    }

    ellipse(575,450,10,10);
    if(mouseX > 570 && mouseX < 590 && mouseY > 450 && mouseY < 465 && mouseIsPressed == true)
    {
      nextviewcount = 5;  
    }
  }
  inventory();
}

function room2Draw()
{
  nextview5();
  if (mouseX > 0 && mouseX < 100 && mouseY > 500 && mouseY < 600 && mouseIsPressed == true && lock == false)
  {
    nextviewcount5 = nextviewcount - 1;
    lock = true;
  }

  if (mouseX > 700 && mouseX < 800 && mouseY > 500 && mouseY < 600 && mouseIsPressed == true && lock == false)
  {
    nextviewcount5 = nextviewcount5 + 1;
    lock = true;
  }

  if (nextviewcount5 > 3)
  {
    nextviewcount5 = 0; 
  }

  if (nextviewcount5 < 0)
  {
    nextviewcount5 = 3;
  }

  image(leftarrow,0,500,100,100);
  image(rightarrow,700,500,100,100);
  fill(255,0,0);
  if(nextviewcount5 == 0)
  {
    ellipse(150,465,10,10);
    if(mouseX > 150 && mouseX < 160 && mouseY > 465 && mouseY < 475 && mouseIsPressed == true)
    {
      nextviewcount5 = 2;
    }

  }  
  inventory();
  cursor(ARROW);
  fill(0,0,255);
  text(mouseX,100,100);
  text(mouseY,200,100);
}

function room3Draw()
{
  background(0);
}
//Transition images using the arrows to move canvases (room 2)
function nextview5()
{
  if(nextviewcount5 == 0)
  {
    image(begin,0,0);
  }
  else if(nextviewcount5 == 1)
  {
    image(shelf,0,0);
  }
  else if(nextviewcount5 == 2)
  {
    image(empty,0,0);
  }
  else if(nextviewcount5 == 3)
  {
    shelfFull();
  }
}

//Transition images using the arrows to move canvases (room 1)
function nextview()
{
  if(nextviewcount == 0)
  {
    image(bedView,0,0);
    keyLocation = 0;
  }
  else if(nextviewcount == 1)
  {
    image(optionView,0,0);
    keyLocation = 0;
  }
  else if(nextviewcount == 2)
  {
    image(bathroom,0,0);
  }
  else if(nextviewcount == 3)
  {
    windowFull();
  }
  else if(nextviewcount == 4)
  {
    image(toilet,0,0);
  }
  else if(nextviewcount == 5)
  {
    image(sink,0,0);
  }
  else if(nextviewcount == 6)
  {
    cabinetFull();
  }
  else if(nextviewcount == 7)
  {
    image(airvent,0,0);
  }
  else if(nextviewcount == 8)
  {
    door1();
  }
}

// this is the function in which allows the cabinet to open and close
function cabinetFull()
{
  if(cabinetLocation == 0)
  {
    fill(0);
    ellipse(415,405,10,10);
    ellipse(415,450,10,10);
    ellipse(415,495,10,10);  
    image(cabinet,0,0);

  }
  else if(cabinetLocation == 1)
  {
    image(open1,0,0);
    bookLocation = 1;
  }

  if(mouseX > 410 && mouseX < 420 && mouseY > 445 && mouseY < 455 && mouseIsPressed == true)
  {
    cabinetLocation = 1;
  }

  bookLocation1();
}

function door1()
{
  //background
  image(door,0,0);

  // button to unlock the keyhole
  image(button,745,460,256/11,256/11); 

  //code for the lock combination
  passCode1();

  //changing the code from lock to unlock 
  if(comboLocation == 1) 
  {
    fill(255);
    image(keyLock,730,300,512/10,512/10);

    if(mouseX > keyEndX && mouseX < keyEndX+256/10 && mouseY > keyEndY && mouseY < keyEndY+256/10 && mouseIsPressed == true)
    {
      keyMovement = 1;
    }
  }

  // if the combination is 2 5 4 then code will unlock
  if(lockcombo == 2 && lockcombo2 == 5 && lockcombo3 == 4 && mouseX > 745 && mouseX < 745+(256/11) && mouseY > 460 && mouseY < 460+(265/11) && mouseIsPressed == true)
  {
    comboLocation = 1; 
  }

  // if pressed on the green circle then an outdoor image is shown and the door number is there 
  fill(0,255,0);
  ellipse(750,300,10,10);
  if(mouseX > 745 && mouseX < 755 && mouseY > 295 && mouseY < 305 && mouseIsPressed == true )
  {
    image(doorOpen,0,0);
  } 

  keyMovement1();

  if(mouseX > 745 && mouseX < 760 && mouseY > 310 && mouseY < 325 && keyMovement == 1)
  {
    fill(255);
    rect(680,10,110,30);
    fill(0);
    text("Move to Next Room",685,20);

    if(mouseIsPressed == true)
    {
      canvasLocation = 1;
    }
  } 

}

function keyMovement1()
{
  circleD = sqrt((mouseX - 755)*(mouseX - 755)+(mouseY - 325)*(mouseY - 325));

  noFill();
  noStroke();
  ellipse(755,325,50,50);
  if(keyMovement == 1)
  {
    if(circleD < 25)
    {
      noCursor();
      image(key,mouseX-256/9/2,mouseY-256/9/2,256/9,256/9);
    }
    else
    {
      cursor(ARROW);
    }

  }

}

function shelfFull()
{
  if(shelfLocation == 0)
  {
    image(doorView2,0,0);
  }
  else if(shelfLocation == 1)
  {
    passShelf();
  }
  else if(shelfLocation == 2)
  {
    image(doorView,0,0);
    fill(0);

    text("Click door to enter Room 3.",120,100);
    
    if(mouseX > 290 && mouseX < 330 && mouseY > 290 && mouseY < 335 && mouseIsPressed == true)
    {
      canvasLocation = 2;
    }
  }

  if(mouseX > bookEndX && mouseX < bookEndX + 181/4 && mouseY  > bookEndY && mouseY < bookEndY+185/4 && mouseIsPressed == true) 
  {
    bookMovement = 1;
  }

  bookMovement1();

  if(mouseX > 450 && mouseX < 500 && mouseY > 220 && mouseY < 270 && mouseIsPressed == true)
  {
    shelfLocation = 1;
  }

}

function passShelf()
{	
  image(hiddenDoor,0,0);
  fill(0,255,0);
  ellipse(415,118,10,10);
  if(mouseX > 410 && mouseX < 420 && mouseY > 110 && mouseY < 120 && mouseIsPressed == true)
  {
    shelfLocation = 2;
  }
 
  bookMovement = 0;
  cursor(ARROW);

}

function bookMovement1()
{
  circle2D = sqrt((mouseX - 475)*(mouseX - 475)+(mouseY - 250)*(mouseY - 250));

  noFill();
  noStroke();
  ellipse(475,250,75,75);
  if(bookMovement == 1) 
  {
    if(circle2D < 32.5)
    {
      noCursor();
      image(books,mouseX-181/3/2,mouseY -185/3/2,181/3,181/3);
    }
    else 
    {
      cursor(ARROW);
    }
  }

}

function keyRotation1()
{
  if(keyRotate == 1)
  {
    image(r4,50,100,256/10,256/10);
  }
  if(keyRotate == 2)
  {
    image(r2,50,100,256/10,256/10);
  }
  if(keyRotate == 3)
  {
    image(r3,50,100,256/10,256/10);
  }
  if(keyRotate == 4)
  {
    image(r1,50,100,256./10,256/10);
  }
  cursor(ARROW);
}

function windowFull()
{
  image(bars,0,0);
}

function inventory()
{
  spaces = 100;

  // start - draw inventory on screen
  if (showinventory == true)
  {
    for (var r = 0; r < 10; r++)
    {

      stroke(0,0,0);
      fill(125,125,125);
      rect(spaces+r*50,600-60,50,50);

    }
  }
  // end - draw inventory on screen

  // start - show/hide inventory
  fill(255,255,255);
  rect(0,0,50,50);
  if (showinventory == true)
  {
    fill(0,0,0);
    text("hide",10,25);
  }
  else 
  {    
    fill(0,0,0);
    text("show",10,25);
  }
  if (mouseX > 0 && mouseX < 50 && mouseY > 0 && mouseY < 50 && mouseIsPressed == true && lock2 == false)
  {
    if (showinventory == true)
    {
      showinventory = false;
      fill(0,0,0);
      text("hide",10,25);
    }
    else 
    {
      showinventory = true;        
      fill(0,0,0);
      text("show",10,25);
    }

    lock2 = true;
  }
  // end - show/hide inventory

  // start - random items on the screen to collect
  if (item1inventoryposition == 0 || showinventory == true)
  {
    keyLocation = 1; 
  }
  if (item2inventoryposition == 0 || showinventory == true)
  {
    bookLocation = 1;
  }
  if (item3inventoryposition == 0 || showinventory == true)
  {
    tissueLocation = 1;
  }
  // end - random items on the screen to collect

  // start - code for collecting items
  // if the item is collectable 
  if (item1inventoryposition == 0)
  {
    // if you click on the item set the inventory position it is on and increase inventory position to prepare next item

    //key item. when mouse presses on the key the it becomes inside the inventory 
    if (mouseX > keyStartX && mouseX < keyStartX+256/10 && mouseY > keyStartY && mouseY < keyStartY+256/10 && mouseIsPressed == true && lock2 == false)
    {
      inventoryitem = inventoryitem + 1;
      item1inventoryposition = inventoryitem;
      lock2 = true;
    }
  }

  if (item2inventoryposition == 0)
  {
    if (mouseX > bookStartX && mouseX < bookStartX+item2Xsize && mouseY > bookStartY && mouseY < bookStartY+item2Ysize && mouseIsPressed == true && lock2 == false)
    {
      inventoryitem = inventoryitem + 1;
      item2inventoryposition = inventoryitem;
      lock2 = true;
    }
  }
  if (item3inventoryposition == 0)
  {    
    if (mouseX > tissueStartX && mouseX < tissueStartX+item3Xsize && mouseY > tissueStartY && mouseY < tissueStartY+item3Ysize && mouseIsPressed == true && lock2 == false)
    {
      inventoryitem = inventoryitem + 1;
      item3inventoryposition = inventoryitem;
      lock2 = true;
    }
  }
  // end - code for collecting items    

  // start - code for arranging inventory items in order they were clicked
  if (showinventory == true)
  {
    if (item1inventoryposition > 0)
    {
      keyLocation = 2;

    }
    if (item2inventoryposition > 0)
    {
      bookLocation = 2;
    }
    if (item3inventoryposition > 0)
    {
      tissueLocation = 2;
    }

    keyLocation1();
    tissueLocation1();
    bookLocation1();
  }
  // end - code for arranging inventory items in order they were clicked
}

// book settings for the tissue is so that the position of the book in certain canvases are at the right place 
function bookLocation1()
{
  if(bookLocation == 1 && cabinetLocation == 1)
  {
    image(books,bookStartX,bookStartY,item2Xsize,item2Ysize);
  }
  else if(bookLocation == 2)
  {
    bookStartX = bookEndX;
    bookStartY = bookEndY;

    bookEndX = (spaces+50*item2inventoryposition-50)+5;
    bookEndY = 600-60;

    image(books,bookEndX,bookEndY,181/4,185/4);;
  }
}
// key settings for the tissue is so that the position of the key in certain canvases are at the right place 
function keyLocation1()
{
  if(keyLocation == 1 && nextviewcount == 3)
  {
    image(key,keyStartX,keyStartY,256/10,256/10);
  }
  else if(keyLocation == 2)
  {
    keyStartX =  keyEndX;
    keyStartY =  keyEndY;

    keyEndX = spaces+50*item1inventoryposition-50;
    keyEndY = 600-50;

    image(key,keyEndX,keyEndY,256/7,256/7);
  }
}

// location settings for the tissue is so that the position of the tissue in certain canvases are at the right place 
function tissueLocation1()
{
  // the tissue is only going to be at the toilet scene so it will start when it is at that canvas
  if(tissueLocation == 1 && nextviewcount == 4)
  {
    image(tissue,tissueStartX,tissueStartY,item3Xsize,item3Ysize); 
  }
  // this is when the tissue is placed into the inventory. Once it is in the inventory then it will stay there and be open to see at all canvases 
  else if(tissueLocation == 2)
  {
    tissueStartX = tissueEndX ;
    tissueStartY = tissueEndY ;

    tissueEndX = (spaces+50*item3inventoryposition-50)-10;
    tissueEndY = 600 - 80;

    image(tissue,tissueEndX,tissueEndY,item3Xsize*1.25,item3Ysize*1.25);
  }
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
  fill(192);
  rect(px1,py,15,6);
  rect(px2,py2,15,6);
  rect(px3,py3,15,6);

  fill(0);
  strokeWeight(1);

  if(lockcombo == 1)
  {
    text("1",px1+5,py+20);
  }
  else if(lockcombo == 2)
  {
    text("2",px1+5,py+20);
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
  if (lock4 == false && mouseX > px2 && mouseX < px2+15 && mouseY > py2 && mouseY < py2+6 && mouseIsPressed == true)
  {
    if(lockcombo2 == 1)
    {
      lockcombo2 = 2;
      lock4 = true; 
    }
    else if(lockcombo2 == 2)
    {
      lockcombo2 = 3;
      lock4 = true;
    }
    else if(lockcombo2 == 3) 
    {
      lockcombo2 = 4; 
      lock4 = true; 
    }
    else if(lockcombo2 == 4)
    {
      lockcombo2 = 5;
      lock4 = true; 
    }
    else if(lockcombo2 == 5) 
    {
      lockcombo2 = 6; 
      lock4 = true; 
    }
    else if(lockcombo2 == 6)
    {
      lockcombo2 = 7;
      lock4 = true; 
    }
    else if(lockcombo2 == 7) 
    {
      lockcombo2 = 8; 
      lock4 = true; 
    }
    else if(lockcombo2 == 8)
    {
      lockcombo2 = 9;
      lock4 = true; 
    }
    else if(lockcombo2 == 9) 
    {
      lockcombo2 = 10; 
      lock4 = true; 
    }
    else if(lockcombo2 == 10)
    {
      lockcombo2 = 1;
      lock4 = true; 
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

function mouseReleased()
{
  if (lock)
  {
    lock = false; 
  }

  if(lock2)
  {
    lock2 = false;
  }

  if(lock3)
  {
    lock3 = false;
  }

  if(lock4)
  {
    lock4 = false;
  }
}








