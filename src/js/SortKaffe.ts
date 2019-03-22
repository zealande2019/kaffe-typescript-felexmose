import { Kaffe } from "./Kaffe";

export class SortKaffe extends Kaffe{
    constructor(rabat: number){
        super(rabat);
    }

    Pris():number{
        return 20 - this.Rabat;
    }

    Styrke(): string{
        return "Stærk";
    }
}
