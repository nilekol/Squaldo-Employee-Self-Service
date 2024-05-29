import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        //match: [/\S+@\S+\.\S+/, 'Please enter a valid email']
    },

    password: {
        type: String,
        required: [true, 'Password is required'],
        //minlength: [6, 'Password must be at least 6 characters']
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        //min: [18, 'Age must be at least 18']
    },
    hourlyPay: {
        type: Number,
        required: [true, 'Hourly pay is required'],
        //min: [0, 'Hourly pay must be positive']
    },
});

export const Employee = mongoose.model('Employee', employeeSchema);
