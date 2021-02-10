class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    //make the pig completely visible at the start
    //visiblity is between 0 and 255
    //0 = 1 completely off byte= (8bits)=0000 0000(competely invisible)
    // //1 = 1 completely on byte= (8bits)=1111 1111(competely visible)
    this.Visibility=255
    
  }
  display(){
    console.log(this.body.speed)
   
  //display the pig if the speed is less than 3 else make it disappear gradually
  if(this.body.speed<3){
    super.display()
  }
  else{ 
    World.remove(world, this.body);
    //apply changes to the pig and not to the entire game
    push()
    this.Visibility=this.Visibility-5
    //tint creates vanishing effect by adding a transparent layer to image
tint(255,this.Visibility)
image(this.image,this.body.position.x,this.body.position.y,50,50)
pop()
  }
  }
  

};