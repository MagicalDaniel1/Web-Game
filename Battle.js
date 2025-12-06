class Battle {
    static fightTurn(attacker, defender) {
        if (!attacker.isAlive || !defender.isAlive) {
            return;
        }

        attacker.attack(defender);

        console.log(`Right now state: ${attacker.info()} vs ${defender.info()}`);
        console.log('---------------------------------------------------------');
    }

    static longDistanceFightTurn(attacker, defender) {
        if (!attacker.isAlive || !defender.isAlive) {
            return;
        }

        attacker.distanceAttack(defender);

        console.log(`Right now state: ${attacker.info()} vs ${defender.info()}`);
        console.log('---------------------------------------------------------');
    }

    static supportTurn(support, char) {
        if (!support.isAlive || !char.isAlive ) {
            return;
        }

        support.support(char);

        console.log(`Right now state: ${support.info()} supported ${char.info()}`);
        console.log('---------------------------------------------------------');
    }

    static healTurn(healer, char) {
        if (!healer.isAlive || !char.isAlive ) {
            return;
        }

        healer.healing(char);

        console.log(`Right now state: ${healer.info()} healed ${char.info()}`);
        console.log('---------------------------------------------------------');

    }

    static fight(charA, charB, charC, charD, enemyA, enemyBoss, enemyC, enemyD) {
        console.log('Battle has been started!!!! Take your popcorn!!!!');
        console.log('-------------------------------------------------');

        let round = 1;
        let myTeam = [charA, charB, charC, charD];
        let enemyTeam = [enemyA, enemyBoss, enemyC, enemyD];

        function check() {
            myTeam = myTeam.filter(char => char.isAlive);
            enemyTeam = enemyTeam.filter(enemy => enemy.isAlive);
        }

        let randomEnemy = enemyTeam[Math.floor(Math.random() * enemyTeam.length)];
        let randomChar = myTeam[Math.floor(Math.random() * myTeam.length)];

        while (myTeam.length > 0 && enemyTeam.length > 0 && round < 50) {

            //char A
            check()
            console.log(`Round: ${round}`);

            if(charA.isAlive && enemyTeam > 0) {
                this.fightTurn(charA, randomEnemy);
                if (myTeam.length === 0 || enemyTeam.length === 0) {
                    break;
                }
            }

            //enemy A
            check()
            if(enemyA.isAlive && myTeam > 0) {
                this.fightTurn(enemyA, randomChar);
                if (myTeam.length === 0 || enemyTeam.length === 0) {
                    break;
                }
            }

            //char support B
            check()
            if(charB.isAlive && myTeam > 0) {
                this.supportTurn(charB, randomChar);
                if (myTeam.length === 0 || enemyTeam.length === 0) {
                    break;
                }
            }

            //enemy B
            check()
            if(enemyBoss.isAlive && myTeam > 0) {
                this.fightTurn(enemyBoss, randomChar);
                if (myTeam.length === 0 || enemyTeam.length === 0) {
                    break;
                }
            }

            //char Magician C
            check()
            if(charC.isAlive && enemyTeam > 0) {
                this.longDistanceFightTurn(charC, randomEnemy);
                if (myTeam.length === 0 || enemyTeam.length === 0) {
                    break;
                }
            }

            //enemy C
            check()
            if(enemyC.isAlive && myTeam > 0) {
                this.fightTurn(enemyC, randomChar);
                if (myTeam.length === 0 || enemyTeam.length === 0) {
                    break;
                }
            }

            //char healer D
            check()
            if(charD.isAlive && myTeam > 0) {
                this.healTurn(charC, randomChar);
                if (myTeam.length === 0 || enemyTeam.length === 0) {
                    break;
                }
            }

            //enemy D
            check()
            if(enemyD.isAlive && myTeam > 0) {
                this.fightTurn(enemyD, randomChar);
                if (myTeam.length === 0 || enemyTeam.length === 0) {
                    break;
                }
            }
            round++;
        }

        console.log('-------------------------------------------------');
        if (myTeam.length === 0 || enemyTeam.length === 0) {
            console.log('Both teams are loose!');
        } else if (myTeam.length > 0) {
            console.log(`Winners: ${myTeam.displayName}`);
        } else if (enemyTeam.length > 0) {
            console.log(`Winners: ${enemyTeam.displayName}`);
        } else {
            console.log(`Something went wrong!`);
        }
    }
}
