const mongoose=require('mongoose');


const orderSchema=new mongoose.Schema({
    customerName:{
        type:String,
        require:true
    },
    orderDate:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    animalMilkType:{
        type:String,
        require:true
    },
    milkQuantity:{
        type:String,
        require:true
    },
    phoneNumber:{
        type:Number,
        require:true
    }

     },{
       timestamps:true
    }
);

const Order= mongoose.model('Order', orderSchema);

module.exports=Order;