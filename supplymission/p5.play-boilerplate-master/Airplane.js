class Airplane{
    constructor(x,y,width,height){
         var property={
             isStatic:true
         }
        
         this.body=Bodies.rectangle(x,y,width,height,property);
         this.width=width;
         this.height=height;
         this.image=loadImage("airplane image.svg");
         World.add(world,this.body);
    }


    display(){
         imageMode(CENTER);
         image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
        

    }


}