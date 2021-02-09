import Basket from './basket'
import Coconut from './coconut'

class Game {
    constructor(){
        
        this.canvas = document.getElementById("game-canvas");
        this.ctx = this.canvas.getContext('2d');
        this.ctxHeight = this.canvas.height;
        this.ctxWidth = this.canvas.width;
        this.basket = new Basket(this);
        this.coconut = new Coconut(this);
        this.startGame = this.startGame.bind(this)
        this.draw = this.draw.bind(this)
    
        
    }

   startGame(){
       this.basket
       this.coconut
   }

   draw(){
   
       this.coconut.move(this.ctx);
       this.basket.draw(this.ctx);
   }
    
}


export default Game;

