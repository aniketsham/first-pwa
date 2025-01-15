import React, { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/hooks";
import { useNavigate } from "react-router-dom";

interface User {
  id: number;
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
  phone: string;
  username: string;
}

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { email, password } = useAppSelector((state) => state.user);

  const navigateTo = useNavigate();
  useEffect(() => {
    if (!email && !password) {
      navigateTo("/login");
    }
  }, [email, password, navigateTo]);
  useEffect(() => {
    // Fetch users from API
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleAction = (id: number) => {
    console.log(`Action clicked for user ID: ${id}`);
    // Add your logic here
  };

  if (loading) {
    return <div>Loading users...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Details</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 border-b">
                ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 border-b">
                Full Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 border-b">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 border-b">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 border-b">
                Username
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 border-b">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-3 text-sm text-gray-700 border-b">
                  {user.id}
                </td>
                <td className="px-6 py-3 text-sm text-gray-700 border-b">
                  {user.name.firstname} {user.name.lastname}
                </td>
                <td className="px-6 py-3 text-sm text-gray-700 border-b">
                  {user.email}
                </td>
                <td className="px-6 py-3 text-sm text-gray-700 border-b">
                  {user.phone}
                </td>
                <td className="px-6 py-3 text-sm text-gray-700 border-b">
                  {user.username}
                </td>
                <td className="px-6 py-3 text-sm text-gray-700 border-b">
                  <button
                    onClick={() => handleAction(user.id)}
                    className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow"
                  >
                    Action
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
