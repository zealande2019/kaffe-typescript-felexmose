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

//opgave 7
function printAllKaffe(): void{
    //En liste af alle kaffe typer.
    let AllKaffe: Kaffe[] = [];
    AllKaffe.push(new Cortado(0));
    AllKaffe.push(new Latte(0));
    AllKaffe.push(new SortKaffe(4));
    // iterate through the array, AllKaffe, and print each kaffe type.
    for(let i=0; i<AllKaffe.length; i++){
        console.log(AllKaffe[i].KaffeDrik());
    }
     
}

printAllKaffe();