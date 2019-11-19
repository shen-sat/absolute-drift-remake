class LevelOne extends Phaser.Scene {

	constructor() {
		super({key: 'LevelOne'});
	}

	preload() {
		this.load.image('car', 'assets/Car red.png');


	}

	create() {

		this.car = this.physics.add.image(120, 448.0, 'car');
		this.ghost = this.physics.add.image(120, 448.0, 'car');
		this.ghost.alpha = 0;
		this.keys = this.input.keyboard.createCursorKeys();

		this.speed = 0;
		this.acceleration = 2;
		this.drag = 2;
		this.speedUpperLimit = 200;
		this.turn = 90;
		this.friction = 0;
	}

	update() {
		if (this.keys.up.isDown) {
			this.speed = Math.min(this.speed + this.acceleration, this.speedUpperLimit);
		} else {
			this.speed = Math.max(0, this.speed -= this.drag);
		}

		if (this.keys.right.isDown) {
			this.car.angle += 1;
			// console.log(1-((this.car.angle - this.ghost.angle)/360)*2);
		}
		this.friction = 1-(((this.car.angle - this.ghost.angle)/10000)*2);
		this.speed = this.speed * this.friction;
		






		this.physics.velocityFromAngle(this.ghost.angle + 90, -this.speed, this.ghost.body.velocity);
		this.car.x = this.ghost.x;
		this.car.y = this.ghost.y;	

		
	}
}
