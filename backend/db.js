const mongoos=require('mongoose');

const mongoURI="mongodb://localhost:27017";
// const connectToMongo=()=>{
//    mongoos.connect(mongoURI
//       //()=>{ console.log("connected to mongoose successfully");}
//    )

// }

const connectToMongo =  () => {
   try {
     mongoos.set("strictQuery", false);
     mongoos.connect(mongoURI);
     console.log("Connected to Mongo Successfully!");
   } catch (error) {
     console.log(error);
   }
 }


module.exports=connectToMongo;