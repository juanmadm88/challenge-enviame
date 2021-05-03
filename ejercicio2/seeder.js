//TODO: Crear un archivo de variables de ambiente en importarlo para sacar los strings hardcodeados
const faker = require("faker");
const MongoClient = require("mongodb").MongoClient;

async function seedDB() {
    // Connection URL
    const uri = `mongodb://mongo:27017/challenge-enviame-ejercicio-2`;
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });

    try {
        await client.connect();
        console.log("Connection has been established successfully.");
        const collection = client.db('challenge-enviame-ejercicio-2').collection("companies");
        // The drop() command destroys all data from a collection.
        // Make sure you run it against proper database and collection.
        collection.drop();

        let companies = [];
        for (let i = 0; i < 5000; i++) {
            const name = faker.company.companyName();
            const address = faker.address.streetAddress();
            const telephone = faker.phone.phoneNumber();
            let newCompany = {
                name,
                address,
                telephone
            };
            companies.push(newCompany);
        }
        await collection.insertMany(companies);
        console.log("Database seeded! :)");
        client.close();
    } catch (err) {
        console.log(err.stack);
    }
}
seedDB();