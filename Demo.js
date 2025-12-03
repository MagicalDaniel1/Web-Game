import {Warrior} from "./Character/Warrior";
import {Mage} from "./Character/Mage";
import {Potion} from "./Inventory/Potion";
import {Weapon} from "./Inventory/Weapon";

const warrior = new Warrior('Daniil Skybenich');
const mage = new Mage('Maksym Vovkovich');

const smallPotion = new Potion("Little potion of life", 20);
const bigPotion = new Potion("Little potion of emperor", 50);
const sword = new Weapon("Sword of berserk", 10);

warrior.inventory.addItem(smallPotion);
warrior.inventory.addItem(sword);
mage.inventory.addItem(bigPotion);

warrior.inventory.getItems();
mage.inventory.getItems();

console.log('Battle: ');
Battle.fight(warrior, mage);
