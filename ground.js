class Ground {
    constructor(x,y,widthN,hieghtN){
        var options = {
            isStatic: true
        }
        this.body=Bodies.rectangle(x,y,widthN,hieghtN,options)
        this.width = widthN
        this.height = hieghtN
        World.add(world, this.body);
    }
   
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, this.width, this.height);
    }
}
