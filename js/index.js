
let finalizar = false



var IVA = 0.19;

function calcularTotalIVA(total, IVA){
    const totalIVA = total*(1+IVA)
    console.log("Total sin IVA: " + total)
    console.log("Total IVA:" + totalIVA)
    return totalIVA
}

function calcularTotal(valorPersonas, valorCiudad, valorHotel){
    const valorFinal = valorPersonas + valorCiudad + valorHotel
    console.log(valorPersonas, valorCiudad, valorHotel)
    console.log("Valor final: " + valorFinal)
    return valorFinal
    
}



function valorPorCiudad(){
    let opcionValida = false;
    let valorCiudad;
    let ciudad = prompt(`Elija la ciudad en donde quiere hospedarse. Por favor, ingrese el número corresponiente a la ciudad:   
    1. Osaka: $40.000
    2. Kyoto: $35.000
    3. Tokyo: $50.000
    4. Nara:  $25.000`)
    while(!opcionValida){
        if(ciudad == "1"){
            ciudad = "Osaka"
            valorCiudad = 40000
            opcionValida = true
        }else if(ciudad == "2"){
            ciudad = "Kyoto"
            valorCiudad = 35000
            opcionValida = true
        }else if(ciudad == "3"){
            ciudad = "Tokyo"
            valorCiudad = 50000
            opcionValida = true
        }else if(ciudad == "4"){
            ciudad = "Nara"
            valorCiudad = 25000
            opcionValida = true
        }else{
            alert("Opción inváldia, ingrese nuevamente")
            ciudad = prompt(`Elija la ciudad en donde quiere hospedarse. Por favor, ingrese el número corresponiente a la ciudad:   
            1. Osaka: $40.000
            2. Kyoto: $35.000
            3. Tokyo: $50.000
            4. Nara:  $25.000`)
        }
       
        
    }

    return {ciudad, valorCiudad}


}       


// TOKYO
// - Sotetsu Fresa Inn Ginza-Nanachome 85.294
// - The square hotel GINZA = 117.280
// OSAKA
// - Sotetsu Fresa Inn Osaka Namba = 65.748
// - Nest Hotel Osaka Umeda = 58.569
// KYOTO
// - Hotel Resol Kyoto Kawaramachi Sanjo = 90.459
// - Hotel Resol Trinity Kyoto = 102.412
// NARA
// - Nara Royal Hotel = 41.403
// - Hotel Nikko Nara = 60.772

function valorPorHotel(ciudad){

    let hotel;
    let valorHotel;
    if(ciudad == "Osaka"){
        hotel = prompt(`Elija el hotel en donde quiere hospedarse. Por favor, ingrese el número corresponiente hotel:   
         1. Sotetsu Fresa Inn Osaka Namba: $65.748
         2. Nest Hotel Osaka Umeda: $58.569`)

        while(hotel != "1" && hotel!= "2" && hotel == null){
            alert("Debe inrgesar un número de hotel válido")
            hotel = prompt(`Elija el hotel en donde quiere hospedarse. Por favor, ingrese el número corresponiente hotel:   
            1. Sotetsu Fresa Inn Osaka Namba: $65.748
            2. Nest Hotel Osaka Umeda: $58.569`)
        }
        if(hotel == "1"){
            valorHotel = 65748
            hotel ="Sotetsu Fresa Inn Osaka Namba"
        }else{
            valorHotel = 58569
            hotel ="Nest Hotel Osaka Umeda"
        }
    }else if(ciudad == "Kyoto"){
        hotel = prompt(`Elija el hotel en donde quiere hospedarse. Por favor, ingrese el número corresponiente hotel:   
        1. Hotel Resol Kyoto Kawaramachi Sanjo: $90.459
        2. Hotel Resol Trinity Kyoto: $102.412`)

        while(hotel != "1" && hotel!= "2" && hotel == null){
           alert("Debe inrgesar un número de hotel válido")
           hotel = prompt(`Elija el hotel en donde quiere hospedarse. Por favor, ingrese el número corresponiente hotel:   
           1. Hotel Resol Kyoto Kawaramachi Sanjo: $90.459
           2. Hotel Resol Trinity Kyoto: $102.412`
           )
        }
        if(hotel == "1"){
            valorHotel = 90459
            hotel ="Hotel Resol Kyoto Kawaramachi Sanjo"
        }else{
            valorHotel = 102412
            hotel ="Hotel Resol Trinity Kyoto"
        }
    }else if(ciudad == "Tokyo"){
        hotel = prompt(`Elija el hotel en donde quiere hospedarse. Por favor, ingrese el número corresponiente hotel:   
        1. Sotetsu Fresa Inn Ginza-Nanachome: $85.294
        2. The square hotel Ginza: $117.280`)
        while(hotel != "1" && hotel!= "2" && hotel == null){

            alert("Debe inrgesar un número de hotel válido")
            hotel = prompt(`Elija el hotel en donde quiere hospedarse. Por favor, ingrese el número corresponiente hotel:   
                1. Sotetsu Fresa Inn Ginza-Nanachome: $85.294
                2. The Square Hotel Ginza: $117.280`)
        }
        if(hotel == "1"){
            valorHotel = 85294
            hotel ="Sotetsu Fresa Inn Ginza-Nanachome"
        }else{
            valorHotel = 117280
            hotel ="The Square Hotel Ginza"
        }
    }else if(ciudad == "Nara"){
        hotel = prompt(`Elija el hotel en donde quiere hospedarse. Por favor, ingrese el número corresponiente hotel:   
        1. Nara Royal Hotel = $41.403
        2. Hotel Nikko Nara = $60.772`)
       while(hotel != "1" && hotel!= "2" && hotel == null){
           alert("Debe inrgesar un número de hotel válido")
           hotel = prompt(`Elija el hotel en donde quiere hospedarse. Por favor, ingrese el número corresponiente hotel:   
           1. Nara Royal Hotel = $41.403
           2. Hotel Nikko Nara = $60.772`)
       }

       if(hotel == "1"){
            valorHotel = 41403
            hotel ="Nara Royal Hotel"
        }else{
            valorHotel = 60772
            hotel ="Hotel Nikko Nara"
        }
    }
    
    return {hotel, valorHotel}
    
}





function valorCantidadPersonas(){
    let opcionValida = false;
    let valorPersonas;
    while(!opcionValida){
        let cantPersonas = parseInt(prompt(`Ingrese la cantidad de personas que se alojarán en el Hotel`))
        console.log(cantPersonas)
        if(cantPersonas < 1 || cantPersonas == undefined){
            alert("La cantidad de personas no puede ser inferior a 1, inrgese nuevamente")
        }else{
          
            if(cantPersonas <= 3){
                valorPersonas = 3500
            }else if(cantPersonas <= 6){
                valorPersonas = 5500
            }else{
                valorPersonas = 7000
            }
            opcionValida = true;
        }

    }

    return valorPersonas
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
                    1. Osaka: $40.000
                    2. Kyoto: $35.000
                    3. Tokyo: $50.000
                    4. Nara:  $25.000
                    5. Atras 
                `)
                break;
            case "2":
                alert(`Valores base por cantidad de personas
                    1. Entre 1 y 3: $3.500 adicional por persona
                    2. Entre 4 y 6: $5.500 adicional por persona
                    3. Más de 6: $7.000 adicional por persona
                `)
                break;
            case "3":
                const {ciudad, valorCiudad} = valorPorCiudad()
                const {hotel, valorHotel} = valorPorHotel(ciudad)
                const valorPersona = valorCantidadPersonas()
                const valorTotal = calcularTotal(valorPersona, valorCiudad, valorHotel)
                const valorFinal = calcularTotalIVA(valorTotal, IVA)
                alert(`Reserva lograda con éxito.
                Usted ha reservado una habitación en el Hotel ${hotel} de la ciudad de ${ciudad}, por un total de $${Math.round(valorFinal)}`)
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