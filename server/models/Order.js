const { Schema, model, get } = require('mongoose');
const orderItemSchema = require('./orderItem')

const orderSchema = new Schema({
    orderDate: {
        type: Date,
        default: Date.now,
        get: formatTimestamp
    },
    orderStatus: {
        type:String, 
        default: "Draft"
    },
    items: [orderItemSchema]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    }
}
);

function formatTimestamp(timestamp) {
    return `${timestamp.toLocaleDateString()} at ${timestamp.toLocaleTimeString()}`
}

const Order = model('Order', orderSchema)

module.exports = Order