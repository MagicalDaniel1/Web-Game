import {BaseEntity} from "../BaseEntity";
import {Inventory} from "../Inventory/Inventory";

export class Character extends BaseEntity {
    #hp;
    #maxHp;

    constructor(name, maxHp, baseDamage) {
        super(name);
        this.#hp = maxHp;
        this.#maxHp = maxHp;
        this.baseDamage = baseDamage;
        this.inventory = new Inventory(this);
    }

    get hp() {
        return this.#hp;
    }

    get isAlive() {
        return this.#hp > 0;
    }

    heal(amount) {
        if (!this.isAlive) {
            return;
        }

        this.#hp = Math.min(this.#hp + amount, this.#maxHp);
    }

    takeDamage(amount) {
        if (!this.isAlive) {
            return;
        }

        this.#hp -= amount;

        if (this.#hp < 0) {
            this.#hp = 0;
        }
    }

    attack(target) {
        if (!this.isAlive) {
            return;
        }

        const damage = this.baseDamage;

        console.log(`${this.displayName} attack ${target.displayName} and did ${damage} damage.`);
        target.takeDamage(damage);
    }

    info() {
        return `${this.displayName} [HP: ${this.hp}]`;
    }
}