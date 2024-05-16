const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = {
    createUser: async (username, password, role) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword, role });
        await user.save();
        return user;
    },
    validatePassword: async (user, password) => {
        return await bcrypt.compare(password, user.password);
    },
    assignRole: (user, role) => {
        user.role = role;
        return user;
    },
    getUser: async (username) => {
        return await User.findOne({
            username
        });
    },
    getUserById: async (id) => {
        return await User.findById(id);
    }
};