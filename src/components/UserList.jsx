import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import Error from './Error';
 
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    // Función para obtener los usuarios
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('No se pudo cargar la lista de usuarios.');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
 
    fetchUsers();
  }, []); // El array vacío asegura que se ejecute solo una vez
 
  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
 
  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <div className="user-list">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <Link to={`/users/${user.id}/posts`} className="button">
              Ver publicaciones
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default UserList;