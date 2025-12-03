class Battle {
    static fightTurn(attacker, defender) {
        if (!attacker.isAlive || defender.isAlive) {
            return;
        }

        attacker.attack(defender);

        console.log(`Right now state: ${attacker.info()} vs ${defender.info()}`);
        console.log('---------------------------------------------------------');
    }

    static fight(a, b) {
        console.log('Battle has been started!!!! Take your popcorn!!!!');
        console.log('-------------------------------------------------');

        let round = 1;
        while (a.isAlive && b.isAlive && round < 50) {
            console.log(`Round: ${round}`);
            this.fightTurn(a, b);
            if (!b.isAlive) {
                break;
            }

            this.fightTurn(b, a);
            if (!a.isAlive) {
                break;
            }

            round++;
        }

        console.log('-------------------------------------------------');
        if (!a.isAlive && !b.isAlive) {
            console.log('Both characters are loose!');
        } else if (a.isAlive) {
            console.log(`Winner: ${a.displayName}`);
        } else if (b.isAlive) {
            console.log(`Winner: ${b.displayName}`);
        } else {
            console.log(`Something went wrong!`);
        }
    }
}