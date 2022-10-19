const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^[a-zA-Z0-9]+@\w+.\w{2,4}$/i,
            "Email may contain only English letter and numbers",
        ],
    },
    username: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^[A-z0-9]+$/i,
            "Username may contain only English letter and numbers",
        ],
    },
    hashedPassword: { type: String, required: true },
});

userSchema.index({ username: 1 }, {
    collation: {
        locale: "en",
        strength: 2,
    },
});

userSchema.index({ email: 1 }, {
    collation: {
        locale: "en",
        strength: 2,
    },
});

const User = model("User", userSchema);

module.exports = User;