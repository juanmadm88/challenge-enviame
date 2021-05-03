
const MAX_KILOMETERS = 2000;

let generateKilometers = () =>{
    return Math.round(Math.random() * MAX_KILOMETERS);
}

let calculateSuccession = (aNumber) => {
    return (aNumber < 2) ? aNumber : calculateSuccession(aNumber-2 ) + calculateSuccession(aNumber-1);
}

let calculateDeliveryDay = (someKilometers)=>{
    let deliveryDays;
    switch(true) {
        case someKilometers < 100:
            deliveryDays = calculateSuccession(0);
            break;
        case someKilometers < 200:
            deliveryDays = calculateSuccession(1);
            break;
        case someKilometers < 300:
            deliveryDays = calculateSuccession(2);
            break;
        case someKilometers < 400:
            deliveryDays = calculateSuccession(3);
            break;
        case someKilometers < 500:
            deliveryDays = calculateSuccession(4);
            break;
        case someKilometers < 600:
            deliveryDays = calculateSuccession(5);
            break;
        case someKilometers < 700:
            deliveryDays = calculateSuccession(6);
            break;
        case someKilometers < 800:
            deliveryDays = calculateSuccession(7);
            break;
        case someKilometers < 900:
            deliveryDays = calculateSuccession(8);
            break;
        case someKilometers < 1000:
            deliveryDays = calculateSuccession(9);
            break;
        case someKilometers < 1100:
            deliveryDays = calculateSuccession(10);
            break;
        case someKilometers < 1200:
            deliveryDays = calculateSuccession(11);
            break;
        case someKilometers < 1300:
            deliveryDays = calculateSuccession(12);
            break;
        case someKilometers < 1400:
            deliveryDays = calculateSuccession(13);
            break;
        case someKilometers < 1500:
            deliveryDays = calculateSuccession(14);
            break;
        case someKilometers < 1600:
            deliveryDays = calculateSuccession(15);
            break;
        case someKilometers < 1700:
            deliveryDays = calculateSuccession(16);
            break;
        case someKilometers < 1800:
            deliveryDays = calculateSuccession(17);
            break;
        case someKilometers < 1900:
            deliveryDays = calculateSuccession(18);
            break;
        case someKilometers < 2000:
            deliveryDays = calculateSuccession(19);
            break;
        default:
            deliveryDays = calculateSuccession(0);
            break;
    }
    return deliveryDays;
}

let kilometers = generateKilometers();
let deliveryDays = calculateDeliveryDay(kilometers);

console.log(`El tiempo de entrega, será de apróximadamente  ${deliveryDays} días`)