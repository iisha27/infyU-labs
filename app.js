const express=require('express');
require('./db/mongoose.js');
const bodyParser=require('body-parser');
const Order=require('./models/milk.js')
const app=express();

app.use(bodyParser.urlencoded({
    extended: true
}));



app.get('/getOrder/:orderDate', async(req,res)=>{
    try{
        const order= await Order.find({orderDate:req.params.orderDate})
        if(!order){
            res.status(200).send();
        }
        res.send(order);
    }catch(err){
         res.status(401).send(err);
    }
   

})


app.post('/placeOrder',async(req,res)=>{
      const newOrder=new Order(req.body);
      try{
        await newOrder.save()
            res.status(200).send(newOrder);
        }catch(err){
            res.status(401).send(err);
        }
      
})

app.patch('/editOrder/:id', async(req,res)=>{
    const id=req.params.id;
    try{
    const editOrder=await Order.findByIdAndUpdate(id, req.body);
    if(!editOrder){
        res.status(200).send();
    }
    res.send(editOrder);
    }catch(err){
        res.status(401).send(err);
    }

})

app.delete('/deleteOrder/:id', async(req,res)=>{
    const id=req.params.id

    try{
        const deleteOrder=await Order.findByIdAndDelete(id)
        if(!deleteOrder){
            return res.status(200);
        }
        res.send(deleteOrder);
    }catch(err){
        res.status(401).send(err);
    }

});




app.listen(3000, function() {
    console.log("Server started on port 3000");
  });