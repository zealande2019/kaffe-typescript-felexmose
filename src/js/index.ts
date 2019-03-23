import { Cortado } from "./Cortado";
import { Latte } from "./Latte";
import { SortKaffe } from "./SortKaffe";
import { Kaffe } from "./Kaffe";

//interface Person {
//   firstName: string;
//    lastName: string;
//}

//function greeter(person: Person): string {
//    return "Hello, " + person.firstName + " " + person.lastName;
//}
//let user: Person = { firstName: "John", lastName: "Doe" };

//let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
//element.innerHTML = greeter(user);

//opgave 3
console.log("Cortado:")
let kopCortado = new Cortado(0);
console.log("Cortado pris:", kopCortado.Pris());
console.log("Cortado rabat:", kopCortado.Rabat);
console.log("Cortado styrke:", kopCortado.Styrke())

//opgave 4
console.log("Latte:")
let kopLatte = new Latte(0);
console.log("Latte pris", kopLatte.Pris());
console.log("Latte rabat", kopLatte.Rabat);
console.log("Latte styrke", kopLatte.Styrke());

// opgave 5
console.log("Sort kaffe:")
let sortKaffe = new SortKaffe(4);
console.log("sortKaffe pris", sortKaffe.Pris());
console.log("sortKaffe rabat", sortKaffe.Rabat);
console.log("sortKaffe styrke", sortKaffe.Styrke());

// Opgave 5, instans af sort kaffe uden rabat.
console.log("Sort kaffe uden rabat:");
let sortKaffeUdenRabat = new SortKaffe(0);
console.log("sortKaffe pris", sortKaffeUdenRabat.Pris());
console.log("sortKaffe rabat", sortKaffeUdenRabat.Rabat);
console.log("sortKaffe styrke", sortKaffeUdenRabat.Styrke());

//En liste af alle kaffe typer.
let kaffeTyper: Kaffe[] = [];
kaffeTyper.push(new Cortado(0));
kaffeTyper.push(new Latte(0));
kaffeTyper.push(new SortKaffe(4));

//opgave 7
function printAllKaffe(): void{
        // iterate through the array, AllKaffe, and print each kaffe type.
    for(let i=0; i<kaffeTyper.length; i++){
        console.log(kaffeTyper[i].KaffeDrik());
    }
     
}

printAllKaffe();

//opgave 8
function createMenu(): void{
    let tableElement: HTMLTableCaptionElement = <HTMLTableCaptionElement>document.getElementById("table1");
    for(let i=0; i<kaffeTyper.length; i++){
        let trElement: HTMLTableRowElement = new HTMLTableRowElement();
        let td1: HTMLTableDataCellElement = new HTMLTableDataCellElement();
        let td2: HTMLTableDataCellElement = new HTMLTableDataCellElement();
        let td3: HTMLTableDataCellElement = new HTMLTableDataCellElement();
        let td4: HTMLTableDataCellElement = new HTMLTableDataCellElement();
        let bestilBtn: HTMLButtonElement = new HTMLButtonElement();

        td1.textContent = kaffeTyper[i].KaffeDrik();
        td2.textContent = kaffeTyper[i].Styrke();
        td3.textContent = String(kaffeTyper[i].Pris());
        //td4.textContent = String(kaffeTyper[i].Pris());
        

        trElement.append(td1);
        trElement.append(td2);
        trElement.append(td3);
        //
        trElement.append(td4);

        tableElement.append(trElement);
    }
}

createMenu();

