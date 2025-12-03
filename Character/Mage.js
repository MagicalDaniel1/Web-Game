import {Character} from "./Character";

export class Mage extends Character {
    constructor(name) {
        super(name, 80, 10);
        this.mana = 50;
    }

    attack(target) {
        if (!this.isAlive) {
            return;
        }

        if (this.mana >= 20) {
            const damage = this.baseDamage + 20;

            console.log(`${this.displayName} throws fireball to ${target.displayName}. Damage: ${damage}`);
            target.takeDamage(damage);

            this.mana -= 20;
        } else {
            console.log(`${this.displayName} attack ${target.displayName} using staff because low mana. Damage: ${this.baseDamage}`);
            target.takeDamage(this.baseDamage);

            this.mana += 5;
        }
    }
}