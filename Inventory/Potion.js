import {Item} from "./Item";

export class Potion extends Item {
    constructor(name, healAmount, weight = 0.5) {
        super(name, weight);
        this.healAmount = healAmount;
    }

    use(itemName) {
        console.log(`${this.displayName} drink 
        ${this.name} and heals ${this.healAmount} HP.`);

        itemName.heal(this.healAmount);
    }
}