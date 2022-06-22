class Grid {
    constructor(length, id) {
        //this.length = length;
        this.Spots = new Set();
        this.Spots.add(id)


    }


    Reservar(IdCliente) {
        if (this.Spots.size >= 5) {
            alert("NO HAY ESPACIO")

        }
        return

        this.Spots.add(IdCliente)
    }


}


// usuarios ids
N1 = 1
N2 = 2;
N3 = 3;
N4 = 4;
N5 = 5
N6 = 6;


N = [N1, N2, N3]



const Spots = new Grid(5, "N2")

Spots.Spots.add(...N);
Spots.Spots.add(N4);






console.log(Spots)


class Display {
    constructor(Parquing, ) {
        this.Parquing = Parquing
    }
}

const display = new Display()