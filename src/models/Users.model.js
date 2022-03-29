const mongoose = require("mongoose")
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    nickName: {type: String, required: true, unique: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    dob: {type: Date, required: true},
    country: {type: String, required: true},
}, {
    versionKey: false,
    timestamps: true
})

userSchema.pre("save", function(next){
    if(!this.isModified("password")){
        return next();
    }

    let hash = bcrypt.hashSync(this.password, 10);
    this.password = hash;
    return next();
})

userSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model("user", userSchema);
