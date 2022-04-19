const Potion = require('../lib/Potion.js');

jest.mock('../lib/Potion.js');

console.log(new Potion());

const Player = require('../lib/Player');

test('creates a player object', () => {
    const player = new Player('Shaun');

    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
    expect(player.name).toBe('Shaun');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
});

test("gets player's stats as an object", () => {
    const player = new Player('Shaun');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

test('gets inventory from player or returns false', () => {
    const player = new Player('Shaun');

    expect(player.getInventory()).toEqual(expect.any(Array));

    player.inventory = [];

    expect(player.getInventory()).toEqual(false);
});