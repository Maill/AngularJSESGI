class Pokemon {
    name: string;
    baseStat: number;
    baseAttack: number;
    life: number
    
    constructor(name: string, baseStat: number, baseAttack: number, life: number){
        this.name = name;
        this.baseStat = baseStat;
        this.baseAttack = baseAttack;
        this.life = life;
    };

    attack(pkmn: Pokemon) : void {
        pkmn.life -= this.baseAttack;
    };
};

function WhoPlayFirst(pkmn1: Pokemon, pkmn2: Pokemon) : Pokemon {
    if(pkmn1.baseStat < pkmn2.baseStat) {
        return pkmn2;
    }

    return pkmn1;
};

export const Pkmn = {
    Pokemon,
    WhoPlayFirst
};