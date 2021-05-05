
const MAX_KILOMETERS = 2000;

let generateKilometers = () =>{
    return Math.round(Math.random() * MAX_KILOMETERS);
}

let calculateDeliveryDay = (aNumber) => {
    return (aNumber < 2) ? aNumber : calculateDeliveryDay(aNumber-2 ) + calculateDeliveryDay(aNumber-1);
}

let calculateOrder = (kilometers) => {
    return Math.round(kilometers/100);
}

let kilometers = generateKilometers();
let order = calculateOrder(kilometers);
console.log("order ", order);
let deliveryDays = calculateDeliveryDay(order);

console.log(`El tiempo de entrega, será de apróximadamente  ${deliveryDays} días`)