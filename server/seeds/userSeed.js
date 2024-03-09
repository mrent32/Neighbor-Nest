const User = require('../models/User');
const bcrypt = require('bcrypt');

const usersData = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        password: 'password123',
    },
    {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane@example.com',
        password: 'password456',
    },
    {
        firstName: 'Alice',
        lastName: 'Jones',
        email: 'alice@example.com',
        password: 'password789',
    },
    {
        firstName: 'Bob',
        lastName: 'Brown',
        email: 'bob@example.com',
        password: 'password321',
    },
    {
        firstName: 'Emily',
        lastName: 'Davis',
        email: 'emily@example.com',
        password: 'password654',
    },
    {
        firstName: 'Michael',
        lastName: 'Wilson',
        email: 'michael@example.com',
        password: 'password987',
    },
    {
        firstName: 'Sarah',
        lastName: 'Taylor',
        email: 'sarah@example.com',
        password: 'password123',
    },
    {
        firstName: 'David',
        lastName: 'Anderson',
        email: 'david@example.com',
        password: 'password456',
    },
    {
        firstName: 'Laura',
        lastName: 'Martinez',
        email: 'laura@example.com',
        password: 'password789',
    },
    {
        firstName: 'Kevin',
        lastName: 'Garcia',
        email: 'kevin@example.com',
        password: 'password321',
    },
];

async function seedUsers() {
    try {
        for (let userData of usersData) {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
            userData.password = hashedPassword;
            await User.create(userData);
        }
        console.log('Users seeded successfully');
    } catch (err) {
        console.error('Error seeding users:', err);
    }
}

seedUsers();

module.exports = seedUsers;