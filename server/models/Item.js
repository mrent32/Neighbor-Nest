import { Schema, model } from 'mongoose'

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
})

const Item = model('Item', itemSchema)

export default Item