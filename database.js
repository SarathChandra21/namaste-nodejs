const {MongoClient} = require('mongodb');

const url = "mongodb+srv://sarathdhanalakota2193:r4SlxTPY2AjughqW@sarath2193.xkuip.mongodb.net/?retryWrites=true&w=majority&appName=sarath2193";

const client = new MongoClient(url);

const dbName = 'Helloworld';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('user');

    //inserting data
    const data = {
        firstname: "sathwika",
        lastname: "gopala",
        age: 21
    };
    // const insertResult = await collection.insertMany([data]);
    // console.log('Inserted documents =>', insertResult);
  
    // //extracting data
    // const findResult = await collection.find({}).toArray();
    // console.log('Found documents =>', findResult);

    const result = await collection.find({firstname: "sathwika"}).toArray();
    console.log("result =>", result);

    return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());