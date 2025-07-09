import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Welcome from './components/Welcome';
import Posts from './components/Posts';
import RegisterPost from './components/RegisterPost';
import EditPost from './components/EditPost';


function App() {
  return (
    <BrowserRouter>
      {/* Encabezado */}
      <header className="flex justify-between items-center px-8 py-2 border-b border-gray-200 font-sans">
        <h2 className="font-bold text-lg">API Placeholder</h2>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="text-black hover:underline transition-all"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/posts"
                className="text-black hover:underline transition-all"
              >
                Posts
              </Link>
            </li>
            <li>
              <Link
                to="/new-post"
                className="text-black hover:underline transition-all"
              >
                New Post
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/new-post" element={<RegisterPost />} />
        <Route path="/post/:postId" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
