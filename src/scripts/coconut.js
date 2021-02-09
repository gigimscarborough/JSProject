class Coconut {
    constructor(ctxWidth, ctxHeight) {
        this.startingPos = {
            x: 240,
            y: 0
        }
        this.direction = {
            x: 0,
            y: 2
        }
        this.coconut = new Image();
        this.coconut.src = 'src/assets/images/coconut.png'
        
    }

    draw(ctx) {
        ctx.drawImage(this.coconut, this.startingPos.x, this.startingPos.y, 30, 30);
    }

    move(ctx){
        ctx.clearRect(0, 0, 720, 425);
        this.draw(ctx)
        this.startingPos.x += this.direction.x;
        this.startingPos.y += this.direction.y;  
    }

    // update(deltaTime){

    //     if (!deltaTime) return;
    //     this.position.x += 5 / deltaTime
    // }
}

export default Coconut;