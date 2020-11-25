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
    },
    autosParaLaVenta: function (){
        return autos.filter(auto => auto.vendido == false)
    }
    autos0KM : function () {
        let resultado = this.autosParaLaVenta()
        
        return resultado.filter(auto => auto.km < 100)
    }
}
