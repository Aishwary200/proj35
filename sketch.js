//Create variables here
var dog,dogImg,happyDogImg;
var database;
var foodS,foodStock;

function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png")
  happyDogImg=loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  dog=createSprite(200,250,20,20)
  dog.addImage(dogImg)
  dog.scale=0.2;
  foodStock=database.ref('Food')
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87)
  drawSprites();
  //add styles here
 if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(happyDogImg)
 }
 textSize(50)
 fill(red)
 text(foodStock,250,20)
}
function readStock(data){
  foodS=data.val();
 dog.x =foodS.x
 dog.y =foodS.y
}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
database.ref(('/').update)({
  Food:x
  
})
}



