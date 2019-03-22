
import { Kaffe } from './Kaffe'
import { Imælk } from './Imælk'

export class Cortado extends Kaffe implements Imælk{
    constructor(rabat: number){
        super(rabat)
    }

    Pris(): number{
        return 25;
    }

    Styrke(): string{
        return "Mild";
    }

    MIMælk(): number{
        return 25;
    }
}