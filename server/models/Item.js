const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        defaut: 0.99
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    inStock: {
        type: Boolean,
        default: true
    },
    image: {
        type: String,
        default: "/images/placeholderimage.png"
    }
},
{
    toJSON: {
        virtuals: true
    }
}
);

const Item = model('Item', itemSchema);

module.exports = Item