import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { MongoClient } from 'mongodb';
import assert from 'assert';


// Replace the connection string with your MongoDB connection string
const uri = 'mongodb://127.0.0.1:27017/productsLocal';

async function connectToMongoDB() {
    const client = new MongoClient(uri, { useNewUrlParser: true });

    try {
        await client.connect();
        const database = client.db('productsLocal');
        const collection = database.collection('user');
        // const insertResult = await collection.insertOne({ name: 'John Smith', age: 39 });

        const deleteResult = await collection.deleteOne({ name: 'John Doe' });
        console.log('Document deleted:', deleteResult.deletedCount);

        // Find documents
        const findResult = await collection.find({}).toArray();
        console.log('Documents found:', findResult);
        
        // console.log(`Inserted document with _id: ${insertResult.insertedId}`);


        // console.log(collection);

        // Your code for interacting with MongoDB goes here

    } finally {
        // await client.close();
        console.log('Connection to MongoDB closed');
    }
}

connectToMongoDB();


// Inside the try block of connectToMongoDB function

// const database = client.db('productsLocal');
// const collection = database.collection('user');

// // Insert document
// const insertResult = await collection.insertOne({ name: 'John Doe', age: 25 });
// console.log(`Inserted document with _id: ${insertResult.insertedId}`);

// // Find documents
// const findResult = await collection.find({}).toArray();
// console.log('Documents found:', findResult);

// // Update document
// const updateResult = await collection.updateOne({ name: 'John Doe' }, { $set: { age: 26 } });
// console.log('Document updated:', updateResult.modifiedCount);

// // // Delete document
// const deleteResult = await collection.deleteOne({ name: 'John Doe' });
// console.log('Document deleted:', deleteResult.deletedCount);
