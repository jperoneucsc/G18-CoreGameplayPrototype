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

        this.load.audio('rollingSound', 'src/assets/skateboardingSound.mp3')
    }



    create() {
        // Get the screen width + height
        const width = this.scale.width;
        const height = this.scale.height;

        this.backgroundNoise = this.sound.add('rollingSound', {volume : .05, rate : 1.5});
        this.backgroundNoise.loop = true;
        this.backgroundNoise.play();
        
        const sceneWidth = 1080;
        const sceneHeight = 1920;

        this.physics.world.setBounds(0,0, sceneWidth, sceneHeight);

        this.background = this.add.tileSprite(0, 0, 1080, 1920, 'background').setOrigin(0,0);

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

        this.background.tilePositionY += 20;

        // Check if player is pressing left or right, with shift or not
        if (cursors.left.isDown || keys.A.isDown){
            this.player.x -= 8;
        }
        else if (cursors.right.isDown || keys.D.isDown){
            this.player.x += 8;
        }
    }    

}