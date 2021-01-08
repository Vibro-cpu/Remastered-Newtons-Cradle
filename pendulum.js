class Pendulum{
    
    constructor(x,y,color){

        this.body = Bodies.circle(x,y,20)

        this.x = x
        this.y = y
        
        this.color = color

        World.add(world,this.body)

    }

    display(){

        push ()

            fill(this.color)

            ellipseMode(CENTER)

            ellipse(this.body.position.x,this.body.position.y,40)

        pop ()

    }

}