import {BaseEntity} from "../BaseEntity";

export class Item extends BaseEntity {
    constructor(name, weight = 1) {
        super();

        if (new.target === Item) {
            throw new Error('You cannot instantiate an abstract class!');
        }

        this.weight = weight;
    }

    use(target) {
        console.log(`${this.displayName} nothing doing right now.`);
    }
}