
const MAX_KILOMETERS = 2000;

let generateKilometers = () =>{
    return Math.round(Math.random() * MAX_KILOMETERS);
}

let calculateDeliveryDay = (aNumber) => {
    return (aNumber < 2) ? aNumber : calculateDeliveryDay(aNumber-2 ) + calculateDeliveryDay(aNumber-1);
}

let calculateOrder = (kilometers) => {
    return Math.floor(kilometers/100);
}

let kilometers = generateKilometers();
let order = calculateOrder(kilometers);
let deliveryDays = calculateDeliveryDay(order);
console.log("fibonacci de ", order)

console.log(`El tiempo de entrega para recorrer ${kilometers} km, será de apróximadamente  ${deliveryDays} días`)