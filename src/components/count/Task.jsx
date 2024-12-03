import React, { useState } from 'react';

function Task() {
    const [users] = useState([
        { id: 1, name: 'Ankush' },
        { id: 2, name: 'Rahul' },
        { id: 3, name: 'Priya' },
        { id: 4, name: 'Sneha' },
    ]);

    const [searchTerm, setSearchTerm] = useState('');


    const searchHandle = (e) => {
        setSearchTerm(e.target.value);
    };

    const searchedUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

return (
    <div className="p-6 max-w-md mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center">Users List</h1>
        <input
            type="text"
            placeholder="Search users by name..."
            value={searchTerm}
            onChange={searchHandle}
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300" />
        <ul className="list-none p-0">
            {searchedUsers.length === 0 && (
                <li className="text-center text-gray-500">No users found</li>
            )}
            {searchedUsers[0] && (
                <li key={searchedUsers[0].id}
                    className="p-3 mb-3 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
                    <strong>{searchedUsers[0].name}</strong>
                </li>
            )}
            {searchedUsers[1] && (
                <li
                    key={searchedUsers[1].id}
                    className="p-3 mb-3 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
                    <strong>{searchedUsers[1].name}</strong>
                </li>
            )}
            {searchedUsers[2] && (
                <li
                    key={searchedUsers[2].id}
                    className="p-3 mb-3 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
                    <strong>{searchedUsers[2].name}</strong>
                </li>
            )}
            {searchedUsers[3] && (
                <li
                    key={searchedUsers[3].id}
                    className="p-3 mb-3 border border-gray-200 rounded-lg bg-gray-50 shadow-sm" >
                    <strong>{searchedUsers[3].name}</strong>
                </li>
            )}
        </ul>
    </div>
);
}

export default Task;
