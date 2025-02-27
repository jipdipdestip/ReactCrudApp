'use client';

import React, { useState } from "react";
import './addUser.css';
import '../components/header/Header.css';
import Header from "../components/Header/Header";

function AddUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newUser = { name, email, phone };
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        setName('');
        setEmail('');
        setPhone('');
    };

    return (
        <>
            <Header />
            <div className="add-user">
                <h1>Add User</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text " name="name" id='name' value={name} onChange={(e) => setName(e.target.value)} maxLength={50} required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} maxLength={50} required />
                    </label>
                    <label>
                        Phone:
                        <input type="tel" name="phone" id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} maxLength={16} required />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        </>
    );
}

export default AddUser;