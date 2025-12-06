import {BaseEntity} from "../BaseEntity";
import {Inventory} from "../Inventory/Inventory";


export class Character extends BaseEntity {
    #hp;

    constructor(name, hp, baseDMG) {
        super(name);
        this.#hp = hp;
        this.maxCritRate = 1;
        this.maxCritDMG = 2;
        //attack
        this.critRate = 0.5;
        this.critDMG = 1.5;
        this.baseDMG = baseDMG;
        //support
        this.critRateSupportEffect = 0;
        this.critDMGSupportEffect = 0;
        //heal
        this.healEffect = 0;
        //hit rate for long distance chars
        this.effectHITRate = 0.5;
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

        this.#hp = Math.min(this.#hp + amount);
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

    takeHeal(amount) {
        if (!this.isAlive) {
            return;
        }

        this.#hp += amount;
    }

    takeSupport(amountCrit, amountDMG) {
        if (!this.isAlive) {
            return;
        }

        this.critRate = Math.min(this.critRate + amountCrit, this.maxCritRate);
        this.critDMG = Math.min(this.critDMG + amountDMG, this.maxCritDMG);
    }

    attack(target) {
        if (!this.isAlive) {
            return;
        }
        const isCrit = Math.random() <= this.critRate;
        let damage;

        if(isCrit) {
            damage = this.baseDMG * this.critDMG
        } else {
            damage = this.baseDMG;
        }

        console.log(`${this.displayName} attack ${target.displayName} and did ${damage} damage.`);
        target.takeDamage(damage);
    }

    healing(target) {
        if (!this.isAlive) {
            return;
        }

        const healNum = target.hp * this.healEffect;
        console.log(`${this.displayName} healed ${target.displayName} added ${healNum} hp.`);
        target.takeHeal(healNum);

    }

    support(target) {
        if (!this.isAlive) {
            return;
        }
        const critRateNum = this.critRateSupportEffect;
        const critDMGNum = this.critDMGSupportEffect;
        console.log(`${this.displayName} supported ${target.displayName} added ${critRateNum} crit rate and ${critDMGNum} crat DMG.`);
        target.takeSupport(critRateNum, critDMGNum);
    }

    distanceAttack(target) {
        if (!this.isAlive) {
            return;
        }

        const isHIT = Math.random() <= this.effectHITRate;
        let damage;

        if(isHIT) {
            damage = this.baseDMG;
        } else {
            damage = 0;
        }

        console.log(`${this.displayName} attack ${target.displayName} and did ${damage} damage.`);
        target.takeDamage(damage);
    }

    info() {
        return `${this.displayName} [HP: ${this.hp}]`;
    }
}
