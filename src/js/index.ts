import { Cortado } from "./Cortado";
import { Latte } from "./Latte";

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
let kopCortado = new Cortado(50);
console.log("Cortado pris:", kopCortado.Pris());
console.log("Cortado rabat:", kopCortado.Rabat);
console.log("Cortado styrke:", kopCortado.Styrke())

//opgave 4
let kopLatte = new Latte(5);
console.log("Latte pris", kopLatte.Pris());
console.log("Latte rabat", kopLatte.Rabat);
console.log("Latte styrke", kopLatte.Styrke());
