const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'game-container',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [
        BootScene,
        PreloadScene,
        MenuScene,
        GameScene,
        GameOverScene
    ],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    pixelArt: false
};

const game = new Phaser.Game(config);

// Global game settings
const GameSettings = {
    playerSpeed: 300,
    enemySpeed: 100,
    bulletSpeed: 500,
    fireRate: 250,
    scorePerKill: 100,
    initialLives: 3,
    
    // Weapon types
    weapons: {
        basic: {
            name: 'Basic Laser',
            damage: 1,
            fireRate: 250,
            bulletSpeed: 500,
            color: 0x00ffff,
            sound: 'laser-sound',
            particleColor: 0x00ffff
        },
        plasma: {
            name: 'Plasma Cannon',
            damage: 2,
            fireRate: 500,
            bulletSpeed: 400,
            color: 0xff00ff,
            sound: 'plasma-sound',
            particleColor: 0xff00ff
        },
        missile: {
            name: 'Homing Missiles',
            damage: 3,
            fireRate: 1000,
            bulletSpeed: 300,
            color: 0xff6600,
            sound: 'missile-sound',
            particleColor: 0xff6600
        },
        beam: {
            name: 'Beam Laser',
            damage: 0.1, // damage per frame
            fireRate: 0,  // continuous
            bulletSpeed: 800,
            color: 0x66ff66,
            sound: 'laser-sound',
            particleColor: 0x66ff66
        }
    }
};