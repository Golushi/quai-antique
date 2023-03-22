import React from "react";

export default function UsersPannel() {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Bob Smith" },
    { id: 4, name: "bla bla" },
    { id: 5, name: "test test" },
    { id: 6, name: "test2 Smith" },
    { id: 7, name: "test3 Doe" },
    { id: 8, name: "test4 Doe" },
    { id: 9, name: "test5 Smith" },
  ];
  return (
    <>
      <h2 className="text-lg font-medium mb-4">Utilisateurs</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2 border-2">Nom</th>
            <th className="py-2 border-2">ID</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2">{user.name}</td>
              <td className="py-2 flex justify-center">{user.id}</td>
              <td>
                <button
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  // onClick={() => deleteUser(user.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
