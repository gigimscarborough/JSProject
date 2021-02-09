class Basket{
    constructor(game){
        this.width = 130
        this.height = 55
        this.startingPos = {
            x: (game.ctxWidth - this.width) / 2,
            y: game.ctxHeight - this.height
        }
        this.basket = new Image();
        this.basket.src = 'src/assets/images/basket.png'

        debugger
        document.addEventListener("mousemove", event => {
            let movement = event.clientX - game.canvas.offsetLeft;
            if (movement > 0 && movement < game.ctxWidth) {
                this.startingPos.x = movement - this.width / 2;
            }
        });
       
    }

    draw(ctx){
        ctx.drawImage(this.basket, this.startingPos.x, this.startingPos.y, this.width, this.height);
    }

    // update(deltaTime){

    //     if (!deltaTime) return;
    //     this.position.x += 5 / deltaTime
    // }
}

export default Basket;