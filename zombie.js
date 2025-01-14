
class Zombie {
	constructor(game, spritesheet, x, y, speed) {
		this.game = game;
		
		this.animator = new Animator(spritesheet, 0, 0, 128, 128, 10, 0.2); // Pass the spritesheet dynamically
		this.x = x;
		this.y = y;
		this.speed = speed;
	};

	update() {
		this.x += this.speed * this.game.clockTick; 
		if (this.x > 1024 ) this.x = 0;

	};

	draw(ctx) { 
		this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
	};
}