import { MongoClient } from 'mongodb';

export async function connectDatabase() {
  const client = await MongoClient.connect(
    'mongodb://127.0.0.1:27017/FilamentDB'
  );
  return client;
}

export async function insertDocument(client, document) {
  const db = client.db();
  await db.collection('filaments').insertOne(document);
}
