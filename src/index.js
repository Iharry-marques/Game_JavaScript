import Player from "./classes/player.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")

canvas.width = innerWidth;
canvas.height = innerHeight;

const player = new Player();

player.position.x = 100;
player.position.y = 100;

player.draw(ctx)


