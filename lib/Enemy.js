const Potion = require('./Potion');

function Enemy(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();

    this.health = Math.floor(Math.random() * 10 + 85);
    this.strength = Math.floor(Math.random() * 5 + 5);
    this.agility = Math.floor(Math.random() * 5 + 5);
}

test('get players health val', () => {
    const enemy = new Enemy('Goblin');

    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
});


test('check if alive', () => {
    const enemy = new Enemy('Goblin');

    expect(enemy.isAlive()).toBeTruthy();

    enemy.health = 0;

    expect(enemy.isAlive()).toBeFalsy();
});

test("subtracts from enemy's health", () => {
    const enemy = new Enemy('Goblin');
    const oldHealth = enemy.health;
  
    enemy.reduceHealth(5);
  
    expect(enemy.health).toBe(oldHealth - 5);
  
    enemy.reduceHealth(99999);
  
    expect(enemy.health).toBe(0);
  });


  Enemy.prototype.getHealth = function() {
    return `The ${this.name}'s health is now ${this.health}!`;
  };
  
  Enemy.prototype.isAlive = function() {
    if (this.health === 0) {
      return false;
    }
    return true;
  };
  
  Enemy.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;
  
    return Math.floor(Math.random() * (max - min) + min);
  };
  
  Enemy.prototype.reduceHealth = function(health) {
    this.health -= health;
  
    if (this.health < 0) {
      this.health = 0;
    }
  };

  //weapon description
  Enemy.prototype.getDescription = function() {
      return `A ${this.name} holding a ${this.weapon} has appeared!`;
  };



//exporting
module.exports = Enemy;