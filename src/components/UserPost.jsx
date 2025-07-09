import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loading from './Loading';
import Error from './Error';
 
function UserPost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userId } = useParams(); // Hook para obtener los parámetros de la URL
 
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        if (!response.ok) {
          throw new Error('No se pudieron cargar las publicaciones.');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
 
    fetchPosts();
  }, [userId]); // Se ejecuta cada vez que el userId cambia
 
  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
 
  return (
    <div>
      <Link to="/">← Volver a la lista de usuarios</Link>
      <h2>Publicaciones del Usuario</h2>
     
      {/* Mensaje si no hay publicaciones */}
      {posts.length === 0 ? (
        <p>Este usuario no tiene publicaciones.</p>
      ) : (
        <div className="post-list">
          {posts.map(post => (
            <div key={post.id} className="post-card">
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
 
export default UserPost;