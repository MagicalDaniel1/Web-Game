export class Battle {

    static move(char, target) {
        if (!char.isAlive && !target.isAlive) return;

        switch(char.role) {
            case 'attacker':
                char.attack(char, target);
                break;
            case 'healer':
                char.healing(char, target);
                break;
            case 'support':
                char.support(char, target);
                break;
            case 'magician':
                char.distanceAttack(char, target);
                break;
        }
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

        while (myTeam.length > 0 && enemyTeam.length > 0 && round < 50) {

            //char A
            check()
            console.log(`Round: ${round}`);

            if(charA.isAlive && enemyTeam.length > 0) {
                let enemyRandom = enemyTeam[Math.floor(Math.random() * enemyTeam.length)];
                this.move(charA, enemyRandom);
                console.log(`${charA.name} attacked ${enemyRandom.name}`)
                if (myTeam.length === 0 || enemyTeam.length === 0) {
                    break;
                }
            }

            //enemy A
            check()
            if(enemyA.isAlive && myTeam.length > 0) {
                this.move(enemyA, myTeam[Math.floor(Math.random() * myTeam.length)]);
                if (myTeam.length === 0 || enemyTeam.length === 0) {
                    break;
                }
            }

            //char support B
            check()
            if(charB.isAlive && myTeam.length > 0) {
                this.move(charB, myTeam[Math.floor(Math.random() * myTeam.length)]);
                if (myTeam.length === 0 || enemyTeam.length === 0) {
                    break;
                }
            }

            //enemy B
            check()
            if(enemyBoss.isAlive && myTeam.length > 0) {
                this.move(enemyBoss, myTeam[Math.floor(Math.random() * myTeam.length)]);
                if (myTeam.length === 0 || enemyTeam.length === 0) {
                    break;
                }
            }

            //char Magician C
            check()
            if(charC.isAlive && enemyTeam.length > 0) {
                this.move(charC, enemyTeam[Math.floor(Math.random() * enemyTeam.length)]);
                if (myTeam.length === 0 || enemyTeam.length === 0) {
                    break;
                }
            }

            //enemy C
            check()
            if(enemyC.isAlive && myTeam.length > 0) {
                this.move(enemyC, myTeam[Math.floor(Math.random() * myTeam.length)]);
                if (myTeam.length === 0 || enemyTeam.length === 0) {
                    break;
                }
            }

            //char healer D
            check()
            if(charD.isAlive && myTeam.length > 0) {
                this.move(charD, myTeam[Math.floor(Math.random() * myTeam.length)]);
                if (myTeam.length === 0 || enemyTeam.length === 0) {
                    break;
                }
            }

            //enemy D
            check()
            if(enemyD.isAlive && myTeam.length > 0) {
                this.move(enemyD, myTeam[Math.floor(Math.random() * myTeam.length)]);
                if (myTeam.length === 0 || enemyTeam.length === 0) {
                    break;
                }
            }
            round++;
        }

        console.log('-------------------------------------------------');
        if (myTeam.length === 0 && enemyTeam.length === 0) {
            console.log('Both teams are loose!');
        } else if (myTeam.length > 0) {
            console.log(`Winners: ${charA.name}, ${charB.name}, ${charC.name}, ${charD.name}`);
        } else if (enemyTeam.length > 0) {
            console.log(`Winners: ${enemyA.name}, ${enemyBoss.name}, ${enemyC.name}, ${enemyD.name}`);
        } else {
            console.log(`Something went wrong!`);
        }
    }
}
