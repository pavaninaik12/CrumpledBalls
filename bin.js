class Bin { 
    constructor(x,y,width,height,image){
    
    var options = {
        isStatic: true 
    }
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    this.width = width;
    this.height = height;
    
    }
    
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(rgb(255,225,225))
        rect(pos.x,pos.y,this.width,this.height);
        
    }
    }