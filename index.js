const autos = require("./autos")

let concesionaria = {
    autos: autos,
  
    buscarAuto:  function(patente){
        return this.autos.find(auto => auto.patente == patente)||null;
    }
    venderAuto: function(patente){
        let resultado = this.buscarAuto(patente);
        if (resultado){
            autos[autos.indexOf(resultado)].vendido=true;
        }
    }
}
