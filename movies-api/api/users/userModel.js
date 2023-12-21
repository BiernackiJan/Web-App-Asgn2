import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const passwordValidator = {
    validator: (value) => {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      return passwordRegex.test(value);
    },
    message: 'Password must be at least 8 characters long and contain at least one letter, one digit, and one special character.',
  };

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true},
  password: {type: String, required: true,  validate: passwordValidator },
  favorites: [{ type: Schema.Types.Mixed }],
  watchList: [{ type: Schema.Types.Mixed }]
});


UserSchema.methods.comparePassword = async function (passw) { 
  return await bcrypt.compare(passw, this.password); 
}

UserSchema.statics.findByUserName = function (username) {
  return this.findOne({ username: username });
};

UserSchema.statics.findByUserId = function (userId) {
  return this.findOne({ _id: userId})
}

UserSchema.pre('save', async function(next) {
  const saltRounds = 10; // You can adjust the number of salt rounds
  //const user = this;
  if (this.isModified('password') || this.isNew) {
    try {
      const hash = await bcrypt.hash(this.password, saltRounds);
      this.password = hash;
      next();
  } catch (error) {
     next(error);
  }

  } else {
      next();
  }
});

export default mongoose.model('User', UserSchema);