
let finalizar = false



const IVA = 0.19;

const calcularIVA = (valor, IVA) =>  valor*(1+IVA)

const calcularTotal = (cantPesonas, valorBase) =>  {
    
    cantPesonas * calcularIVA(valorBase)
}





function calcularValorHospedaje(){
    let cidad
}       


function reservarHotel(){

        
    while (!finalizar) {
        let opcion = prompt(`Elige una opción: 
            
        1. Listar precios base por ciudades
        2. Listar valores por persona 
        3. Reservar hospedaje
        4. Salir
        `)
        switch (opcion) {
            case "1":
                alert(`
                    1. Osaka: $50.000
                    2. Kyoto: $45.000
                    3. Tokyo: $60.000
                    4. Nara:  $35.000
                    5. Atras 
                `)
                break;
            case "2":
                alert(`Valores base por cantidades de personas
                    - 2 o menos: $3.000
                    - 3 a 5: $4.500
                    - Más de 5: $6.000
                `)
                break;
            case "3":
                
                break;
            case "4":
                finalizar = true
                break;
            default:
                alert("La opción elegida no es válida")
                opcion = prompt(`Elige una opción: 
                    1. Listar ciudades
                    2. Listar valores por persona 
                    3. Reservar hospedaje
                    4. Salir
                `)          
                break;
        }

    }
}

alert(`Bienvenidos a hospedajes Nippon
       日本のの宿へようこそ`)


reservarHotel();