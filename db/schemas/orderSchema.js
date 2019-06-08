const mongoose = require('../connection');

const OrderedProducts= new mongoose.Schema({
    subproductId:String,
    subproductName:String,
    sellprice:Number,
    amount:Number,
    suffix:String,
    quantity:Number,
    subTotal:Number
})
const GiftMessage=new mongoose.Schema({
    
     senderName:String,
     recieverName:String,
     message:String
 })
const Address = new mongoose.Schema({
    type:String,
    addId:String,
    house_no:String,
    fulladdress:String,
    area:String,
    city:String,
    pincode:String,
    mobile_no:String,
})


const status= new mongoose.Schema({
    pending:{
        pending:Boolean,
pendingStatus:String
    },
    completed:Boolean
})
const OrderSchema= new mongoose.Schema({
    delieveryId:String,
    allocatedEmpId:String,
    orderId:String,
    placingdate:{type:Date,default:Date.now()},
    timeSlot:{
        startTimeSlot:String,
        endTimeSlot:String,
        date:{type:Date}
             },
   delievAddress:{type:Address},
   
    transactionId:{type:String,required:true},
    status:status,
    payment:{type:String,required:true},
    customerId:{type:String,required:true},
paymentMethod:{type:String,required:true},
 orderedProducts:[
    OrderedProducts
 ]

})

module.exports={
    OrderSchema: mongoose.model("orders",OrderSchema),
    OrderedProducts:mongoose.model("orderedProducts",OrderedProducts),
    GiftMessage:mongoose.model('giftMessages',GiftMessage)
}