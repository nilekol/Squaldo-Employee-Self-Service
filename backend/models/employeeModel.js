import mongoose from 'mongoose';

const Role = {
    ADMIN: 'admin',
    GM: 'general manager',
    CSA: 'customer service associate',
    FUEL_ASSOCIATE: 'fuel associate',
    NS: 'night supervisor',
    AGM: 'assistant general manager',
    CSS: 'customer service supervisor',
    LCSA: 'lead customer service associate',
    FBM: 'food and beverage manager',
    O: 'other'

};

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
        
    },
    hourlyPay: {
        type: Number,
        
    },
    storeNumber: {
        type: Number,
        
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        //match: [/\S+@\S+\.\S+/, 'Please enter a valid email']
    },

    position: {
        type: String,
        enum: Object.values(Role),
        required: [true, 'Position is required'],
        default: Role.CSA
    }
});

export const Employee = mongoose.model('Employee', employeeSchema);
