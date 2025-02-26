'use client';

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import './EditUser.css';

function EditUser() {
    const searchParams = useSearchParams();
    const router = useRouter();
    
    const id = searchParams.get("id");
    const [name, setName] = useState(searchParams.get("name") || "");
    const [email, setEmail] = useState(searchParams.get("email") || "");
    const [phone, setPhone] = useState(searchParams.get("phone") || "");

    useEffect(() => {
        if (!id) {
            router.push("/");
        }
    }, [id, router]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const storedUsers = localStorage.getItem("users");
        if (storedUsers && id !== null) {
            const users = JSON.parse(storedUsers);
            users[parseInt(id)] = { name, email, phone };
            localStorage.setItem("users", JSON.stringify(users));
        }

        router.push("/");
    };

    return (
        <div>
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Update User</button>
            </form>
        </div>
    );
}

export default EditUser;
