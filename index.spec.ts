import {Pkmn} from './index';

describe("Who play first", () => {
    var Pkmn1 = new Pkmn.Pokemon("Charizard", 48, 57, 150);
    var Pkmn2 = new Pkmn.Pokemon("Pikachu", 30, 32, 80);
    var Pkmn3 = new Pkmn.Pokemon("Giratina", 78, 98, 230);

    it("Charizard should play first", () =>{
        expect(Pkmn.WhoPlayFirst(Pkmn1, Pkmn2)).toBe(Pkmn1);
    });

    it("Giratina should play first", () =>{
        expect(Pkmn.WhoPlayFirst(Pkmn1, Pkmn3)).toBe(Pkmn3);
    });

    it("Pikachu should play last", () =>{
        expect(Pkmn.WhoPlayFirst(Pkmn3, Pkmn2)).not.toBe(Pkmn2);
    });
});

describe("Attacks", () => {
    var Pkmn1 = new Pkmn.Pokemon("Charizard", 48, 57, 150);
    var Pkmn2 = new Pkmn.Pokemon("Pikachu", 30, 32, 80);
    var Pkmn3 = new Pkmn.Pokemon("Giratina", 78, 98, 230);

    it("Pikachu should have 23 HP left", () => {
        Pkmn1.attack(Pkmn2)
        expect(Pkmn2.life).toBe(23);
    });

    it("Giratina should deal 98 HP to Charizard", () => {
        Pkmn3.attack(Pkmn1);
        expect(Pkmn1.life + 98).toBe(150);
    });

    it("Giratina should have 198 HP left", () => {
        Pkmn2.attack(Pkmn3);
        expect(Pkmn3.life).toBe(198);
    })
})