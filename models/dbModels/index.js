const mongoose = require('mongoose')


const dbInit=()=>{

const url = process.env.MONGODB_URL;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
}

module.exports={dbInit}    