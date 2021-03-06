import { Imælk } from "./Imælk";
import { Kaffe } from "./Kaffe";

export class Latte extends Kaffe implements Imælk{
    KaffeDrik(): string {
        return "Latte";
    }
    constructor(rabat: number){
        super(rabat);
    }

    Pris(): number{
        return 40;
    }
    Styrke(): string{
        return "Mild";
    }
    MIMælk(): number{
        return 120;
    }


}