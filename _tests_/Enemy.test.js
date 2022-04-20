const { test, expect } = require('@jest/globals');
const Enemy = require('../lib/Enemy.js');
const Potion = require('../lib/Potion.js');

jest.mock('../lib/Potion.js');

test('creates an enemy object', () => {
    const enemy = new Enemy('Angie', 'Dogs');

    expect(enemy.name).toBe('Angie');
    expect(enemy.weapon).toBe('Dogs');
    expect(enemy.health).toEqual(expect.any(Number));
    expect(enemy.strength).toEqual(expect.any(Number));
    expect(enemy.agility).toEqual(expect.any(Number));
    expect(enemy.potion).toEqual(expect.any(Object));
});

test("get's players health value", () => {
    const enemy = new Enemy('Angie');
    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
});

test("checks if player is still alive", () => {
    const enemy = new Enemy('Shaun');
    expect(enemy.isAlive()).toBeTruthy();

    enemy.health = 0;

    expect(enemy.isAlive()).toBeFalsy();
});

test("get player's attack value", () => {
    const enemy = new Enemy('Shaun');
    enemy.strength = 10;

    expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);    
});

test("subtracts from player's health", () => {
    const enemy = new Enemy('Shaun');
    const oldHealth = enemy.health;

    enemy.reduceHealth(5)

    expect(enemy.health).toBe(oldHealth - 5);
    enemy.reduceHealth(99999);
    expect(enemy.health).toBe(0);
});

test('gets a description of the enemy', () => {
    const enemy = new Enemy('Angie', 'Dogs');

    expect(enemy.getDescription()).toEqual(expect.stringContaining('Angie'));
    expect(enemy.getDescription()).toEqual(expect.stringContaining('Dogs'));
});