import {Battle} from "./Battle.js";
import {Character} from "./Character/Character.js";

function startBattle() {
    const healerAngel = new Character('Stella', 1500, 0, 'healer');
    healerAngel.healEffect = 0.5;


    const attackerFemale = new Character('Anby', 2100, 410, 'attacker');
    const attackerMale = new Character('Enemy', 3000, 460, 'attacker');

    const supportPossum = new Character('stupid Possum', 1790, 0, 'support');
    supportPossum.critDMGSupportEffect = 0.4;
    supportPossum.critRateSupportEffect = 0.2;

    const longDistanceAttackerFemale = new Character('Fellar', 3000, 250, 'magician');
    longDistanceAttackerFemale.effectHITRate = 0.5;

    Battle.fight(attackerFemale, supportPossum, longDistanceAttackerFemale, healerAngel, attackerMale, attackerMale, attackerMale, attackerMale);
}

window.startBattle = startBattle;
