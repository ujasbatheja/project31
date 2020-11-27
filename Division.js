class Division{
    constructor(x, y, width, heigth){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, heigth, options);
        this.width = width;
        this.height = heigth;
        World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(position.x, position.y, this.width, this.height);
    }
};
