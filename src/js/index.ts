import { Cortado } from "./Cortado";

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

let KopCortado = new Cortado(50);
console.log("prisen:", KopCortado.Pris());
console.log("rabatten:", KopCortado.Rabat);
console.log("styrken:", KopCortado.Styrke())