const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    Item: [{
        type: Schema.Types.ObjectId,
        ref: 'Item'
    }],
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Order'
        }
    ],
}, {
    toJSON: { virtuals: true }
});
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password)

}
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

const User = model('User', userSchema)

module.exports = User