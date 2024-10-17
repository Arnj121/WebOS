const mongoClient = require('mongodb').MongoClient;
require('dotenv').config()
const ObjectID = require('mongodb').ObjectID;
const dbname=process.env.DATABASE || 'webos'
const url =process.env.RAILWAYURL || 'mongodb://0.0.0.0:27017'
let state ={
    db: null
}
const getDb = ()=>{
    return state.db
}
const options={useNewUrlParser: true,useUnifiedTopology:true}
const getprimaryKey = (_id)=>{
    return ObjectID(_id)
}
if(getDb()==null)
    mongoClient.connect(url,options,(err,client)=>{
        if(err)
            console.log(err);
        else {
            state.db = client.db(dbname)
        }
    })

module.exports={getDb}

