'use client';

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Header from "./components/Header/Header";
import "./page.css";

export default function Home() {
  const [users, setUsers] = useState<{ name: string; email: string; phone: string }[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const handleEdit = (index: number) => {
    const user = users[index];
    router.push(`/EditUser?id=${index}&name=${user.name}&email=${user.email}&phone=${user.phone}`);
  };

  const handleDelete = (index: number) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div>
      <Header />
      <ul className="user-list">
        {users.map((user, index) => (
          <li key={index} className="user-item">
            <p className="user-detail">Name: {user.name}</p>
            <p className="user-detail">Email: {user.email}</p>
            <p className="user-detail">Phone: {user.phone}</p>
            <button onClick={() => handleEdit(index)} className="edit-button">
              ✏️
            </button>
            <button onClick={() => handleDelete(index)} className="delete-button">
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
