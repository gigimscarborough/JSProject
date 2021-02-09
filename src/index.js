import "./styles/index.scss";
import Basket from './scripts/basket'
import Coconut from './scripts/coconut'
import Game from './scripts/game'



const howTo = document.getElementById("how-to-play");
const scroll = document.getElementById("scroll-background")


howTo.onclick = function () {
  scroll.style.display = "block";
}

window.onclick = function (e) {
  debugger
  if (e.target === scroll) {
    scroll.style.display = "none";
  }
}


let canvas = document.getElementById("game-canvas");
let ctx = canvas.getContext('2d');
let ctxHeight = canvas.height;
let ctxWidth = canvas.width;
let game = new Game();
game.startGame();

debugger


ctx.clearRect(0, 0, ctxWidth, ctxHeight);


// let basket = new Basket(ctxWidth, ctxHeight, canvas);

// let coconut = new Coconut(ctxWidth, ctxHeight);

// function loop(){
  
//   coconut.move(ctx);
//   basket.draw(ctx);
// }

setInterval(game.draw, 10)



