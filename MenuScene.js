class MenuScene extends Phaser.Scene {
    constructor() {
        super('MenuScene');
    }

    create() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        // Background with parallax effect
        this.background = this.add.tileSprite(0, 0, width, height, 'background').setOrigin(0);
        this.stars = this.add.tileSprite(0, 0, width, height, 'stars').setOrigin(0);
        
        // Title text
        const titleText = this.add.text(width / 2, height / 4, 'MODERN GALAGA', {
            fontFamily: 'Arial',
            fontSize: '64px',
            fontStyle: 'bold',
            color: '#ffffff',
            stroke: '#6600ff',
            strokeThickness: 6,
            shadow: { offsetX: 2, offsetY: 2, color: '#000', blur: 5, stroke: true, fill: true }
        }).setOrigin(0.5);
        
        // Create a glow effect for the title
        this.tweens.add({
            targets: titleText,
            alpha: 0.8,
            duration: 1500,
            yoyo: true,
            repeat: -1
        });

        // Start button
        const startButton = this.add.image(width / 2, height / 2 + 50, 'button');
        startButton.setInteractive({ useHandCursor: true });
        
        const startText = this.add.text(width / 2, height / 2 + 50, 'START GAME', {
            fontFamily: 'Arial',
            fontSize: '24px',
            color: '#ffffff'
        }).setOrigin(0.5);
        
        // Button hover effect
        startButton.on('pointerover', () => {
            startButton.setTint(0x66ff66);
        });
        
        startButton.on('pointerout', () => {
            startButton.clearTint();
        });
        
        // Button click event
        startButton.on('pointerdown', () => {
            this.cameras.main.fade(500, 0, 0, 0);
            this.cameras.main.once('camerafadeoutcomplete', () => {
                // Stop menu music if playing
                if (this.menuMusic) {
                    this.menuMusic.stop();
                }
                this.scene.start('GameScene');
            });
        });

        // Game instructions
        const instructions = [
            'MOVE: Arrow Keys / WASD',
            'SHOOT: Space',
            'SWITCH WEAPONS: 1, 2, 3, 4',
            'SPECIAL: Shift'
        ];
        
        let instructY = height / 2 + 150;
        instructions.forEach(text => {
            this.add.text(width / 2, instructY, text, {
                fontFamily: 'Arial',
                fontSize: '18px',
                color: '#aaaaff'
            }).setOrigin(0.5);
            instructY += 30;
        });

        // Play menu music
        this.menuMusic = this.sound.add('menu-music', { loop: true, volume: 0.5 });
        this.menuMusic.play();
    }

    update() {
        // Parallax background effect
        this.stars.tilePositionY -= 0.5;
        this.background.tilePositionY -= 0.1;
    }
}