const mongoose=require('mongoose');

//creating a database
mongoose.connect('mongodb://localhost:27017/skydynamics',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('success')
}).catch((e)=>{
   console.log(e)
})