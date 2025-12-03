import {Character} from "./Character";

export class Warrior extends Character {
    constructor(name) {
        super(name, 80, 10);
        this.rage = 0;
    }

    attack(target) {
        if (!this.isAlive) {
            return;
        }

        let damage = this.baseDamage + Math.floor(this.rage / 10);
        console.log(`${this.displayName} attack ${target.displayName} with rage ${this.rage} and did ${damage} damage.`);
        target.takeDamage(damage);

        this.rage += 10;
    }
}