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

/*console.log("Auto Vendido")*/

concesionaria.venderAuto("APL123")

console.log("AUTOS PARA LA VENTA----------------------------------------------------")

console.log(concesionaria.autosParaLaVenta())

console.log('AUTOS 0KM------------------------------------------------------------')

console.log(concesionaria.autos0KM());

console.log('AUTOS')

console.log(autos);
