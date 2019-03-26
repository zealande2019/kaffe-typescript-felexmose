import { Cortado } from "./Cortado";
import { Latte } from "./Latte";
import { SortKaffe } from "./SortKaffe";
import { Kaffe } from "./Kaffe";

//opgave 3
console.log("Cortado:")
let kopCortado = new Cortado(0);
console.log("Cortado pris:", kopCortado.Pris());
console.log("Cortado rabat:", kopCortado.Rabat);
console.log("Cortado styrke:", kopCortado.Styrke())

//opgave 4.
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
    //get table element.
    let tableElement: HTMLTableCaptionElement = <HTMLTableCaptionElement>document.getElementById("table1");

    // go through each kaffe object in the list and add it to the table.
    for(let i=0; i<kaffeTyper.length; i++){

        let trElement: HTMLElement = document.createElement("tr")
        
        let td1: HTMLElement = document.createElement("td");
        td1.innerText = kaffeTyper[i].KaffeDrik();
        let td2: HTMLElement = document.createElement("td");
        td2.innerText = kaffeTyper[i].Styrke();
        let td3: HTMLElement = document.createElement("td");
        td3.innerText = String(kaffeTyper[i].Pris());
        let td4: HTMLElement = document.createElement("td");
        
        let bestilBtn: HTMLElement = document.createElement("button");
        bestilBtn.setAttribute("id",kaffeTyper[i].KaffeDrik());
        bestilBtn.textContent = "Bestil";
        td4.appendChild(bestilBtn);
        bestilBtn.addEventListener("click",
            () => {
                let liBestiltElement: HTMLElement = document.createElement("li");
                liBestiltElement.textContent = kaffeTyper[i].KaffeDrik();
                bestillingsListen.append(liBestiltElement);
                //remove the order from the list, when clicked.
                liBestiltElement.addEventListener ("click",
                () =>{
                    liBestiltElement.remove();
                });
        });

        trElement.append(td1);
        trElement.append(td2);
        trElement.append(td3);
        trElement.append(td4);
        
        tableElement.append(trElement);
    }
}
createMenu();

// creating a new div for displaying the list of orders.
let bestillingsListeDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("bestillingsListeDiv");
let bestillingsListen: HTMLElement = document.createElement("ol");


let bestListOverSkrift: HTMLElement = document.createElement("h2");
bestListOverSkrift.textContent = "Bestillingerne:"
bestillingsListeDiv.append(bestListOverSkrift);
bestillingsListeDiv.append(bestillingsListen);


