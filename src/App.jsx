import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import Posts from "./components/Posts";
import RegisterPost from "./components/RegisterPost";
import EditPost from "./components/EditPost";
import UserList from './components/UserList';
import UserPost from "./components/UserPost";


function App() {
  return (
    <BrowserRouter>
      {/* Header de navegación */}
      <header className="flex justify-between items-center px-8 py-3 border-b border-gray-200 font-sans bg-white shadow-sm">
        <h2 className="text-xl font-bold text-gray-800">API Placeholder</h2>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-semibold transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/posts"
                className="text-gray-700 hover:text-blue-600 font-semibold transition"
              >
                Posts
              </Link>
            </li>
            <li>
              <Link
                to="/posts/create"
                className="text-gray-700 hover:text-blue-600 font-semibold transition"
              >
                New Post
              </Link>
            </li>
            <li>
              <Link
                to="/users"
                className="text-gray-700 hover:text-blue-600 font-semibold transition"
              >
                Lista de usuarios
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/create" element={<RegisterPost />} />
        <Route path="/post/:postId" element={<EditPost />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:userId/posts" element={<UserPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
