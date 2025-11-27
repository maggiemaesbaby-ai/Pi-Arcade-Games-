# Modern Galaga

A modern remake of the classic Galaga arcade game built with Phaser 3, featuring multiple weapon systems, enemy types, and stunning visual effects.

![Modern Galaga](screenshot.png)

## 🚀 Features

- **Multiple Weapon Systems**: Switch between four different weapons
  - Basic Laser: Rapid-fire basic weapon
  - Plasma Cannon: Powerful but slower plasma projectiles
  - Homing Missiles: Tracks enemies automatically
  - Beam Laser: Continuous beam that pierces through enemies

- **Special Attacks**: Each weapon has a unique special attack triggered with Shift key

- **Enemy Variety**: Multiple enemy types with unique behaviors
  - Basic enemies with simple movement patterns
  - Bombers that shoot multiple projectiles
  - Elite enemies with targeted shooting
  - Boss enemies with complex attack patterns (coming soon)

- **Visual Effects**: Stunning particle effects for all weapons and explosions
  - Colorful weapon trails
  - Explosion particles and shockwaves
  - Engine glow effects
  - Impact effects

- **Responsive Design**: Works on desktop and mobile devices

## 🎮 How to Play

- **Move**: Arrow keys or WASD
- **Shoot**: Space bar
- **Switch Weapons**:
  - 1: Basic Laser
  - 2: Plasma Cannon
  - 3: Homing Missiles
  - 4: Beam Laser
- **Special Attack**: Shift key

## 🛠️ Development

### Prerequisites

- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript if you want to modify the game

### Setup

1. Clone this repository:
```bash
git clone https://github.com/DesignRacket/modern-galaga.git
cd modern-galaga
```

2. You need to add game assets to the `assets` folder. See `assets/README.md` for details on the required assets.

3. Open `index.html` in your browser to play the game locally.

### Customization

- Modify `js/main.js` to adjust game settings like player speed, bullet damage, etc.
- Add new enemy types in `js/entities/Enemy.js`
- Create new weapons in `js/weapons/Weapon.js`
- Add new visual effects in `js/effects/ParticleManager.js`

## 🚀 Deployment

### GitHub Pages

This repository is set up to automatically deploy to GitHub Pages when changes are pushed to the main branch. You can access the live game at:

https://designracket.github.io/modern-galaga/

### Self-Hosting

You can host this game on any static web server. Simply copy all files to your server's web root directory.

## 📝 License

This project is available for personal and educational use. All assets should be properly licensed for your specific use case.

## 🙏 Credits

- Built with [Phaser 3](https://phaser.io/phaser3)
- Inspired by the classic Galaga arcade game

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request