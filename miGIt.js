class Grid {
    constructor(length, id) {
        //this.length = length;
        this.S800 = new Set();
        this.S900 = new Set();
        this.S1000 = new Set();
        this.S1100 = new Set();
        this.S1200 = new Set();

    }


    Reservar(IdCliente, hora) {
        if (this.S800.size >= 5 || this.S900.size >= 5 || this.S1000.size >= 5 || this.S1100.size >= 5 || this.S1200.size >= 5) {
            alert("NO HAY ESPACIO")
            return
        }
        switch (hora) {
            case 800:
                this.S800.add(IdCliente)
                break;
            case 900:
                this.S900.add(IdCliente)
                break;
            case 1000:
                this.S1000.add(IdCliente)
                break;
            case 1100:
                this.S1100.add(IdCliente)
                break;
            case 1200:
                this.S1200.add(IdCliente)
                break;
        }


    }
}

// usuarios ids
N1 = 1
N2 = 2;
N3 = 3;
N4 = 4;
N5 = 5
N6 = 6;


let N = [N1, N2, N3]
let horas = [800, 900, 1000, 1100, 1200]
let hora1 = [1100, 1200]
UsuarioR = horas;

const Spots = new Grid(5, "N2")


Spots.Reservar(N1, 1000)
    // Spots.Reservar(N1, 900)
    // Spots.Reservar("N1", 1000)

for (const hora of horas) {
    Spots.Reservar(N2, hora)
    Spots.Reservar(N3, hora)
    Spots.Reservar(N4, hora)
}
for (const hora of hora1) {
    Spots.Reservar("N5", hora)


}

// for (const hora in horas) {
//     if (UsuarioR.hasOwnProperty.call(Reservar, horas)) {
//         const element = UsuarioR[hora];
//         console.log(element)

//     }
// }






console.log(Spots)


class Display {
    constructor(Spots) {
        this.Pantalla = document.querySelector("grid")
        this.P = document.createElement("div")
        this.Pantalla.innerHTML = ' <div> <li>1</li><li>1</li> <li>3</li> <li>4</li> <li>5</li> <li>6</li>        </div>'
            //this.Pantalla.append(this.P)
    }
}

const display = new Display()