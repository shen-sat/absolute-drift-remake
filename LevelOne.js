class LevelOne extends Phaser.Scene {

	constructor() {
		super({key: 'LevelOne'});
	}

	preload() {
		this.load.image('car', 'assets/Car red.png');


	}

	create() {

		this.car = this.physics.add.image(120, 448.0, 'car');
		this.keys = this.input.keyboard.createCursorKeys();

		this.speed = 0;
		this.acceleration = 2;
		this.drag = 3;
		this.speedUpperLimit = 200;
		this.previousAngle = this.car.angle;
		this.turn = 90;
	}

	update() {
		if (this.keys.up.isDown) {
			this.speed = Math.min(this.speed + this.acceleration, this.speedUpperLimit);
		} else {
			this.speed = Math.max(0, this.speed -= this.drag);
		}

		//Turning
		if (this.speed != 0) {
			if (this.keys.right.isDown) {
				this.speed > 0 ? this.car.angle += 2 : this.car.angle -= 2;
				this.speed > 150 ? this.turn -= 1 : this.turn = 90; 
			} else if (this.keys.left.isDown) {
				this.speed > 0 ? this.car.angle -= 2 : this.car.angle += 2;
			}	
		}

		
		this.physics.velocityFromAngle(this.car.angle + this.turn, -this.speed, this.car.body.velocity);	

		
	}
}
