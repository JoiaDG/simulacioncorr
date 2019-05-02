class corredor{
    constructor(nombre){
        this.nombre = nombre;
        this.posicion = 0;
    }

    set Posicion(posicion){
        this.posicion = posicion;
    }

    get Posicion(){
        return this.posicion;
    }

    random(){
        let i = Math.floor(Math.random()*(10-1+1)+1);
        if(i <=4 && i>=1)
        {
            return 2;
        }
        if(i ==6 || i==5)
        {
            return 1;
        }
        if(i == 8 || i==7){
            return 3;
        }
        if(i == 10 || i == 9){
            return -1;
        }
    }
    avanzar(){
        let avanzar = this.random();
        this.posicion += avanzar;

        if(this.posicion > 100){
            this.posicion == 100;
        }
        console.log("el '"+this.nombre + "' avanza: ["+ avanzar + "] se encuentra en posicion: " + this.posicion);
    }
}

class pista{
    constructor(){
        this.corredor = [];
    }

    addCorredor(corredor){
        this.corredor.push(corredor);
    }

    verificar(corredor){
        if(corredor.posicion >= 100){
            return [0,"El corredor: '"+corredor.nombre+"' ha terminado"];
        }else{
            return [1,"Siguiente turno"];
        }
    }

    turno(){
        let a = [];
        for(let i = 0; i < this.corredor.length; i++){
            this.corredor[i].avanzar();
            a.push(this.verificar(this.corredor[i]));
            
        }
        if(a[0][0] == 0 && a[1][0] == 0){
            return [0,"Ha habido un empate"];
        }else{
            if(a[0][0] == 0){
                return a[0];
            }else{
                if(a[1][0] == 0){
                    return a[1]
                }else{
                    return a[0];
                }
            }
        }
    }

}

let juego1 = new pista();
let j1 = new corredor("México");
let j2 = new corredor("Japon");
juego1.addCorredor(j1);
juego1.addCorredor(j2);

let juego = [1,""];
do{
    juego = juego1.turno();
    console.log(juego[1]);

}while(juego[0] != 0)