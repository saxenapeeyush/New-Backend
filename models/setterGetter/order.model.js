const Customer= require('./customer.model')
class OrderedProducts{
    constructor(){
    this.subproductId=null;
    this.subproductName=null;
    this.sellprice=null;
    this.amount=null;
    this.suffix=null;
    this.quantity=null;
    this.subTotal=null
}
}
 class TimeSlot{
    constructor(){
        this.startTimeSlot=null,
            this.endTimeSlot=null,
            this.date=null
                 }
}

class GiftMessage{
   constructor(){
    this.senderName=null,
    this.recieverName=null,
    this.message=null
}}
class Status{
constructor(){
    this.pending={
    pending:true,
pendingStatus:null
};
this.completed=false
}
}


class OrderModel{
    constructor(){
  this.giftMessage=new GiftMessage();
        this.delieveryId=null,
        this.allocatedEmpId=null,
        this.orderId=null,
        this.placingdate=null,
       this.timeSlot=null;
       this.delievAddress=null;
       this.transactionId=null,
       this.status=null,
        this.payment=null,
        this.customerId=null,
    this.paymentMethod=null,
     this.orderedProducts=[
   
     ]
    }
}

module.exports={'OrderModel':OrderModel,
'OrderProduct':OrderedProducts,
'GiftMessage':GiftMessage,
'Status':Status,
'TimeSlot':TimeSlot,

}