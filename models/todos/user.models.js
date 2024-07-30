import mongoose from 'mongoose';

const passwordValidator = [
  {
    validator: function (v) {
      // Minimum length of 8 characters
      return v && v.length >= 8;
    },
    message: (props) =>
      `${props.value} is too short. Password should be at least 8 characters long.`,
  },
  {
    validator: function (v) {
      // At least one number
      return /\d/.test(v);
    },
    message: (props) => `${props.value} should contain at least one number.`,
  },
  {
    validator: function (v) {
      // At least one special character
      return /[!@#$%^&*(),.?":{}|<>]/.test(v);
    },
    message: (props) =>
      `${props.value} should contain at least one special character.`,
  },
];
const userSchema = new mongoose.Schema(
  {
    // usual method
    // username:String,
    // email:String,
    // isActive:Boolean
    // more professional approach
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    //first method for password using another array
    // password: {
    //   type: String,
    //   required: [true, 'Password is required'],
    //   validate: passwordValidator
    // }
    //second method
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password should be at least 8 characters long'],
      match: [/\d/, 'Password should contain at least one number'],
    },
  },
  //for the time of creation and updation of this document
  { timestamps: true }
);
//even if we write user as User it will eventually change to user its a behaviour og mongo
export const user = mongoose.model('User', userSchema);
