import { connectDatabase } from "../../helpers/db-util";


async function handler(req,res) {
    if(req.method === 'POST') {
        let response = req.body;
        // console.log(`This is server response`, response)

        const filament = response.data;

        const client = await connectDatabase();
        const db = client.db();

        const result = await db.collection('filaments').insertOne({
            brand: filament.brand,
            name:filament.name,
            color: filament.color,
            type:filament.type,
            finish:filament.finish,
            location:filament.location,
            website:filament.website,
            nozzle:filament.nozzle
        })

        res.status(201).json({message:'Successfully recieved filament', data:result})
    }
}
export default handler;