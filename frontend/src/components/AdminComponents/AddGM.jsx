import React, { useState } from 'react';
import axios from 'axios';


const AddGM = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        age: '',
        hourlyPay: '',
        storeNumber: '',
        position: 'general manager'

    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        console.log('User:', user);
        const res = await axios.post('http://localhost:1121/employee', user);
        // Reset the form
        setUser({ name: '', email: '', password: '' , age: '', hourlyPay: '', storeNumber: ''});
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
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddGM;