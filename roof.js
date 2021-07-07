class Roof{
    constructor(x,y,w,h){
        var option = {
            isStatic:true,
        }

        this.width = w;
        this.height = h;

        this.body = Bodies.rectangle(x,y,w,h,option)
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position;

        push();
        rectMode(CENTER);
        fill(199,89,255);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}