class Game extends Phaser.Scene {
    constructor() {
        super('Game')
    }

    init(){
        this.DEPTH = { floor: 0};

        // Flags
        this.allow_input    = false;    // Can player move
        this.is_pause       = false;    // is the game paused?
        this.is_gameover    = false;    // display gameover screen?
    } 

    preload(){
        this.load.image('skateboarder', 'src/assets/player.png')
        this.load.image('ramp', 'src/assets/ramp.png')
        this.load.image('trashcan', 'src/assets/trashcan.png')
        this.load.image('background', 'src/assets/tempBackground.png')
    }



    create() {
        // Get the screen width + height
        const width = this.scale.width;
        const height = this.scale.height;
        
        const sceneWidth = 1080;
        const sceneHeight = 1920;

        this.physics.world.setBounds(0,0, sceneWidth, sceneHeight);

        this.background = this.add.image(0, 0, 'background').setOrigin(0,0);

        this.player = this.physics.add.image(sceneWidth/2, 200, 'skateboarder').setScale(0.5);
        this.player.setCollideWorldBounds(true);
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