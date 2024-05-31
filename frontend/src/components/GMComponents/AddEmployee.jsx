import React, { useState } from 'react';
import axios from 'axios';


const AddEmployee = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        age: '',
        hourlyPay: '',
        storeNumber: '',
        position: ''

    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        console.log('User:', user);
        const res = await axios.post('http://localhost:1121/employee', user);
        // Reset the form
        setUser({ name: '', email: '', password: '' , age: '', hourlyPay: '', storeNumber: '', position: ''});
    };

    return (
        <div>
            <h2>Add General Manager</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Age:
                    <input
                        type="number"
                        name="age"
                        value={user.age}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Hourly Pay:
                    <input
                        type="number"
                        name="hourlyPay"
                        value={user.hourlyPay}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Store Number:
                    <input
                        type="number"
                        name="storeNumber"
                        value={user.storeNumber}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Position:
                    <select name="position" value={user.position} onChange={handleChange}>
                        <option value="general manager">General Manager</option>
                        <option value="customer service associate">Customer Service Associate</option>
                        <option value="fuel associate">Fuel Associate</option>
                        <option value="night supervisor">Night Supervisor</option>
                        <option value="assistant general manager">Assistant General Manager</option>
                        <option value="customer service supervisor">Customer Service Supervisor</option>
                        <option value="lead customer service associate">Lead Customer Service Associate</option>
                        <option value="food and beverage manager">Food and Beverage Manager</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddEmployee;