
#desde una consola de linux dentro de la carpeta /ejercicio4 ingresar el siguiente comando
$npm -i

#levantar el servidor usando el siguiente comando
$npm run startdev

--la app se levanto usando node version 14.15.4

#el payload que me importe de la coleccion de post man, le faltaba el campo requerido
carrier_code, consultando con la casilla de mail de test, me dijeron que lo seteara
con el codigo "BLX"

el body del POST quedaría así

{
    "shipping_order": {
        "n_packages": "1",
        "content_description": "ORDEN 255826267",
        "imported_id": "255826267",
        "order_price": "24509.0",
        "weight": "0.98",
        "volume": "1.0",
        "type": "delivery"
    },
    "shipping_origin": {
        "warehouse_code": "401"
    },
    "shipping_destination": {
        "customer": {
            "name": "Bernardita Tapia Riquelme",
            "email": "b.tapia@outlook.com",
            "phone": "977623070"
        },
        "delivery_address": {
            "home_address": {
                "place": "Puente Alto",
                "full_address": "SAN HUGO 01324, Puente Alto, Puente Alto"
            }
        }
    },
    "carrier": {
        "carrier_code": "BLX",
        "tracking_number": ""
    }
}