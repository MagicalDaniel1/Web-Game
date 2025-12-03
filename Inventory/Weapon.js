import {Item} from "./Item";

export class Weapon extends Item {
    constructor(name, damageBonus, weight = 1) {
        super(name, weight);
        this.damageBonus = damageBonus;
    }

    use(target) {
        console.log(`${this.displayName} 
        use weapon ${this.name} 
        and increase damage ${this.damageBonus}.`);
    }
}