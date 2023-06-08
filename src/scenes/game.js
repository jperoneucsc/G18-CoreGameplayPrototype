class Game extends Phaser.Scene {
    constructor() {
        super('Game')
    }
/*
    init(data){
        this.highscore = data.data;
    } */

    preload(){
        this.load.image('skateboarder', 'src/assets/player.png')
        this.load.image('ramp', 'src/assets/ramp.png')
        this.load.image('trashcan', 'src/assets/trashcan.png')
    }

    create() {
        this.player = this.physics.add.image(100, 100, 'skateboarder').setScale(0.5)
        //this.cursors = this.input.keyboard.createCursorKeys();
        //this.keys = this.input.keyboard.addKeys("W,A,S,D,E,SPACE");

    }
    
    update()
    {  
        // -------------------------------- PLAYER MOVEMENT ---------------------------------------
        const cursors = this.input.keyboard.createCursorKeys();
        const keys = this.input.keyboard.addKeys("W,A,S,D,E,SPACE");


        // Check if player is pressing left or right, with shift or not
        if (cursors.left.isDown || keys.A.isDown){
            this.player.x -= 8;
        }
        else if (cursors.right.isDown || keys.D.isDown){
            this.player.x += 8;
        }
    }    

}