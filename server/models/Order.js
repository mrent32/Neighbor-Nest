import {Schema, model } from 'mongoose';

const orderSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Item'
        }
    ]
});

const Order = model('Order', orderSchema)

export default Order;