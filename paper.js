class Paper { 
    constructor(x,y){
    
    var options = {
        isStatic: false,
        restitution : 0.3,
        friction : 0.5,
        density : 1.2
    }
    
    this.body = Matter.Bodies.circle(x, y, 10, [options], [50]);
    World.add(world,this.body);
    this.width = 20;
    this.height = 20;

    this.image = loadImage("paper");
    }
    
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);

        
    }
    }