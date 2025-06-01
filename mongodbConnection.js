import { MongoClient } from 'mongodb';
const url = process.env.MONGODB_URL || 'mongodb+srv://sharedudeweb:cQu9Sb43dmGwwK6p@sharedude.sgyviz2.mongodb.net/?retryWrites=true&w=majority&appName=ShareDude';


async function viewItems(callback) {
    const client = await MongoClient.connect(url);
    const dbo = client.db("ShareDude");
    const result = await dbo.collection("Messages").find({}).toArray();
    callback(result);
    client.close();
}
async function listfiles(code, callback) {
    const client = await MongoClient.connect(url);
    const dbo = client.db("ShareDude");
    const result = await dbo.collection("files-shared").find({'code': code}).toArray();
    callback(result);
    client.close();
}
async function addItems(item) {
    const client = await MongoClient.connect(url);
    const dbo = client.db("ShareDude");
    await dbo.collection("Messages").insertOne(item);
    client.close();
}
async function addFeedback(item) {
    const client = await MongoClient.connect(url);
    const dbo = client.db("ShareDude");
    await dbo.collection("feedback").insertOne(item);
    client.close();
}
async function sharefiles(item) {
    const client = await MongoClient.connect(url);
    const dbo = client.db("ShareDude");
    const result = await dbo.collection("files-shared").insertOne(item);
    client.close();
}

export { viewItems, addItems, sharefiles, listfiles, addFeedback };

