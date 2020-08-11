class Food {
    constructor(){
      this.fooStock = 0;
      this.lastFed = 0;
     this.image=loadImage("images/Milk.png") 
    }
    getFoodStock(){
        var foodStockRef=database.ref('foodStock')
        foodStockRef.on("value",(data)=>{
            foodStock =data.val();
        })
    }
    updateFoodStock(foodStock){
//database.ref('/').update({
   this.foodStock= foodStock 

    }
deductFood(){
if (this.foodStock>0){
    foodStock=foodStock-1
}
}
    display(){
var x=80,y=100;
        imageMode(CENTER);
        image(this.image, x,y,50,50);

        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if (i%10==0){
                    x=80;
                    y=y+50
                }
                image(this.image,x,y,50,50)
                x=x+30
            }
        }
    }
  
}