import {Inventory} from "../Inventory/Inventory.js";

export class Character{
    constructor(name, hp, baseDMG, role) {
        this.name = name
        this.role = role;
        this.hp = hp;
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
        // this.inventory = new Inventory(this);
    }

    get isAlive() {
        return this.hp > 0;
    }


    takeDamage(amount) {
        if (!this.isAlive) {
            return;
        }

        this.hp -= amount;

        if (this.hp < 0) {
            this.hp = 0;
        }
    }

    takeHeal(amount) {
        if (!this.isAlive) {
            return;
        }

        this.hp += amount;
    }

    takeSupport(amountCrit, amountDMG) {
        if (!this.isAlive) {
            return;
        }

        this.critRate = Math.min(this.critRate + amountCrit, this.maxCritRate);
        this.critDMG = Math.min(this.critDMG + amountDMG, this.maxCritDMG);
    }

    attack(char, target) {
        if (!char.isAlive) {
            return;
        }
        const isCrit = Math.random() <= char.critRate;
        let damage;

        if(isCrit) {
            damage = char.baseDMG * char.critDMG
        } else {
            damage = char.baseDMG;
        }

        console.log(`${char.name} attack ${target.name} and did ${damage} damage.`);
        target.takeDamage(damage);
    }

    healing(char, target) {
        if (!char.isAlive) {
            return;
        }

        const healNum = target.hp * char.healEffect;
        console.log(`${char.name} healed ${target.name} added ${healNum} hp. now his/her hp is ${target.hp}`);
        target.takeHeal(healNum);

    }

    support(char, target) {
        if (!char.isAlive) {
            return;
        }
        const critRateNum = char.critRateSupportEffect;
        const critDMGNum = char.critDMGSupportEffect;
        console.log(`${char.name} supported ${target.name} added ${critRateNum} crit rate and ${critDMGNum} crat DMG. now his/her crit rate is ${target.critRate} and crit DNG ${target.critDMG}`);
        target.takeSupport(critRateNum, critDMGNum);
    }

    distanceAttack(char, target) {
        if (!char.isAlive) {
            return;
        }

        const isHIT = Math.random() <= char.effectHITRate;
        let damage;

        if(isHIT) {
            damage = char.baseDMG;
        } else {
            damage = 0;
        }

        console.log(`${char.name} attack ${target.name} and did ${damage} damage.`);
        target.takeDamage(damage);
    }

    info() {
        return `${this.name} [HP: ${this.hp}]`;
    }

}
