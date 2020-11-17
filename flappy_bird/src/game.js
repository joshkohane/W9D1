import Bird from "./bird.js";
import Level from "./level.js";

export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
  }

  // animate() {
  //   drawBackground (this.ctx);
  // }
  
  restart(){
    this.level = new Level(this.dimensions);
    this.level.animate(this.ctx);
    this.bird = new Bird(this.dimensions);
    this.bird.animate(this.ctx);
  }
  
}