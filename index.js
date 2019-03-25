"use strict";
exports.__esModule = true;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, baseStat, baseAttack, life) {
        this.name = name;
        this.baseStat = baseStat;
        this.baseAttack = baseAttack;
        this.life = life;
    }
    ;
    Pokemon.prototype.attack = function (pkmn) {
        pkmn.life -= this.baseAttack;
    };
    ;
    return Pokemon;
}());
;
function WhoPlayFirst(pkmn1, pkmn2) {
    if (pkmn1.baseStat < pkmn2.baseStat) {
        return pkmn2;
    }
    return pkmn1;
}
;
exports.Pkmn = {
    Pokemon: Pokemon,
    WhoPlayFirst: WhoPlayFirst
};
