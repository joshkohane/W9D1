import FlappyBird from './game';

const canvas = document.getElementById('bird-game');
let flappy = new FlappyBird(canvas);
flappy.restart();