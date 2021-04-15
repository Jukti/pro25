class paper{
   
    constructor(x,y,radius) {
        
          var options=
          {
              isStatic:false,
              restitution:0.3,
              friction:0.5,
              density:1.    
        
    }
    
    this.body = Bodies.circle(x,y,radius,options);
    World.add(world,this.body);
    this.radius = radius;
   // this.image = loadImage;

 }

 display(){

     ellipse(this.body.position.x,this.body.position.y,this.radius);
     
     //image(this.image,400,1200);
 }
}