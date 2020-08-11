//Create variables here
var dog,dogImg
 var happyDogImg, database, foodS, foodStock;
 var fedTime,lastFed,foodObj;
function preload()
{  
dogImg=loadImage("images/dogImg.png")
happyDogImg=loadImage("images/dogImg1.png")
  //load images here
}

function setup() {
  database = firebase.database()
  createCanvas(600, 600);
  Dog = createSprite (300,300,10,10)
  Dog.addImage(dogImg);
  foodObj=new Food();
  foodStock  = database.ref('food');
  foodStock.on("value",readStock);
  feed=createButton("Feed the Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
addFood.mousePressed(addFoods)

}


function draw() {  
background(46,139,87)
//if(keyDown(UP_ARROW))
//{
 // writeStock(foodS);
 //Dog.addImage(happyDogImg);
fill(255,255,254);
textSize(15);
if (lastFed>=12){
  text("Last Feed :"+lastFed%12+ " PM",350,30);
}else if(lastFed==0){
  text("Last Feed : 12 AM",350,30);
}else {
  text("Last Feed :"+ lastFed+ " AM",350,30)
};

//}
  drawSprites();
  textSize(25)
  fedTime=database.ref ('FeedTime');
fedTime.on("value",function(data){
  lastFed=data.val();
})
        fill("white")
  text("press up arrow key to feed drago milk!",15,20)
  //add styles here

}
function readStock(data)
{
  foodS = data.val();
foodObj.updateFoodStock(foodS);
}
/*function writeStock(x)
{
  if(x<=0)
  {
    x=0;
  }
  else{
    x=x-1;
  }



  database.ref('/').update({
    Food:x
  })
}*/
function feedDog(){
  Dog.addImage(happyDogImg);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FoodTime:hour()
  })
}
function addFoods(){
  foodS=foodS+1
  database.ref('/').update({
    Food:foodS
  })
}