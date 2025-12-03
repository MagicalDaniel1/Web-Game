import {Potion} from "./Potion";

export class Inventory {
    constructor(owner) {
        this.owner = owner;
        this.items = [];
    }

    getItems() {
        console.log(`Inventory ${this.owner.displayName}: `);
        if (this.items.length === 0) {
            console.log("Inventory is empty.");
        } else {
            this.items.forEach(i => {
                console.log(` - ${i.displayName}`);
            });
        }
    }

    addItem(item, itemToReplace = undefined, wantToReplace = false) {
        if (this.items.length < 10) {
            this.items.push(item);
            console.log(`${this.owner.displayName} loot item: ${item.name}`);
            return;
        }

        if (!wantToReplace && itemToReplace !== undefined) {
            const itemToFind = this.items.findIndex(item => item.name === itemToReplace);

            if (itemToFind === -1) {
                console.log('Item could not be found!');
                return;
            }

            console.log(`Replacing ${this.items[itemToFind].name} with ${item.name}`);
            this.items[itemToFind] = item;
        }
    }

    removeItem(item) {
        const index = this.items.indexOf(item);

        if (index === -1) {
            return;
        }

        this.items.splice(index, 1);

        console.log(`${this.owner.displayName} drop item: ${item.name}`)
    }

    findByName(name) {
        return this.items.find(item => item.name === name);
    }

    useItem(itemName, target = this.owner) {
        const item = this.findByName(itemName);

        if (!item) {
            console.log(`${this.owner.displayName} cannot find item "${name} in inventory."`);
            return;
        }

        item.use(itemName);

        if (itemName instanceof Potion) {
            this.removeItem(itemName);
        }
    }
}