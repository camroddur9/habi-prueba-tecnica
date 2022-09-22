module.exports = {
    stepsData: () => {
        return {
            "steps": [
                {
                    "stepNumber": 0,
                    "route": "/",
                    "component":"entry",
                    "description":"Hola! Aquí podrás agregar toda la información de tu inmueble.",
                    "linkTo":"/datos-cliente",
                },
                {
                    "stepNumber": 1,
                    "route":"/datos-cliente",
                    "component":"datosCliente",
                    "description":"Ingresa tu nombre y tus dos apellidos.",
                    "linkTo":"/email-cliente"
                },
                {
                    "stepNumber": 2,
                    "route":"/email-cliente",
                    "component":"emailCliente",
                    "description":"Ingresa tu email.",
                    "linkTo":"/direccion-inmueble"
                },
                {
                    "stepNumber": 3,
                    "route": "/direccion-inmueble",
                    "component":"direccionInmueble",
                    "description":"¿Dónde podemos encontrar tu inmueble?",
                    "linkTo":"/piso-inmueble"
                },
                {
                    "stepNumber": 4,
                    "route": "/piso-inmueble",
                    "component":"pisoInmueble",
                    "description":"¿En que piso esta tu inmueble?",
                    "linkTo":"/amenidades-inmueble"
                },
                {
                    "stepNumber": 5,
                    "route":"/amenidades-inmueble",
                    "component":"amenidadesInmueble",
                    "description":"¿Qué amenidades tiene tu inmueble? (Opcional)",
                    "linkTo":"/resumen",
                    "amenitiesArray":["Zona BBQ", "Salón comunal", "Parque de juegos"]
                },
                {
                    "stepNumber": 6,
                    "route":"/resumen",
                    "component":"resumen",
                    "description":"Genial! completaste toda la información, aquí esta un pequeño resumen.",
                    "linkTo":""
                }
            ] 
        }
    }
}