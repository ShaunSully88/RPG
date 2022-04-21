const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

function Game() {
 this.roundNumber = 0;
 this.isPlayerTurn = false;
 this.enemies = [];
 this.currentEnemy;
 this.player;
}

Game.prototype.initializeGame = function() {
this.enemies.push(new Enemy('Angie', 'Dogs'));
this.enemies.push(new Enemy('Zuka', 'tire iron'));
this.enemies.push(new Enemy('Bogey', 'pitching wedge'));

this.currentEnemy= this.enemies[0];

inquirer
  .prompt({
      type: 'text',
      name: 'name',
      message: "What is your name?"
  })
  .then(({ name }) => {
      this.player = new Player(name);
      this.startNewBattle();
  });
};

module.exports = Game;